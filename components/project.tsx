"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  const alt = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 items-center gap-10 border-t border-line py-12 last:border-b sm:grid-cols-2"
    >
      {/* text */}
      <div className={alt ? "sm:order-2" : ""}>
        <span className="font-mono text-sm text-muted">
          0{index + 1} / 0{projectsData.length}
        </span>
        <h3 className="mb-4 mt-2 font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-tight">
          {title}
        </h3>
        <p className="mb-6 max-w-[46ch] leading-relaxed text-inkSoft">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <li
              key={i}
              className="rounded-full border border-line bg-paper2 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-inkSoft transition-colors group-hover:border-[color-mix(in_srgb,var(--clay)_40%,var(--line))]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* visual */}
      <div
        className={`relative order-first aspect-[4/3] overflow-hidden rounded-[18px] border border-line bg-card shadow-[0_18px_50px_-20px_var(--shadow)] transition-transform duration-500 ${
          alt
            ? "sm:order-1 group-hover:-translate-y-1.5 group-hover:rotate-1"
            : "group-hover:-translate-y-1.5 group-hover:-rotate-1"
        }`}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cg fill='none' stroke='%23BC4B27' stroke-opacity='0.18' stroke-width='1'%3E%3Cpath d='M45 6l39 39-39 39L6 45z'/%3E%3Cpath d='M45 22l23 23-23 23-23-23z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </motion.div>
  );
}
