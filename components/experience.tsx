"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      id="experience"
      className="mx-auto w-full max-w-[1120px] scroll-mt-28 px-5 py-20 sm:px-10"
    >
      <SectionHeading number="05">Experience</SectionHeading>
      <div className="tl max-w-2xl">
        {experiencesData.map((item, index) => (
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
    </section>
  );
}
