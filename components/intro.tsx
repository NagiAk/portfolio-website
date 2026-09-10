"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Star from "./star";
import portrait from "@/public/circle-me.png";

// entrance is timed to begin just as the loader lifts away
const REVEAL = 2.3;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mx-auto flex min-h-screen w-full max-w-[1120px] scroll-mt-28 items-center px-5 pb-16 pt-24 sm:px-10"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 sm:grid-cols-[1.4fr_0.9fr]">
        {/* ---- copy ---- */}
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-inkSoft"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: REVEAL }}
          >
            <span className="live-dot" /> Available for work · Remote or relocation
          </motion.div>

          <h1 className="mb-6 font-display text-[clamp(2.6rem,8.5vw,6rem)] font-normal leading-[0.98] tracking-tightest">
            {["Mohammed", "Lamchiyakh,"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: REVEAL + i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: REVEAL + 0.16,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <em className="italic text-clay">backend</em> &amp;{" "}
                <em className="italic text-clay">AI</em> engineer.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mb-9 max-w-[36ch] text-[clamp(1.02rem,2.4vw,1.3rem)] text-inkSoft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: REVEAL + 0.28 }}
          >
            I build <b className="font-semibold text-ink">scalable SaaS platforms</b>,
            REST APIs, and{" "}
            <span className="font-semibold text-teal">AI-powered automation</span>{" "}
            — backend-focused, with a soft spot for RAG &amp; LLM workflows.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: REVEAL + 0.36 }}
          >
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="group flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_var(--shadow)]"
            >
              Contact me
              <BsArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2.5 rounded-full border border-line bg-card px-6 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-clay hover:text-clay"
            >
              Download CV
              <HiDownload className="transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="ml-1 flex gap-2.5">
              <a
                href="https://www.linkedin.com/in/mohammed-lamchiyakh-08449821b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-[46px] w-[46px] place-items-center rounded-full border border-line bg-card text-lg text-inkSoft transition-all hover:-translate-y-1 hover:border-clay hover:text-clay"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/NagiAk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-[46px] w-[46px] place-items-center rounded-full border border-line bg-card text-xl text-inkSoft transition-all hover:-translate-y-1 hover:border-clay hover:text-clay"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ---- portrait + zellige rings ---- */}
        <motion.div
          className="order-first grid place-items-center sm:order-none"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: REVEAL + 0.1, duration: 0.7 }}
        >
          <div className="relative aspect-square w-[min(300px,80%)]">
            <Star
              className="absolute -inset-[8%] animate-[spin_38s_linear_infinite] stroke-clay opacity-50"
              strokeWidth={1.2}
            />
            <Star
              className="absolute inset-[4%] animate-[spin_26s_linear_infinite] stroke-teal opacity-50 [animation-direction:reverse]"
              strokeWidth={1.2}
            />

            <div className="absolute inset-[14%] overflow-hidden rounded-full border border-line shadow-[inset_0_0_40px_var(--shadow)]">
              <Image
                src={portrait}
                alt="Mohammed Lamchiyakh portrait"
                fill
                priority
                quality={95}
                className="object-cover"
              />
            </div>

            <span className="absolute left-[-6%] top-[6%] rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-inkSoft shadow-[0_8px_24px_var(--shadow)]">
              Symfony
            </span>
            <span className="absolute bottom-[10%] right-[-8%] rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-teal shadow-[0_8px_24px_var(--shadow)]">
              Laravel
            </span>
            <span className="absolute bottom-[38%] left-[-14%] hidden rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-clay shadow-[0_8px_24px_var(--shadow)] sm:block">
              AI · RAG
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
