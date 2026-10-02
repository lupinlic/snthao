# 12 — Animation System

## Mục tiêu

Tạo animation có chủ đích và giữ performance ổn định.

## Phân loại

### CSS

Dùng cho:

- pulse
- glow
- floating
- shake đơn giản
- candle flame

### Framer Motion

Dùng cho:

- component entrance
- exit
- modal
- button
- level transition
- UI state

### GSAP

Dùng cho:

- cinematic timeline
- gift box
- complex object motion
- final sequence

### Canvas

Dùng cho:

- fireworks
- particles
- hearts
- sparkles

## Animation states

Mỗi puzzle nên có:

```text
idle
hover/touch
interacting
success
failure
complete
```

## Performance

Không tạo hàng nghìn DOM elements cho particle.

Ưu tiên Canvas.

Animation phải được dừng khi component unmount.

Không để animation loop chạy khi level không còn hiển thị.

## Reduced motion

Nếu người dùng bật:

`prefers-reduced-motion`

thì giảm:

- camera movement
- screen shake
- particle count
- large transitions

Không tắt hoàn toàn feedback quan trọng.
