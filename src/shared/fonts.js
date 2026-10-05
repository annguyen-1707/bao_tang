/**
 * Canvas không tự kích hoạt tải web font, nên phải yêu cầu tải đúng các
 * kiểu chữ sẽ vẽ rồi mới đợi document.fonts.ready. Có hạn chờ để khi mất
 * mạng vẫn vẽ được bằng font dự phòng.
 */
export async function loadFonts(timeoutMs = 4000) {
  if (!document.fonts) return;
  const sample = 'Bảo tàng Tư tưởng Hồ Chí Minh ĐỘC LẬP ơư ẫ ổ';
  const wanted = [
    `700 64px "Noto Serif"`,
    `600 64px "Noto Serif"`,
    `italic 400 64px "Noto Serif"`,
    `400 64px "Noto Serif"`,
    `400 32px "Be Vietnam Pro"`,
    `600 32px "Be Vietnam Pro"`,
  ];
  const loading = Promise.all(wanted.map((font) => document.fonts.load(font, sample))).then(
    () => document.fonts.ready,
  );
  const timeout = new Promise((resolve) => setTimeout(resolve, timeoutMs));
  try {
    await Promise.race([loading, timeout]);
  } catch {
    // Không tải được font: dùng font dự phòng.
  }
}
