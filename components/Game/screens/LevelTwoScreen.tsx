"use client";

import { useState } from "react";
import playTone from "../playTone";

const rounds = [
  { image: "/memory/cau1.png", alt: "NGÀY SINH", clue: "Ngày một người chào đời.", word: "NGAYSINH" },
  { image: "/memory/cau2.png", alt: "TẶNG HOA", clue: "Món quà thường dành tặng người thương.", word: "TANGHOA" },
  { image: "/memory/cau3.png", alt: "THÊM MỘT TUỔI", clue: "Điều ta có sau mỗi lần sinh nhật.", word: "THEMMOTTUOI" },
] as const;

const shuffle = (items: string[]) => [...items].sort(() => Math.random() - 0.5);
const createLetterBank = (roundIndex: number) => {
  const round = rounds[roundIndex];
  return shuffle(round.word.split(""));
};

export default function LevelTwoScreen({ onComplete, onWrong }: { onComplete: () => void; onWrong: () => void }) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [selection, setSelection] = useState<string[]>([]);
  const [baseBank, setBaseBank] = useState(() => createLetterBank(0));
  const [bank, setBank] = useState(baseBank);
  const [mistake, setMistake] = useState(false);
  const [solved, setSolved] = useState(false);

  const round = rounds[roundIndex];

  const currentGuess = selection.join("");
  const answerSlots = Array.from({ length: round.word.length }, (_, index) => selection[index] ?? "_");

  const handleLetter = (letter: string) => {
    if (selection.length >= round.word.length) return;

    const nextIndex = bank.findIndex((value) => value === letter);
    if (nextIndex === -1) return;

    setSelection((current) => [...current, letter]);
    setBank((current) => {
      const nextBank = [...current];
      nextBank.splice(nextIndex, 1);
      return nextBank;
    });
    setMistake(false);
  };

  const resetGuess = () => {
    setSelection([]);
    setBank(baseBank);
    setMistake(false);
  };

  const removeLastLetter = () => {
    setSelection((current) => {
      if (!current.length) return current;
      const lastLetter = current[current.length - 1];
      setBank((bankLetters) => shuffle([...bankLetters, lastLetter]));
      return current.slice(0, -1);
    });
    setMistake(false);
  };

  const submitGuess = () => {
    if (currentGuess === round.word) {
      playTone(true, 760);
      setSolved(true);
      return;
    }

    setMistake(true);
    onWrong();
    setTimeout(() => {
      resetGuess();
      setMistake(false);
    }, 420);
  };

  const continueRound = () => {
    if (roundIndex + 1 === rounds.length) {
      onComplete();
      return;
    }
    const nextRoundIndex = roundIndex + 1;
    const nextBank = createLetterBank(nextRoundIndex);
    setRoundIndex(nextRoundIndex);
    setSelection([]);
    setBaseBank(nextBank);
    setBank(nextBank);
    setMistake(false);
    setSolved(false);
  };

  return (
    <section className="mission-panel picture-mission">
      <div className="mission-heading"><span>02 / ĐUỔI HÌNH BẮT CHỮ</span><i>GHÉP TỪ THEO HÌNH</i></div>
      <div className="level-copy"><p className="eyebrow">Khi hình phát sáng</p><h2>Ghép chữ để tạo thành từ đúng với hình này.</h2><p>{round.clue}</p></div>
      <div className="picture-stage">
        <div className="picture-visual">
          <img src={round.image} alt={round.alt} className="picture-image" />
        </div>
        <div className="word-builder-box">
          <div className="word-answer-row">
            {answerSlots.map((letter, index) => (
              <span key={`${letter}-${index}`} className="answer-slot">{letter}</span>
            ))}
          </div>
          <div className="letter-bank">
            {bank.map((letter, index) => (
              <button key={`${letter}-${index}`} className="letter-tile" onClick={() => handleLetter(letter)} disabled={selection.length >= round.word.length}>
                {letter}
              </button>
            ))}
          </div>
          <div className="builder-actions">
            <button className="secondary-button" onClick={removeLastLetter}>Xóa</button>
            <button className="secondary-button" onClick={resetGuess}>Làm lại</button>
            <button className="primary-button compact visible" onClick={submitGuess} disabled={selection.length !== round.word.length || solved}>
              <span>OK</span>
            </button>
          </div>
          {mistake && <p className="word-feedback wrong">Sai rồi, hãy thử lại!</p>}
        </div>
      </div>
      <p className="instruction">Ghép chữ đúng để mở cửa <span>{roundIndex + 1}/3</span></p>
      {solved && (
        <div className="answer-analysis-backdrop" role="presentation">
          <section className="answer-analysis" role="dialog" aria-modal="true" aria-labelledby="round-success-title">
            <span className="answer-analysis-kicker">GHÉP TỪ CHÍNH XÁC</span>
            <h2 id="round-success-title">{round.word}</h2>
            <p>Đáp án chính xác. Nhấn OK để tiếp tục.</p>
            <button className="primary-button visible" onClick={continueRound}>
              <span>OK</span><b>↗</b>
            </button>
          </section>
        </div>
      )}
    </section>
  );
}