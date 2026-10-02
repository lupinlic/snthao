"use client";

import type { GameState } from "@/game/types";

export default function ProgressRail({ state, onToggleSound }: { state: GameState; onToggleSound: () => void }) {
  return (
    <header className="topbar">
      <div className="brand-mark"><span className="brand-dot" /> BIRTHDAY QUEST</div>
      <div className="progress-rail" aria-label="Mã bí mật đã thu thập">
        {Array.from({ length: 4 }, (_, index) => (
          <span className={`code-slot ${state.collectedNumbers[index] !== undefined ? "collected" : ""}`} key={index}>
            {"?"}
          </span>
        ))}
      </div>
      <button className="sound-button" onClick={onToggleSound} aria-label={state.musicEnabled ? "Tắt âm" : "Bật âm"}>
        {state.musicEnabled ? "♫" : "×"}
      </button>
    </header>
  );
}