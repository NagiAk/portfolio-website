"use client";

import React from "react";
import { motion } from "framer-motion";
import Star from "./star";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-16 flex w-full max-w-[1120px] items-center gap-5 px-5 sm:my-24 sm:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="h-px flex-1 bg-line" />
      <Star className="h-5 w-5 stroke-clay opacity-70" strokeWidth={5} />
      <span className="h-px flex-1 bg-line" />
    </motion.div>
  );
}
