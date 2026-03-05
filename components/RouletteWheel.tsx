'use client';

import { useEffect, useRef, useCallback } from 'react';
import { PRIZES, Prize } from '@/lib/prizes';

interface RouletteWheelProps {
  spinning: boolean;
  targetPrize: Prize | null;
  onSpinComplete: () => void;
}

const TWO_PI = Math.PI * 2;

function buildSegmentAngles() {
  const total = PRIZES.reduce((s, p) => s + p.probability, 0);
  const angles: { startAngle: number; endAngle: number; prize: Prize }[] = [];
  let current = 0;
  for (const prize of PRIZES) {
    const fraction = prize.probability / total;
    const start = current;
    const end = current + fraction * TWO_PI;
    angles.push({ startAngle: start, endAngle: end, prize });
    current = end;
  }
  return angles;
}

const SEGMENT_ANGLES = buildSegmentAngles();

function drawWheel(ctx: CanvasRenderingContext2D, rotation: number, size: number) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 10;

  ctx.clearRect(0, 0, size, size);

  // Outer glow ring
  ctx.save();
  ctx.shadowColor = 'rgba(255, 178, 197, 0.45)';
  ctx.shadowBlur = 30;
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 8, 0, TWO_PI);
  ctx.fillStyle = '#f5dde4';
  ctx.fill();
  ctx.restore();

  // Segments
  for (const seg of SEGMENT_ANGLES) {
    const start = seg.startAngle + rotation;
    const end = seg.endAngle + rotation;
    const mid = (start + end) / 2;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = seg.prize.color;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(mid);
    ctx.textAlign = 'right';

    const segAngle = seg.endAngle - seg.startAngle;
    const isSmall = segAngle < 0.3;

    ctx.fillStyle = seg.prize.textColor;

    ctx.font = `bold ${isSmall ? Math.max(8, radius * 0.065) : Math.max(10, radius * 0.075)}px Arial, sans-serif`;
    ctx.fillText(seg.prize.shortLabel, radius - 14, 4);

    ctx.restore();
  }

  // Center circle
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.13);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(1, '#fce8ee');
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.13, 0, TWO_PI);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#f5c0d0';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Outer rim
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, TWO_PI);
  ctx.strokeStyle = 'rgba(255,255,255,0.6)';
  ctx.lineWidth = 3;
  ctx.stroke();
}

export default function RouletteWheel({ spinning, targetPrize, onSpinComplete }: RouletteWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const spinningRef = useRef(false);

  const SIZE = 480;

  const draw = useCallback((rotation: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawWheel(ctx, rotation, SIZE);
  }, []);

  useEffect(() => {
    draw(rotationRef.current);
  }, [draw]);

  useEffect(() => {
    if (!spinning || !targetPrize) return;
    if (spinningRef.current) return;
    spinningRef.current = true;

    const seg = SEGMENT_ANGLES.find(s => s.prize.label === targetPrize.label);
    if (!seg) return;

    const segMid = (seg.startAngle + seg.endAngle) / 2;
    const targetRotation = -Math.PI / 2 - segMid;
    const extraSpins = (5 + Math.floor(Math.random() * 4)) * TWO_PI;
    const currentNorm = rotationRef.current % TWO_PI;
    const targetNorm = ((targetRotation % TWO_PI) + TWO_PI) % TWO_PI;
    const diff = ((targetNorm - currentNorm) + TWO_PI) % TWO_PI;
    const finalTarget = rotationRef.current + diff + extraSpins;

    const startRotation = rotationRef.current;
    const totalDelta = finalTarget - startRotation;
    const duration = 5000 + Math.random() * 1500;
    let startTime: number | null = null;

    function easeOut(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      rotationRef.current = startRotation + totalDelta * easeOut(progress);
      draw(rotationRef.current);
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        rotationRef.current = finalTarget;
        draw(rotationRef.current);
        spinningRef.current = false;
        onSpinComplete();
      }
    }

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [spinning, targetPrize, draw, onSpinComplete]);

  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Pointer arrow — deep rose */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 z-10">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderTop: '32px solid #c94f82',
            filter: 'drop-shadow(0 2px 6px rgba(201,79,130,0.35))',
          }}
        />
      </div>

      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        className="rounded-full"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}
