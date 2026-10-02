# 13 — Audio System

## Mục tiêu

Âm thanh tạo feedback và cảm xúc.

## Audio files

```text
public/sounds/
├── bgm.mp3
├── click.mp3
├── success.mp3
├── wrong.mp3
├── unlock.mp3
├── pop.mp3
├── firework.mp3
├── heartbeat.mp3
└── birthday.mp3
```

## Categories

### UI

- click
- hover nếu cần
- button

### Puzzle

- success
- wrong
- object found

### Story

- door
- unlock
- heartbeat

### Celebration

- firework
- birthday music

## Autoplay

Không tự động phát nhạc trước interaction của người dùng.

Sau `START MISSION` mới bắt đầu audio.

## Controls

Có nút:

```text
🔊 / 🔇
```

State:

```ts
musicEnabled: boolean
```

## Volume

Background music nhỏ hơn sound effect.

Sound effect phải rõ nhưng không gây khó chịu.

## Cleanup

Khi đổi level:

- không để nhiều BGM phát cùng lúc
- dừng/cleanup audio không còn dùng
