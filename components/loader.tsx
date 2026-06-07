"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Star from "./star";

const NAME = "Mohammed Lamchiyakh";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const counter = setInterval(() => {
      setCount((c) => Math.min(100, c + Math.floor(Math.random() * 9) + 3));
    }, 70);

    const timer = setTimeout(() => setDone(true), 2300);

    return () => {
      clearInterval(counter);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {!done && (
        <motion.div
          key="loader"
          exit={{ y: "-101%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-paper"
        >
          <Star
            className="loader-draw h-24 w-24 stroke-clay"
            inner
            strokeWidth={2}
          />

          <h1 className="flex overflow-hidden font-display text-2xl font-medium tracking-tightest sm:text-4xl">
            {NAME.split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.03,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.35em] text-muted">
            <span>Full-Stack Developer</span>
            <span className="min-w-[3.2ch] text-right font-semibold text-clay">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
