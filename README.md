# 🎂 Birthday Quest

> An interactive birthday puzzle adventure.

**Birthday Quest** là một website chúc mừng sinh nhật được thiết kế dưới dạng một **mini game giải đố tương tác**.

Người chơi sẽ không được nhận lời chúc ngay từ đầu. Thay vào đó, họ phải trải qua một hành trình gồm nhiều màn chơi, khám phá manh mối và thu thập những con số bí mật.

Mục tiêu cuối cùng là tìm được mã:

```text
1910
```

Sau khi nhập đúng mã, chiếc hộp quà bí mật sẽ được mở và kích hoạt màn **Birthday Surprise** cuối cùng.

---

# 🎯 1. Mục đích của website

Website không đơn thuần là một trang:

> "Happy Birthday 🎂"

Mục tiêu là tạo ra cảm giác như một **trò chơi phiêu lưu giải đố ngắn**.

Người nhận sẽ:

```text
Khám phá
   ↓
Tìm manh mối
   ↓
Giải câu đố
   ↓
Nhận một con số
   ↓
Mở khóa màn tiếp theo
   ↓
Lặp lại
   ↓
Thu thập đủ 4 số
   ↓
Nhập mã 1910
   ↓
Mở hộp quà
   ↓
🎆 Birthday Surprise
```

Toàn bộ trải nghiệm dự kiến kéo dài khoảng:

**5–10 phút**

---

# 🎮 2. Gameplay tổng quan

Game gồm **6 màn chính**:

```text
INTRO
  ↓
LEVEL 01
  ↓
LEVEL 02
  ↓
LEVEL 03
  ↓
LEVEL 04
  ↓
FINAL LOCK
  ↓
BIRTHDAY SURPRISE
```

Trong đó:

* 4 màn đầu cung cấp 4 chữ số.
* Màn cuối yêu cầu nhập mã 4 chữ số.
* Mã chính xác là `1910`.
* Sau khi mở khóa, người chơi bước vào màn chúc mừng sinh nhật cuối cùng.

---

# 🔐 3. Secret Code

Mã bí mật:

```text
1 - 9 - 1 - 0
```

Mỗi màn cung cấp một chữ số:

| Màn      | Chữ số |
| -------- | -----: |
| Level 01 |    `1` |
| Level 02 |    `9` |
| Level 03 |    `1` |
| Level 04 |    `0` |

Người chơi không được nhìn thấy mã `1910` ngay từ đầu.

Họ phải tự thu thập từng chữ số.

Sau khi hoàn thành từng màn, hệ thống cập nhật:

```text
LEVEL 01

[ 1 ] [ ? ] [ ? ] [ ? ]
```

Sau Level 02:

```text
[ 1 ] [ 9 ] [ ? ] [ ? ]
```

Sau Level 03:

```text
[ 1 ] [ 9 ] [ 1 ] [ ? ]
```

Sau Level 04:

```text
[ 1 ] [ 9 ] [ 1 ] [ 0 ]
```

Lúc này người chơi hiểu rằng họ đã có đủ mã để mở chiếc hộp.

---

# 🧩 4. Các màn chơi

## Level 01 — The Beginning

Người chơi bắt đầu trong một không gian bí ẩn.

Mục tiêu:

**Tìm manh mối và giải puzzle đầu tiên.**

Phần thưởng:

```text
1
```

Bất ngờ:

Một chiếc hộp/cánh cửa bí mật xuất hiện sau khi giải đúng.

Chi tiết:

`docs/06-level-01.md`

---

## Level 02 — Hidden Room

Người chơi bước vào một căn phòng.

Trong căn phòng có nhiều đồ vật tương tác.

Mục tiêu:

**Tìm các vật thể được giấu trong phòng.**

Sau khi tìm đủ:

```text
9
```

xuất hiện như một manh mối.

Bất ngờ:

Một vật thể trong căn phòng biến thành clue cho màn tiếp theo.

Chi tiết:

`docs/07-level-02.md`

---

## Level 03 — Memory Puzzle

Một bức ảnh bị chia thành nhiều mảnh.

Người chơi phải kéo và ghép các mảnh lại thành ảnh hoàn chỉnh.

Mục tiêu:

**Hoàn thành bức ảnh.**

Phần thưởng:

```text
1
```

Bất ngờ:

Ảnh hoàn chỉnh lật lại và để lộ một thông điệp bí mật.

Chi tiết:

`docs/08-level-03.md`

---

## Level 04 — Birthday Room

Người chơi bước vào căn phòng sinh nhật.

Có:

* 🎂 Cake
* 🕯️ Candles
* 🎈 Balloons
* 🎁 Gift

Mục tiêu:

**Tắt toàn bộ nến.**

Sau khi cây nến cuối cùng tắt:

```text
0
```

xuất hiện.

Ngay sau đó:

🎆 Fireworks
🎉 Confetti
🎈 Balloons

bùng nổ.

Chi tiết:

`docs/09-level-04.md`

---

# 🔓 5. Final Lock

Đây là màn giải đố cuối.

Người chơi nhìn thấy một chiếc hộp quà:

```text
        🎁

      ┌─────┐
      │ 🔐  │
      └─────┘
```

Thông báo:

> Enter the 4-digit code collected from your journey.

Có keypad:

```text
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
├───┼───┼───┤
│ ← │ 0 │ ✓ │
└───┴───┴───┘
```

Người chơi nhập:

```text
1 → 9 → 1 → 0
```

Nếu sai:

* Khóa rung.
* Phát âm thanh lỗi.
* Input shake.
* Hiển thị thông báo nhẹ.

Nếu đúng:

```text
ACCESS GRANTED
```

Chiếc khóa mở.

Chi tiết:

`docs/10-final-lock.md`

---

# 🎁 6. Final Birthday Surprise

Đây là phần kết của toàn bộ game.

Sau khi mã chính xác:

```text
1910
   ↓
ACCESS GRANTED
   ↓
BOX UNLOCKED
   ↓
SCREEN FADE
   ↓
✨
   ↓
🎆 🎉 🎈 ❤️
```

Màn hình chuyển sang một birthday celebration.

Hiển thị:

```text
HAPPY BIRTHDAY

[NAME]
```

Sau đó lời chúc xuất hiện bằng hiệu ứng typewriter.

Cuối cùng:

* Fireworks
* Confetti
* Hearts
* Balloons
* Sparkles
* Birthday music

được kích hoạt cùng lúc.

Chi tiết:

`docs/11-final-surprise.md`

---

# 🧠 7. Game State

Game cần một state trung tâm để quản lý tiến trình.

Ví dụ:

```ts
type GameState = {
  currentLevel: number;
  completedLevels: number[];
  collectedNumbers: number[];
  musicEnabled: boolean;
  giftUnlocked: boolean;
};
```

Ví dụ sau Level 2:

```json
{
  "currentLevel": 3,
  "completedLevels": [1, 2],
  "collectedNumbers": [1, 9],
  "musicEnabled": true,
  "giftUnlocked": false
}
```

Chi tiết:

`docs/04-game-state.md`

---

# 💾 8. Persistence

Website không cần backend.

Tiến trình game được lưu bằng:

```text
localStorage
```

Mục đích:

* Refresh trang không mất tiến trình.
* Người chơi có thể quay lại.
* Không cần database.
* Không cần server.

Ví dụ:

```text
birthday-quest-progress
```

---

# 🛠️ 9. Tech Stack

## Core

* Next.js
* TypeScript
* React

## Styling

* Tailwind CSS

## Animation

* Framer Motion
* GSAP
* CSS Keyframes

## Visual Effects

* HTML Canvas
* Particle system
* canvas-confetti

## Audio

* Howler.js

## Icons

* Lucide React

## Storage

* localStorage

## Backend

Không sử dụng backend.

## Database

Không sử dụng database.

Chi tiết:

`docs/02-tech-stack.md`

---

# 🏗️ 10. Kiến trúc project

Dự kiến:

```text
birthday-quest/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Game/
│   ├── UI/
│   ├── Effects/
│   └── Audio/
│
├── game/
│   ├── GameEngine.ts
│   ├── GameState.ts
│   ├── GameContext.tsx
│   └── missions/
│       ├── Mission01.tsx
│       ├── Mission02.tsx
│       ├── Mission03.tsx
│       └── Mission04.tsx
│
├── animations/
│   ├── transitions.ts
│   ├── particles.ts
│   └── effects.ts
│
├── data/
│   └── birthday.ts
│
├── hooks/
│   ├── useGame.ts
│   ├── useAudio.ts
│   └── useLocalStorage.ts
│
├── public/
│   ├── images/
│   ├── sounds/
│   └── fonts/
│
└── docs/
```

Chi tiết:

`docs/03-game-architecture.md`

---

# 🎨 11. Visual Direction

Phong cách tổng thể:

## Mystery + Cute + Magical

Game sẽ bắt đầu với cảm giác:

```text
🌑 Dark
🔐 Mystery
🕵️ Exploration
```

Sau đó dần chuyển sang:

```text
✨ Magical
🎈 Colorful
🎂 Birthday
```

Cuối cùng:

```text
🎆 Celebration
🎉 Confetti
❤️ Hearts
✨ Glow
```

Sự thay đổi visual cũng chính là một phần của câu chuyện.

---

# ✨ 12. Animation Philosophy

Animation không chỉ để trang trí.

Mỗi animation phải phục vụ một mục đích:

### Feedback

Người chơi click đúng → object phản ứng.

### Reward

Giải puzzle → animation + particle.

### Surprise

Mở khóa → unexpected animation.

### Transition

Hoàn thành màn → cinematic transition.

### Celebration

Final → toàn bộ hệ thống effects hoạt động.

---

# 🔊 13. Audio

Âm thanh được chia thành:

```text
background.mp3

click.mp3
success.mp3
wrong.mp3
unlock.mp3
pop.mp3
firework.mp3
heartbeat.mp3
birthday.mp3
```

Người dùng có thể bật/tắt âm thanh.

Mặc định không autoplay nhạc trước khi có interaction.

Chi tiết:

`docs/13-audio-system.md`

---

# 📱 14. Responsive

Game ưu tiên:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

Tất cả puzzle cần hỗ trợ:

* Touch
* Tap
* Drag
* Swipe

Không phụ thuộc hoàn toàn vào hover hoặc mouse.

Chi tiết:

`docs/14-responsive.md`

---

# 🖼️ 15. Personalization

Các dữ liệu cá nhân không nên hard-code trực tiếp vào component.

Thay vào đó dùng:

```ts
const birthdayConfig = {
  name: "NAME",
  birthday: "DATE",

  wishes: [
    "...",
    "...",
    "..."
  ],

  memories: [
    "/images/memories/01.jpg",
    "/images/memories/02.jpg"
  ]
};
```

Có thể thay đổi:

* Tên
* Ảnh
* Lời chúc
* Nhạc
* Màu sắc
* Nội dung puzzle

mà không phải sửa toàn bộ game.

---

# 🎯 16. Nguyên tắc thiết kế puzzle

Mỗi puzzle phải tuân theo:

```text
OBSERVE
   ↓
THINK
   ↓
ACT
   ↓
SOLVE
   ↓
REWARD
```

Không nên tạo puzzle quá khó.

Thời gian dự kiến:

```text
Level 01: 30s – 1m
Level 02: 1m – 2m
Level 03: 1m – 2m
Level 04: 1m – 2m
Final:    30s – 1m
```

Tổng:

**5–10 phút.**

---

# 🏆 17. Reward System

Sau mỗi màn:

```text
✓ CHALLENGE COMPLETE

MEMORY FRAGMENT FOUND

        [ 9 ]
```

Sau đó số được đưa vào Secret Code UI.

Ví dụ:

```text
SECRET CODE

[ 1 ] [ 9 ] [ ? ] [ ? ]
```

Điều này giúp người chơi luôn biết:

> “Mình đang tiến gần đến chiếc hộp.”

---

# 🎬 18. Transition giữa các màn

Không chuyển màn bằng cách đơn giản:

```text
display: none;
```

Mỗi màn có transition riêng.

Ví dụ:

```text
Level 01
   ↓
screen flash
   ↓
zoom out
   ↓
black
   ↓
door opens
   ↓
Level 02
```

Mục tiêu là tạo cảm giác:

> **Người chơi thực sự đang bước sang một không gian mới.**

---

# 🎁 19. Final Experience

Khoảnh khắc quan trọng nhất:

```text
USER ENTERS

1910
```

↓

```text
ACCESS GRANTED
```

↓

🔓

↓

🎁

↓

Screen fades to black.

↓

Một tia sáng xuất hiện.

↓

🎈 🎈 🎈

↓

🎆 🎆 🎆

↓

❤️ ❤️ ❤️

↓

# HAPPY BIRTHDAY

## [NAME]

↓

Lời chúc.

↓

🎂 Birthday music.

↓

🎆 Final fireworks.

---

# 🚧 20. Development Order

Không code ngẫu nhiên từng phần.

Thứ tự phát triển:

```text
01. Project Setup
       ↓
02. Game Architecture
       ↓
03. Game State
       ↓
04. Intro
       ↓
05. Level 01
       ↓
06. Level 02
       ↓
07. Level 03
       ↓
08. Level 04
       ↓
09. Final Lock
       ↓
10. Final Surprise
       ↓
11. Animation System
       ↓
12. Audio System
       ↓
13. Responsive
       ↓
14. Polish
       ↓
15. Testing
       ↓
16. Deploy
```

---

# 🚀 21. Definition of Done

Project được xem là hoàn thành khi:

* [ ] Người chơi bắt đầu được game.
* [ ] Có 4 màn puzzle.
* [ ] Mỗi màn cung cấp đúng một chữ số.
* [ ] Mã cuối cùng là `1910`.
* [ ] Không thể mở hộp trước khi hoàn thành 4 màn.
* [ ] Sai mã có feedback.
* [ ] Đúng mã mở được hộp.
* [ ] Có final birthday celebration.
* [ ] Có animation.
* [ ] Có sound effects.
* [ ] Có background music.
* [ ] Có confetti.
* [ ] Có fireworks.
* [ ] Responsive mobile.
* [ ] Responsive desktop.
* [ ] Progress được lưu khi refresh.
* [ ] Không cần backend.
* [ ] Không có lỗi console nghiêm trọng.

---

# ❤️ Final Goal

Birthday Quest không hướng tới việc tạo một website thật nhiều hiệu ứng.

Mục tiêu là tạo ra một trải nghiệm:

> **“Mình vừa chơi một game nhỏ được làm riêng cho mình.”**

Người chơi phải tò mò ở đầu game, vui khi giải được puzzle, bất ngờ ở từng màn và cuối cùng có một khoảnh khắc cảm xúc khi chiếc hộp quà được mở.

**1910 không chỉ là một mật mã.**

Nó là thứ kết nối toàn bộ hành trình từ màn đầu tiên đến món quà cuối cùng.
