import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  desc?: string;
  right?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  desc,
  right,
  children,
  className,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || desc || right);

  return (
    <section id={id} className={["lx-section", className].filter(Boolean).join(" ")}>
      <div className="lx-container">
        {hasHeader && (
          <header className="lx-section__head">
            <div className="lx-section__text">
              {eyebrow && <div className="lx-eyebrow">{eyebrow}</div>}
              {title && <h2 className="lx-h2">{title}</h2>}
              {desc && <p className="lx-muted lx-section__desc">{desc}</p>}
            </div>

            {right && <div className="lx-section__right">{right}</div>}
          </header>
        )}

        {children && <div className="lx-section__body">{children}</div>}
      </div>
    </section>
  );
}