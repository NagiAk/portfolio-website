"use client";

import React from "react";
import { motion } from "framer-motion";
import { flagshipProject as fp } from "@/lib/data";

function Bullet() {
  return (
    <span className="mt-[7px] grid h-4 w-4 flex-shrink-0 place-items-center">
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full stroke-clay"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l9 9-9 9-9-9z" />
      </svg>
    </span>
  );
}

export default function Flagship() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[26px] border border-line bg-card px-6 py-9 shadow-[0_26px_70px_-40px_var(--shadow)] sm:px-11 sm:py-12"
    >
      {/* zellige corner motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-[0.55]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23BC4B27' stroke-opacity='0.22' stroke-width='1'%3E%3Cpath d='M60 8l52 52-52 52L8 60z'/%3E%3Cpath d='M60 30l30 30-30 30-30-30z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative">
        {/* header */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="rounded-full border border-clay/40 bg-[color-mix(in_srgb,var(--clay)_12%,transparent)] px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-clay">
            {fp.eyebrow}
          </span>
          <span className="font-mono text-[0.72rem] text-muted">
            {fp.period}
          </span>
        </div>

        <h3 className="mt-5 max-w-[20ch] font-display text-[clamp(1.8rem,4.4vw,3rem)] font-medium leading-[1.08] tracking-tight">
          {fp.title}
        </h3>

        <div className="mt-2 font-mono text-[0.78rem] uppercase tracking-wider text-teal">
          {fp.role}
        </div>

        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-inkSoft">
          {fp.summary}
        </p>

        {/* metrics */}
        <div className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-6">
          {fp.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-[clamp(1.4rem,3vw,2.1rem)] leading-none text-clay">
                {m.num}
              </div>
              <div className="mt-1.5 font-mono text-[0.66rem] uppercase tracking-wider text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* two columns of substance */}
        <div className="mt-9 grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-12">
          {[fp.ai, fp.platform].map((col, i) => (
            <div key={col.label}>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span className={i === 0 ? "text-clay" : "text-teal"}>
                  {i === 0 ? "◆" : "◇"}
                </span>{" "}
                {col.label}
              </div>
              <ul className="space-y-3">
                {col.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.97rem] leading-relaxed text-inkSoft">
                    <Bullet />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* stack */}
        <ul className="mt-9 flex flex-wrap gap-2">
          {fp.stack.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line bg-paper2 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-inkSoft"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* NDA note */}
        <p className="mt-7 flex items-start gap-2.5 font-mono text-[0.72rem] leading-relaxed text-muted">
          <svg
            viewBox="0 0 24 24"
            className="mt-[1px] h-3.5 w-3.5 flex-shrink-0 stroke-muted"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          {fp.note}
        </p>
      </div>
    </motion.article>
  );
}
