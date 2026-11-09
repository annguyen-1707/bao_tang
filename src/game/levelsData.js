/**
 * DỮ LIỆU MINI-GAME: BẢN LĨNH LÃNH ĐẠO CÁCH MẠNG (1945 - 1951)
 * "NGÀN CÂN TREO SỢI TÓC — BẠN SẼ RA QUYẾT SÁCH GÌ?"
 * Bám sát Giáo trình Lịch sử Đảng Cộng sản Việt Nam (1945 - 1951)
 */

export const INITIAL_STATS = {
  docLap: 50,    // 🎯 Độc lập - Chủ quyền quốc gia
  doanKet: 50,   // 🤝 Đại đoàn kết toàn dân tộc & Mặt trận
  daoDuc: 50,    // ⚖️ Kỷ cương, Liêm chính & Đạo đức cách mạng
  viDan: 50,     // 👥 Lòng dân - Dân sinh (Diệt giặc đói, giặc dốt)
  hocLam: 50,    // 💡 Sách lược, Trí tuệ chỉ đạo cách mạng ("Dĩ bất biến ứng vạn biến")
};

export const STAT_CONFIG = {
  docLap: {
    label: 'Độc lập - Chủ quyền',
    icon: '🎯',
    desc: 'Bảo vệ vững chắc nền độc lập, chủ quyền lãnh thổ và quyền tự quyết dân tộc',
    color: '#ef4444',
    gradient: 'linear-gradient(90deg, #b91c1c, #f87171)',
  },
  doanKet: {
    label: 'Đại đoàn kết',
    icon: '🤝',
    desc: 'Tập hợp mọi tầng lớp nhân dân, củng cố Mặt trận Việt Minh và liên minh công nông trí thức',
    color: '#10b981',
    gradient: 'linear-gradient(90deg, #047857, #34d399)',
  },
  daoDuc: {
    label: 'Kỷ cương - Liêm chính',
    icon: '⚖️',
    desc: 'Cần kiệm liêm chính, chí công vô tư, phòng chống tham ô, lãng phí, quan liêu',
    color: '#f59e0b',
    gradient: 'linear-gradient(90deg, #b45309, #fbbf24)',
  },
  viDan: {
    label: 'Dân sinh - Vì dân',
    icon: '👥',
    desc: 'Lấy dân làm gốc, diệt giặc đói, giặc dốt, chăm lo đời sống vật chất và tinh thần của nhân dân',
    color: '#06b6d4',
    gradient: 'linear-gradient(90deg, #0e7490, #22d3ee)',
  },
  hocLam: {
    label: 'Sách lược - Trí tuệ',
    icon: '💡',
    desc: '“Dĩ bất biến ứng vạn biến”, nắm bắt thời cơ chiến lược và nghệ thuật quân sự tài tình',
    color: '#8b5cf6',
    gradient: 'linear-gradient(90deg, #6d28d9, #a78bfa)',
  },
};

export const NPC_PROFILES = {
  nam: {
    name: 'Đồng chí Nam',
    role: 'Cán bộ Việt Minh / Ban Tuyên huấn',
    avatar: '🚩',
  },
  le: {
    name: 'Chỉ huy Lê',
    role: 'Ban Chỉ huy Quân sự & Mặt trận',
    avatar: '🎖️',
  },
  huynh: {
    name: 'Cụ Huỳnh',
    role: 'Nhân sĩ yêu nước / Đại biểu Quốc hội',
    avatar: '📜',
  },
  mai: {
    name: 'Chị Mai',
    role: 'Ban Tiếp tế & Cứu tế nhân dân',
    avatar: '🌾',
  },
};

export const KNOWLEDGE_NODES = {
  node_doclap_1945: {
    id: 'node_doclap_1945',
    chapter: 'Phần 1: Xây dựng & bảo vệ chính quyền cách mạng (1945 - 1946)',
    title: 'Chỉ thị Kháng chiến Kiến quốc (25/11/1945)',
    desc: 'Chỉ thị xác định: Tính chất cách mạng Đông Dương lúc này là giải phóng dân tộc; kẻ thù chính nguy hiểm nhất là thực dân Pháp xâm lược; đề ra 4 nhiệm vụ cấp bách: củng cố chính quyền, chống thực dân Pháp xâm lược, bài trừ nội phản, cải thiện đời sống nhân dân.',
    unlocked: false,
  },
  node_diet_giac_doi_dot: {
    id: 'node_diet_giac_doi_dot',
    chapter: 'Phần 2: Diệt giặc đói, giặc dốt, giặc ngoại xâm (1945 - 1946)',
    title: 'Diệt giặc đói, giặc dốt & Tuần lễ Vàng',
    desc: 'Chính phủ phát động phong trào tăng gia sản xuất “Tấc đất tấc vàng”, “Hũ gạo cứu đói”, xóa bỏ các thứ thuế vô lý. Phát động phong trào “Bình dân học vụ” xóa mù chữ cho hàng triệu người; tổ chức “Tuần lễ Vàng” thu được 370kg vàng và 20 triệu đồng cho Quỹ Độc lập.',
    unlocked: false,
  },
  node_tong_tuyen_cu_1946: {
    id: 'node_tong_tuyen_cu_1946',
    chapter: 'Phần 3: Tổng tuyển cử & Xây dựng chế độ mới (1946)',
    title: 'Tổng tuyển cử 6/1/1946 & Hiến pháp 1946',
    desc: 'Cuộc Tổng tuyển cử bầu ra 333 đại biểu Quốc hội khóa I, mở rộng thêm 70 ghế cho đại biểu Việt Quốc, Việt Cách nhằm củng cố khối đại đoàn kết toàn dân tộc. Bản Hiến pháp 1946 là bản hiến pháp dân chủ đầu tiên của nước Việt Nam Dân chủ Cộng hòa.',
    unlocked: false,
  },
  node_hoa_de_tien: {
    id: 'node_hoa_de_tien',
    chapter: 'Phần 4: Sách lược ngoại giao "Hòa để tiến" (1946)',
    title: 'Hiệp định Sơ bộ 6/3 & Tạm ước 14/9/1946',
    desc: 'Chủ tịch Hồ Chí Minh và Ban Thường vụ Trung ương Đảng vận dụng sáng tạo phương châm “Dĩ bất biến, ứng vạn biến”: Chủ động ký Hiệp định Sơ bộ 6/3/1946 để đẩy 20 vạn quân Tưởng về nước, tránh đụng độ cùng lúc nhiều kẻ thù, tranh thủ thời gian hòa hoãn quý báu để chuẩn bị kháng chiến lâu dài.',
    unlocked: false,
  },
  node_toan_quoc_khang_chien: {
    id: 'node_toan_quoc_khang_chien',
    chapter: 'Phần 5: Toàn quốc kháng chiến & Chiến dịch Việt Bắc (1946 - 1947)',
    title: 'Lời kêu gọi Toàn quốc kháng chiến (19/12/1946)',
    desc: 'Trước dã tâm xâm lược lấn tới của thực dân Pháp, đêm 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến: “Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!”. Chiến sự Hà Nội giam chân địch 60 ngày đêm bảo vệ Trung ương rút lên an toàn khu.',
    unlocked: false,
  },
  node_viet_bac_1947: {
    id: 'node_viet_bac_1947',
    chapter: 'Phần 5: Toàn quốc kháng chiến & Chiến dịch Việt Bắc (1946 - 1947)',
    title: 'Chiến dịch Việt Bắc Thu - Đông 1947',
    desc: 'Đảng ra Chỉ thị “Phá tan cuộc tấn công mùa đông của giặc Pháp”. Quân dân ta chiến đấu anh dũng bẻ gãy hai gọng kìm sông Lô và đường số 4, bảo vệ vững chắc An toàn khu (ATK) và đầu não kháng chiến, đập tan hoàn toàn chiến lược “đánh nhanh thắng nhanh” của thực dân Pháp.',
    unlocked: false,
  },
  node_bien_gioi_1950: {
    id: 'node_bien_gioi_1950',
    chapter: 'Phần 6: Chiến dịch Biên giới 1950 & Đại hội II của Đảng (1951)',
    title: 'Chiến dịch Biên giới Thu - Đông 1950',
    desc: 'Chiến dịch tiến công lớn đầu tiên của Quân đội nhân dân Việt Nam. Bác Hồ trực tiếp lên đài quan sát Đông Khê chỉ đạo. Thắng lợi vang dội tiêu diệt hai binh đoàn Le Page và Charton, giải phóng hơn 750km biên giới Việt - Trung, giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ.',
    unlocked: false,
  },
  node_dai_hoi_2_1951: {
    id: 'node_dai_hoi_2_1951',
    chapter: 'Phần 6: Chiến dịch Biên giới 1950 & Đại hội II của Đảng (1951)',
    title: 'Đại hội đại biểu toàn quốc lần thứ II (2/1951)',
    desc: 'Đại hội diễn ra tại Chiêm Hóa (Tuyên Quang), quyết định đưa Đảng ra hoạt động công khai lấy tên là Đảng Lao động Việt Nam; thông qua Báo cáo Chính trị và Chính cương của Đảng, hoàn thiện đường lối cách mạng dân tộc dân chủ nhân dân tiến lên chủ nghĩa xã hội.',
    unlocked: false,
  },
};

export const ACHIEVEMENTS = [
  {
    id: 'ach_doclap_tuchu',
    name: '🏅 BẢN LĨNH TỰ LỰC CÁNH SINH',
    desc: 'Kiên quyết giữ vững nguyên tắc độc lập chủ quyền, không dao động hay nhượng bộ điều cốt lõi.',
    icon: '🛡️',
  },
  {
    id: 'ach_dai_doan_ket',
    name: '🏅 NGỌN CỜ ĐẠI ĐOÀN KẾT',
    desc: 'Quy tụ sức mạnh toàn dân tộc, kết hợp nhân sĩ, trí thức và mọi giai tầng vượt qua thử thách cam go.',
    icon: '🤝',
  },
  {
    id: 'ach_di_bat_bien',
    name: '🏅 DĨ BẤT BIẾN, ỨNG VẠN BIẾN',
    desc: 'Vận dụng xuất sắc sách lược “Hòa để tiến”, phân hóa kẻ thù và chớp thời cơ chiến lược sáng suốt.',
    icon: '🕊️',
  },
  {
    id: 'ach_vi_dan_diet_giac',
    name: '🏅 LÒNG DÂN LÀ GỐC',
    desc: 'Chăm lo sinh mệnh đồng bào, giải quyết nạn đói, nạn dốt và bảo tồn thực lực cách mạng.',
    icon: '🌾',
  },
  {
    id: 'ach_nha_lanh_dao_kiet_xuat',
    name: '🏅 NHÀ LÃNH ĐẠO KIỆT XUẤT (1945 - 1951)',
    desc: 'Mở khóa Secret Ending: Đạt điểm trung bình xuất sắc cả 5 phẩm chất lãnh đạo thời khắc bão táp.',
    icon: '🌟',
  },
];

export const LEVELS = [
  /* =========================================================================
     LEVEL 1: TÌNH THẾ "NGÀN CÂN TREO SỢI TÓC" (9/1945)
     ========================================================================= */
  {
    id: 'level-1',
    levelNum: 1,
    levelTag: 'CHẶNG 1 — THÁNG 9/1945: TÌNH THẾ HIỂM NGHÈO',
    title: '“Ai là kẻ thù chính nguy hiểm nhất?”',
    situationTime: '📍 BẮC BỘ PHỦ, HÀ NỘI — THÁNG 9/1945',
    situationHeadline: 'Ngoại xâm vây bọc, ngân khố rỗng, nội phản nổi dậy: Cần định hướng chiến lược như thế nào?',
    situationDesc: 'Nước Việt Nam Dân chủ Cộng hòa vừa ra đời thì 20 vạn quân Tưởng tràn vào miền Bắc hậu thuẫn cho bọn Việt Quốc, Việt Cách quấy nhiễu; ở miền Nam, quân Anh dọn đường cho Pháp nổ súng tái chiếm Sài Gòn. Trong nội bộ xuất hiện nhiều luồng ý kiến trái chiều về việc đối phó với các đạo quân ngoại xâm.',
    npc: {
      id: 'nam',
      quote: '“Thưa đồng chí! Quân Tưởng kéo vào đông như kiến ở phía Bắc, quân Pháp thì ngang nhiên nổ súng giết hại đồng bào Nam Bộ. Chúng ta nên dồn toàn lực đánh đạo quân nào trước?”',
    },
    knowledgeKey: 'node_doclap_1945',
    options: [
      {
        id: '1a',
        code: 'A',
        icon: '⚔️',
        text: 'Tuyên bố toàn diện đối đầu vũ trang với cả quân Tưởng và quân Pháp cùng một lúc.',
        subtext: 'Quyết chiến bất chấp so sánh tương quan lực lượng quân sự thực tế.',
        deltas: { docLap: +10, hocLam: -15, viDan: -15 },
        tag: 'rash_choice',
        feedback: {
          title: 'MANH ĐỘNG — RƠI VÀO THẾ LƯỠNG ĐẦU THỌ ĐỊCH',
          quote: '“Cách mạng là khoa học và nghệ thuật phân hóa kẻ thù, không bao giờ tự cô lập mình chống lại tất cả các đối thủ cùng lúc.”',
          detail: 'Đánh cùng lúc cả Pháp lẫn Tưởng khi chính quyền non trẻ chưa có quân đội chính quy mạnh sẽ đẩy đất nước vào cảnh thảm sát và suy sụp ngay từ đầu.',
          type: 'alarm',
        },
      },
      {
        id: '1b',
        code: 'B',
        icon: '🎯',
        text: 'Ban hành Chỉ thị "Kháng chiến - Kiến quốc": Xác định thực dân Pháp là kẻ thù chính; tạm thời hòa hoãn mềm dẻo với quân Tưởng ở miền Bắc.',
        subtext: 'Phân hóa triệt để kẻ thù, tập trung mũi nhọn chống kẻ thù nguy hiểm nhất.',
        deltas: { docLap: +15, hocLam: +15, doanKet: +10 },
        tag: 'strategic_choice',
        feedback: {
          title: '🎯 SÁCH LƯỢC TÀI TÌNH — KHÁNG CHIẾN KIẾN QUỐC',
          quote: '“Xác định đúng kẻ thù chính là điều kiện tiên quyết để định hình đường lối cách mạng đúng đắn.”',
          detail: 'Ngày 25/11/1945, Trung ương Đảng ra Chỉ thị Kháng chiến - Kiến quốc, nhận định chính xác: Kẻ thù chính của ta lúc này là thực dân Pháp xâm lược. Ta kiên quyết kháng chiến ở Nam Bộ, đồng thời mềm dẻo tránh xung đột với Tưởng ở miền Bắc.',
          type: 'positive',
        },
      },
      {
        id: '1c',
        code: 'C',
        icon: '🏳️',
        text: 'Nhượng bộ yêu sách chính trị của Pháp để đổi lấy sự công nhận quyền tự trị trong khối Liên hiệp.',
        subtext: 'Ảo tưởng hòa bình, đánh mất nguyên tắc độc lập chủ quyền cốt lõi.',
        deltas: { docLap: -20, daoDuc: -10, doanKet: -10 },
        tag: 'compromise_choice',
        feedback: {
          title: 'ẢO TƯỞNG THỎA HIỆP — NGUY CƠ MẤT NƯỚC',
          quote: '“Độc lập tự do không thể cầu xin từ lòng hảo tâm của kẻ cướp nước!”',
          detail: 'Thực dân Pháp dã tâm quay lại áp đặt chế độ nô dịch. Nhượng bộ nguyên tắc chủ quyền sẽ làm mất tinh thần quật khởi của nhân dân và đánh mất chính quyền vừa giành được.',
          type: 'warning',
        },
      },
      {
        id: '1d',
        code: 'D',
        icon: '📜',
        text: 'Chỉ tập trung gửi điện thư ngoại giao, chờ đợi các nước lớn trong Liên Hợp Quốc can thiệp.',
        subtext: 'Thụ động trông chờ bên ngoài, không củng cố nội lực cách mạng.',
        deltas: { docLap: -10, hocLam: -10, viDan: -5 },
        tag: 'passive_choice',
        feedback: {
          title: 'Ỷ LẠI NGOẠI LỰC — THỜI CUỘC KHÔNG CHỜ ĐỢI',
          quote: '“Đem sức ta mà tự giải phóng cho ta — Không thể phó thác số phận cho sự xếp đặt của các nước lớn.”',
          detail: 'Sau Thế chiến II, các nước đế quốc đều ngầm bảo vệ lợi ích thực dân của nhau. Nếu không tự lực xây dựng và bảo vệ thực lực, không ai có thể cứu vãn nền độc lập của ta.',
          type: 'neutral',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 1: Xây dựng & bảo vệ chính quyền non trẻ (1945 - 1946)',
      content: 'Chỉ thị "Kháng chiến - Kiến quốc" (25/11/1945) là văn kiện lịch sử đặc biệt quan trọng, vạch rõ 4 nhiệm vụ cấp bách: củng cố chính quyền, chống thực dân Pháp xâm lược, bài trừ nội phản, cải thiện đời sống nhân dân. Chỉ thị xác định đúng đắn kẻ thù chính nguy hiểm nhất là thực dân Pháp, đề ra sách lược phân hóa kẻ thù: hòa hoãn mềm dẻo với quân Tưởng để tập trung đánh Pháp ở miền Nam.',
    },
  },

  /* =========================================================================
     LEVEL 2: DIỆT GIẶC ĐÓI, GIẶC DỐT (CUỐI 1945)
     ========================================================================= */
  {
    id: 'level-2',
    levelNum: 2,
    levelTag: 'CHẶNG 2 — CUỐI NĂM 1945: DIỆT GIẶC ĐÓI, GIẶC DỐT',
    title: '“Kho lương rỗng, ngân khố kiệt quệ: Cứu dân bằng cách nào?”',
    situationTime: '📍 BỘ TÀI CHÍNH & NÔNG NGHIỆP — CUỐI NĂM 1945',
    situationHeadline: 'Nạn đói làm 2 triệu người thiệt mạng vừa qua, hơn 90% dân số mù chữ, ngân khố chỉ còn 1,2 triệu đồng rách nát.',
    situationDesc: 'Đất nước đối diện với thảm họa nhân đạo khủng khiếp. Nạn đói tiếp tục đe dọa mùa đông năm 1945. Ngân sách quốc gia rỗng không, trong khi chi phí cứu tế và quốc phòng vô cùng cấp thiết. Cần đưa ra biện pháp gì để cứu dân và vực dậy nền tài chính non trẻ?',
    npc: {
      id: 'mai',
      quote: '“Thưa đồng chí! Đồng bào nhiều nơi vẫn còn đứt bữa. Kho thóc nhà nước trống trơn, nếu cưỡng chế tịch thu thì nhân dân sẽ oán thán, mà không có tiền gạo thì chính quyền sụp đổ!”',
    },
    knowledgeKey: 'node_diet_giac_doi_dot',
    options: [
      {
        id: '2a',
        code: 'A',
        icon: '🌾',
        text: 'Phát động phong trào "Tăng gia sản xuất — Tấc đất tấc vàng", cán bộ nêu gương lập "Hũ gạo cứu đói", mở "Bình dân học vụ" và tổ chức "Tuần lễ Vàng".',
        subtext: 'Khơi dậy lòng yêu nước, đoàn kết toàn dân tự cứu lấy mình.',
        deltas: { viDan: +20, doanKet: +15, daoDuc: +10 },
        tag: 'popular_mass_choice',
        feedback: {
          title: '🌾 KHƠI DẬY SỨC DÂN — LẤY DÂN LÀM GỐC',
          quote: '“Dân chúng đồng lòng, việc gì cũng làm được. Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.”',
          detail: 'Bác Hồ gương mẫu cứ 10 ngày nhịn ăn một bữa để góp gạo cứu đói. Nhân dân hăng hái tăng gia sản xuất, nạn đói nhanh chóng bị đẩy lùi. "Tuần lễ Vàng" thu được 370kg vàng và 20 triệu đồng vào Quỹ Độc lập; hàng triệu người thoát nạn mù chữ nhờ Bình dân học vụ.',
          type: 'positive',
        },
      },
      {
        id: '2b',
        code: 'B',
        icon: '📦',
        text: 'Ra sắc lệnh cưỡng chế thu gom khẩn cấp toàn bộ lúa gạo và vàng bạc trong nhà các phú nông, tư sản.',
        subtext: 'Biện pháp hành chính cực đoan, áp đặt cưỡng bức tài sản.',
        deltas: { viDan: -10, doanKet: -20, daoDuc: -15 },
        tag: 'force_collect_choice',
        feedback: {
          title: 'CỰC ĐOAN HÀNH CHÍNH — GÂY HOANG MANG NỘI BỘ',
          quote: '“Cách mạng phải dựa trên sự tự giác và đoàn kết dân tộc, không dùng bạo lực trấn áp các tầng lớp yêu nước.”',
          detail: 'Cưỡng bức tài sản sẽ phá vỡ khối liên minh toàn dân tộc, đẩy giới công thương và nhân sĩ về phía đối lập, tạo cớ cho các đảng phái phản động kích động chống phá chính quyền.',
          type: 'alarm',
        },
      },
      {
        id: '2c',
        code: 'C',
        icon: '💰',
        text: 'Phát hành vô tội vạ tiền giấy Đông Dương mới để chi trả cho các hoạt động cứu trợ khẩn cấp.',
        subtext: 'Giải pháp in tiền đối phó nhanh mà không có bảo chứng tài chính.',
        deltas: { hocLam: -15, daoDuc: -10, viDan: -10 },
        tag: 'hyperinflation_choice',
        feedback: {
          title: 'SIÊU LẠM PHÁT — ĐẦU ĐỘC NỀN KINH TẾ NON TRẺ',
          quote: '“Quản lý kinh tế không thể làm liều theo cảm tính. Tiền không có giá trị sẽ làm tan rã lòng tin của nhân dân.”',
          detail: 'In tiền tràn lan khi hàng hóa khan hiếm sẽ dẫn đến siêu lạm phát, giá gạo tăng phi mã, người nghèo càng kiệt quệ hơn nữa.',
          type: 'warning',
        },
      },
      {
        id: '2d',
        code: 'D',
        icon: '⏳',
        text: 'Tạm gác việc chống mù chữ và cứu trợ xã hội, ưu tiên 100% ngân sách ít ỏi cho mua sắm vũ khí.',
        subtext: 'Thiên lệch quân sự đơn thuần, bỏ quên đời sống dân sinh.',
        deltas: { viDan: -15, hocLam: -5, docLap: +5 },
        tag: 'military_only_choice',
        feedback: {
          title: 'THIÊN LỆCH QUÂN SỰ ĐƠN THUẦN',
          quote: '“Một dân tộc dốt là một dân tộc yếu; một dân tộc đói thì không thể có đủ sức mạnh để giữ vững nền độc lập!”',
          detail: 'Nếu nhân dân đói lả và mù chữ thì không lực lượng quân sự nào có thể đứng vững trước quân thù. Kháng chiến phải đi đôi với kiến quốc.',
          type: 'neutral',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 2: Diệt giặc đói, giặc dốt, giặc ngoại xâm (1945 - 1946)',
      content: 'Chính phủ lâm thời đã giải quyết nạn đói bằng hai biện pháp cấp thời và lâu dài: nhường cơm sẻ áo, tăng gia sản xuất. Phát động "Bình dân học vụ" (chỉ trong 1 năm đã có 2,5 triệu người thoát nạn mù chữ). Phát động "Tuần lễ Vàng" và lập "Quỹ Độc lập", phát hành đồng tiền Tài chính Việt Nam (tiền Cụ Hồ) khẳng định chủ quyền tiền tệ quốc gia.',
    },
  },

  /* =========================================================================
     LEVEL 3: TỔNG TUYỂN CỬ VÀ HIẾN PHÁP 1946 (ĐẦU 1946)
     ========================================================================= */
  {
    id: 'level-3',
    levelNum: 3,
    levelTag: 'CHẶNG 3 — ĐẦU NĂM 1946: XÂY DỰNG CHẾ ĐỘ MỚI',
    title: '“Có nên tiến hành Tổng tuyển cử trong mưa bom bão đạn?”',
    situationTime: '📍 TRỤ SỞ QUỐC HỘI — THÁNG 1/1946',
    situationHeadline: 'Việt Quốc, Việt Cách mang súng khiêu khích phá hoại; quân Pháp tấn công Nam Bộ: Liệu có nên bầu cử?',
    situationDesc: 'Các phần tử phản động Việt Quốc, Việt Cách dựa thế 20 vạn quân Tưởng ra sức quấy phá bầu cử, đòi chia trước ghế Quốc hội và Bộ trưởng không qua bầu cử. Một số cán bộ lo ngại an ninh bất ổn đề xuất hoãn bầu cử hoặc đem quân đàn áp ngay.',
    npc: {
      id: 'huynh',
      quote: '“Thưa đồng chí! Tổng tuyển cử là quyền thiêng liêng khẳng định tính hợp pháp của Nhà nước ta trước nhân dân và trường quốc tế. Nhưng bọn đối lập dựa thế quân Tưởng gây sức ép rất căng!”',
    },
    knowledgeKey: 'node_tong_tuyen_cu_1946',
    options: [
      {
        id: '3a',
        code: 'A',
        icon: '🗳️',
        text: 'Kiên quyết tổ chức Tổng tuyển cử cả nước ngày 6/1/1946 bằng phổ thông đầu phiếu; đồng thời linh hoạt chấp thuận mở rộng 70 ghế Quốc hội cho đại biểu Việt Quốc, Việt Cách.',
        subtext: 'Bảo đảm tính hợp hiến tuyệt đối, vừa giữ vững đại đoàn kết dân tộc.',
        deltas: { docLap: +15, doanKet: +15, daoDuc: +10, hocLam: +10 },
        tag: 'election_unity_choice',
        feedback: {
          title: '🗳️ THẮNG LỢI LỊCH SỬ — KHẲNG ĐỊNH CHỦ QUYỀN DÂN TỘC',
          quote: '“Tổng tuyển cử là dịp cho toàn thể quốc dân tự do lựa chọn những người có tài, có đức gánh vác việc nước.”',
          detail: 'Ngày 6/1/1946, 89% cử tri cả nước hăng hái đi bỏ phiếu bất chấp bom đạn và sự uy hiếp của quân thù. Quốc hội khóa I ra đời, khẳng định tính hợp pháp của Chính phủ Việt Nam Dân chủ Cộng hòa trước toàn thế giới.',
          type: 'positive',
        },
      },
      {
        id: '3b',
        code: 'B',
        icon: '🛑',
        text: 'Hoãn Tổng tuyển cử vô thời hạn cho tới khi nào quân Tưởng rút hoàn toàn khỏi miền Bắc.',
        subtext: 'Do dự sợ rủi ro an ninh, làm chậm trễ tiến trình hợp hiến chính quyền.',
        deltas: { docLap: -15, hocLam: -10, viDan: -10 },
        tag: 'delay_election_choice',
        feedback: {
          title: 'TRỄ NÃI CHIẾN LƯỢC — ĐÁNH MẤT TÍNH DANH CHÍNH NGÔN THUẬN',
          quote: '“Không có Quốc hội và Hiến pháp, Chính phủ sẽ mãi chỉ là lâm thời và các nước đế quốc sẽ vin vào đó để phủ nhận chủ quyền của ta!”',
          detail: 'Hoãn bầu cử sẽ khiến ta mất đi công cụ pháp lý quốc tế mạnh mẽ nhất để đấu tranh ngoại giao với các cường quốc Đồng minh.',
          type: 'warning',
        },
      },
      {
        id: '3c',
        code: 'C',
        icon: '🔫',
        text: 'Huy động Vệ quốc đoàn bắt giữ ngay các thủ lĩnh Việt Quốc, Việt Cách tại các điểm bầu cử Hà Nội.',
        subtext: 'Hành động nóng vội, tạo cớ cho quân Tưởng can thiệp quân sự.',
        deltas: { docLap: -10, doanKet: -15, hocLam: -15 },
        tag: 'rash_arrest_choice',
        feedback: {
          title: 'MẮC BẪY KHIÊU KHÍCH — TẠO CỚ CHO QUÂN TƯỞNG CAN THIỆP',
          quote: '“Biết mình, biết người. Không để đối phương khiêu khích đẩy ta vào tình thế bất lợi về chiến lược!”',
          detail: 'Tướng Tiêu Sái của Tưởng chỉ chờ ta nổ súng bắt người để lấy cớ đưa quân thiết quân luật và lật đổ chính quyền cách mạng non trẻ.',
          type: 'alarm',
        },
      },
      {
        id: '3d',
        code: 'D',
        icon: '🤝',
        text: 'Chấp nhận nhượng toàn bộ quyền kiểm soát các Bộ quan trọng cho các đảng phái đối lập để tránh xung đột.',
        subtext: 'Nhượng bộ quá trớn, đánh mất quyền lãnh đạo của Đảng và Việt Minh.',
        deltas: { docLap: -20, daoDuc: -15, viDan: -10 },
        tag: 'surrender_power_choice',
        feedback: {
          title: 'ĐÁNH MẤT NGUYÊN TẮC LÃNH ĐẠO CÁCH MẠNG',
          quote: '“Đoàn kết nhân nhượng phải có nguyên tắc: giữ vững độc lập chủ quyền và vai trò lãnh đạo cách mạng.”',
          detail: 'Nhượng bộ vô nguyên tắc quyền kiểm soát các vị trí cốt cán sẽ làm lung lay cơ đồ mà hàng triệu đồng bào vừa hy sinh giành lấy.',
          type: 'warning',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 3: Tổng tuyển cử & Xây dựng chế độ mới (1946)',
      content: 'Cuộc Tổng tuyển cử ngày 6/1/1946 là mốc son chói lọi trong lịch sử dân chủ Việt Nam. Quốc hội khóa I đã thông qua danh sách Chính phủ liên hiệp kháng chiến do Chủ tịch Hồ Chí Minh đứng đầu, và kỳ họp thứ hai (11/1946) đã thông qua bản Hiến pháp 1946 — bản Hiến pháp tiến bộ, khẳng định quyền làm chủ thực sự của nhân dân.',
    },
  },

  /* =========================================================================
     LEVEL 4: SÁCH LƯỢC "HÒA ĐỂ TIẾN" (3/1946)
     ========================================================================= */
  {
    id: 'level-4',
    levelNum: 4,
    levelTag: 'CHẶNG 4 — THÁNG 3/1946: HIỆP ĐỊNH SƠ BỘ',
    title: '“Hòa hay Đánh: Sách lược Dĩ bất biến, ứng vạn biến”',
    situationTime: '📍 HÀ NỘI — NGÀY 6/3/1946',
    situationHeadline: 'Pháp và Tưởng ký Hiệp ước Trùng Khánh bắt tay nhau: Ta đứng trước nguy cơ đối đầu hai đạo quân thiện chiến.',
    situationDesc: 'Ngày 28/2/1946, Pháp thỏa hiệp nhượng cho Tưởng các quyền lợi ở Trung Hoa để đưa quân ra Bắc thay thế quân Tưởng. Đạo quân viễn chinh Pháp đã áp sát vùng biển Hải Phòng. Trong hàng ngũ cán bộ và quần chúng, có nhiều người sục sôi phản đối việc thương lượng với Pháp, coi đó là "thỏa hiệp đầu hàng".',
    npc: {
      id: 'nam',
      quote: '“Nhiều anh em tự vệ giận dữ đòi nổ súng đánh Pháp ngay tại bến cảng Hải Phòng, thề không để quân viễn chinh Pháp đặt chân lên đất Hà Nội một bước nào!”',
    },
    knowledgeKey: 'node_hoa_de_tien',
    options: [
      {
        id: '4a',
        code: 'A',
        icon: '🕊️',
        text: 'Ký Hiệp định Sơ bộ 6/3/1946: Công nhận Việt Nam là quốc gia tự do; chấp nhận 15.000 quân Pháp vào thay 20 vạn quân Tưởng (và phải rút sau 5 năm); giải thích rõ cho quốc dân hiểu sách lược "Hòa để tiến".',
        subtext: 'Lợi dụng mâu thuẫn đối phương, đuổi bớt kẻ thù nguy hiểm khỏi đất nước.',
        deltas: { hocLam: +20, docLap: +15, doanKet: +10 },
        tag: 'peace_to_advance_choice',
        feedback: {
          title: '🕊️ TUYỆT KỸ NGOẠI GIAO — “DĨ BẤT BIẾN, ỨNG VẠN BIẾN”',
          quote: '“Hòa với Pháp là để đuổi mau 20 vạn quân Tưởng và lũ tay sai ra khỏi bờ cõi, tránh thế một mình chống nhiều kẻ thù.”',
          detail: 'Chủ tịch Hồ Chí Minh giải thích trước quốc dân: “Tôi, Hồ Chí Minh, suốt đời cùng đồng bào chiến đấu cho độc lập của Tổ quốc. Tôi thà chết chứ không bao giờ bán nước!”. Hiệp định Sơ bộ 6/3 đã giúp ta đuổi 20 vạn quân Tưởng về nước mà không tốn một viên đạn, tranh thủ thời gian hòa hoãn chuẩn bị kháng chiến lâu dài.',
          type: 'positive',
        },
      },
      {
        id: '4b',
        code: 'B',
        icon: '💥',
        text: 'Phát động toàn diện chiến tranh đánh Pháp ngay khi hạm đội Pháp vừa thả neo tại cảng Hải Phòng.',
        subtext: 'Hành động cảm tính, đẩy cả nước vào vòng chiến sự giữa 2 đạo quân thù.',
        deltas: { docLap: +5, hocLam: -20, viDan: -15 },
        tag: 'fight_immediately_choice',
        feedback: {
          title: 'ĐÁNH SỚM KHI CHƯA CHUẨN BỊ — NGUY CƠ TAN VỠ',
          quote: '“Quyết định chiến tranh đòi hỏi cái đầu lạnh của người chiến lược, không thể dựa vào cơn bốc đồng!”',
          detail: 'Nếu nổ súng ngay lúc này, ta sẽ bị kẹp giữa 20 vạn quân Tưởng ở hậu phương và đại quân Pháp từ biển tiến vào. Lực lượng của ta chưa kịp sơ tán, vũ khí thiếu thốn, hậu quả sẽ cực kỳ nặng nề.',
          type: 'alarm',
        },
      },
      {
        id: '4c',
        code: 'C',
        icon: '📜',
        text: 'Cầu xin quân Tưởng tiếp tục ở lại miền Bắc vô thời hạn để che chở cho ta trước áp lực của Pháp.',
        subtext: 'Nuôi ong tay áo, giữ lại đạo quân phản động cướp bóc trong lòng đất nước.',
        deltas: { docLap: -20, viDan: -20, daoDuc: -15 },
        tag: 'rely_on_tuong_choice',
        feedback: {
          title: 'GIỮ GIẶC TRONG NHÀ — THẢM HỌA DÂN TỘC',
          quote: '“Quân Tưởng đi đến đâu là cướp bóc, lạm phát và dung túng phản động đến đó. Đuổi Tưởng là mục tiêu sống còn!”',
          detail: 'Quân Tưởng chỉ muốn biến miền Bắc thành bàn đạp phục vụ quyền lợi của chúng. Giữ chúng lại đồng nghĩa với tự sát chính trị.',
          type: 'warning',
        },
      },
      {
        id: '4d',
        code: 'D',
        icon: '📝',
        text: 'Chấp nhận ký mọi điều khoản do Pháp áp đặt mà không đòi hỏi thời hạn quân Pháp phải rút lui.',
        subtext: 'Đầu hàng nhượng bộ vô điều kiện, đánh mất tương lai độc lập.',
        deltas: { docLap: -25, daoDuc: -15, doanKet: -15 },
        tag: 'surrender_choice',
        feedback: {
          title: 'NHƯỢNG BỘ VÔ NGUYÊN TẮC — ĐÁNH MẤT CHỦ QUYỀN',
          quote: '“Nhân nhượng có nguyên tắc: Nguyên tắc tối cao là Độc lập tự do!”',
          detail: 'Hòa hoãn phải có điều kiện rõ ràng: Pháp phải công nhận Việt Nam là một quốc gia tự do và quân Pháp phải rút lui hoàn toàn theo thời hạn cụ thể.',
          type: 'alarm',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 4: Sách lược ngoại giao "Hòa để tiến" (1946)',
      content: 'Chủ trương “Hòa để tiến” (ký Hiệp định Sơ bộ 6/3 và Tạm ước 14/9/1946) thể hiện thiên tài lãnh đạo của Chủ tịch Hồ Chí Minh và Trung ương Đảng. Ta đã phân hóa triệt để kẻ thù, loại trừ được nguy cơ từ 20 vạn quân Tưởng, tranh thủ được 9 tháng hòa bình quý báu để xây dựng lực lượng vũ trang, củng cố hậu phương sẵn sàng cho cuộc kháng chiến toàn quốc không thể tránh khỏi.',
    },
  },

  /* =========================================================================
     LEVEL 5: LỜI KÊU GỌI TOÀN QUỐC KHÁNG CHIẾN (12/1946)
     ========================================================================= */
  {
    id: 'level-5',
    levelNum: 5,
    levelTag: 'CHẶNG 5 — THÁNG 12/1946: TOÀN QUỐC KHÁNG CHIẾN',
    title: '“Chúng ta muốn hòa bình, chúng ta phải nhân nhượng... Nhưng dã tâm giặc đã đến tột cùng!”',
    situationTime: '📍 LÀNG VẠN PHÚC, HÀ ĐÔNG — ĐÊM 19/12/1946',
    situationHeadline: 'Thực dân Pháp gửi tối hậu thư đòi tước vũ khí tự vệ Hà Nội trong 24 giờ: Hòa hay Quyết tử?',
    situationDesc: 'Thực dân Pháp liên tiếp gây hấn: bắn phá Hải Phòng, Lạng Sơn, tàn sát đồng bào ở phố Hàng Bún, Yên Ninh (Hà Nội). Ngày 18/12/1946, tướng Pháp gửi tối hậu thư đòi ta giải tán tự vệ, trao quyền kiểm soát Thủ đô cho quân đội Pháp. Khả năng hòa hoãn đã hoàn toàn cạn kiệt.',
    npc: {
      id: 'le',
      quote: '“Thưa đồng chí! Thời hạn 24 giờ của tối hậu thư sắp hết. Quân ta đã sẵn sàng tại các pháo đài Láng, Xuân Tảo, các chiến lũy đường phố Hà Nội đã dựng xong!”',
    },
    knowledgeKey: 'node_toan_quoc_khang_chien',
    options: [
      {
        id: '5a',
        code: 'A',
        icon: '🚩',
        text: 'Hội nghị Trung ương tại Vạn Phúc quyết định phát động Toàn quốc kháng chiến đêm 19/12/1946: Ra Lời kêu gọi thiêng liêng, quân dân Hà Nội giam chân địch 60 ngày đêm để cơ quan đầu não rút lên An toàn khu.',
        subtext: '“Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!”',
        deltas: { docLap: +20, doanKet: +15, daoDuc: +15, hocLam: +10 },
        tag: 'national_resistance_choice',
        feedback: {
          title: '🚩 GIỜ PHÚT QUYẾT TỬ ĐỂ TỔ QUỐC QUYẾT SINH',
          quote: '“Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!”',
          detail: '20 giờ ngày 19/12/1946, pháo đài Láng nổ súng, toàn quốc bước vào cuộc kháng chiến trường kỳ. Chiến sĩ Trung đoàn Thủ đô anh dũng ghìm chân quân Pháp 60 ngày đêm giữa lòng Hà Nội, bảo vệ an toàn cho Trung ương Đảng, Chính phủ và hàng vạn tấn máy móc, tài liệu rút lên chiến khu an toàn.',
          type: 'positive',
        },
      },
      {
        id: '5b',
        code: 'B',
        icon: '🏳️',
        text: 'Chấp nhận nộp vũ khí của lực lượng tự vệ, tiếp tục gửi công văn xin tướng Pháp đàm phán kéo dài hòa bình.',
        subtext: 'Ảo tưởng hòa bình khi kẻ thù đã đặt gươm lên cổ dân tộc.',
        deltas: { docLap: -30, daoDuc: -20, doanKet: -20 },
        tag: 'surrender_ultimatum_choice',
        feedback: {
          title: 'ĐẦU HÀNG NỘP VŨ KHÍ — RƠI VÀO BẪY DIỆT VONG',
          quote: '“Chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới, vì chúng quyết tâm cướp nước ta lần nữa!”',
          detail: 'Khi đối phương đã ra tối hậu thư tước vũ khí, nhân nhượng lúc này không còn là sách lược mà là sự đầu hàng nô lệ. Nếu giao nộp vũ khí, toàn bộ lực lượng cách mạng sẽ bị thảm sát trong chớp mắt.',
          type: 'alarm',
        },
      },
      {
        id: '5c',
        code: 'C',
        icon: '🏃',
        text: 'Ra lệnh rút lui toàn bộ lực lượng ngay trong đêm mà không tổ chức đánh giam chân tiêu hao địch ở Hà Nội.',
        subtext: 'Bỏ ngỏ thủ đô, tạo điều kiện cho cơ giới Pháp truy kích tiêu diệt lực lượng rút lui.',
        deltas: { docLap: -10, hocLam: -15, doanKet: -10 },
        tag: 'panic_retreat_choice',
        feedback: {
          title: 'RÚT LUI HOẢNG LOẠN — NGUY CƠ BỊ TRUY KÍCH',
          quote: '“Rút lui chiến lược phải được yểm trợ bằng những đòn đánh kìm chân quyết liệt và có tổ chức chặt chẽ.”',
          detail: 'Nếu không có trận đánh cầm chân 60 ngày đêm của quân dân Hà Nội, thiết giáp và cơ giới Pháp sẽ tràn ra các cửa ngõ, đuổi kịp và tiêu diệt cơ quan đầu não kháng chiến trên đường rút lui.',
          type: 'warning',
        },
      },
      {
        id: '5d',
        code: 'D',
        icon: '💥',
        text: 'Tập trung toàn bộ các trung đoàn chủ lực tử thủ ở trung tâm Hà Nội đến viên đạn cuối cùng, quyết không rút lui.',
        subtext: 'Chiến thuật cố thủ cứng nhắc, biến chủ lực thành mồi ngon cho hỏa lực đại bác Pháp.',
        deltas: { hocLam: -20, viDan: -15, docLap: -5 },
        tag: 'rigid_defense_choice',
        feedback: {
          title: 'CỐ THỦ CỨNG NHẮC — NGUY CƠ TIÊU HAO CHỦ LỰC',
          quote: '“Kháng chiến của ta là trường kỳ. Bảo tồn lực lượng là nguyên tắc sống còn, không ham trận địa cố định.”',
          detail: 'Hỏa lực và không quân Pháp áp đảo hoàn toàn trong chiến tranh đô thị. Tử thủ cứng nhắc sẽ khiến ta mất trắng quân chủ lực. Phương châm đúng là đánh giam chân rồi chủ động rút lui bảo toàn sinh lực.',
          type: 'warning',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 5: Toàn quốc kháng chiến & Chiến dịch Việt Bắc (1946 - 1947)',
      content: 'Lời kêu gọi Toàn quốc kháng chiến (19/12/1946) cùng tác phẩm “Kháng chiến nhất định thắng lợi” của Tổng Bí thư Trường Chinh đã hoàn chỉnh đường lối kháng chiến của Đảng: Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế. Cuộc chiến đấu giam chân địch ở các đô thị miền Bắc đã làm thất bại âm mưu đánh úp cơ quan đầu não của thực dân Pháp.',
    },
  },

  /* =========================================================================
     LEVEL 6: BẺ GÃY GỌNG KÌM VIỆT BẮC (THU - ĐÔNG 1947)
     ========================================================================= */
  {
    id: 'level-6',
    levelNum: 6,
    levelTag: 'CHẶNG 6 — THU ĐÔNG 1947: CHIẾN DỊCH VIỆT BẮC',
    title: '“Đập tan cuộc hành quân Léa — Phá sản chiến lược đánh nhanh thắng nhanh”',
    situationTime: '📍 AN TOÀN KHU (ATK) VIỆT BẮC — THÁNG 10/1947',
    situationHeadline: 'Pháp huy động hơn 12.000 quân tinh nhuệ, nhảy dù xuống Bắc Kạn, hai gọng kìm sông Lô và đường số 4 khép chặt.',
    situationDesc: 'Tướng Valluy của Pháp mở cuộc hành quân Léa ồ ạt tấn công lên chiến khu Việt Bắc nhằm “cất vó” cơ quan đầu não kháng chiến và tiêu diệt bộ đội chủ lực của ta trong một đòn chớp nhoáng. Gọng kìm thủy - bộ của địch đang siết chặt, tình hình ATK hết sức hiểm nghèo.',
    npc: {
      id: 'le',
      quote: '“Thưa đồng chí! Địch nhảy dù chiếm thị xã Bắc Kạn, một cánh quân thủy ngược sông Lô, cánh quân bộ men theo đường số 4. Ta nên bố trí lực lượng đánh vào đâu để bẻ gãy gọng kìm này?”',
    },
    knowledgeKey: 'node_viet_bac_1947',
    options: [
      {
        id: '6a',
        code: 'A',
        icon: '🛡️',
        text: 'Ban hành Chỉ thị "Phá tan cuộc tấn công mùa đông của giặc Pháp": Tận dụng địa hình hiểm trở, đánh phục kích bẻ gãy hai gọng kìm địch trên sông Lô (Đoan Hùng) và đường số 4 (Bông Lau); bảo vệ tuyệt đối an toàn cơ quan đầu não.',
        subtext: 'Đánh trúng điểm yếu hậu cần và cơ động của địch trên các trục giao thông.',
        deltas: { docLap: +20, hocLam: +15, viDan: +10 },
        tag: 'defeat_winter_attack_choice',
        feedback: {
          title: '🛡️ BẺ GÃY GỌNG KÌM — VIỆT BẮC MỒ CHÔN GIẶC PHÁP',
          quote: '“Địch cậy xe tăng, tàu chiến; ta có lòng dân và địa hình sông núi hiểm trở!”',
          detail: 'Trận phục kích bắn chìm tàu chiến Pháp ở Đoan Hùng trên sông Lô và trận phục kích đoàn xe địch ở đèo Bông Lau (đường số 4) đã chặt đứt hai gọng kìm của tướng Valluy. Quân địch hoảng loạn rút lui, hơn 3.000 lính Pháp bị tiêu diệt, cơ quan đầu não kháng chiến an toàn tuyệt đối. Chiến lược “đánh nhanh thắng nhanh” của Pháp hoàn toàn phá sản!',
          type: 'positive',
        },
      },
      {
        id: '6b',
        code: 'B',
        icon: '⚔️',
        text: 'Tập trung toàn bộ lực lượng chủ lực đánh trực diện vào cụm quân dù Pháp đóng giữ ở thị xã Bắc Kạn.',
        subtext: 'Đánh công kiên trực diện nơi địch tập trung hỏa lực và công sự mạnh nhất.',
        deltas: { hocLam: -15, viDan: -15, docLap: -5 },
        tag: 'frontal_assault_choice',
        feedback: {
          title: 'ĐÁNH CÔNG KIÊN KHI CHƯA ĐỦ LỰC — TỔN THẤT NẶNG NỀ',
          quote: '“Tránh chỗ mạnh, đánh chỗ yếu; không ham công đồn kiên cố khi hỏa lực ta chưa có trọng pháo.”',
          detail: 'Lính dù Pháp ở Bắc Kạn có công sự và yểm trợ không quân rất mạnh. Đánh trực diện vào lúc này sẽ khiến bộ đội thương vong lớn mà không bẻ gãy được gọng kìm tiếp viện từ hai cánh.',
          type: 'warning',
        },
      },
      {
        id: '6c',
        code: 'C',
        icon: '🌲',
        text: 'Phân tán toàn bộ bộ đội thành từng tổ nhỏ rút sâu vào rừng già, bị động phòng ngự chờ địch tự rút.',
        subtext: 'Thụ động tránh né, để mặc quân Pháp tự do càn quét cướp phá căn cứ.',
        deltas: { hocLam: -10, doanKet: -10, docLap: -10 },
        tag: 'passive_retreat_choice',
        feedback: {
          title: 'BỊ ĐỘNG TRÁNH NÉ — ĐÁNH MẤT THỜI CƠ TIÊU DIỆT ĐỊCH',
          quote: '“Phòng ngự cách mạng là phòng ngự tích cực, phòng ngự bằng những đòn tiến công tiêu hao sắc bén!”',
          detail: 'Nếu chỉ trốn tránh không đánh tiêu hao, địch sẽ tự do lùng sục, phát hiện kho tàng, triệt phá cơ sở sản xuất và gây tổn hại lớn cho nhân dân các dân tộc Việt Bắc.',
          type: 'neutral',
        },
      },
      {
        id: '6d',
        code: 'D',
        icon: '🏳️',
        text: 'Đề nghị Pháp đình chiến và chấp nhận lập chính phủ tự trị Việt Bắc dưới sự bảo hộ của quân Pháp.',
        subtext: 'Tư tưởng đầu hàng hữu khuynh, phản bội lời thề kháng chiến.',
        deltas: { docLap: -30, daoDuc: -25, doanKet: -25 },
        tag: 'surrender_vietbac_choice',
        feedback: {
          title: 'ĐẦU HÀNG PHẢN BỘI — VẾT NHƠ LỊCH SỬ',
          quote: '“Chiến khu Việt Bắc là cái nôi cách mạng, là niềm tin của cả nước. Đầu hàng là tự chôn vùi danh dự dân tộc!”',
          detail: 'Lựa chọn phản bội lại sự hy sinh của hàng triệu đồng bào và chiến sĩ cả nước đang hướng về thủ đô kháng chiến.',
          type: 'alarm',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 5: Toàn quốc kháng chiến & Chiến dịch Việt Bắc (1946 - 1947)',
      content: 'Chiến dịch Việt Bắc Thu - Đông 1947 là chiến dịch phản công quy mô lớn đầu tiên của ta, có ý nghĩa chiến lược xoay chuyển cục diện chiến tranh: Đập tan hoàn toàn chiến lược “đánh nhanh thắng nhanh”, buộc thực dân Pháp phải chuyển sang chiến lược “đánh lâu dài”, thực hiện chính sách “dùng người Việt đánh người Việt, lấy chiến tranh nuôi chiến tranh”. Căn cứ địa Việt Bắc trở thành pháo đài bất khả xâm phạm.',
    },
  },

  /* =========================================================================
     LEVEL 7: CHIẾN DỊCH BIÊN GIỚI THU - ĐÔNG 1950
     ========================================================================= */
  {
    id: 'level-7',
    levelNum: 7,
    levelTag: 'CHẶNG 7 — NĂM 1950: CHIẾN DỊCH BIÊN GIỚI',
    title: '“Đột phá khẩu Đông Khê — Khai thông thế bế tắc chiến lược”',
    situationTime: '📍 MẶT TRẬN BIÊN GIỚI CAO - BẮC - LẠNG — THÁNG 9/1950',
    situationHeadline: 'Pháp thiết lập phòng tuyến Bo-ke khóa chặt biên giới Việt - Trung: Ta chọn điểm nào để mở màn chiến dịch?',
    situationDesc: 'Năm 1950, Cách mạng Trung Quốc thắng lợi, Liên Xô và các nước XHCN công nhận nước ta. Thực dân Pháp lập kế hoạch Rơ-ve, củng cố hệ thống cứ điểm Bo-ke hòng bóp nghẹt chiến khu Việt Bắc. Trung ương Đảng quyết định mở Chiến dịch Biên giới — chiến dịch tiến công quy mô lớn đầu tiên của ta. Nhưng nên đánh vào cứ điểm nào trước?',
    npc: {
      id: 'le',
      quote: '“Thưa đồng chí! Cao Bằng là thị xã đầu não nhưng công sự rất kiên cố; Đông Khê là cứ điểm trung gian bảo vệ sườn; Thất Khê là căn cứ hỗ trợ. Đại tướng Võ Nguyên Giáp và Bộ Chỉ huy đang cân nhắc điểm đột phá khẩu mở màn!”',
    },
    knowledgeKey: 'node_bien_gioi_1950',
    options: [
      {
        id: '7a',
        code: 'A',
        icon: '🎯',
        text: 'Chọn Đông Khê làm điểm đột phá mở màn: Cứ điểm yếu hơn, cô lập Cao Bằng; buộc địch từ Thất Khê lên ứng cứu và Cao Bằng rút chạy, tạo thời cơ đánh vận động tiêu diệt hai binh đoàn Le Page và Charton ngoài công sự.',
        subtext: 'Nghệ thuật quân sự đánh điểm diệt viện xuất sắc của Đảng và quân đội.',
        deltas: { docLap: +20, hocLam: +20, viDan: +10 },
        tag: 'dong_khe_strike_choice',
        feedback: {
          title: '🎯 NGHỆ THUẬT QUÂN SỰ ĐỈNH CAO — ĐÁNH ĐIỂM DIỆT VIỆN',
          quote: '“Đánh vào Đông Khê là đánh vào yết hầu đối phương, khiến Cao Bằng trở thành hòn đảo cô lập!”',
          detail: 'Bác Hồ trực tiếp lên đài quan sát Đông Khê theo dõi mặt trận. Quyết định mở màn bằng trận Đông Khê là chuẩn xác tuyệt đối. Khi Đông Khê thất thủ, cánh quân Charton rút từ Cao Bằng và cánh quân Le Page từ Thất Khê lên bị ta bao vây tiêu diệt gọn giữa núi rừng Biên giới. Hơn 750km biên giới Việt - Trung được khai thông, mở toang cánh cửa nối liền kháng chiến với hậu phương quốc tế rộng lớn!',
          type: 'positive',
        },
      },
      {
        id: '7b',
        code: 'B',
        icon: '🏰',
        text: 'Tập trung toàn lực đánh thẳng công kiên vào thị xã Cao Bằng để lập công đầu vang dội.',
        subtext: 'Đánh vào nơi địch phòng thủ kiên cố nhất, nguy cơ sa lầy trận địa.',
        deltas: { hocLam: -15, viDan: -20, docLap: -5 },
        tag: 'assault_cao_bang_choice',
        feedback: {
          title: 'SA LẦY CÔNG KIÊN — ĐÁNH MẤT THẾ BẤT NGỜ',
          quote: '“Thị xã Cao Bằng có hệ thống hầm ngầm bê tông cốt thép dày đặc. Húc đầu vào đá sẽ tiêu hao sinh lực quý báu!”',
          detail: 'Nếu đánh thẳng vào Cao Bằng, ta sẽ vấp phải hỏa lực pháo binh và công sự kiên cố, thương vong sẽ rất lớn mà khó dứt điểm nhanh, để địch có thời gian dồn quân phản kích.',
          type: 'warning',
        },
      },
      {
        id: '7c',
        code: 'C',
        icon: '🎭',
        text: 'Chuyển toàn bộ lực lượng về đồng bằng Bắc Bộ đánh nghi binh, bỏ chiến dịch Biên giới vì ngại đường xa vận chuyển hậu cần gian khổ.',
        subtext: 'Bỏ lỡ thời cơ chiến lược mở toang biên giới quốc tế.',
        deltas: { hocLam: -20, docLap: -15, doanKet: -10 },
        tag: 'abandon_border_campaign_choice',
        feedback: {
          title: 'BỎ LỠ THỜI CƠ CHIẾN LƯỢC — TỰ KHÓA MÌNH TRONG VÒNG VÂY',
          quote: '“Thời cơ cách mạng không đến hai lần. Không mở được biên giới thì kháng chiến sẽ mãi bị cô lập!”',
          detail: 'Không mở được biên giới, ta sẽ tiếp tục bị bao vây cấm vận, vũ khí hạng nặng và viện trợ quốc tế từ các nước XHCN không thể vào được chiến khu để nâng tầm quân đội chính quy.',
          type: 'alarm',
        },
      },
      {
        id: '7d',
        code: 'D',
        icon: '🛑',
        text: 'Chỉ tổ chức bao vây cô lập kinh tế các đồn bốt mà không nổ súng tiến công nhằm giữ an toàn lực lượng.',
        subtext: 'Chiến thuật tiêu cực, kéo dài thế giằng co không lối thoát.',
        deltas: { hocLam: -10, docLap: -5, viDan: -10 },
        tag: 'passive_blockade_choice',
        feedback: {
          title: 'TIÊU CỰC PHÒNG NGỰ — ĐỊCH SẼ KỊP TIẾP TẾ ĐƯỜNG KHÔNG',
          quote: '“Không đánh những trận tiêu diệt lớn thì không thể giành quyền chủ động chiến lược!”',
          detail: 'Pháp có ưu thế không quân vượt trội. Nếu chỉ vây hãm thụ động, địch sẽ dùng máy bay thả dù tiếp tế, biến chiến trường thành cuộc đấu tiêu hao dai dẳng bất lợi cho ta.',
          type: 'neutral',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 6: Chiến dịch Biên giới 1950 & Đại hội II của Đảng (1951)',
      content: 'Chiến dịch Biên giới Thu - Đông 1950 là bước ngoặt quyết định của cuộc kháng chiến chống thực dân Pháp. Ta đã tiêu diệt và bắt sống gần 10 tập đoàn cứ điểm địch, loại khỏi vòng chiến đấu 8.300 tên, giải phóng dải biên giới dài 750km với 35 vạn dân. Chiến thắng này đánh dấu bước phát triển nhảy vọt về nghệ thuật quân sự: Ta giành được thế chủ động chiến lược trên chiến trường chính Bắc Bộ, đẩy quân Pháp vào thế bị động phòng ngự.',
    },
  },

  /* =========================================================================
     LEVEL 8: ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ II (2/1951)
     ========================================================================= */
  {
    id: 'level-8',
    levelNum: 8,
    levelTag: 'CHẶNG 8 — THÁNG 2/1951: ĐẠI HỘI LẦN THỨ II CỦA ĐẢNG',
    title: '“Đưa Đảng ra hoạt động công khai — Hoàn thiện đường lối kháng chiến kiến quốc”',
    situationTime: '📍 XÃ VINH QUANG (CHIÊM HÓA, TUYÊN QUANG) — THÁNG 2/1951',
    situationHeadline: 'Cuộc kháng chiến chuyển sang giai đoạn phát triển mới: Đảng cần quyết sách lịch sử gì để lãnh đạo đưa kháng chiến đến thắng lợi hoàn toàn?',
    situationDesc: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng họp tại chiến khu Việt Bắc — Đại hội đầu tiên được tổ chức trong nước kể từ ngày thành lập Đảng. Đứng trước yêu cầu củng cố khối đại đoàn kết toàn dân, liên minh chiến đấu Việt - Miên - Lào và tăng cường vai trò lãnh đạo trực tiếp của Đảng đối với xã hội, Đại hội cần đưa ra những quyết sách trọng đại nào?',
    npc: {
      id: 'huynh',
      quote: '“Thưa đồng chí! Toàn thể quốc dân, chiến sĩ ngoài mặt trận và bè bạn quốc tế đang trông đợi ngọn cờ lãnh đạo công khai của Đảng để thống nhất ý chí và hành động đưa kháng chiến đến ngày toàn thắng!”',
    },
    knowledgeKey: 'node_dai_hoi_2_1951',
    options: [
      {
        id: '8a',
        code: 'A',
        icon: '🌟',
        text: 'Quyết định đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam; thông qua Báo cáo Chính trị và Báo cáo Bàn về cách mạng Việt Nam (Chính cương của Đảng), hoàn thiện đường lối cách mạng dân tộc dân chủ nhân dân tiến lên chủ nghĩa xã hội.',
        subtext: 'Đại hội kháng chiến kiến quốc — Ngọn đuốc soi đường cho chiến thắng Điện Biên Phủ.',
        deltas: { docLap: +20, doanKet: +20, daoDuc: +15, viDan: +15, hocLam: +20 },
        tag: 'congress_ii_choice',
        feedback: {
          title: '🌟 ĐẠI HỘI KHÁNG CHIẾN KIẾN QUỐC LỊCH SỬ',
          quote: '“Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, đồng thời là Đảng của toàn thể dân tộc Việt Nam.”',
          detail: 'Đại hội II (2/1951) là mốc son lịch sử chói lọi. Báo cáo Chính trị của Chủ tịch Hồ Chí Minh tổng kết 21 năm đấu tranh oanh liệt. Chính cương Đảng Lao động Việt Nam do Tổng Bí thư Trường Chinh trình bày đã vạch rõ nhiệm vụ đánh đổ thực dân Pháp, bọn can thiệp Mỹ, giành độc lập hoàn toàn, xóa bỏ tàn tích phong kiến, phát triển chế độ dân chủ nhân dân tạo tiền đề tiến lên CNXH. Kháng chiến có cương lĩnh vững chắc, tiến băng băng đến chiến thắng Điện Biên Phủ 1954!',
          type: 'positive',
        },
      },
      {
        id: '8b',
        code: 'B',
        icon: '🤐',
        text: 'Tiếp tục duy trì quy chế hoạt động bí mật như giai đoạn 1945, không công khai danh xưng Đảng để tránh gây chú ý của phương Tây.',
        subtext: 'Tư tưởng dè dặt, không đáp ứng kịp sự trưởng thành nhảy vọt của cách mạng.',
        deltas: { hocLam: -15, doanKet: -10, docLap: -10 },
        tag: 'keep_secret_choice',
        feedback: {
          title: 'DÈ DẶT THỤ ĐỘNG — KHÔNG ĐÁP ỨNG ĐÒI HỎI THỜI ĐẠI',
          quote: '“Một Đảng lãnh đạo cả cuộc kháng chiến trường kỳ của hàng chục triệu nhân dân không thể mãi ẩn mình trong bí mật!”',
          detail: 'Cách mạng đã bước sang giai đoạn tổng phản công, cần tuyên ngôn chính trị công khai để hiệu triệu quốc dân, củng cố niềm tin trong nhân dân và thiết lập quan hệ ngoại giao chính thức với các đảng anh em trên thế giới.',
          type: 'warning',
        },
      },
      {
        id: '8c',
        code: 'C',
        icon: '⚡',
        text: 'Chủ trương tiến thẳng lên xây dựng chủ nghĩa xã hội ngay lập tức, tiến hành tịch thu toàn bộ ruộng đất không phân biệt trong vùng tự do.',
        subtext: 'Tả khuynh giáo điều, làm xáo trộn hậu phương kháng chiến.',
        deltas: { doanKet: -25, viDan: -20, daoDuc: -15, hocLam: -20 },
        tag: 'leftist_dogmatic_choice',
        feedback: {
          title: 'TẢ KHUYNH GIÁO ĐIỀU — NGUY CƠ PHÁ VỠ ĐẠI ĐOÀN KẾT',
          quote: '“Chính trị cách mạng phải phù hợp với từng giai đoạn lịch sử. Kháng chiến chưa xong mà vội vàng cải tạo xã hội chủ nghĩa triệt để sẽ làm mất đồng minh yêu nước!”',
          detail: 'Lúc này nhiệm vụ hàng đầu vẫn là phản đế và giải phóng dân tộc. Nếu đốt cháy giai đoạn sẽ đẩy các nhân sĩ, thân sĩ yêu nước và địa chủ tiến bộ ra xa cách mạng, làm suy yếu nghiêm trọng khối đại đoàn kết kháng chiến.',
          type: 'alarm',
        },
      },
      {
        id: '8d',
        code: 'D',
        icon: '🏛️',
        text: 'Giải thể Mặt trận Liên Việt để sáp nhập toàn bộ tổ chức quần chúng vào bộ máy nhà nước quản lý tập trung.',
        subtext: 'Quan liêu hóa các đoàn thể nhân dân, bóp nghẹt tính chủ động của quần chúng.',
        deltas: { doanKet: -20, viDan: -15, docLap: -10 },
        tag: 'bureaucratic_merger_choice',
        feedback: {
          title: 'QUAN LIÊU HÓA — ĐÁNH MẤT CỘNG ĐỒNG QUẦN CHÚNG',
          quote: '“Mặt trận dân tộc thống nhất là một trong những trụ cột làm nên thắng lợi của cách mạng Việt Nam!”',
          detail: 'Tại Đại hội II, Đảng chủ trương thống nhất Việt Minh và Hội Liên Việt thành Mặt trận Liên Việt, chứ không hành chính hóa. Sức mạnh của Đảng bắt nguồn từ sự gắn bó máu thịt với nhân dân thông qua Mặt trận.',
          type: 'warning',
        },
      },
    ],
    decode: {
      tag: 'GIÁO TRÌNH LỊCH SỬ ĐẢNG',
      chapter: 'Phần 6: Chiến dịch Biên giới 1950 & Đại hội II của Đảng (1951)',
      content: 'Đại hội đại biểu toàn quốc lần thứ II (tháng 2/1951) là mốc đánh dấu bước phát triển mới về tư tưởng, đường lối chính trị của Đảng. Đảng ta được mang tên Đảng Lao động Việt Nam, ra hoạt động công khai. Đại hội đã thông qua Chính cương của Đảng — ngọn cờ dẫn đường cho toàn dân, toàn quân đẩy mạnh cuộc kháng chiến toàn dân, toàn diện đi đến thắng lợi lẫy lừng Điện Biên Phủ “lừng lẫy năm châu, chấn động địa cầu” (1954).',
    },
  },
];

/**
 * HỆ THỐNG ĐÁNH GIÁ PROFILE LÃNH ĐẠO (1945 - 1951)
 */
export function evaluatePersonaProfile(stats, choiceHistory = []) {
  const { docLap, doanKet, daoDuc, viDan, hocLam } = stats;
  const avg = (docLap + doanKet + daoDuc + viDan + hocLam) / 5;

  const hasRashOrCompromise = choiceHistory.some(
    (c) => c.tag === 'rash_choice' || c.tag === 'compromise_choice' || c.tag === 'surrender_choice' || c.tag === 'surrender_ultimatum_choice'
  );
  const isStrategicMaster = !hasRashOrCompromise && avg >= 78 && docLap >= 75 && hocLam >= 75;

  if (isStrategicMaster) {
    return {
      id: 'ending_secret',
      title: '🌟 BẬC THẦY CHIẾN LƯỢC: BẢN LĨNH NGÀN CÂN TREO SỢI TÓC',
      badge: 'SECRET ENDING: CHIẾN LƯỢC GIA KIỆT XUẤT',
      color: '#ffd700',
      rankGrade: 'EX',
      quote: '“Dĩ bất biến, ứng vạn biến — Bạn thấu hiểu sâu sắc nghệ thuật lãnh đạo cách mạng: Giữ vững độc lập tự do làm cái bất biến, linh hoạt vạn biến để đưa non sông qua cơn bão táp!”',
      desc: 'Bạn đã xuất sắc vượt qua mọi cạm bẫy lịch sử: Từ phân hóa kẻ thù sau ngày Độc lập, giải quyết nạn đói nạn dốt, kiên định Tổng tuyển cử, sách lược ngoại giao Hòa để tiến tài tình, đến quyết định Toàn quốc kháng chiến và các chiến thắng vang dội tại Việt Bắc 1947, Biên giới 1950, hoàn thiện đường lối ở Đại hội II.',
      analysis: 'Hồ sơ năng lực của bạn đạt độ cân bằng tuyệt hảo giữa 5 trụ cột: Độc lập chủ quyền (🎯), Đại đoàn kết (🤝), Kỷ cương liêm chính (⚖️), Lòng dân dân sinh (👥) và Trí tuệ sách lược cách mạng (💡).',
    };
  }

  if (docLap >= 75 && hocLam >= 70) {
    return {
      id: 'ending_strategist',
      title: '🎯 NHÀ CHIẾN LƯỢC QUÂN SỰ & NGOẠI GIAO TÀI BA',
      badge: 'SÁCH LƯỢC TÀI TÌNH — THỜI CƠ CHÍN MUỒI',
      color: '#3b82f6',
      rankGrade: 'S+',
      quote: '“Biết mình, biết người, trăm trận không nguy. Bạn luôn đưa ra quyết sách đúng vào thời khắc bước ngoặt lịch sử.”',
      desc: 'Điểm sáng nổi bật của bạn là tư duy biện chứng sắc bén, khả năng chớp thời cơ và phân hóa kẻ thù xuất sắc trong những giai đoạn cam go nhất.',
      analysis: 'Chỉ số Độc lập – Chủ quyền và Sách lược – Trí tuệ của bạn rất cao. Hãy tiếp tục chú trọng hơn nữa đến công tác bồi dưỡng sức dân ở hậu phương.',
    };
  }

  if (doanKet >= 75 && viDan >= 70) {
    return {
      id: 'ending_peoples_leader',
      title: '🤝 NGỌN CỜ QUY TỤ ĐẠI ĐOÀN KẾT TOÀN DÂN',
      badge: 'LÒNG DÂN LÀ GỐC — ĐOÀN KẾT VÔ ĐỊCH',
      color: '#10b981',
      rankGrade: 'S',
      quote: '“Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công!”',
      desc: 'Bạn luôn đặt lợi ích của nhân dân lên trên hết, biết khơi dậy lòng yêu nước nồng nàn và quy tụ mọi nhân sĩ, trí thức, đồng bào cùng một lòng bảo vệ Tổ quốc.',
      analysis: 'Chỉ số Đại đoàn kết và Dân sinh – Vì dân của bạn dẫn đầu. Bạn chính là biểu tượng của tinh thần phục vụ nhân dân và gắn bó máu thịt với quần chúng.',
    };
  }

  if (daoDuc >= 80) {
    return {
      id: 'ending_integrity',
      title: '⚖️ TẤM GƯƠNG KỶ CƯƠNG & CHÍ CÔNG VÔ TƯ',
      badge: 'CẦN KIỆM LIÊM CHÍNH — BẢN LĨNH CÁCH MẠNG',
      color: '#f59e0b',
      rankGrade: 'S',
      quote: '“Một Đảng mà giấu giếm khuyết điểm của mình là một Đảng hỏng. Giữ vững liêm chính là giữ gìn sinh mệnh của chính quyền cách mạng.”',
      desc: 'Trước mọi khó khăn gian khổ hay cám dỗ, bạn luôn giữ vững nguyên tắc kỷ cương, chí công vô tư, bảo đảm sự trong sạch vững mạnh của bộ máy kháng chiến.',
      analysis: 'Chỉ số Kỷ cương – Liêm chính của bạn đạt mức xuất sắc. Sự chính trực của bạn tạo dựng niềm tin son sắt trong lòng nhân dân và chiến sĩ cả nước.',
    };
  }

  if (hasRashOrCompromise || docLap <= 35) {
    return {
      id: 'ending_unbalanced',
      title: '⚠️ NGƯỜI LÃNH ĐẠO DAO ĐỘNG TRONG GIÔNG BÃO',
      badge: 'CẦN RÈN LUYỆN BẢN LĨNH KIÊN ĐỊNH',
      color: '#ec4899',
      rankGrade: 'C+',
      quote: '“Trong bão táp cách mạng, một phút nóng vội manh động hay một bước nhân nhượng vô nguyên tắc đều có thể dẫn tới tổn thất khôn lường!”',
      desc: 'Bạn đã từng có những quyết định nóng vội đối đầu khi chưa đủ lực, hoặc có lúc dao động nhượng bộ quá mức trước sức ép của kẻ thù.',
      analysis: 'Hãy nghiên cứu sâu sắc lại phương châm: “Dĩ bất biến, ứng vạn biến” của Chủ tịch Hồ Chí Minh trong giai đoạn 1945 - 1951 để thấu hiểu nghệ thuật thỏa hiệp có nguyên tắc!',
    };
  }

  return {
    id: 'ending_growing',
    title: '🌿 NGƯỜI CHỈ HUY ĐANG TRƯỞNG THÀNH',
    badge: 'TIỀM NĂNG BỨT PHÁ CHIẾN LƯỢC',
    color: '#8b5cf6',
    rankGrade: 'A',
    quote: '“Bản lĩnh cách mạng được tôi luyện qua những thử thách gian truân nhất của lịch sử dân tộc.”',
    desc: 'Bạn đã có những quyết định sáng suốt ở nhiều thời khắc nhưng đôi khi còn thiếu sự quyết đoán hoặc chưa khai thác hết sức mạnh tổng hợp của toàn dân.',
    analysis: 'Điểm trung bình của bạn đạt mức khá tốt (' + Math.round(avg) + '/100). Hãy tiếp tục nghiên cứu lịch sử Đảng để hoàn thiện nghệ thuật chỉ đạo chiến lược.',
  };
}
