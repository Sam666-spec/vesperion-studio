"use client";

import { useMemo } from "react";
import { ArrowUpRight, BarChart3, Code2, LayoutGrid, Search, Sparkles } from "lucide-react";
import styles from "./Services.module.css";
import type { ServiceItem } from "./services.data";

type Props = {
  item: ServiceItem;
  onDetail?: () => void;
};

const ICONS: Record<ServiceItem["icon"], React.ComponentType<{ size?: number }>> = {
  layout: LayoutGrid,
  sparkles: Sparkles,
  code: Code2,
  search: Search,
  barchart: BarChart3,
};

const STACK_FEATURED = ["Next.js", "React", "TypeScript", "SEO"];
const STACK_ONE: Record<ServiceItem["id"], string> = {
  landing: "Konverzní UI",
  design: "Design systém",
  dev: "Core Web Vitals",
  seo: "SEO základy",
  growth: "Analytika & CRO",
};

export default function ServiceCard({ item, onDetail }: Props) {
  const Icon = ICONS[item.icon];

  const stack = useMemo(() => {
    if (item.featured) return STACK_FEATURED;
    return [STACK_ONE[item.id] ?? "Modern stack"];
  }, [item.featured, item.id]);

  return (
    <article className={[styles.card, item.featured ? styles.featured : ""].filter(Boolean).join(" ")}>
      <div className={styles.cardInner}>
        <div className={styles.cardHead}>
          <div className={styles.iconPill} aria-hidden="true">
            <Icon size={18} />
          </div>

          <div style={{ minWidth: 0 }}>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{item.title}</h3>
              {item.featured && item.badge ? (
                <span className={styles.badge}>{item.badge}</span>
              ) : null}
            </div>

            <p className={styles.desc}>{item.description}</p>
          </div>
        </div>

        <ul className={styles.list}>
          {item.bullets.map((b) => (
            <li key={b} className={styles.listItem}>
              <span className={styles.check} aria-hidden="true">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className={styles.stackRow} aria-label="Stack">
          {stack.map((t) => (
            <span key={t} className={styles.stackPill}>{t}</span>
          ))}
        </div>

        <footer className={styles.cardFoot}>
          <span className={styles.footHint}>{item.footerText}</span>

          <button
            type="button"
            className={[
              styles.detailBtn,
              item.featured ? styles.detailBtnGold : "",
            ].filter(Boolean).join(" ")}
            onClick={() => onDetail?.()}
            aria-label={`Zobrazit detail služby ${item.title}`}
          >
            Detail <ArrowUpRight size={14} />
          </button>
        </footer>
      </div>
    </article>
  );
}