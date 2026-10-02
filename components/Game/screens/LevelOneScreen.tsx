"use client";

import { useState } from "react";
import playTone from "../playTone";

const questions = [
  {
    prompt: "Ngày đặc biệt nào đã đưa một cô gái tên Thảo xuất hiện trên thế giới này? 🎂",
    choices: [
      { label: "18/10/2003", analysis: "Suýt đúng rồi... lệch một ngày thôi mà đã bỏ lỡ cơ hội gặp một cô gái đặc biệt rồi đấy." },
      { label: "19/10/2003", analysis: "🎉 Chính xác!Nhưng khoan... ngày này không chỉ đặc biệt với Thảo đâu.Vì từ ngày đó, thế giới mới có thêm một người khiến ai đó bắt đầu để ý. 👀❤️" },
      { label: "20/10/2003", analysis: "Ngày 20/10 là ngày Phụ nữ Việt Nam, nhưng Thảo thì đặc biệt hơn một chút... vì Thảo có ngày riêng của mình cơ." },
      { label: "Một ngày nào đó đẹp trời năm 2004", analysis: "Đẹp trời thì đúng, nhưng sai năm mất rồi. Nếu Thảo sinh năm 2004 thì chắc tớ phải chờ thêm một năm mới được biết cậu." },
    ],
  },
  {
    prompt: "Nếu được chọn một món quà sinh nhật dành cho Phương Thảo, món quà nào có thể khiến cô ấy vui nhất?",
    choices: [
      { label: "Một bó hoa thật đẹp", analysis: "Hoa đẹp thật đấy... nhưng vài ngày rồi cũng tàn. Hay là tìm một món quà có thể ở bên Thảo lâu hơn nhỉ?" },
      { label: "Một chiếc bánh kem thật to", analysis: "Bánh thì chắc chắn vui rồi! Nhưng ăn hết bánh thì hơi tiếc... hay để tớ làm người đồng hành ăn cùng nhé?" },
      { label: "Một món quà thật đắt tiền", analysis: "Tiền có thể mua được nhiều thứ, nhưng hình như vẫn chưa mua được một người thật lòng thích Thảo." },
      { label: "Một người luôn ở bên cạnh và khiến Thảo vui mỗi ngày", analysis: "❤️ Chính xác! Có những món quà chẳng cần gói lại, chẳng cần đặt giá... chỉ cần người đó thật lòng là đủ." },
    ],
  },
  {
    prompt: "Nếu được chọn một điều ước cho tuổi mới, Phương Thảo sẽ chọn điều gì? ✨",
    choices: [
      { label: "Có thật nhiều tiền 💰", analysis: "Được nhớ đến khiến ta cảm thấy mình có một vị trí đặc biệt trong lòng người khác." },
      { label: "Được đi thật nhiều nơi", analysis: "Đi thật nhiều nơi cũng tuyệt! Nhưng biết đâu chuyến đi đáng nhớ nhất lại là chuyến đi cùng một người đặc biệt nào đó." },
      { label: "Luôn vui vẻ và hạnh phúc", analysis: "Câu trả lời rất đẹp. Nhưng tớ nghĩ tuổi mới của Thảo sẽ vui hơn nếu mỗi ngày đều có thêm một người cố gắng làm Thảo cười." },
      { label: "Gặp được một người thích mình thật lòng", analysis: "🎉 CHÍNH XÁC! Nhưng hình như câu hỏi này có một vấn đề... Người đó có thể đang ở rất gần Thảo rồi đấy. 😏❤️" },
    ],
  },
];

export default function LevelOneScreen({ onComplete }: { onComplete: () => void }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<(typeof questions)[number]["choices"][number] | null>(null);
  const question = questions[questionIndex];

  const handleAnswer = (choiceIndex: number) => {
    setSelectedChoice(question.choices[choiceIndex]);
    playTone(true, 620);
  };

  const continueQuestion = () => {
    setSelectedChoice(null);
    if (questionIndex + 1 === questions.length) {
      onComplete();
      return;
    }
    setQuestionIndex((current) => current + 1);
    playTone(true, 760);
  };

  return (
    <section className="mission-panel trivia-mission">
      <div className="mission-heading"><span>01 / CÂU HỎI SINH NHẬT</span><i>CHỌN ĐIỀU BẠN NGHĨ</i></div>
      <div className="level-copy"><p className="eyebrow">Vòng 1 · Câu hỏi {questionIndex + 1}</p><h2>{question.prompt}</h2><p>Không có đáp án đúng hay sai. Chọn điều bạn muốn chia sẻ.</p></div>
      <div className="trivia-shell">
        <div className="trivia-card">
          <div className="question-tag">Câu {questionIndex + 1}/3</div>
          <div className="answer-list">
            {question.choices.map((choice, index) => (
              <button key={choice.label} className="answer-button" onClick={() => handleAnswer(index)}>
                <span>{String.fromCharCode(65 + index)}</span>
                {choice.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="instruction">Chọn một đáp án để xem phân tích <span>{questionIndex + 1}/3</span></p>
      {selectedChoice && (
        <div className="answer-analysis-backdrop" role="presentation">
          <section className="answer-analysis" role="dialog" aria-modal="true" aria-labelledby="answer-analysis-title">
            <span className="answer-analysis-kicker">GÓC NHÌN CỦA BẠN</span>
            <h2 id="answer-analysis-title">{selectedChoice.label}</h2>
            <p>{selectedChoice.analysis}</p>
            <button className="primary-button visible" onClick={continueQuestion}>
              <span>OK</span><b>↗</b>
            </button>
          </section>
        </div>
      )}
    </section>
  );
}