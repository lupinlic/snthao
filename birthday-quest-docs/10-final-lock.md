# 10 — Final Lock

## Mục tiêu

Cho người chơi sử dụng bốn chữ số đã thu thập để mở hộp quà.

Code:

# 1910

## Scene

Background tối.

Ở giữa:

```text
🎁
🔐
```

Title:

`THE FINAL LOCK`

Instruction:

`Enter the 4-digit code collected from your journey.`

## Code display

```text
[ _ ] [ _ ] [ _ ] [ _ ]
```

Sau mỗi input:

```text
[ 1 ] [ _ ] [ _ ] [ _ ]
[ 1 ] [ 9 ] [ _ ] [ _ ]
[ 1 ] [ 9 ] [ 1 ] [ _ ]
[ 1 ] [ 9 ] [ 1 ] [ 0 ]
```

## Keypad

```text
1 2 3
4 5 6
7 8 9
← 0 ✓
```

## Wrong code

Nếu sai:

- input shake
- lock shake
- wrong sound
- reset input

Thông báo:

`ACCESS DENIED`

Không khóa người chơi vĩnh viễn.

## Correct code

Khi nhập `1910`:

```text
ACCESS GRANTED
```

Sequence:

1. lock glow
2. lock shake
3. khóa bật ra
4. hộp rung
5. lid mở chậm
6. light burst
7. fade to black
8. Final Surprise

## Important

Final Lock không được xuất hiện trước khi hoàn thành 4 level.
