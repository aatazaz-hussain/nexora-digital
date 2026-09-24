"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const start = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };

      requestAnimationFrame(tick);
    };

    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || 0;
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        start();
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [target, duration]);

  const display = value.toFixed(decimals);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}