"use client";

import { useState } from "react";
import { birthdayConfig } from "@/game/data";
import CelebrationTree from "../CelebrationTree";
import GiftArchery from "../GiftArchery";

type Gift = (typeof birthdayConfig.gifts)[number];

export default function SurpriseScreen({ onReplay }: { onReplay: () => void }) {
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [revealedGift, setRevealedGift] = useState<Gift | null>(null);
  const allCollected = collectedIds.length === birthdayConfig.gifts.length;

  if (allCollected && !revealedGift) return <CelebrationTree onReplay={onReplay} />;

  return (
    <main className="surprise-screen archery-surprise">
      <GiftArchery
        collectedIds={collectedIds}
        setCollectedIds={setCollectedIds}
        paused={revealedGift !== null}
        onGiftHit={setRevealedGift}
      />
      <div className="surprise-content archery-content">
        <p className="eyebrow">BÍ MẬT LUÔN LÀ CHO BẠN</p>
        <h1>Happy<br /><em>Birthday</em></h1>
        <p className="recipient">{birthdayConfig.name}</p>
        <p className="archery-prompt">{allCollected ? "ĐÃ MỞ TẤT CẢ PHẦN QUÀ" : "KÉO DÂY CUNG · THẢ ĐỂ BẮN"}</p>
        <p className="archery-count">{collectedIds.length} / {birthdayConfig.gifts.length} PHẦN QUÀ</p>
      </div>
      <button className="text-button archery-replay" onClick={onReplay}>↻ CHƠI LẠI</button>
      {revealedGift && (
        <div className="gift-modal-backdrop" role="presentation">
          <section className="gift-modal" role="dialog" aria-modal="true" aria-labelledby="gift-modal-title">
            <span className="gift-modal-kicker">BẠN ĐÃ BẮN TRÚNG</span>
            <span className="gift-modal-emoji" aria-hidden="true">{revealedGift.emoji}</span>
            <h2 id="gift-modal-title">{revealedGift.title}</h2>
            <p>{revealedGift.description}</p>
            <button className="primary-button visible" onClick={() => setRevealedGift(null)}>
              <span>NHẬN QUÀ</span><b>↗</b>
            </button>
          </section>
        </div>
      )}
    </main>
  );
}