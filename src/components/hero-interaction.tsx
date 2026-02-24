"use client";

import { useEffect } from "react";

type HeroInteractionProps = {
  targetId: string;
};

export function HeroInteraction({ targetId }: HeroInteractionProps) {
  useEffect(() => {
    const hero = document.getElementById(targetId);
    if (!hero) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    let raf = 0;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      hero.style.setProperty("--mx", `${currentX}%`);
      hero.style.setProperty("--my", `${currentY}%`);
      raf = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width) * 100;
      targetY = ((event.clientY - rect.top) / rect.height) * 100;
    };

    const handleLeave = () => {
      targetX = 50;
      targetY = 50;
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(raf);
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetId]);

  return null;
}
