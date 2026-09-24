"use client";

import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const trigger = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const h = window.innerHeight || 0;
      const triggerLine = h * 0.82;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerLine && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
    };

    trigger();
    window.addEventListener("scroll", trigger, { passive: true });
    window.addEventListener("resize", trigger);

    return () => {
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("resize", trigger);
    };
  }, []);
}