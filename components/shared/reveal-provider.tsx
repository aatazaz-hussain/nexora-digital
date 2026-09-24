"use client";

import { useRevealOnScroll } from "@/lib/hooks/use-reveal";

export function RevealProvider() {
  useRevealOnScroll();
  return null;
}