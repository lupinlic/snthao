"use client";

import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { birthdayConfig } from "@/game/data";

type Gift = (typeof birthdayConfig.gifts)[number];
type FallingGift = Gift & { x: number; y: number; speed: number; size: number; sway: number; phase: number };
type Arrow = { x: number; y: number; vx: number; vy: number; age: number };

export default function GiftArchery({
  collectedIds,
  setCollectedIds,
  paused,
  onGiftHit,
}: {
  collectedIds: string[];
  setCollectedIds: Dispatch<SetStateAction<string[]>>;
  paused: boolean;
  onGiftHit: (gift: Gift) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const collectedRef = useRef(collectedIds);
  const pausedRef = useRef(paused);

  useEffect(() => {
    collectedRef.current = collectedIds;
  }, [collectedIds]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let spawnElapsed = 0;
    let drawing = false;
    let pullPoint: { x: number; y: number } | null = null;
    let pointerId: number | null = null;
    const gifts: FallingGift[] = [];
    const arrows: Arrow[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const bow = () => ({ x: 72, y: height - 92 });
    const localPoint = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };

    const startPull = (event: PointerEvent) => {
      if (pausedRef.current) return;
      const point = localPoint(event);
      if (point.x > 160 || point.y < height - 185) return;
      drawing = true;
      pointerId = event.pointerId;
      pullPoint = point;
      canvas.setPointerCapture(event.pointerId);
    };

    const movePull = (event: PointerEvent) => {
      if (!drawing || event.pointerId !== pointerId) return;
      pullPoint = localPoint(event);
    };

    const releasePull = (event: PointerEvent, shouldShoot: boolean) => {
      if (!drawing || event.pointerId !== pointerId) return;
      const anchor = bow();
      const point = localPoint(event);
      const dx = anchor.x - point.x;
      const dy = anchor.y - point.y;
      const distance = Math.hypot(dx, dy);

      if (shouldShoot && distance > 14) {
        const power = Math.min(22, 8 + distance * 0.12);
        arrows.push({ x: anchor.x, y: anchor.y, vx: (dx / distance) * power, vy: (dy / distance) * power, age: 0 });
      }

      drawing = false;
      pullPoint = null;
      pointerId = null;
    };

    const drawGift = (gift: FallingGift) => {
      const boxWidth = gift.size;
      const boxHeight = gift.size * 0.76;
      context.save();
      context.translate(gift.x, gift.y);
      context.shadowColor = `${gift.color}88`;
      context.shadowBlur = 20;
      context.fillStyle = gift.color;
      context.beginPath();
      context.roundRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight, 9);
      context.fill();
      context.shadowBlur = 0;
      context.fillStyle = "rgba(255,255,255,.26)";
      context.fillRect(-boxWidth / 2, -boxHeight / 2, boxWidth, 10);
      context.fillStyle = "#fff4cf";
      context.fillRect(-5, -boxHeight / 2, 10, boxHeight);
      context.fillRect(-boxWidth / 2, -4, boxWidth, 8);
      context.font = `${Math.round(gift.size * 0.38)}px sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(gift.emoji, 0, 3);
      context.restore();
    };

    const drawHeartTip = (x: number, y: number) => {
      context.save();
      context.translate(x, y);
      context.rotate(-Math.PI / 2);
      context.scale(0.72, 0.72);
      context.fillStyle = "#ff5b9e";
      context.shadowColor = "rgba(255, 63, 145, .8)";
      context.shadowBlur = 10;
      context.beginPath();
      context.moveTo(0, 16);
      context.bezierCurveTo(-5, 11, -17, 3, -16, -5);
      context.bezierCurveTo(-15, -14, -4, -17, 0, -8);
      context.bezierCurveTo(4, -17, 15, -14, 16, -5);
      context.bezierCurveTo(17, 3, 5, 11, 0, 16);
      context.closePath();
      context.fill();
      context.shadowBlur = 0;
      context.strokeStyle = "#fff0f7";
      context.lineWidth = 1.5;
      context.stroke();
      context.restore();
    };

    const drawBow = () => {
      const anchor = bow();
      let aimX = 1;
      let aimY = -0.18;

      if (drawing && pullPoint) {
        const dx = anchor.x - pullPoint.x;
        const dy = anchor.y - pullPoint.y;
        const distance = Math.hypot(dx, dy) || 1;
        aimX = dx / distance;
        aimY = dy / distance;
      }

      const angle = Math.atan2(aimY, aimX);
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const localPullPoint = drawing && pullPoint
        ? {
            x: (pullPoint.x - anchor.x) * cosine + (pullPoint.y - anchor.y) * sine,
            y: -(pullPoint.x - anchor.x) * sine + (pullPoint.y - anchor.y) * cosine,
          }
        : { x: 0, y: 0 };
      const top = { x: -20, y: -54 };
      const bottom = { x: -20, y: 54 };

      context.save();
      context.translate(anchor.x, anchor.y);
      context.rotate(angle);
      context.lineCap = "round";
      context.shadowColor = "rgba(202, 71, 127, .42)";
      context.shadowBlur = 18;
      const bowGradient = context.createLinearGradient(top.x, top.y, bottom.x, bottom.y);
      bowGradient.addColorStop(0, "#a94f76");
      bowGradient.addColorStop(0.48, "#f27eae");
      bowGradient.addColorStop(1, "#b95680");
      context.strokeStyle = bowGradient;
      context.lineWidth = 13;
      context.beginPath();
      context.moveTo(top.x, top.y);
      context.bezierCurveTo(47, -31, 47, 31, bottom.x, bottom.y);
      context.stroke();

      context.shadowBlur = 0;
      context.strokeStyle = "rgba(255, 225, 238, .92)";
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(top.x, top.y);
      context.bezierCurveTo(39, -28, 39, 28, bottom.x, bottom.y);
      context.stroke();

      context.strokeStyle = "#ff4d98";
      context.shadowColor = "rgba(255, 58, 145, .8)";
      context.shadowBlur = 16;
      context.lineWidth = 6;
      context.beginPath();
      context.moveTo(top.x, top.y);
      context.lineTo(localPullPoint.x, localPullPoint.y);
      context.lineTo(bottom.x, bottom.y);
      context.stroke();
      context.shadowBlur = 0;
      context.strokeStyle = "#fff0f7";
      context.lineWidth = 0.8;
      context.beginPath();
      context.moveTo(top.x, top.y);
      context.lineTo(localPullPoint.x, localPullPoint.y);
      context.lineTo(bottom.x, bottom.y);
      context.stroke();

      context.strokeStyle = "#f7d487";
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-8, -13);
      context.lineTo(-8, 13);
      context.stroke();

      if (drawing) {
        context.strokeStyle = "#9d5272";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(-34, 0);
        context.lineTo(17, 0);
        context.stroke();
        drawHeartTip(22, 0);
      }
      context.restore();

      if (drawing) {
        context.save();
        context.fillStyle = "#ff5b9e";
        context.globalAlpha = 0.28;
        for (let index = 1; index <= 5; index += 1) {
          context.beginPath();
          context.arc(anchor.x + aimX * index * 27, anchor.y + aimY * index * 27 + index * index * 2.2, 2, 0, Math.PI * 2);
          context.fill();
        }
        context.restore();
      }
    };

    const drawArrow = (arrow: Arrow) => {
      const angle = Math.atan2(arrow.vy, arrow.vx);
      context.save();
      context.translate(arrow.x, arrow.y);
      context.rotate(angle);
      context.strokeStyle = "#a94f76";
      context.lineWidth = 3.5;
      context.shadowColor = "rgba(255, 83, 154, .42)";
      context.shadowBlur = 7;
      context.beginPath();
      context.moveTo(-34, 0);
      context.lineTo(17, 0);
      context.stroke();
      context.shadowBlur = 0;
      context.strokeStyle = "#ffe0ed";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(-30, 0);
      context.lineTo(15, 0);
      context.stroke();
      context.strokeStyle = "#f6a6c5";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(-27, 0);
      context.lineTo(-35, -7);
      context.lineTo(-32, 0);
      context.lineTo(-35, 7);
      context.stroke();
      drawHeartTip(22, 0);
      context.restore();
    };

    const spawnGift = () => {
      const found = new Set(collectedRef.current);
      const available = birthdayConfig.gifts.filter((gift) => !found.has(gift.id) && !gifts.some((active) => active.id === gift.id));
      if (!available.length || gifts.length >= 3) return;

      const gift = available[Math.floor(Math.random() * available.length)];
      const leftEdge = Math.max(150, width * 0.34);
      const rightEdge = Math.max(leftEdge + 40, width - 42);
      gifts.push({
        ...gift,
        x: leftEdge + Math.random() * (rightEdge - leftEdge),
        y: -60,
        speed: 2.1 + Math.random() * 1.5,
        size: width < 500 ? 52 : 62,
        sway: 0.35 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    };

    const draw = (time: number) => {
      const step = previousTime ? Math.min((time - previousTime) / 16.67, 2.5) : 1;
      previousTime = time;
      if (!pausedRef.current) {
        spawnElapsed += step * 16.67;
        if (spawnElapsed >= 900) {
          spawnElapsed = 0;
          spawnGift();
        }
      }

      context.clearRect(0, 0, width, height);

      for (let index = gifts.length - 1; index >= 0; index -= 1) {
        const gift = gifts[index];
        if (!pausedRef.current) {
          gift.y += gift.speed * step;
          gift.x += Math.sin(time / 700 + gift.phase) * gift.sway * step;
        }
        drawGift(gift);
        if (!pausedRef.current && gift.y > height + gift.size) gifts.splice(index, 1);
      }

      for (let arrowIndex = arrows.length - 1; !pausedRef.current && arrowIndex >= 0; arrowIndex -= 1) {
        const arrow = arrows[arrowIndex];
        arrow.x += arrow.vx * step;
        arrow.y += arrow.vy * step;
        arrow.vy += 0.14 * step;
        arrow.age += step;

        const hitIndex = gifts.findIndex((gift) => Math.abs(arrow.x - gift.x) < gift.size * 0.55 && Math.abs(arrow.y - gift.y) < gift.size * 0.45);
        if (hitIndex >= 0) {
          const [hit] = gifts.splice(hitIndex, 1);
          setCollectedIds((current) => current.includes(hit.id) ? current : [...current, hit.id]);
          arrows.length = 0;
          pausedRef.current = true;
          onGiftHit(hit);
          continue;
        }

        drawArrow(arrow);
        if (arrow.x > width + 60 || arrow.y > height + 60 || arrow.x < -60 || arrow.age > 100) arrows.splice(arrowIndex, 1);
      }

      drawBow();
      frame = window.requestAnimationFrame(draw);
    };

    const cancelPull = () => {
      drawing = false;
      pullPoint = null;
      pointerId = null;
    };
    const stopPull = (event: PointerEvent) => releasePull(event, true);

    resize();
    canvas.addEventListener("pointerdown", startPull);
    canvas.addEventListener("pointermove", movePull);
    canvas.addEventListener("pointerup", stopPull);
    canvas.addEventListener("pointercancel", cancelPull);
    window.addEventListener("resize", resize);
    window.addEventListener("blur", cancelPull);
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("pointerdown", startPull);
      canvas.removeEventListener("pointermove", movePull);
      canvas.removeEventListener("pointerup", stopPull);
      canvas.removeEventListener("pointercancel", cancelPull);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", cancelPull);
    };
  }, [onGiftHit, setCollectedIds]);

  return <canvas ref={canvasRef} className="gift-archery-canvas" aria-label="Kéo dây cung rồi thả để bắn trúng các hộp quà" />;
}