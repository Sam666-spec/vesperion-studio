"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Reveal.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean; // чтобы можно было включить/выключить "один раз"
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--reveal-delay", `${delayMs}ms`);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = "true";
          if (once) io.unobserve(el);
        } else {
          // если once=false — можно прятать обратно при уходе
          if (!once) el.dataset.revealed = "false";
        }
      },
      {
        threshold: 0.12,
        // начинает анимацию чуть раньше, до полного попадания в viewport
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delayMs, once]);

  return (
    <div ref={ref} className={cn(styles.reveal, className)} data-revealed="false">
      {children}
    </div>
  );
}