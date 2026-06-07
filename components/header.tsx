"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import Star from "./star";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 z-[800] flex w-full items-center justify-between border-b border-[var(--line-2)] bg-[color-mix(in_srgb,var(--paper)_72%,transparent)] px-5 py-3 backdrop-blur-md sm:px-10">
      <a
        href="#home"
        className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight"
      >
        <Star className="h-[22px] w-[22px] stroke-clay" strokeWidth={5} />
        Mohammed&nbsp;L.
      </a>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li className="relative" key={link.hash}>
              <a
                className={clsx(
                  "relative rounded-full px-3 py-2 font-mono text-[0.72rem] uppercase tracking-wider transition-colors",
                  activeSection === link.name
                    ? "text-clay"
                    : "text-inkSoft hover:text-ink"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-[color-mix(in_srgb,var(--clay)_12%,transparent)]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="grid h-[38px] w-[38px] place-items-center rounded-full border border-line bg-card text-ink transition-transform hover:rotate-[35deg] hover:scale-110"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </header>
  );
}
