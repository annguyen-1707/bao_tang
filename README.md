# Bảo tàng Tư tưởng Hồ Chí Minh (demo web)

Sản phẩm sáng tạo cho môn Tư tưởng Hồ Chí Minh: sảnh bảo tàng 3D dựng bằng Three.js, sáu cửa dẫn vào sáu phòng tranh bám sáu chương giáo trình.

## Cách chạy

Cần Node.js 18 trở lên.

```bash
npm install
npm run dev        # mở địa chỉ Vite in ra, ví dụ http://localhost:5173
npm run build      # xuất bản tĩnh vào thư mục dist/
npm run preview    # xem thử bản build
```

### Sảnh (`index.html`)

- Kéo chuột/vuốt hoặc phím ← → để nhìn quanh, bấm vào cửa để vào phòng.
- Sàn sảnh mang hoa văn mặt trống đồng (`src/assets/hoa-van-trong-dong.png`, nét được tô lại màu vàng thếp). Muốn thay hoa văn: thay file ảnh này, giữ nền trắng hoặc trong suốt.
- Băng đỏ phía trên các cửa: hai mặt tường có khẩu hiệu (tên bảo tàng, "Không có gì quý hơn độc lập, tự do"), bốn mặt còn lại là đàn chim Lạc bay nối đuôi (`public/images/chimlac.png`, nền trong suốt; hình được tô lại màu vàng thếp).
- Nút "Danh sách phòng" liệt kê các phòng (dùng được bằng bàn phím và trình đọc màn hình; nếu máy không có WebGL thì danh sách này hiện sẵn). Mỗi phòng có ô tích bên phải cho biết đã tham quan hay chưa; cuối danh sách là số phòng đã tham quan và nút "Tham quan lại từ đầu".
- Cửa phòng đã vào có đèn rọi sáng hơn và biển tên viền vàng. Vòng đèn sáu cung trên trần (ngước lên để thấy) sáng thêm một cung cho mỗi phòng đã vào. Đủ 6 phòng thì xuất hiện nút "Lời kết".
- Hai bục sách ở phía trước lúc mới vào: bên trái là "Lời giới thiệu", bên phải là "Nguồn tư liệu" (tài liệu tham khảo, nguồn ảnh của từng tranh, hoa văn trang trí; nguồn ảnh tự tổng hợp từ `rooms.json`). Danh sách phòng cũng có nút "Nguồn tư liệu".

### Phòng (`room.html?id=<id-phòng>`)

Tường tranh cuộn ngang (con lăn, kéo, vuốt, phím ← →). Bấm tranh để xem chi tiết; trong lightbox, nút "Lật tranh" cho xem mặt sau ("Ý nghĩa hôm nay").

### Deploy lên Vercel

Framework Preset **Vite**, Build Command `npm run build`, Output Directory `dist`. Không cần biến môi trường.

## Thêm hoặc sửa nội dung

Toàn bộ nội dung nằm trong `src/data/rooms.json`, không cần sửa code.

### `rooms.json`

Nội dung hiện tại lấy từ tài liệu *Nội dung các phòng – Bảo tàng Tư tưởng Hồ Chí Minh* (bám 6 chương giáo trình; hiện còn 41 tranh, đã bỏ 7 tranh infographic tự vẽ để mọi tranh đều là ảnh tư liệu). Sửa nội dung thì sửa thẳng trong `rooms.json`.

Gốc tệp:

- `museum`: tên bảo tàng, câu trên băng chữ và nguồn.
- `museumIntro`: lời giới thiệu trong cuốn sách ở sảnh.
- `ending`: Lời kết, gồm `quote`, `quoteSource`, `quoteStatus` (câu trích Di chúc, hiển thị cỡ lớn), `text` (lời kết của nhóm, mảng các đoạn văn), `imageHint`, `image`.
- `sourcesNote`: ghi chú nơi tìm ảnh tư liệu.
- `credits`: nội dung bục "Nguồn tư liệu": `team` (tên thành viên nhóm; để trống thì không hiện mục "Thực hiện"), `teamNote`, `references` (tài liệu tham khảo: `title`, `detail`, `url`), `imageNote`, `artwork` (hoa văn, thiết kế dùng trong bảo tàng).
- `rooms`: các phòng. Mỗi phòng có `chapter` ("Chương 1"…), hiện ở dòng phụ trên biển tên cửa và trong danh sách phòng.

**Thêm tranh** vào một phòng: thêm một phần tử vào mảng `items` của phòng đó:

```json
{
  "id": "p3-quyen-thieng-lieng",
  "title": "Tuyên ngôn Độc lập",
  "time": "2/9/1945",
  "description": "Đoạn thuyết minh 2–3 câu.",
  "quote": null,
  "quoteSource": null,
  "quoteStatus": "pending",
  "today": "Ý nghĩa hôm nay (mặt sau của tranh).",
  "image": null,
  "imageSource": null,
  "imageHint": "Ảnh Quảng trường Ba Đình, 2/9/1945"
}
```

- `quoteStatus: "pending"`: trích dẫn chưa đối chiếu nguyên văn. Lightbox hiện thêm dòng nhỏ "Trích dẫn đang được đối chiếu nguyên văn với Hồ Chí Minh Toàn tập". Đối chiếu xong thì bổ sung số tập, số trang vào `quoteSource` và **xóa** dòng `quoteStatus`.
- `imageCaption`: mô tả ngắn của ảnh (ví dụ "Bản Hiến pháp năm 1946"), hiện trên biển nhỏ dưới tranh ở tường. Tên tranh, thuyết minh, trích dẫn và "Ý nghĩa hôm nay" chỉ hiện khi bấm vào tranh. Tranh chưa có ảnh thì biển ghi tên tranh.
- `artifact`: khối "Thông tin tư liệu" hiện trong lightbox dưới phần thuyết minh, như thẻ hiện vật trong bảo tàng: `type` (loại tư liệu), `date`, `place`, `description` (mô tả chi tiết ảnh). Trường nào chưa biết thì để `null`.
- Mặt sau tranh (nút "Lật tranh") hiện `today` (ý nghĩa hôm nay) và trích dẫn `quote` / `quoteSource`.
- `imageHint`: loại ảnh tư liệu cần tìm (cột "Ảnh gợi ý" trong tài liệu). Khi `image` còn `null`, lightbox hiện "Ảnh tư liệu dự kiến: …"; khi đã có ảnh thì hiện `imageSource` thay vào.

- `id` phải là duy nhất; nó cũng quyết định hình vẽ giữ chỗ khi chưa có ảnh.
- Tranh hiển thị theo đúng thứ tự trong mảng. Với phòng có `"isTimeline": true`, nhãn trên đường thời gian lấy từ `time` (ví dụ "1911–1920", "Trước 1911"); tranh không có `time` thì chỉ có chấm mốc, không có nhãn.
- Trường nào chưa có thì để `null`: `quote` là `null` thì lightbox hiện khung giữ chỗ cho trích dẫn; `today` là `null` thì mặt sau của tranh ghi "đang được biên soạn".

**Thêm phòng**: thêm một phần tử vào mảng `rooms` với `id`, `order`, `name`, `chapter`, `subtitle`, `intro`, `isTimeline`, `items`. Sảnh 3D hiện đúng 6 cửa (lấy 6 phòng có `order` nhỏ nhất).

**Trích dẫn**: chỉ điền `quote` khi đã đối chiếu với *Hồ Chí Minh Toàn tập*, và luôn ghi `quoteSource` kèm số tập, số trang. Không tự đặt ra câu trích dẫn.

## Thay tranh giữ chỗ bằng ảnh tư liệu thật

Ảnh tư liệu hiện có đã nằm trong `public/images/` (tên file theo id tranh). Danh sách ảnh đang dùng, nguồn, ảnh dự phòng và các tranh còn thiếu ảnh: `tu-lieu-anh/BAO-CAO-TAI-ANH.md`. Ảnh dự phòng ở `tu-lieu-anh/du-phong/` (không đưa vào bản build). Trong `rooms.json`, `imageSourceUrl` là link trang gốc của ảnh, hiện trong lightbox thành "Xem trang nguồn".

Mọi tranh hiện để `"image": null`; trường `imageHint` ghi loại ảnh cần tìm. Nơi tìm: Bảo tàng Hồ Chí Minh, Khu di tích Phủ Chủ tịch, Trung tâm Lưu trữ quốc gia, Thông tấn xã Việt Nam, trang điện tử của Đảng. Không dùng ảnh phục chế màu hoặc ảnh do AI tạo cho tranh tư liệu lịch sử.

1. Chép ảnh vào `public/images/` (tạo thư mục nếu chưa có). Nên đặt tên file theo `id` của tranh, ví dụ `public/images/p2-thoi-ky-truoc-1911.jpg`. Nên dùng ảnh JPG/WebP rộng khoảng 1200–1600px.
2. Trong `rooms.json`, sửa `image` của tranh đó thành đường dẫn tương đối: `"image": "images/p2-thoi-ky-truoc-1911.jpg"`.
3. **Ghi rõ nguồn ảnh** trong trường `imageSource`, ví dụ `"imageSource": "Bảo tàng Hồ Chí Minh"` hoặc tên sách/trang web kèm đường dẫn. Lightbox sẽ hiện dòng "Nguồn ảnh: …". Chỉ dùng ảnh được phép sử dụng và luôn ghi nguồn.

Khung tranh tự co theo tỉ lệ ảnh thật.

## Dữ liệu lưu trên trình duyệt

| Khóa | Nơi lưu | Ý nghĩa |
|---|---|---|
| `visitedRooms` | localStorage | Các phòng đã vào (đèn cửa, Lời kết) |
| `endingCelebrated` | localStorage | Đã xem hiệu ứng vòng đèn sáng trọn |

Mọi thao tác đọc/ghi đều bọc `try/catch`: trình duyệt chặn lưu trữ thì trang vẫn chạy, chỉ không nhớ tiến độ.

## Cấu trúc

```
index.html, room.html      hai trang (Vite multi-page, khai báo trong vite.config.js)
src/lobby/                 sảnh 3D: main.js (renderer, camera, điều khiển, tiến độ),
                           buildHall.js (hình học, ánh sáng, bệ sách), textures.js (CanvasTexture),
                           interaction.js (raycast hover/bấm cửa và cuốn sách)
src/room/                  main.js (tường tranh, lightbox, lật tranh), placeholderArt.js
src/shared/                storage.js, fonts.js
src/data/                  rooms.json
src/styles/                base.css, room.css
```

Câu "Không có gì quý hơn độc lập, tự do" trên băng chữ của sảnh trích từ Lời kêu gọi đồng bào và chiến sĩ cả nước của Chủ tịch Hồ Chí Minh, ngày 17/7/1966.
