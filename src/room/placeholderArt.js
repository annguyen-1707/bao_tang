/**
 * Sinh tranh giữ chỗ dạng SVG trừu tượng từ id của tranh.
 * Cùng một id luôn ra cùng màu, bố cục và tỉ lệ khung.
 */

const PALETTES = [
  // [nền, mảng trung gian, điểm nhấn, nét]
  ['#E9DFC9', '#B89A6A', '#7A1712', '#5A4630'], // giấy dó, sơn mài
  ['#DCD6C4', '#7F8C76', '#4B5A4A', '#2F3A2F'], // rêu trầm
  ['#EDE3CF', '#C9A23F', '#3E3D3A', '#6B5631'], // thếp vàng, đá
  ['#E3D9C6', '#9A6B4F', '#4E0E0B', '#5B3A2A'], // đất nung
  ['#E6E0D2', '#8A8F98', '#2E3A4A', '#3F4652'], // chàm nhạt
  ['#EFE6D2', '#D0A86A', '#7A1712', '#3E3D3A'], // hoàng hôn
];

const RATIOS = [
  [400, 500],
  [500, 400],
  [440, 440],
  [400, 520],
];

let uid = 0;

function hashString(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rngFrom(seed) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n) => Math.round(n * 10) / 10;

function composeSun(w, h, [bg, mid, accent, line], rnd) {
  const horizon = h * (0.55 + rnd() * 0.15);
  const cx = w * (0.3 + rnd() * 0.4);
  const r = w * (0.12 + rnd() * 0.08);
  let bands = '';
  for (let i = 0; i < 4; i++) {
    const y = horizon + i * ((h - horizon) / 4);
    bands += `<rect x="0" y="${r1(y)}" width="${w}" height="${r1((h - horizon) / 8)}" fill="${mid}" opacity="${0.35 + i * 0.15}"/>`;
  }
  return `<circle cx="${r1(cx)}" cy="${r1(horizon - r * 0.4)}" r="${r1(r)}" fill="${accent}"/>
    <rect x="0" y="${r1(horizon)}" width="${w}" height="${r1(h - horizon)}" fill="${bg}"/>${bands}
    <line x1="0" y1="${r1(horizon)}" x2="${w}" y2="${r1(horizon)}" stroke="${line}" stroke-width="2"/>`;
}

function composeArcs(w, h, [, mid, accent, line], rnd) {
  const cx = w * (0.2 + rnd() * 0.6);
  const cy = h * (0.6 + rnd() * 0.3);
  let arcs = '';
  for (let i = 6; i >= 1; i--) {
    const r = i * w * 0.12;
    arcs += `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(r)}" fill="${i % 2 ? mid : 'none'}" opacity="${0.18 + (6 - i) * 0.08}" stroke="${line}" stroke-width="1.5"/>`;
  }
  return `${arcs}<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(w * 0.07)}" fill="${accent}"/>`;
}

function composeMountains(w, h, [, mid, accent, line], rnd) {
  let layers = '';
  for (let layer = 0; layer < 3; layer++) {
    const base = h * (0.5 + layer * 0.14);
    let d = `M0 ${h} L0 ${r1(base)}`;
    const steps = 5 + Math.floor(rnd() * 3);
    for (let i = 1; i <= steps; i++) {
      const x = (w / steps) * i;
      const y = base - (rnd() * h * 0.22) / (layer + 1);
      d += ` L${r1(x - w / steps / 2)} ${r1(y)} L${r1(x)} ${r1(base - rnd() * 20)}`;
    }
    d += ` L${w} ${h} Z`;
    const fill = [mid, line, accent][layer];
    layers += `<path d="${d}" fill="${fill}" opacity="${0.45 + layer * 0.2}"/>`;
  }
  return `<circle cx="${r1(w * (0.65 + rnd() * 0.2))}" cy="${r1(h * 0.22)}" r="${r1(w * 0.06)}" fill="${accent}" opacity="0.8"/>${layers}`;
}

function composeStrips(w, h, [, mid, accent, line], rnd) {
  let strips = '';
  const count = 5 + Math.floor(rnd() * 4);
  for (let i = 0; i < count; i++) {
    const x = (w / count) * i + rnd() * 8;
    const top = h * (0.1 + rnd() * 0.35);
    strips += `<rect x="${r1(x)}" y="${r1(top)}" width="${r1((w / count) * 0.55)}" height="${r1(h - top - h * 0.12)}" fill="${i % 3 === 0 ? accent : mid}" opacity="${0.4 + rnd() * 0.45}"/>`;
  }
  return `${strips}<line x1="0" y1="${r1(h * 0.88)}" x2="${w}" y2="${r1(h * 0.88)}" stroke="${line}" stroke-width="2"/>`;
}

const COMPOSITIONS = [composeSun, composeArcs, composeMountains, composeStrips];

/**
 * @param {string} id  id của tranh trong rooms.json
 * @returns {{ svg: string, width: number, height: number }}
 */
export function placeholderArt(id) {
  const seed = hashString(id);
  const rnd = rngFrom(seed);
  const palette = PALETTES[seed % PALETTES.length];
  const [w, h] = RATIOS[(seed >>> 4) % RATIOS.length];
  const compose = COMPOSITIONS[(seed >>> 8) % COMPOSITIONS.length];
  const key = `pa${seed.toString(36)}-${uid++}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="${key}-grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="${seed % 97}" result="noise"/>
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.25  0 0 0 0 0.2  0 0 0 0 0.12  0 0 0 0.16 0"/>
        <feComposite in2="SourceGraphic" operator="in"/>
      </filter>
      <radialGradient id="${key}-vig" cx="50%" cy="45%" r="70%">
        <stop offset="60%" stop-color="#000" stop-opacity="0"/>
        <stop offset="100%" stop-color="#2a1d10" stop-opacity="0.35"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="${palette[0]}"/>
    ${compose(w, h, palette, rnd)}
    <rect width="${w}" height="${h}" fill="#fff" filter="url(#${key}-grain)"/>
    <rect width="${w}" height="${h}" fill="url(#${key}-vig)"/>
    <rect x="${w / 2 - 110}" y="${h - 40}" width="220" height="26" rx="2" fill="${palette[0]}" opacity="0.85"/>
    <text x="${w / 2}" y="${h - 22}" text-anchor="middle" font-family="'Be Vietnam Pro', system-ui, sans-serif" font-size="13" fill="${palette[3]}" letter-spacing="0.3">Ảnh tư liệu sẽ thay sau</text>
  </svg>`;

  return { svg, width: w, height: h };
}
