"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { studiesData, certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Studies() {
  const { ref } = useSectionInView("Studies");

  return (
    <section
      ref={ref}
      id="studies"
      className="mx-auto w-full max-w-[1120px] scroll-mt-28 px-5 py-20 sm:px-10"
    >
      <SectionHeading number="04">Education</SectionHeading>

      <div className="tl max-w-2xl">
        {studiesData.map((item, index) => (
          <motion.div
            key={index}
            className="relative pb-10 last:pb-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <span className="absolute -left-[2.75rem] top-0.5 grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-clay bg-paper text-xs text-clay">
              {item.icon}
            </span>
            <div className="rounded-2xl border border-line bg-card px-7 py-6 transition-transform hover:translate-x-1.5">
              <div className="font-mono text-xs uppercase tracking-wider text-clay">
                {item.date}
              </div>
              <h3 className="mb-0.5 mt-1.5 font-display text-xl font-medium">
                {item.title}
              </h3>
              <div className="mb-2 font-mono text-[0.74rem] text-muted">
                {item.location}
              </div>
              <p className="text-inkSoft">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---- certifications ---- */}
      <div className="mt-12">
        <div className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Certifications
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex items-start gap-3 rounded-2xl border border-line bg-card px-5 py-4"
            >
              <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border border-clay text-clay">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <div>
                <div className="font-medium leading-snug text-ink">
                  {cert.title}
                </div>
                <div className="font-mono text-[0.72rem] text-muted">
                  {cert.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
