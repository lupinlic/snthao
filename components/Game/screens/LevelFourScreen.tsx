"use client";

import { useEffect, useMemo, useState } from "react";

const pairs = [
  { id: "gift", icon: "/memory/gift.svg", alt: "Quà" },
  { id: "cake", icon: "/memory/cake.svg", alt: "Bánh sinh nhật" },
  { id: "heart", icon: "/memory/heart.svg", alt: "Yêu thương" },
  { id: "spark", icon: "/memory/spark.svg", alt: "Tinh tú" },
];

export default function LevelFourScreen({ onComplete }: { onComplete: () => void }) {
  const deck = useMemo(
    () => [...pairs, ...pairs].map((item, index) => ({ ...item, key: `${item.id}-${index}` })).sort(() => Math.random() - 0.5),
    []
  );

  const [opened, setOpened] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (opened.length !== 2) return;
    const [first, second] = opened;
    if (deck[first].id === deck[second].id) {
      setMatched((current) => [...current, first, second]);
      setOpened([]);
      return;
    }

    setLocked(true);
    const timeout = window.setTimeout(() => {
      setOpened([]);
      setLocked(false);
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [opened, deck]);

  useEffect(() => {
    if (matched.length === deck.length && deck.length > 0) {
      window.setTimeout(onComplete, 600);
    }
  }, [matched, deck.length, onComplete]);

  const handleFlip = (index: number) => {
    if (locked || opened.includes(index) || matched.includes(index)) return;
    setOpened((current) => [...current, index]);
  };

  return (
    <section className="mission-panel light-sequence-mission">
      <div className="mission-heading"><span>04 / MỞ THẺ</span><i>GHÉP CẶP GIỐNG NHAU</i></div>
      <div className="level-copy"><p className="eyebrow">Bữa tiệc kỷ niệm</p><h2>Mở hai thẻ giống nhau<br /><em>để giải mã phần cuối.</em></h2><p>Nhấn từng thẻ, tìm cặp biểu tượng trùng nhau và giữ chúng lại.</p></div>
      <div className="match-board" aria-label="Memory board">
        {deck.map((tile, index) => {
          const revealed = opened.includes(index) || matched.includes(index);
          return (
            <button
              key={tile.key}
              className={`match-tile ${revealed ? "revealed" : ""}`}
              onClick={() => handleFlip(index)}
              aria-label={revealed ? `Card ${tile.alt}` : "Hidden card"}
              disabled={locked && !revealed}
            >
              {revealed ? <img src={tile.icon} alt={tile.alt} className="match-image" /> : <span>?</span>}
            </button>
          );
        })}
      </div>
      <p className="instruction">Tìm cặp đúng <span>{matched.length / 2}/{pairs.length}</span></p>
    </section>
  );
}