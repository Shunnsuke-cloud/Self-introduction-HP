"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "motion";

// Content is visible in server HTML and with JavaScript disabled. Animation starts
// only when the observer fires; no persistent opacity:0 or hydration-dependent UI.
export function Reveal({ children, className = "", delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let controls: ReturnType<typeof animate> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      controls = animate(element, { opacity: [0.35, 1], y: [20, 0] }, {
        duration: 0.65, delay, ease: [0.22, 1, 0.36, 1],
      });
      observer.disconnect();
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => { observer.disconnect(); controls?.stop(); };
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
