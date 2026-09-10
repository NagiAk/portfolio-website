"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [open, setOpen] = useState(false);

  const handleNav = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[800] flex w-full items-center justify-between border-b border-[var(--line-2)] bg-[color-mix(in_srgb,var(--paper)_72%,transparent)] px-5 py-3 backdrop-blur-md sm:px-10">
      <a
        href="#home"
        onClick={() => handleNav("Home")}
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
                onClick={() => handleNav(link.name)}
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

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="grid h-[38px] w-[38px] place-items-center rounded-full border border-line bg-card text-ink transition-transform hover:rotate-[35deg] hover:scale-110"
        >
          {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>

        {/* mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="grid h-[38px] w-[38px] place-items-center rounded-full border border-line bg-card text-ink sm:hidden"
        >
          <div className="relative h-[14px] w-[18px]">
            <span
              className={clsx(
                "absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              )}
            />
          </div>
        </button>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full mx-3 mt-2 rounded-2xl border border-line bg-[color-mix(in_srgb,var(--paper)_94%,transparent)] p-2 shadow-[0_18px_50px_-18px_var(--shadow)] backdrop-blur-xl sm:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    onClick={() => handleNav(link.name)}
                    className={clsx(
                      "flex items-center gap-3 rounded-xl px-4 py-3 font-mono text-[0.8rem] uppercase tracking-wider transition-colors",
                      activeSection === link.name
                        ? "bg-[color-mix(in_srgb,var(--clay)_12%,transparent)] text-clay"
                        : "text-inkSoft hover:bg-[var(--line-2)] hover:text-ink"
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-clay opacity-70" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
