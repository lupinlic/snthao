# 02 — Tech Stack

## Core

- Next.js
- React
- TypeScript

## Styling

- Tailwind CSS
- CSS Modules hoặc CSS riêng khi cần animation đặc thù

## Animation

### Framer Motion

Dùng cho:

- fade
- slide
- scale
- spring
- modal
- UI transitions
- level transitions đơn giản

### GSAP

Dùng cho:

- cinematic transition
- hộp quà mở
- object di chuyển theo timeline
- complex timeline
- text/element choreography

### Canvas

Dùng cho:

- particles
- fireworks
- hearts
- sparkles
- confetti tùy trường hợp

## Effects

`canvas-confetti` dùng cho confetti nhanh.

## Audio

`Howler.js` dùng cho:

- background music
- click
- success
- wrong
- unlock
- pop
- fireworks
- heartbeat

## Icons

`lucide-react`

## State

React Context hoặc một game store nhẹ.

Không cần Redux nếu state vẫn ở mức hiện tại.

## Persistence

`localStorage`.

## Backend

Không cần.

## Database

Không cần.

## Nguyên tắc

Không dùng thư viện nặng nếu CSS/React đã đủ.

Ưu tiên:

```text
CSS → Framer Motion → GSAP → Canvas
```

theo mức độ phức tạp tăng dần.
