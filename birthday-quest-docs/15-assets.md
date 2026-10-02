# 15 — Assets

## Structure

```text
public/
├── images/
│   ├── memories/
│   ├── backgrounds/
│   ├── objects/
│   └── ui/
├── sounds/
├── fonts/
└── icons/
```

## Images

### memories

Ảnh dùng cho Level 03 và final.

Ví dụ:

```text
memory-01.jpg
memory-02.jpg
memory-03.jpg
```

### backgrounds

```text
intro-bg.webp
room-bg.webp
birthday-room.webp
final-bg.webp
```

### objects

Các vật thể của puzzle.

Ví dụ:

```text
key.png
star.png
gift.png
toy.png
```

## Audio

Tên file nên mô tả rõ chức năng:

```text
click.mp3
success.mp3
wrong.mp3
unlock.mp3
firework.mp3
birthday.mp3
```

## Fonts

Nếu dùng font ngoài, đặt trong:

```text
public/fonts/
```

Không sử dụng quá nhiều font.

Khuyến nghị:

- 1 font display
- 1 font body

## Image optimization

Với ảnh lớn:

- dùng WebP/AVIF khi phù hợp
- resize ảnh trước khi đưa vào project
- tránh ảnh 5–10 MB không cần thiết

## Naming

Dùng lowercase + kebab-case:

```text
birthday-room.webp
memory-01.webp
final-gift.webp
```

Không dùng tên:

```text
ảnh cuối cùng mới.jpg
IMG_9382.JPG
```

## Personalization

Thông tin cá nhân nên nằm trong config.

Không hard-code đường dẫn ảnh ở nhiều component.

Ví dụ:

```ts
const birthdayConfig = {
  name: "NAME",
  memories: [
    "/images/memories/memory-01.webp"
  ]
};
```

## Asset checklist

- [ ] Background intro
- [ ] Room background
- [ ] Puzzle objects
- [ ] Memory images
- [ ] Gift artwork
- [ ] Birthday cake
- [ ] Candle assets
- [ ] Balloons
- [ ] Music
- [ ] Sound effects
- [ ] Fonts
