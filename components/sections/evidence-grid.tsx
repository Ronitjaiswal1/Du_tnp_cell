"use client";

import { motion } from "framer-motion";
import { achievements, credibility, departments } from "@/lib/site-data";

export function EvidenceGrid() {
  return (
    <section className="section-shell" id="evidence">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Evidence Modules</p>
          <h2 className="title-lg">Proof that aligns with Tier-1 hiring benchmarks</h2>
        </div>
      </div>

      <div className="grid auto-rows-[minmax(170px,auto)] gap-4 md:grid-cols-6">
        {credibility.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="bento-card md:col-span-2"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">{item.title}</p>
            <p className="mt-3 text-3xl font-semibold text-[var(--strong)]">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
          </motion.article>
        ))}

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="bento-card md:col-span-4"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Achievement Ticker</p>
          <div className="ticker mt-5">
            <div className="ticker-track">
              {[...achievements, ...achievements].map((item, i) => (
                <span key={`${item}-${i}`} className="ticker-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {departments.map((dept, index) => (
          <motion.article
            key={dept.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.06 * index }}
            className="bento-card md:col-span-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--strong)]">
              <span className="icon-orb" aria-hidden="true" />
              {dept.code}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[var(--strong)]">{dept.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{dept.usp}</p>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              {dept.highlights.map((highlight) => (
                <li key={highlight} className="rounded-full border border-[var(--border)] px-3 py-1">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
