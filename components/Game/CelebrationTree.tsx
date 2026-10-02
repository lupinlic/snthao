"use client";

import { useEffect, useState } from "react";
import { birthdayConfig } from "@/game/data";

export default function CelebrationTree({ onReplay }: { onReplay: () => void }) {
  const [giftOpen, setGiftOpen] = useState(false);

  useEffect(() => {
    if (!giftOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGiftOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [giftOpen]);

  const openGiftWithKeyboard = (event: React.KeyboardEvent<SVGGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setGiftOpen(true);
    }
  };

  return (
    <main className="surprise-screen tree-finale">
      <div className="tree-finale-glow" aria-hidden="true" />
      <header className="tree-finale-heading">
        <p className="eyebrow">MÓN QUÀ CUỐI CÙNG ĐANG CHỜ BẠN</p>
        <h1>Happy <em>Birthday</em></h1>
        <p className="recipient">{birthdayConfig.name}</p>
      </header>
      <svg className="birthday-tree" viewBox="0 0 640 650" role="group" aria-labelledby="tree-title tree-description">
        <title id="tree-title">Cây sinh nhật với hộp quà treo ở giữa</title>
        <desc id="tree-description">Một cây xanh nhiều tầng, với hộp quà hồng lớn treo lơ lửng giữa các cành.</desc>
        <defs>
          <linearGradient id="tree-trunk" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#75503f" />
            <stop offset=".48" stopColor="#b57b58" />
            <stop offset="1" stopColor="#704936" />
          </linearGradient>
          <linearGradient id="tree-leaves" x1="0" y1="0" x2=".8" y2="1">
            <stop offset="0" stopColor="#91c9a0" />
            <stop offset="1" stopColor="#4c9272" />
          </linearGradient>
          <linearGradient id="tree-leaves-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#b5d994" />
            <stop offset="1" stopColor="#6dac7d" />
          </linearGradient>
          <linearGradient id="hanging-gift" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb7d2" />
            <stop offset="1" stopColor="#ed6f9f" />
          </linearGradient>
          <filter id="tree-shadow" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow dx="0" dy="15" stdDeviation="13" floodColor="#3b735b" floodOpacity=".2" />
          </filter>
          <filter id="gift-shadow" x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#9f4d71" floodOpacity=".25" />
          </filter>
        </defs>

        <ellipse cx="322" cy="612" rx="178" ry="18" fill="#6b9d7a" opacity=".13" />
        <g className="tree-canopy" filter="url(#tree-shadow)">
          <path d="M320 58c-28-48-91-48-118-9-51-20-104 17-96 68-48 17-60 78-22 110-29 41-4 95 44 100 5 51 58 77 102 52 31 36 86 35 115 1 40 32 99 16 111-30 53 2 81-51 53-92 40-39 25-103-24-123 7-56-49-88-96-63-24-40-78-47-109-14Z" fill="url(#tree-leaves)" />
          <path d="M193 119c-28-27-71-15-76 17-31 11-34 48-7 62-12 32 14 58 44 48 19 27 58 20 67-11 30-15 28-53-2-64 7-29-9-49-26-52Z" fill="url(#tree-leaves-light)" />
          <path d="M369 102c19-33 65-31 79-1 34-4 55 31 35 58 22 24 11 61-20 67-8 33-48 44-70 19-32 3-52-30-36-58-20-26-11-66 12-85Z" fill="#79b88a" />
          <path d="M250 230c-29-22-67-6-69 28-30 15-28 54 4 65 9 31 49 39 70 13 33 4 53-32 34-59 8-30-12-52-39-47Z" fill="#70ad81" />
          <path d="M405 228c25-24 65-11 70 20 33 10 39 48 10 65-3 32-40 48-67 27-33 10-59-22-45-52-13-28 4-57 32-60Z" fill="url(#tree-leaves-light)" />
          <path d="M306 43c-1-14 8-25 20-28 12 3 21 14 20 28-12 9-28 9-40 0Z" fill="#b7d88e" />
          <circle cx="126" cy="191" r="8" fill="#e9819f" />
          <circle cx="485" cy="184" r="8" fill="#f0bd68" />
          <circle cx="219" cy="283" r="7" fill="#f0bd68" />
          <circle cx="424" cy="287" r="7" fill="#e9819f" />
          <circle cx="280" cy="91" r="6" fill="#f0bd68" />
          <circle cx="367" cy="77" r="6" fill="#e9819f" />
          <path d="M170 82c7-13 19-19 31-18M440 114c9-8 18-11 29-9M146 239c9 1 16 6 20 14M454 245c-8 4-13 11-15 20M282 199c10-7 21-8 31-3" fill="none" stroke="#d4e8aa" strokeWidth="5" strokeLinecap="round" opacity=".8" />
        </g>

        <g className="tree-branches" fill="none" stroke="url(#tree-trunk)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M318 594c8-84 7-171 0-248-4-54-11-94-15-142m16 142c-34-38-77-72-125-92m121 150c43-47 89-83 139-104M313 425c-31-22-62-39-95-50m100 9c28-23 57-41 87-56" strokeWidth="27" />
          <path d="M304 210c-10-24-26-42-49-56m194 144c22-21 45-35 72-43M197 346c-23-17-46-26-72-29" strokeWidth="11" />
          <path d="M318 574c-43 16-77 27-110 29m112-28c35 13 70 23 107 26" strokeWidth="12" />
        </g>

        <g className="hanging-gift">
          <path d="M318 272c-1 22 1 42 2 61" fill="none" stroke="#f4d887" strokeWidth="4" strokeLinecap="round" />
          <path d="M319 278c-20-22-42-14-36 1 4 10 22 11 37 7 15 4 33 3 37-7 6-15-16-23-38-1Z" fill="none" stroke="#f4d887" strokeWidth="5" strokeLinecap="round" />
          <g
            className="hanging-gift-trigger"
            role="button"
            tabIndex={0}
            aria-label="Mở thông tin món quà sinh nhật đặc biệt"
            onClick={() => setGiftOpen(true)}
            onKeyDown={openGiftWithKeyboard}
          >
            <g filter="url(#gift-shadow)">
              <path d="M255 355h132v103H255z" fill="url(#hanging-gift)" />
              <rect x="246" y="336" width="150" height="31" rx="7" fill="#ffcee0" />
              <path d="M307 337h31v121h-31z" fill="#fff0bf" />
              <path d="M247 347h148v10H247z" fill="#fff7df" opacity=".8" />
              <path d="M319 337c-32-8-45-32-30-39 15-7 29 17 30 39Zm4 0c31-8 44-32 29-39-15-7-28 17-29 39Z" fill="none" stroke="#f6d880" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M322 366v79" stroke="#f6d880" strokeWidth="6" strokeLinecap="round" />
              <path d="M255 367h132" stroke="#fff3cb" strokeWidth="5" opacity=".9" />
            </g>
            <rect x="234" y="325" width="174" height="146" fill="transparent" />
          </g>
          <path d="M317 325c-4-8-2-15 3-19 5 4 7 11 3 19Z" fill="#fff0bf" />
        </g>
      </svg>
      <p className="tree-gift-hint">NHẤN VÀO HỘP QUÀ</p>
      <div className="tree-finale-message">
        {birthdayConfig.wishes.map((wish) => <p key={wish}>{wish}</p>)}
      </div>
      <button className="text-button tree-replay" onClick={onReplay}>↻ CHƠI LẠI</button>
      {giftOpen && (
        <div className="gift-modal-backdrop" role="presentation" onClick={() => setGiftOpen(false)}>
          <section className="gift-modal" role="dialog" aria-modal="true" aria-labelledby="final-gift-title" onClick={(event) => event.stopPropagation()}>
            <button className="gift-modal-close" aria-label="Đóng thông tin món quà" onClick={() => setGiftOpen(false)}>×</button>
            <span className="gift-modal-kicker">MÓN QUÀ CUỐI CÙNG</span>
            <span className="gift-modal-emoji" aria-hidden="true">{birthdayConfig.finalGift.emoji}</span>
            <h2 id="final-gift-title">{birthdayConfig.finalGift.title}</h2>
            <p>{birthdayConfig.finalGift.description}</p>
          </section>
        </div>
      )}
    </main>
  );
}