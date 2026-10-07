export const birthdayConfig = {
  name: "BẠN",
  wishes: [
    "Chúc bạn tuổi mới thật nhiều niềm vui.",
    "Chúc những điều tốt đẹp luôn tìm đến bạn.",
    "Và mong bạn có thật nhiều khoảnh khắc đáng nhớ.",
  ],
  gifts: [
    { id: "cake", emoji: "🎂", title: "Chúc mừng sinh nhật!", description: "Chúc bạn tuổi mới luôn vui vẻ và ngập tràn tiếng cười.", color: "#e98a91" },
    { id: "flowers", emoji: "💐", title: "Luôn rạng rỡ nhé!", description: "Mong mỗi ngày của bạn đều tươi đẹp như những đóa hoa.", color: "#74a88a" },
    { id: "outing", emoji: "🎟️", title: "Tuổi mới rực rỡ!", description: "Chúc bạn có thêm thật nhiều trải nghiệm vui và đáng nhớ.", color: "#7397bf" },
    { id: "surprise", emoji: "🎁", title: "Vạn điều như ý!", description: "Chúc mọi ước mơ của bạn sớm trở thành hiện thực.", color: "#d59a57" },
  ],
  finalGift: {
    emoji: "🎁",
    title: "Món quà đặc biệt dành cho bạn",
    description: "Mong món quà này mang đến cho bạn thật nhiều niềm vui và những kỷ niệm thật đẹp.",
  },
};

export const levelMeta = [
  { number: 1, eyebrow: "MÀN 01", title: "Ai là triệu phú", accent: "violet" },
  { number: 2, eyebrow: "MÀN 02", title: "Đuổi hình bắt chữ", accent: "blue" },
  { number: 3, eyebrow: "MÀN 03", title: "Bí mật trong sương", accent: "rose" },
  { number: 4, eyebrow: "MÀN 04", title: "Lễ mừng sinh nhật", accent: "gold" },
] as const;
