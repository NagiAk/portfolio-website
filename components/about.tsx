"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const stats = [
  { num: "~50%", label: "Faster load times" },
  { num: "~30%", label: "Backend perf gain" },
  { num: "3", label: "Industries shipped" },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mx-auto w-full max-w-[1120px] scroll-mt-28 px-5 py-28 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <SectionHeading number="01">About</SectionHeading>

        <div className="grid grid-cols-1 items-start gap-14 sm:grid-cols-2">
          <div className="space-y-5 text-lg text-inkSoft">
            <p>
              I&apos;m Mohammed — a{" "}
              <b className="font-semibold text-ink">
                backend &amp; AI-focused full-stack developer
              </b>{" "}
              based in Morocco. I build scalable SaaS platforms, REST APIs, AI
              assistants and automation systems, and{" "}
              <em className="italic text-clay">
                the problem-solving is my favourite part
              </em>{" "}
              — that moment a stubborn bug or a slow query finally gives way.
            </p>
            <p>
              I specialise in{" "}
              <b className="font-semibold text-ink">
                Symfony, Laravel, Node.js and React
              </b>
              , with AI-powered workflows like{" "}
              <b className="font-semibold text-ink">RAG pipelines and LLM
              integrations</b>. I&apos;ve shipped production platforms across
              healthcare, e-commerce and management, designed secure multi-role
              authentication, and optimised backends for real performance gains.
              I work fluently in Arabic, French and English, and I&apos;m
              currently going deeper with Next.js &amp; TypeScript.
            </p>
          </div>

          <div className="grid gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-card px-7 py-6"
              >
                <div className="font-display text-4xl leading-none text-clay">
                  {s.num}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
