# 01 — Project Overview

## Mục tiêu

Birthday Quest là mini game chúc mừng sinh nhật gồm 4 màn giải đố, 1 màn nhập mã và 1 màn kết thúc.

Mục tiêu của người chơi là khám phá bốn chữ số:

`1 → 9 → 1 → 0`

Sau đó nhập mã `1910` để mở hộp quà bí mật.

## Core Flow

```text
Intro
 ↓
Level 01 → 1
 ↓
Level 02 → 9
 ↓
Level 03 → 1
 ↓
Level 04 → 0
 ↓
Final Lock → 1910
 ↓
Gift
 ↓
Birthday Surprise
```

## Trải nghiệm

Người chơi phải luôn cảm thấy tò mò:

- Màn hiện tại đang yêu cầu gì?
- Mình vừa tìm thấy thứ gì?
- Con số này dùng để làm gì?
- Sau cánh cửa tiếp theo có gì?
- Chiếc hộp cuối cùng chứa gì?

## Thời lượng

Mục tiêu: 5–10 phút.

Mỗi puzzle khoảng 30 giây–2 phút.

## Nguyên tắc

1. Không công khai `1910` ngay từ đầu.
2. Mỗi màn chỉ cung cấp một chữ số.
3. Mỗi màn có một bất ngờ riêng.
4. Puzzle dễ hiểu nhưng có cảm giác khám phá.
5. Animation phục vụ gameplay, không chỉ trang trí.
6. Mobile-first.
7. Refresh trang không làm mất tiến trình.
