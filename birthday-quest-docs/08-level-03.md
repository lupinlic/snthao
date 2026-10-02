# 08 — Level 03 — Memory Puzzle

## Mục tiêu

Ghép lại một bức ảnh và nhận chữ số:

# 1

## Gameplay

Một ảnh được chia thành 9 mảnh.

Người chơi kéo các mảnh về đúng vị trí.

## Desktop

Drag bằng chuột.

## Mobile

Touch + drag.

## Completion

Khi 9 mảnh đúng vị trí:

- các mảnh snap vào nhau
- glow
- sound success
- camera/scale animation nhẹ

Ảnh hoàn chỉnh xuất hiện.

## Surprise

Ảnh lật sang mặt sau.

Mặt sau có một thông điệp:

```text
Sometimes, one memory is enough.
```

Sau đó số:

`1`

xuất hiện.

## Reward

```text
[ 1 ] [ 9 ] [ 1 ] [ ? ]
```

## Personalization

Ảnh nên có thể thay bằng ảnh thật trong:

```text
public/images/memories/
```

## Fail-safe

Nếu puzzle gây khó khăn, có thể có nút hint sau một khoảng thời gian.

Hint không nên xuất hiện ngay.
