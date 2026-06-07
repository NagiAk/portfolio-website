"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mx-auto w-full max-w-[1120px] scroll-mt-28 px-5 py-20 sm:px-10"
    >
      <SectionHeading number="03">Toolbox</SectionHeading>

      <div className="space-y-7">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.55 }}
            className={`grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr] sm:gap-8 ${
              gi > 0 ? "border-t border-line pt-7" : ""
            }`}
          >
            <div className="pt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {group.category}
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="group flex cursor-default items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2.5 text-[0.95rem] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-clay hover:bg-[color-mix(in_srgb,var(--clay)_7%,var(--card))] hover:text-clay"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
