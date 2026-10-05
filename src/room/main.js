import data from '../data/rooms.json';
import { markRoomVisited } from '../shared/storage.js';
import { placeholderArt } from './placeholderArt.js';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const main = document.getElementById('room-main');
const params = new URLSearchParams(window.location.search);
const roomId = params.get('id');
const rooms = [...data.rooms].sort((a, b) => a.order - b.order);
const room = rooms.find((r) => r.id === roomId);

function h(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

/** Nhãn mốc trên đường thời gian: giữ khoảng năm, còn lại lấy năm đầu tiên. */
function timelineLabel(time) {
  if (!time) return '';
  if (time.length <= 16) return time; // "1911–1920", "Trước 1911", "Cuối thế kỷ XIX"
  const range = time.match(/\d{4}\s*[–-]\s*\d{4}/);
  if (range) return range[0].replace(/\s/g, '');
  const year = time.match(/\d{4}/);
  return year ? year[0] : time;
}

function setRatio(container, ratio, also = []) {
  container.style.aspectRatio = String(ratio);
  for (const node of [container, ...also]) node.style.setProperty('--ar', String(ratio));
}

/** Ảnh tư liệu nếu có, nếu không thì tranh SVG giữ chỗ sinh từ id. */
function renderArt(item, container, also = []) {
  container.replaceChildren();
  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.imageCaption || item.title;
    img.decoding = 'async';
    img.loading = 'lazy';
    img.addEventListener('load', () => {
      setRatio(container, img.naturalWidth / img.naturalHeight, also);
    });
    container.append(img);
  } else {
    const { svg, width, height } = placeholderArt(item.id);
    setRatio(container, width / height, also);
    container.innerHTML = svg;
  }
}

function renderNotFound() {
  document.title = `Không tìm thấy phòng · ${data.museum.title}`;
  document.getElementById('room-name').textContent = 'Không tìm thấy phòng này';
  document.getElementById('room-intro').textContent =
    'Đường dẫn có thể đã sai hoặc phòng chưa được mở. Mời bạn quay lại sảnh để chọn phòng khác.';
  const box = h('section', 'not-found');
  const link = h('a', 'not-found__link', 'Về sảnh bảo tàng');
  link.href = './index.html';
  const list = h('ul', 'not-found__rooms');
  for (const r of rooms) {
    const li = h('li');
    const a = h('a', null, r.name);
    a.href = `./room.html?id=${encodeURIComponent(r.id)}`;
    li.append(a);
    list.append(li);
  }
  box.append(link, h('p', 'not-found__label', 'Hoặc vào thẳng một phòng:'), list);
  main.append(box);
}

function renderRoom() {
  document.title = `${room.name} · ${data.museum.title}`;
  document.getElementById('room-name').textContent = room.name;
  document.getElementById('room-intro').textContent = room.intro || room.subtitle;

  const wall = h('section', `wall${room.isTimeline ? ' is-timeline' : ''}`);
  wall.setAttribute('aria-label', room.isTimeline ? 'Tường tranh theo dòng thời gian' : 'Tường tranh');
  const track = h('ol', 'wall__track');
  const frames = [];

  room.items.forEach((item, index) => {
    const li = h('li', 'exhibit');
    const frame = h('button', 'frame');
    frame.type = 'button';
    frame.setAttribute(
      'aria-label',
      `Xem chi tiết: ${item.title}${item.time ? `, ${item.time}` : ''}${item.image && item.imageCaption ? `. Ảnh: ${item.imageCaption}` : ''}`,
    );
    frame.setAttribute('aria-haspopup', 'dialog');
    const mat = h('span', 'frame__mat');
    const art = h('span', 'frame__art');
    renderArt(item, art);
    mat.append(art);
    frame.append(mat);
    frame.addEventListener('click', () => openLightbox(index));
    frames.push(frame);

    // Biển dưới tranh: mô tả ảnh. Tranh chưa có ảnh thì ghi tên tranh như cũ.
    const plaque = h('div', 'plaque');
    if (item.image && item.imageCaption) {
      plaque.classList.add('plaque--caption');
      plaque.append(h('span', 'plaque__caption', item.imageCaption));
    } else {
      plaque.append(h('span', 'plaque__title', item.title));
      if (item.time) plaque.append(h('span', 'plaque__time', item.time));
    }

    li.append(frame, plaque);
    if (room.isTimeline) {
      const tick = h('div', 'tick');
      tick.append(h('span', 'tick__dot'), h('span', 'tick__year', timelineLabel(item.time)));
      tick.setAttribute('aria-hidden', 'true');
      li.append(tick);
    }
    track.append(li);
  });

  wall.append(track);
  main.append(wall);
  setupWallScrolling(wall, frames);
  setupLightbox(frames);
  markRoomVisited(room.id);
}

// Chiều cao đầu trang, để bức tường chiếm vừa phần còn lại của màn hình
const header = document.querySelector('.room-header');
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--room-header-h', `${header.offsetHeight}px`);
}).observe(header);

/* ---------- Cuộn ngang: con lăn, kéo chuột, mũi tên (vuốt là cuộn gốc) ---------- */

function setupWallScrolling(wall, frames) {
  const behavior = () => (reducedMotion.matches ? 'auto' : 'smooth');

  wall.addEventListener(
    'wheel',
    (event) => {
      if (event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = wall.scrollWidth - wall.clientWidth;
      if (max <= 0) return;
      const unit = event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? wall.clientWidth : 1;
      const delta = event.deltaY * unit;
      const atEdge = (delta < 0 && wall.scrollLeft <= 0) || (delta > 0 && wall.scrollLeft >= max - 1);
      if (atEdge) return;
      event.preventDefault();
      wall.scrollLeft += delta;
    },
    { passive: false },
  );

  // Kéo bằng chuột; cảm ứng dùng cuộn gốc của trình duyệt
  let drag = null;
  wall.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { x: event.clientX, scroll: wall.scrollLeft, moved: false };
  });
  window.addEventListener('pointermove', (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 6) {
      drag.moved = true;
      wall.classList.add('is-dragging');
    }
    if (drag.moved) wall.scrollLeft = drag.scroll - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!drag) return;
    if (drag.moved) {
      // Kéo xong không được tính là bấm vào tranh
      const swallow = (e) => {
        e.stopPropagation();
        e.preventDefault();
      };
      wall.addEventListener('click', swallow, { capture: true, once: true });
      setTimeout(() => wall.removeEventListener('click', swallow, { capture: true }), 0);
    }
    wall.classList.remove('is-dragging');
    drag = null;
  });
  wall.addEventListener('dragstart', (event) => event.preventDefault());

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    if (document.getElementById('lightbox').open || event.altKey || event.metaKey || event.ctrlKey) return;
    const dir = event.key === 'ArrowRight' ? 1 : -1;
    event.preventDefault();
    const current = frames.indexOf(document.activeElement);
    if (current >= 0) {
      // Đang chọn một tranh: chuyển sang tranh bên cạnh
      const next = frames[Math.min(frames.length - 1, Math.max(0, current + dir))];
      next.focus({ preventScroll: true });
      next.scrollIntoView({ behavior: behavior(), inline: 'center', block: 'nearest' });
    } else {
      const step = frames[0]?.closest('.exhibit').offsetWidth ?? wall.clientWidth * 0.6;
      wall.scrollBy({ left: dir * step, behavior: behavior() });
    }
  });
}

/* ---------- Lightbox ---------- */

let openLightbox = () => {};

function setupLightbox(frames) {
  const dialog = document.getElementById('lightbox');
  const el = {
    art: document.getElementById('lb-art'),
    time: document.getElementById('lb-time'),
    title: document.getElementById('lb-title'),
    desc: document.getElementById('lb-desc'),
    quote: document.getElementById('lb-quote'),
    today: document.getElementById('lb-today'),
    flip: document.getElementById('lb-flip'),
    flipBtn: document.getElementById('lb-flip-btn'),
    front: document.getElementById('lb-art'),
    back: document.getElementById('lb-back'),
    credit: document.getElementById('lb-credit'),
    artifact: document.getElementById('lb-artifact'),
    artifactMeta: document.getElementById('lb-artifact-meta'),
    artifactDesc: document.getElementById('lb-artifact-desc'),
    count: document.getElementById('lb-count'),
    prev: document.getElementById('lb-prev'),
    next: document.getElementById('lb-next'),
    close: document.getElementById('lb-close'),
  };
  let current = 0;

  function show(index) {
    current = index;
    const item = room.items[index];
    const art = h('div', 'lightbox__canvas');
    renderArt(item, art, [el.flip]);
    el.art.replaceChildren(art);
    setFlipped(false);

    el.time.textContent = item.time ?? '';
    el.time.hidden = !item.time;
    el.title.textContent = item.title;
    el.desc.textContent = item.description ?? '';

    // Mặt sau: ý nghĩa hôm nay và trích dẫn của Chủ tịch Hồ Chí Minh
    el.quote.replaceChildren();
    el.quote.hidden = !item.quote;
    if (item.quote) {
      el.quote.append(h('p', null, `“${item.quote}”`));
      if (item.quoteSource) el.quote.append(h('footer', null, `— ${item.quoteSource}`));
      if (item.quoteStatus === 'pending') {
        el.quote.append(h('small', 'quote-pending', 'Trích dẫn đang được đối chiếu nguyên văn với Hồ Chí Minh Toàn tập.'));
      }
    }

    el.today.textContent = item.today ?? 'Nội dung "Ý nghĩa hôm nay" của bức tranh này đang được biên soạn.';
    el.today.classList.toggle('is-placeholder', !item.today);

    // Có ảnh: ghi nguồn. Chưa có ảnh: nhắc loại tư liệu dự kiến (imageHint)
    // Thông tin tư liệu: như thẻ hiện vật trong bảo tàng
    const info = item.artifact ?? {};
    const rows = [
      ['Tư liệu', item.image ? item.imageCaption : null],
      ['Loại', info.type],
      ['Thời gian', info.date],
      ['Địa điểm', info.place],
    ].filter(([, v]) => v);
    el.artifactMeta.replaceChildren(...rows.flatMap(([k, v]) => [h('dt', null, k), h('dd', null, v)]));
    el.artifactDesc.textContent = info.description ?? '';
    el.artifactDesc.hidden = !info.description;
    el.artifact.hidden = !rows.length && !info.description && !item.image && !item.imageHint;

    const credit = item.image
      ? item.imageSource && `Nguồn ảnh: ${item.imageSource}`
      : item.imageHint && `Ảnh tư liệu dự kiến: ${item.imageHint}`;
    el.credit.replaceChildren();
    if (credit) {
      el.credit.append(credit);
      // Link tới trang gốc của ảnh (Wikimedia Commons hoặc trang báo)
      if (item.image && item.imageSourceUrl) {
        const link = h('a', null, 'Xem trang nguồn');
        link.href = item.imageSourceUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        el.credit.append(' · ', link);
      }
    }
    el.credit.hidden = !credit;

    el.count.textContent = `${index + 1} / ${room.items.length}`;
    el.prev.disabled = index === 0;
    el.next.disabled = index === room.items.length - 1;
    dialog.querySelector('.lightbox__text').scrollTop = 0;
  }

  /* Lật tranh: chỉ mặt đang hiện có trong cây truy cập */
  function setFlipped(flipped) {
    el.flip.classList.toggle('is-flipped', flipped);
    el.flipBtn.setAttribute('aria-pressed', String(flipped));
    el.flipBtn.lastChild.textContent = flipped ? ' Xem mặt trước' : ' Lật tranh';
    el.front.inert = flipped;
    el.back.inert = !flipped;
    el.front.setAttribute('aria-hidden', String(flipped));
    el.back.setAttribute('aria-hidden', String(!flipped));
  }
  el.flipBtn.addEventListener('click', () => setFlipped(!el.flip.classList.contains('is-flipped')));

  function step(dir) {
    const next = current + dir;
    if (next < 0 || next >= room.items.length) return;
    show(next);
  }

  openLightbox = (index) => {
    show(index);
    if (!dialog.open) dialog.showModal();
    el.close.focus();
  };

  el.prev.addEventListener('click', () => step(-1));
  el.next.addEventListener('click', () => step(1));
  el.close.addEventListener('click', () => dialog.close());

  // Bấm vào vùng tối bên ngoài khung nội dung thì đóng
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      event.stopPropagation();
      step(event.key === 'ArrowRight' ? 1 : -1);
    }
  });

  // Trả focus về tranh đang xem (có thể khác tranh đã bấm nếu đã chuyển tranh)
  dialog.addEventListener('close', () => {
    const frame = frames[current];
    frame.focus({ preventScroll: true });
    frame.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  });
}

if (room) renderRoom();
else renderNotFound();
