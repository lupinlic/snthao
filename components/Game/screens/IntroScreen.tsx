"use client";

import playTone from "../playTone";

export default function IntroScreen({ onStart, soundEnabled }: { onStart: () => void; soundEnabled: boolean }) {
  const phase = 2;

  return (
    <main className="intro-screen">
      <div className="intro-grid" />
      <div className="signal-orb" />
      <section className="intro-content">
        <p className="system-label">{phase > 0 ? "TÍN HIỆU ĐÃ TÌM THẤY // 19:10" : "HỆ THỐNG NGẮT KẾT NỐI..."}</p>
        <h1>Có một<br /><em>bí mật</em> rất nhỏ đang chờ.</h1>
        <p className={`intro-copy ${phase > 1 ? "visible" : ""}`}>MỘT NHIỆM VỤ ĐẶC BIỆT ĐÃ ĐƯỢC TÌM THẤY.<br /><span>Tìm phần quà sinh nhật.</span></p>
        <button className={`primary-button ${phase > 1 ? "visible" : ""}`} onClick={() => { playTone(soundEnabled, 520); onStart(); }}>
          <span>BẮT ĐẦU NHIỆM VỤ</span><b>↗</b>
        </button>
      </section>
      <p className="intro-footer">TRUYỀN TIN RIÊNG / 01</p>
    </main>
  );
}