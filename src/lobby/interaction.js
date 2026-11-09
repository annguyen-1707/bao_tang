import * as THREE from 'three';

const CLICK_MAX_DISTANCE = 6; // px
const CLICK_MAX_DURATION = 300; // ms

/**
 * Raycast các vật bấm được trong sảnh: cửa phòng và các vật khác (cuốn sách).
 * Hover: viền sáng, con trỏ, tooltip. Chỉ coi là bấm khi nhấn-thả gọn
 * (dưới 6px và 300ms) để kéo xoay không mở nhầm.
 *
 * extras: [{ action, hits, name, desc, glow(k) }] — onAction(action) khi bấm.
 */
export function createInteraction({ camera, dom, doors, extras = [], tooltip, onOpen, onAction }) {
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const targets = [...doors.flatMap((d) => d.hits), ...extras.flatMap((e) => e.hits)];
  const tooltipName = tooltip.querySelector('.tooltip__name');
  const tooltipDesc = tooltip.querySelector('.tooltip__desc');

  // Khóa hover: 'door:2' hoặc 'action:intro'
  let hovered = null;
  let enabled = true;
  let down = null;
  let lastPointer = null;
  const glow = new Map();

  function pick(clientX, clientY) {
    const rect = dom.getBoundingClientRect();
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(targets, false)[0];
    if (!hit) return null;
    const { doorIndex, action } = hit.object.userData;
    return doorIndex != null ? `door:${doorIndex}` : `action:${action}`;
  }

  function describe(key) {
    const [kind, id] = key.split(':');
    if (kind === 'door') {
      const { room } = doors[Number(id)];
      return { name: room.name, desc: room.chapter ? `${room.chapter} · ${room.subtitle}` : room.subtitle };
    }
    return extras.find((e) => e.action === id);
  }

  function setHovered(key) {
    if (key === hovered) return;
    hovered = key;
    dom.style.cursor = key ? 'pointer' : '';
    if (key) {
      const { name, desc } = describe(key);
      tooltipName.textContent = name;
      tooltipDesc.textContent = desc;
      tooltip.hidden = false;
    } else {
      tooltip.hidden = true;
    }
  }

  function placeTooltip(x, y) {
    const pad = 16;
    const { offsetWidth: w, offsetHeight: h } = tooltip;
    let left = x + 18;
    let top = y + 20;
    if (left + w + pad > window.innerWidth) left = x - w - 14;
    if (top + h + pad > window.innerHeight) top = y - h - 14;
    tooltip.style.transform = `translate(${Math.max(pad, left)}px, ${Math.max(pad, top)}px)`;
  }

  function onPointerMove(event) {
    if (!enabled || event.pointerType === 'touch') return;
    lastPointer = { x: event.clientX, y: event.clientY };
    // Đang kéo xoay thì không đổi hover, tránh nhấp nháy tooltip
    if (down && event.buttons) {
      setHovered(null);
      return;
    }
    setHovered(pick(event.clientX, event.clientY));
    if (hovered) placeTooltip(event.clientX, event.clientY);
  }

  function onPointerDown(event) {
    if (!enabled || !event.isPrimary) return;
    down = { x: event.clientX, y: event.clientY, t: performance.now(), id: event.pointerId };
  }

  function onPointerUp(event) {
    if (!enabled || !down || event.pointerId !== down.id) return;
    const dist = Math.hypot(event.clientX - down.x, event.clientY - down.y);
    const duration = performance.now() - down.t;
    down = null;
    if (dist >= CLICK_MAX_DISTANCE || duration >= CLICK_MAX_DURATION) return;
    const key = pick(event.clientX, event.clientY);
    if (!key) return;
    const [kind, id] = key.split(':');
    if (kind === 'door') onOpen(Number(id));
    else onAction?.(id);
  }

  function onPointerLeave() {
    setHovered(null);
    lastPointer = null;
  }

  dom.addEventListener('pointermove', onPointerMove);
  dom.addEventListener('pointerdown', onPointerDown);
  dom.addEventListener('pointerup', onPointerUp);
  dom.addEventListener('pointercancel', () => (down = null));
  dom.addEventListener('pointerleave', onPointerLeave);

  return {
    /** Gọi mỗi frame: vật đang hover sáng dần lên, vật khác tắt dần. */
    update(dt, moved) {
      // Camera vừa xoay (auto-rotate, phím) thì vật dưới con trỏ có thể đã đổi
      if (enabled && moved && lastPointer && !down) {
        setHovered(pick(lastPointer.x, lastPointer.y));
      }
      const k = 1 - Math.exp(-dt * 12);
      for (const d of doors) {
        const target = hovered === `door:${d.index}` ? 1 : 0;
        const m = d.frameMaterial;
        m.emissiveIntensity += (target * 0.9 - m.emissiveIntensity) * k;
        d.leafMaterial.emissiveIntensity += (target * 0.25 - d.leafMaterial.emissiveIntensity) * k;
      }
      for (const extra of extras) {
        const target = hovered === `action:${extra.action}` ? 1 : 0;
        const current = glow.get(extra.action) ?? 0;
        const next = current + (target - current) * k;
        glow.set(extra.action, next);
        extra.glow?.(next);
      }
    },
    setEnabled(value) {
      enabled = value;
      down = null;
      if (!value) setHovered(null);
    },
  };
}
