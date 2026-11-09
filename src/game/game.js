import { sound } from './audio.js';
import { getSettings, onSettingsChange, setSetting } from '../shared/settings.js';
import { mountSettings } from '../shared/settingsUI.js';
import { startMusic } from '../shared/music.js';
import data from '../data/rooms.json';
import {
  ACHIEVEMENTS,
  evaluatePersonaProfile,
  INITIAL_STATS,
  KNOWLEDGE_NODES,
  LEVELS,
  NPC_PROFILES,
  STAT_CONFIG,
} from './levelsData.js';

class HCMStudentLifeGame {
  constructor() {
    this.stats = { ...INITIAL_STATS };
    this.currentLevelIndex = 0;
    this.choiceHistory = [];
    this.unlockedNodes = new Set();
    this.unlockedAchievements = new Set();
    this.soundEnabled = true;

    // Khởi động nhạc nền cho game (lấy nhạc nền chung của bảo tàng)
    this.bgMusic = startMusic(data.museum.roomMusic ?? data.museum.music);

    // DOM Elements
    this.el = {
      hud: document.getElementById('game-hud'),
      hudLevelBadge: document.getElementById('hud-level-badge'),
      statBars: {
        docLap: document.getElementById('stat-bar-docLap'),
        doanKet: document.getElementById('stat-bar-doanKet'),
        daoDuc: document.getElementById('stat-bar-daoDuc'),
        viDan: document.getElementById('stat-bar-viDan'),
        hocLam: document.getElementById('stat-bar-hocLam'),
      },
      statVals: {
        docLap: document.getElementById('stat-val-docLap'),
        doanKet: document.getElementById('stat-val-doanKet'),
        daoDuc: document.getElementById('stat-val-daoDuc'),
        viDan: document.getElementById('stat-val-viDan'),
        hocLam: document.getElementById('stat-val-hocLam'),
      },
      statCards: {
        docLap: document.getElementById('stat-card-docLap'),
        doanKet: document.getElementById('stat-card-doanKet'),
        daoDuc: document.getElementById('stat-card-daoDuc'),
        viDan: document.getElementById('stat-card-viDan'),
        hocLam: document.getElementById('stat-card-hocLam'),
      },

      // Screens
      screenIntro: document.getElementById('screen-intro'),
      screenLevel: document.getElementById('screen-level'),
      screenReflection: document.getElementById('screen-reflection'),
      screenResult: document.getElementById('screen-result'),

      // Level View
      levelTag: document.getElementById('level-tag'),
      levelTimeBadge: document.getElementById('level-time-badge'),
      situationHeadline: document.getElementById('situation-headline'),
      situationDesc: document.getElementById('situation-desc'),
      npcBox: document.getElementById('npc-dialogue-box'),
      npcAvatar: document.getElementById('npc-avatar'),
      npcName: document.getElementById('npc-name'),
      npcQuote: document.getElementById('npc-quote'),
      memoryCallout: document.getElementById('memory-callout-box'),
      memoryCalloutText: document.getElementById('memory-callout-text'),
      levelOptionsList: document.getElementById('level-options-list'),

      // Modal Feedback & Decode
      modalOverlay: document.getElementById('feedback-modal-overlay'),
      modalEmoji: document.getElementById('modal-emoji'),
      modalTitle: document.getElementById('modal-title'),
      modalQuote: document.getElementById('modal-quote'),
      modalDetail: document.getElementById('modal-detail'),
      modalDeltas: document.getElementById('modal-deltas'),
      modalDecodeChapter: document.getElementById('modal-decode-chapter'),
      modalDecodeContent: document.getElementById('modal-decode-content'),
      modalNextBtn: document.getElementById('modal-next-btn'),

      // Mid-game Behavioral Analysis Modal
      midGameModalOverlay: document.getElementById('midgame-analysis-modal'),
      midGameTendencyDesc: document.getElementById('midgame-tendency-desc'),
      midGameCloseBtn: document.getElementById('midgame-close-btn'),

      // Knowledge Tree Modal
      knowledgeTreeModal: document.getElementById('knowledge-tree-modal'),
      knowledgeTreeList: document.getElementById('knowledge-tree-list'),
      knowledgeTreeBtn: document.getElementById('knowledge-tree-btn'),
      knowledgeTreeCloseBtn: document.getElementById('knowledge-tree-close-btn'),

      // Result View
      resultTitle: document.getElementById('result-title'),
      resultBadge: document.getElementById('result-badge'),
      resultQuote: document.getElementById('result-quote'),
      resultDesc: document.getElementById('result-desc'),
      resultAnalysis: document.getElementById('result-analysis'),
      resultStatsList: document.getElementById('result-stats-list'),
      radarCanvas: document.getElementById('radar-canvas'),
      achievementsList: document.getElementById('achievements-list'),

      // Controls
      startBtn: document.getElementById('start-btn'),
      soundToggleBtn: document.getElementById('sound-toggle-btn'),
      soundIcon: document.getElementById('sound-icon'),
      restartBtn: document.getElementById('restart-btn'),
      shareBtn: document.getElementById('share-btn'),
      toast: document.getElementById('toast-msg'),
      alarmOverlay: document.getElementById('alarm-flash-overlay'),
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.updateHUD(false);
  }

  bindEvents() {
    this.el.startBtn.addEventListener('click', () => {
      sound.playClick();
      this.startGame();
    });

    // Nút âm thanh trên thanh điều hướng và hộp thoại Cài đặt dùng chung cài đặt âm thanh & nhạc nền
    const applySound = ({ sound: on, volume, music: musicOn }) => {
      const anyAudio = on || musicOn;
      this.soundEnabled = on;
      sound.enabled = on;
      sound.setVolume(volume);
      this.el.soundIcon.textContent = anyAudio ? '🔊' : '🔇';
      this.el.soundToggleBtn.setAttribute('aria-pressed', String(anyAudio));
    };
    applySound(getSettings());
    onSettingsChange(applySound);
    this.el.soundToggleBtn.addEventListener('click', () => {
      const current = getSettings();
      const next = !(current.sound || current.music);
      setSetting('sound', next);
      setSetting('music', next);
      this.showToast(next ? 'Đã bật âm thanh & nhạc nền' : 'Đã tắt âm thanh & nhạc nền');
    });

    this.el.modalNextBtn.addEventListener('click', () => {
      sound.playClick();
      this.closeFeedbackModal();
    });

    this.el.knowledgeTreeBtn?.addEventListener('click', () => {
      sound.playClick();
      this.openKnowledgeTree();
    });

    this.el.knowledgeTreeCloseBtn?.addEventListener('click', () => {
      this.el.knowledgeTreeModal.classList.remove('is-open');
    });

    this.el.midGameCloseBtn?.addEventListener('click', () => {
      sound.playClick();
      this.el.midGameModalOverlay.classList.remove('is-open');
      this.proceedToNextLevel();
    });

    this.el.restartBtn?.addEventListener('click', () => {
      sound.playClick();
      this.restartGame();
    });

    this.el.shareBtn?.addEventListener('click', () => {
      this.copyShareResult();
    });
  }

  startGame() {
    this.stats = { ...INITIAL_STATS };
    this.currentLevelIndex = 0;
    this.choiceHistory = [];
    this.unlockedNodes.clear();
    this.unlockedAchievements.clear();
    this.updateHUD(false);

    this.el.screenIntro.classList.remove('is-active');
    this.el.screenResult.classList.remove('is-active');
    this.el.screenLevel.classList.add('is-active');
    this.el.hud.hidden = false;

    this.renderLevel(0);
  }

  restartGame() {
    this.startGame();
  }

  updateHUD(animate = true) {
    for (const [key, val] of Object.entries(this.stats)) {
      const clamped = Math.max(0, Math.min(100, Math.round(val)));
      if (this.el.statBars[key]) {
        this.el.statBars[key].style.width = `${clamped}%`;
      }
      if (this.el.statVals[key]) {
        this.el.statVals[key].textContent = `${clamped}`;
      }
    }
  }

  applyDeltas(deltas) {
    for (const [key, delta] of Object.entries(deltas)) {
      if (this.stats[key] !== undefined) {
        this.stats[key] = Math.max(0, Math.min(100, this.stats[key] + delta));
        this.spawnDeltaTag(key, delta);
      }
    }
    this.updateHUD(true);
  }

  spawnDeltaTag(key, delta) {
    const card = this.el.statCards[key];
    if (!card) return;

    const tag = document.createElement('div');
    tag.className = `stat-delta-tag ${delta >= 0 ? 'plus' : 'minus'}`;
    tag.textContent = `${delta >= 0 ? '+' : ''}${delta} ${STAT_CONFIG[key].icon}`;
    card.appendChild(tag);

    card.classList.add('is-active');
    setTimeout(() => {
      card.classList.remove('is-active');
    }, 1000);

    setTimeout(() => {
      tag.remove();
    }, 1200);
  }

  renderLevel(index) {
    const level = LEVELS[index];
    if (!level) {
      this.triggerPhilosophicalReflection();
      return;
    }

    this.el.hudLevelBadge.textContent = `${level.levelTag}`;
    this.el.levelTag.textContent = level.levelTag;
    this.el.levelTimeBadge.textContent = level.situationTime;
    this.el.situationHeadline.textContent = level.situationHeadline;
    this.el.situationDesc.textContent = level.situationDesc;

    // Render NPC Dialogue
    if (level.npc) {
      const npcInfo = NPC_PROFILES[level.npc.id];
      if (npcInfo) {
        this.el.npcBox.hidden = false;
        this.el.npcAvatar.textContent = npcInfo.avatar;
        this.el.npcName.textContent = `${npcInfo.name} (${npcInfo.role})`;
        this.el.npcQuote.textContent = level.npc.quote;
      }
    } else {
      this.el.npcBox.hidden = true;
    }

    // Game Memory Feature: Check prior choices and trigger dynamic callouts
    this.checkMemoryTrigger(index);

    // Render Choice Options
    this.el.levelOptionsList.innerHTML = '';
    level.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice-btn';
      btn.innerHTML = `
        <div class="choice-main">
          <div class="choice-code">${opt.code}</div>
          <div class="choice-icon">${opt.icon}</div>
          <div class="choice-content">
            <div class="choice-text">${opt.text}</div>
            <div class="choice-subtext">${opt.subtext || ''}</div>
          </div>
        </div>
        <div class="choice-arrow">➔</div>
      `;

      btn.addEventListener('click', () => {
        this.handleChoice(opt, level);
      });

      this.el.levelOptionsList.appendChild(btn);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  checkMemoryTrigger(levelIndex) {
    this.el.memoryCallout.hidden = true;

    // Check prior tactical choices:
    const hasRashLevel1 = this.choiceHistory.some((c) => c.tag === 'rash_choice');
    const hasCompromise = this.choiceHistory.some((c) => c.tag === 'compromise_choice');

    if (levelIndex === 3 && hasRashLevel1) {
      this.el.memoryCallout.hidden = false;
      this.el.memoryCalloutText.innerHTML = `
        <span>⚡ <strong>Nhắc nhở chiến lược:</strong> Ở Chặng 1 bạn từng có xu hướng nổ súng đánh tất cả cùng lúc. Lần này đứng trước quân Pháp ở Hải Phòng, liệu bạn có giữ được cái đầu lạnh để thực hiện sách lược “Hòa để tiến”?</span>
      `;
    } else if (levelIndex === 4 && hasCompromise) {
      this.el.memoryCallout.hidden = false;
      this.el.memoryCalloutText.innerHTML = `
        <span>⚡ <strong>Nhắc nhở chiến lược:</strong> Tối hậu thư của Pháp đã chạm tới lằn ranh đỏ của chủ quyền dân tộc. Nhân nhượng lúc này không còn là sách lược mà là mất nước!</span>
      `;
    }
  }

  handleChoice(option, level) {
    this.choiceHistory.push({
      levelId: level.id,
      optionId: option.id,
      code: option.code,
      tag: option.tag,
      deltas: option.deltas,
    });

    // Unlock Knowledge Node
    if (level.knowledgeKey && KNOWLEDGE_NODES[level.knowledgeKey]) {
      this.unlockedNodes.add(level.knowledgeKey);
    }

    if (option.feedback.type === 'alarm') {
      if (this.bgMusic) {
        this.bgMusic.duck(true);
        setTimeout(() => this.bgMusic.duck(false), 2000);
      }
      sound.playAlarm();
      document.body.classList.add('screen-shake');
      this.el.alarmOverlay.classList.add('is-active');

      setTimeout(() => {
        document.body.classList.remove('screen-shake');
        this.el.alarmOverlay.classList.remove('is-active');
      }, 700);
    } else if (option.deltas && Object.values(option.deltas).some((d) => d > 0)) {
      sound.playPositive();
    } else {
      sound.playNegative();
    }

    this.applyDeltas(option.deltas);
    this.showFeedbackModal(option, level);
  }

  showFeedbackModal(option, level) {
    const fb = option.feedback;
    const emojiMap = {
      positive: '✨',
      funny: '😂',
      warning: '⚠️',
      alarm: '🚨',
      neutral: '🤔',
    };

    this.el.modalEmoji.textContent = emojiMap[fb.type] || '💡';
    this.el.modalTitle.textContent = fb.title;
    this.el.modalQuote.textContent = fb.quote;
    this.el.modalDetail.textContent = fb.detail;

    // Delta badges
    this.el.modalDeltas.innerHTML = '';
    for (const [key, d] of Object.entries(option.deltas)) {
      const chip = document.createElement('span');
      chip.className = `modal-delta-chip ${d >= 0 ? 'plus' : 'minus'}`;
      chip.textContent = `${STAT_CONFIG[key].icon} ${STAT_CONFIG[key].label}: ${d >= 0 ? '+' : ''}${d}`;
      this.el.modalDeltas.appendChild(chip);
    }

    // Level Decode / Academic Party History lesson
    if (level.decode) {
      this.el.modalDecodeChapter.textContent = `${level.decode.tag} · ${level.decode.chapter}`;
      this.el.modalDecodeContent.textContent = level.decode.content;
    }

    const isLast = this.currentLevelIndex >= LEVELS.length - 1;
    this.el.modalNextBtn.textContent = isLast ? '🏆 Tổng Kết & Phản Chiếu Triết Học' : 'Tiếp Tục Chặng Tiếp Theo ➔';

    this.el.modalOverlay.classList.add('is-open');
  }

  closeFeedbackModal() {
    this.el.modalOverlay.classList.remove('is-open');

    // Mid-game Behavioral Analysis Check (After Level 4 = 4 completed levels)
    if (this.currentLevelIndex === 3) {
      this.showMidGameAnalysis();
      return;
    }

    this.proceedToNextLevel();
  }

  showMidGameAnalysis() {
    const hasPeaceChoice = this.choiceHistory.some((c) => c.tag === 'peace_to_advance_choice');
    const hasElectionChoice = this.choiceHistory.some((c) => c.tag === 'election_unity_choice');

    let analysisText = 'Bạn đã lãnh đạo con thuyền cách mạng vượt qua chặng đầu “Ngàn cân treo sợi tóc” (1945 - 1946) với bản lĩnh vững vàng: vừa củng cố chính quyền hợp hiến, vừa khéo léo hòa hoãn để phân hóa kẻ thù.';
    if (!hasPeaceChoice || !hasElectionChoice) {
      analysisText = 'Giai đoạn 1945 - 1946 vừa qua cho thấy bạn còn đôi chút lúng túng giữa nguyên tắc độc lập và nghệ thuật hòa hoãn mềm dẻo. Hãy cẩn trọng hơn khi bước vào giai đoạn Toàn quốc kháng chiến!';
    }

    this.el.midGameTendencyDesc.textContent = analysisText;
    this.el.midGameModalOverlay.classList.add('is-open');
  }

  proceedToNextLevel() {
    this.currentLevelIndex++;
    if (this.currentLevelIndex < LEVELS.length) {
      this.renderLevel(this.currentLevelIndex);
    } else {
      this.triggerPhilosophicalReflection();
    }
  }

  triggerPhilosophicalReflection() {
    this.el.screenLevel.classList.remove('is-active');
    this.el.screenReflection.classList.add('is-active');

    // After 3.5s of deep philosophical immersion, transition to results
    setTimeout(() => {
      this.el.screenReflection.classList.remove('is-active');
      this.showResults();
    }, 3800);
  }

  showResults() {
    if (this.bgMusic) {
      this.bgMusic.duck(true);
      setTimeout(() => this.bgMusic.duck(false), 3500);
    }
    sound.playFanfare();
    this.el.screenResult.classList.add('is-active');

    const persona = evaluatePersonaProfile(this.stats, this.choiceHistory);
    this.el.resultTitle.textContent = persona.title;
    this.el.resultBadge.textContent = `${persona.badge} (XẾP LOẠI: ${persona.rankGrade})`;
    this.el.resultQuote.textContent = persona.quote;
    this.el.resultDesc.textContent = persona.desc;
    this.el.resultAnalysis.textContent = persona.analysis;

    // Render Stats list
    this.el.resultStatsList.innerHTML = '';
    for (const [key, cfg] of Object.entries(STAT_CONFIG)) {
      const val = Math.round(this.stats[key]);
      const item = document.createElement('div');
      item.className = 'result-stat-item';
      item.innerHTML = `
        <div class="result-stat-item__head">
          <span>${cfg.icon} ${cfg.label}</span>
          <strong style="color: ${cfg.color}">${val} / 100</strong>
        </div>
        <div class="result-stat-bar">
          <div class="result-stat-bar__fill" style="width: ${val}%; background: ${cfg.gradient};"></div>
        </div>
      `;
      this.el.resultStatsList.appendChild(item);
    }

    // Evaluate Achievements
    this.evaluateAchievements();

    // Draw 5-axis Radar Chart
    this.drawRadarChart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  evaluateAchievements() {
    const hasRashOrCompromise = this.choiceHistory.some(
      (c) => c.tag === 'rash_choice' || c.tag === 'compromise_choice' || c.tag === 'surrender_choice' || c.tag === 'surrender_ultimatum_choice'
    );
    const hasPopularMass = this.choiceHistory.some((c) => c.tag === 'popular_mass_choice');
    const hasPeaceToAdvance = this.choiceHistory.some((c) => c.tag === 'peace_to_advance_choice');
    const hasElectionUnity = this.choiceHistory.some((c) => c.tag === 'election_unity_choice');
    const avg = (this.stats.docLap + this.stats.doanKet + this.stats.daoDuc + this.stats.viDan + this.stats.hocLam) / 5;

    if (this.stats.docLap >= 70 && !hasRashOrCompromise) this.unlockedAchievements.add('ach_doclap_tuchu');
    if (hasElectionUnity || this.stats.doanKet >= 70) this.unlockedAchievements.add('ach_dai_doan_ket');
    if (hasPeaceToAdvance) this.unlockedAchievements.add('ach_di_bat_bien');
    if (hasPopularMass || this.stats.viDan >= 70) this.unlockedAchievements.add('ach_vi_dan_diet_giac');
    if (avg >= 78 && !hasRashOrCompromise) this.unlockedAchievements.add('ach_nha_lanh_dao_kiet_xuat');

    this.el.achievementsList.innerHTML = '';
    ACHIEVEMENTS.forEach((ach) => {
      const isUnlocked = this.unlockedAchievements.has(ach.id);
      const card = document.createElement('div');
      card.className = `achievement-chip ${isUnlocked ? 'is-unlocked' : 'is-locked'}`;
      card.innerHTML = `
        <span class="ach-icon">${isUnlocked ? ach.icon : '🔒'}</span>
        <div class="ach-info">
          <strong class="ach-name">${ach.name}</strong>
          <span class="ach-desc">${ach.desc}</span>
        </div>
      `;
      this.el.achievementsList.appendChild(card);
    });
  }

  drawRadarChart() {
    const canvas = this.el.radarCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 320;
    canvas.width = size;
    canvas.height = size;

    const center = size / 2;
    const radius = size * 0.36;
    const keys = ['docLap', 'doanKet', 'daoDuc', 'viDan', 'hocLam'];
    const totalAxes = keys.length;

    ctx.clearRect(0, 0, size, size);

    // Background concentric pentagon grids (25%, 50%, 75%, 100%)
    for (let step = 1; step <= 4; step++) {
      const r = (radius / 4) * step;
      ctx.beginPath();
      for (let i = 0; i < totalAxes; i++) {
        const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(201, 162, 63, 0.2)';
      ctx.lineWidth = step === 4 ? 2 : 1;
      ctx.stroke();
    }

    // Axis lines and labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 11px "Be Vietnam Pro", sans-serif';

    const points = [];
    for (let i = 0; i < totalAxes; i++) {
      const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
      const xEnd = center + radius * Math.cos(angle);
      const yEnd = center + radius * Math.sin(angle);

      // Axis line
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(xEnd, yEnd);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.stroke();

      // Axis label
      const key = keys[i];
      const cfg = STAT_CONFIG[key];
      const labelX = center + (radius + 24) * Math.cos(angle);
      const labelY = center + (radius + 24) * Math.sin(angle);
      ctx.fillStyle = cfg.color;
      ctx.fillText(`${cfg.icon} ${cfg.label}`, labelX, labelY);

      // Stat data point
      const val = Math.max(10, Math.min(100, this.stats[key]));
      const rVal = (radius * val) / 100;
      points.push({
        x: center + rVal * Math.cos(angle),
        y: center + rVal * Math.sin(angle),
        color: cfg.color,
      });
    }

    // Filled User Stat Polygon
    ctx.beginPath();
    points.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.closePath();

    const grad = ctx.createRadialGradient(center, center, 10, center, center, radius);
    grad.addColorStop(0, 'rgba(201, 162, 63, 0.55)');
    grad.addColorStop(1, 'rgba(122, 23, 18, 0.65)');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Data points circles
    points.forEach((pt) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = pt.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  openKnowledgeTree() {
    this.el.knowledgeTreeList.innerHTML = '';
    for (const [key, node] of Object.entries(KNOWLEDGE_NODES)) {
      const isUnlocked = this.unlockedNodes.has(key);
      const item = document.createElement('div');
      item.className = `knowledge-node-card ${isUnlocked ? 'is-unlocked' : 'is-locked'}`;
      item.innerHTML = `
        <div class="node-head">
          <span class="node-status">${isUnlocked ? '🔓 ĐÃ MỞ KHÓA' : '🔒 CHƯA KHÁM PHÁ'}</span>
          <span class="node-chapter">${node.chapter}</span>
        </div>
        <h4 class="node-title">${node.title}</h4>
        <p class="node-desc">${isUnlocked ? node.desc : 'Hãy trải nghiệm các tình huống trong game để mở khóa nội dung tư tưởng này.'}</p>
      `;
      this.el.knowledgeTreeList.appendChild(item);
    }
    this.el.knowledgeTreeModal.classList.add('is-open');
  }

  copyShareResult() {
    const persona = evaluatePersonaProfile(this.stats, this.choiceHistory);
    const text = `🇻🇳 [NGÀN CÂN TREO SỢI TÓC (1945 - 1951): BẢN LĨNH LÃNH ĐẠO]\n` +
      `🏆 Danh hiệu: ${persona.title}\n` +
      `🎯 Độc lập - Chủ quyền: ${Math.round(this.stats.docLap)}/100 | 🤝 Đại đoàn kết: ${Math.round(this.stats.doanKet)}/100\n` +
      `⚖️ Kỷ cương - Liêm chính: ${Math.round(this.stats.daoDuc)}/100 | 👥 Dân sinh - Vì dân: ${Math.round(this.stats.viDan)}/100\n` +
      `💡 Sách lược - Trí tuệ: ${Math.round(this.stats.hocLam)}/100\n` +
      `💬 “${persona.quote}”\n` +
      `🏛️ Bảo tàng Lịch sử Đảng Cộng sản Việt Nam (1945 - 1951)`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('✅ Đã sao chép hồ sơ kết quả vào bộ nhớ tạm!');
      }).catch(() => {
        this.showToast('Kết quả đã sẵn sàng chia sẻ!');
      });
    } else {
      this.showToast('✅ Đã sao chép kết quả!');
    }
  }

  showToast(msg) {
    if (!this.el.toast) return;
    this.el.toast.textContent = msg;
    this.el.toast.classList.add('is-visible');
    setTimeout(() => {
      this.el.toast.classList.remove('is-visible');
    }, 2400);
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  mountSettings();
  window.gameInstance = new HCMStudentLifeGame();
});
