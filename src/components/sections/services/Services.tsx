"use client";

import { useMemo, useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import LeadModal from "@/components/ui/LeadModal";

import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "./services.data";

export default function Services() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string | null>(null);

  const items = useMemo(() => SERVICES, []);

  const openLeadFor = (id: string) => {
    setServiceId(id);
    setLeadOpen(true);
  };

  return (
    <>
      <Section
        id="sluzby"
        className="lx-section--services"
        eyebrow="Služby"
       desc="Prémiový web s jasným cílem — konverze. Struktura, design a výkon navržené pro reálný výsledek."
      >
        <div className={styles.wrap}>
          <div className={styles.grid}>
            {items.map((item, i) => (
              <Reveal
                key={item.id}
                delayMs={70 + i * 80}
                className={item.featured ? styles.featuredWrap : undefined}
              >
                <ServiceCard item={item} onDetail={() => openLeadFor(item.id)} />
              </Reveal>
            ))}
          </div>

          <div className={styles.subline} aria-hidden="true" />
        </div>
        <div className="lx-divider" />
      </Section>

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        serviceId={serviceId}
      />
    </>
  );
}