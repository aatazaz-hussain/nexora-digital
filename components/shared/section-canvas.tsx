"use client";

import { useEffect, useRef } from "react";

type Preset = "particles" | "grid" | "circuit";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Node {
  x: number;
  y: number;
  phase: number;
}

interface SectionCanvasProps {
  preset: Preset;
  className?: string;
}

export function SectionCanvas({ preset, className }: SectionCanvasProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const particles: Particle[] = [];
    const nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedParticles = () => {
      particles.length = 0;
      const count = Math.max(40, Math.min(120, Math.floor((width * height) / 22000)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.6 + 0.7,
        });
      }
    };

    const seedNodes = () => {
      nodes.length = 0;
      const count = 26;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticles = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 170, 255, 0.8)";
        ctx.fill();
      }
      const maxDist = 160;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(30, 94, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawGrid = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const size = 56;
      const offset = (t * 0.02) % size;
      ctx.strokeStyle = "rgba(30, 94, 255, 0.18)";
      ctx.lineWidth = 1;
      for (let x = -size + offset; x < width + size; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -size + offset; y < height + size; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawCircuit = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = (Math.sin(t * 0.0015 + n.phase) + 1) / 2;
        const radius = 2 + pulse * 6;
        const alpha = 0.35 + pulse * 0.55;
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4);
        glow.addColorStop(0, `rgba(56, 189, 248, ${alpha})`);
        glow.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(180, 220, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      if (preset === "particles") drawParticles(t);
      else if (preset === "grid") drawGrid(t);
      else drawCircuit(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    seedParticles();
    seedNodes();
    raf = requestAnimationFrame(loop);

    const onResize = () => {
      resize();
      seedParticles();
      seedNodes();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [preset]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}