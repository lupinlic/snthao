# 03 — Game Architecture

## Mục tiêu

Game phải được tổ chức như một ứng dụng tương tác, không phải một page chứa nhiều section.

## Cấu trúc

```text
src/
├── app/
├── components/
│   ├── Game/
│   ├── UI/
│   ├── Effects/
│   └── Audio/
├── game/
│   ├── GameEngine.ts
│   ├── GameState.ts
│   ├── GameContext.tsx
│   └── missions/
├── animations/
├── data/
├── hooks/
└── types/
```

## Game flow

`GameEngine` quyết định:

- level hiện tại
- level đã hoàn thành
- unlock level
- collected numbers
- final lock
- gift unlocked
- final celebration

## Level interface

Mỗi level nên có:

```ts
type LevelProps = {
  onComplete: (number: number) => void;
};
```

Khi puzzle hoàn thành, level gọi `onComplete()`.

## Không để level tự quản lý toàn bộ game

Level chỉ biết gameplay của chính nó.

Game Context/Engine chịu trách nhiệm:

```text
progress
unlock
navigation
persistence
```

## Transition

Khi level complete:

```text
complete
 ↓
reward animation
 ↓
save state
 ↓
transition
 ↓
next level
```

## Nguyên tắc

Mỗi component có một trách nhiệm rõ ràng.

Không đặt toàn bộ game trong `page.tsx`.
