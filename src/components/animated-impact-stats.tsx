"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ImpactStat =
  | { label: string; type: "single"; value: number; suffix: string }
  | { label: string; type: "range"; from: number; to: number; suffix: string };

type AnimatedImpactStatsProps = {
  stats: readonly ImpactStat[];
};

export function AnimatedImpactStats({ stats }: AnimatedImpactStatsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const id = window.requestAnimationFrame(() => {
        setProgress(1);
        setComplete(true);
      });
      return () => window.cancelAnimationFrame(id);
    }

    let raf = 0;
    const durationMs = 1900;
    let startTs = 0;

    const step = (timestamp: number) => {
      if (!startTs) startTs = timestamp;
      const elapsed = timestamp - startTs;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);

      if (t < 1) {
        raf = window.requestAnimationFrame(step);
      } else {
        setComplete(true);
      }
    };

    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [started]);

  const displayValues = useMemo(() => {
    return stats.map((stat) => {
      if (stat.type === "single") {
        const value = Math.round(stat.value * progress);
        return `${value}${stat.suffix}`;
      }
      const from = Math.round(stat.from * progress);
      const to = Math.round(stat.to * progress);
      return `${from}-${to}${stat.suffix}`;
    });
  }, [progress, stats]);

  return (
    <section className="mt-14 impact-band" ref={containerRef}>
      {stats.map((stat, index) => (
        <article key={stat.label} className="impact-item">
          <p className={`impact-value ${complete ? "impact-value-complete" : ""}`}>
            {displayValues[index]}
          </p>
          <p className="impact-label">{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
