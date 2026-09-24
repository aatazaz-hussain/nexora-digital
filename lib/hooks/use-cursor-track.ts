"use client";

import { useEffect, useState } from "react";

interface CursorState {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useCursorTrack() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    let raf = 0;
    let nextX = 0;
    let nextY = 0;

    const update = () => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const nx = (nextX / w) * 2 - 1;
      const ny = (nextY / h) * 2 - 1;
      setCursor({
        x: nextX,
        y: nextY,
        normalizedX: Math.max(-1, Math.min(1, nx)),
        normalizedY: Math.max(-1, Math.min(1, ny)),
      });
      raf = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return cursor;
}