# 04 — Game State

## State chính

```ts
type GameState = {
  currentLevel: number;
  completedLevels: number[];
  collectedNumbers: number[];
  musicEnabled: boolean;
  giftUnlocked: boolean;
  gameStarted: boolean;
};
```

## Giá trị mặc định

```ts
{
  currentLevel: 0,
  completedLevels: [],
  collectedNumbers: [],
  musicEnabled: true,
  giftUnlocked: false,
  gameStarted: false
}
```

## Collected numbers

Expected:

```text
Level 01 → 1
Level 02 → 9
Level 03 → 1
Level 04 → 0
```

## Unlock rules

Level 01 mở khi game bắt đầu.

Level N+1 chỉ mở khi Level N hoàn thành.

Final Lock chỉ mở khi:

```ts
completedLevels.includes(1)
completedLevels.includes(2)
completedLevels.includes(3)
completedLevels.includes(4)
```

## Final code

```ts
const SECRET_CODE = "1910";
```

## Validation

Người chơi nhập mã.

Nếu:

```ts
input === SECRET_CODE
```

→ `giftUnlocked = true`.

## localStorage

Key:

```text
birthday-quest-progress
```

Lưu state sau mỗi thay đổi quan trọng.

## Reset

Có thể có chức năng reset game trong development hoặc một nút nhỏ ở menu settings.

Production không cần hiển thị reset nổi bật.
