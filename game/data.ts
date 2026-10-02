export const birthdayConfig = {
  name: "BẠN",
  wishes: [
    "Chúc bạn tuổi mới thật nhiều niềm vui.",
    "Chúc những điều tốt đẹp luôn tìm đến bạn.",
    "Và mong bạn có thật nhiều khoảnh khắc đáng nhớ.",
  ],
  gifts: [
    { id: "cake", emoji: "🎂", title: "Bánh sinh nhật", description: "Một chiếc bánh ngọt dành riêng cho bạn.", color: "#e98a91" },
    { id: "flowers", emoji: "💐", title: "Bó hoa tươi", description: "Một bó hoa rực rỡ dành tặng bạn.", color: "#74a88a" },
    { id: "outing", emoji: "🎟️", title: "Buổi hẹn vui", description: "Một buổi đi chơi thật đáng nhớ.", color: "#7397bf" },
    { id: "surprise", emoji: "🎁", title: "Quà bí mật", description: "Một điều bất ngờ đang chờ bạn.", color: "#d59a57" },
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
