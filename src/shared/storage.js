/**
 * Đọc/ghi Web Storage an toàn: chế độ ẩn danh, bị chặn cookie hoặc đầy bộ nhớ
 * đều không được làm hỏng trang. Lỗi thì trả về giá trị mặc định.
 */
function safe(kind) {
  return {
    get(key, fallback = null) {
      try {
        const raw = window[kind].getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window[kind].setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
    remove(key) {
      try {
        window[kind].removeItem(key);
      } catch {
        // bỏ qua
      }
    },
  };
}

export const local = safe('localStorage');
export const session = safe('sessionStorage');

/* ---------- Các phòng đã tham quan (khóa visitedRooms) ---------- */

export function getVisitedRooms() {
  const value = local.get('visitedRooms', []);
  return Array.isArray(value) ? value.filter((id) => typeof id === 'string') : [];
}

export function markRoomVisited(id) {
  const visited = getVisitedRooms();
  if (!visited.includes(id)) local.set('visitedRooms', [...visited, id]);
}

export function resetVisitedRooms() {
  local.remove('visitedRooms');
}
