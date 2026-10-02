# 07 — Level 02 — Hidden Room

## Mục tiêu

Tìm các object ẩn trong căn phòng và nhận chữ số:

# 9

## Scene

Một căn phòng có nhiều vật thể.

Ví dụ:

```text
🪑   🖼️   📚
🎁   🧸   🌱
      🔑
```

Không phải object nào cũng là clue.

## Gameplay

Nhiệm vụ:

`Find 3 hidden objects.`

Người chơi phải tìm đúng ba object.

## Interaction

Khi tìm đúng:

- object glow
- particle nhỏ
- sound success
- object được đánh dấu collected

Khi tìm sai:

- shake nhẹ
- không reset

## Completion

Khi đủ 3 object:

Đèn phòng bật.

Một clue cuối xuất hiện.

Clue dẫn tới số:

`9`

## Reward

```text
[ 1 ] [ 9 ] [ ? ] [ ? ]
```

## Surprise

Một bức tranh trên tường biến thành một cánh cửa/portal.

Portal mở sang Level 03.

## Design goal

Màn này phải tạo cảm giác:

> “Mình đang khám phá một căn phòng bí mật.”
