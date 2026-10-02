"use client";

import { useState } from "react";
import playTone from "../playTone";

const answer = "Mong Thảo tuổi mới gặp thật nhiều điều tốt đẹp và một người luôn thương Thảo";
const words = ["Mong", "Thảo", "tuổi mới", "gặp", "thật nhiều điều tốt đẹp", "và", "một người", "luôn", "thương Thảo"] as const;

const shuffle = (items: readonly string[]) => [...items].sort(() => Math.random() - 0.5);

export default function LevelThreeScreen({ onComplete }: { onComplete: () => void }) {
  const [bank, setBank] = useState<string[]>(() => shuffle([...words]));
  const [picked, setPicked] = useState<string[]>([]);
  const [mistake, setMistake] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentPhrase = picked.join(" ");

  const handleWord = (word: string) => {
    if (finished) return;

    const nextPicked = [...picked, word];
    const candidate = nextPicked.join(" ");

    if (!answer.startsWith(candidate)) {
      setPicked([]);
      setBank(shuffle([...words]));
      setMistake(true);
      playTone(true, 180);
      window.setTimeout(() => setMistake(false), 480);
      return;
    }

    const nextIndex = bank.findIndex((value) => value === word);
    if (nextIndex !== -1) {
      const nextBank = [...bank];
      nextBank.splice(nextIndex, 1);
      setBank(nextBank);
    }

    setPicked(nextPicked);
    if (candidate === answer) {
      playTone(true, 760);
      setFinished(true);
      return;
    }

    playTone(true, 620);
  };

  const resetWord = () => {
    setPicked([]);
    setBank(shuffle([...words]));
    setMistake(false);
    setFinished(false);
  };

  const removeLastWord = () => {
    if (!picked.length || finished) return;

    setPicked((current) => {
      const lastWord = current[current.length - 1];
      setBank((currentBank) => shuffle([...currentBank, lastWord]));
      return current.slice(0, -1);
    });
    setMistake(false);
  };

  return (
    <section className="mission-panel word-puzzle-mission">
      <div className="mission-heading"><span>03 / NỐI TỪ</span><i>GHÉP CÂU THÀNH Ý</i></div>
      <div className="level-copy"><p className="eyebrow">Một lời chúc chân thành</p><h2>Nhấp vào từng từ để nối thành câu phù hợp.</h2><p>Hãy thử ghép câu đúng và gửi đi một lời chúc thật đẹp cho Thảo.</p></div>
      <div className="word-puzzle-box">
        <div className="word-preview">{picked.length ? currentPhrase : "_ _ _ _ _ _ _ _ _"}</div>
        <div className="word-bank">
          {bank.map((word, index) => (
            <button key={`${word}-${index}`} className="word-letter" onClick={() => handleWord(word)}>{word}</button>
          ))}
        </div>
        <div className="builder-actions">
          <button className="secondary-button" onClick={removeLastWord}>Xóa</button>
          <button className="secondary-button" onClick={resetWord}>Làm lại</button>
        </div>
        {mistake && <p className="word-feedback wrong">Sai rồi, hãy thử lại!</p>}
      </div>
      <p className="instruction">Nối đúng câu <span>mừng tuổi mới</span></p>
      {finished && (
        <div className="answer-analysis-backdrop" role="presentation">
          <section className="answer-analysis" role="dialog" aria-modal="true" aria-labelledby="guess-success-title">
            <span className="answer-analysis-kicker">💕 HOÀN THÀNH</span>
            <h2 id="guess-success-title">Điều tốt đẹp thì mong Thảo gặp thật nhiều.</h2>
            <p>Còn một người luôn thương Thảo... biết đâu người đó đang ở ngay trước mặt Thảo rồi. 👀</p>
            <button className="primary-button visible" onClick={onComplete}>
              <span>OK</span><b>↗</b>
            </button>
          </section>
        </div>
      )}
    </section>
  );
}