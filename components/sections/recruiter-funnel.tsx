"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { links, whyHireUs } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function RecruiterFunnel() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".narrative-row",
        { opacity: 0, x: 34 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".narrative-shell",
            start: "top 70%",
          },
        },
      );
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <section className="section-shell" id="recruiter-funnel" ref={rootRef}>
      <div className="mb-8">
        <p className="eyebrow">Recruiter-Centric Funnel</p>
        <h2 className="title-lg">Fast decision-making flow for HR leaders and CXOs</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="panel narrative-shell">
          <h3 className="text-xl font-semibold text-[var(--strong)]">Why Hire Us</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Split-screen narrative mapping industry expectations with our curriculum proof points.
          </p>
          <div className="mt-6 space-y-4">
            {whyHireUs.map((pair) => (
              <div key={pair.industryNeed} className="narrative-row grid gap-3 rounded-2xl border border-[var(--border)] p-4 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Industry Need</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--strong)]">{pair.industryNeed}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">FoT Response</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--strong)]">{pair.duResponse}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel" id="brochure">
          <h3 className="text-xl font-semibold text-[var(--strong)]">Placement Brochure</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">High-speed, embedded viewer with direct recruiter actions.</p>
          <div className="mt-5 overflow-hidden rounded-xl border border-[var(--border)] bg-black/40">
            <iframe
              title="Placement Brochure"
              src={`${links.brochure}#toolbar=0&navpanes=0&scrollbar=0`}
              className="h-[24rem] w-full"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              href={links.brochure}
              target="_blank"
              rel="noreferrer"
            >
              Open Brochure in New Tab
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
              href={links.samarth}
              target="_blank"
              rel="noreferrer"
            >
              Continue to Samarth Registration
            </motion.a>
          </div>
        </article>
      </div>
    </section>
  );
}
