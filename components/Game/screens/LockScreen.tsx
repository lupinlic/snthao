"use client";

import { useState } from "react";
import type { GameState } from "@/game/types";
import { SECRET_CODE } from "@/game/types";
import ProgressRail from "../ProgressRail";
import playTone from "../playTone";

export default function LockScreen({ state, onUnlock, onToggleSound }: { state: GameState; onUnlock: () => void; onToggleSound: () => void }) {
  const [input, setInput] = useState("");
  const [denied, setDenied] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const enter = (value: string) => {
    if (input.length < 4) {
      setInput((current) => current + value);
      setDenied(false);
      playTone(state.musicEnabled, 440);
    }
  };

  const submit = () => {
    if (input === SECRET_CODE) {
      playTone(state.musicEnabled, 780, 0.2);
      setUnlocked(true);
    } else {
      setDenied(true);
      setInput("");
      playTone(state.musicEnabled, 150);
    }
  };

  const handleUnlock = () => {
    setUnlocked(false);
    onUnlock();
  };

  return (
    <main className="lock-screen">
      <ProgressRail state={state} onToggleSound={onToggleSound} />
      <div className="lock-orbit" />
      <section className={`lock-content ${denied ? "denied" : ""}`}>
        <div className="gift-lock">🎁<span>⌁</span></div>
        <p className="eyebrow">KHÓA CUỐI CÙNG</p>
        <h2>Bạn đã<br /><em>phát hiện ra gì?</em></h2>
        <p>Có một mật mã gồm 4 chữ số đang chờ được mở...</p>
        <p>💡 Gợi ý: Có một ngày mà chỉ riêng Thảo mới có lý do để nhớ mãi.</p>
        <div className="code-display">{Array.from({ length: 4 }, (_, index) => <span key={index}>{input[index] ?? "_"}</span>)}</div>
        <div className="keypad">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "←", "0", "🔓"].map((key) => (
            <button key={key} onClick={() => key === "←" ? setInput(input.slice(0, -1)) : key === "🔓" ? submit() : enter(key)}>{key}</button>
          ))}
        </div>
        <p className={`access-message ${denied ? "show" : ""}`}>{denied ? "TRUY CẬP BỊ TỪ CHỐI / THỬ LẠI" : "Hộp quà đang chờ được mở..."}</p>
      </section>

      {unlocked && (
        <div className="answer-analysis-backdrop" role="presentation">
          <section className="answer-analysis" role="dialog" aria-modal="true" aria-labelledby="lock-success-title">
            <span className="answer-analysis-kicker">🎉 CHÍNH XÁC!</span>
            <h2 id="lock-success-title">19/10</h2>
            <p>Một ngày bình thường với rất nhiều người... nhưng lại là ngày một cô gái đặc biệt xuất hiện trên thế giới này. ❤️</p>
            <button className="primary-button visible" onClick={handleUnlock}>
              <span>OK</span><b>↗</b>
            </button>
          </section>
        </div>
      )}
    </main>
  );
}