"use client";

import React, { useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Message sent — merci!");
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mx-auto w-full max-w-[1120px] scroll-mt-28 px-5 pb-20 pt-28 text-center sm:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="eyebrow justify-center">06 — Get in touch</span>

      <h2 className="mt-5 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-medium leading-[1.05] tracking-tightest">
        Let&apos;s build
        <br />
        <em className="italic text-clay">something</em> together.
      </h2>

      <p className="mx-auto my-7 max-w-[42ch] text-lg text-inkSoft">
        Reach me directly at{" "}
        <a
          className="border-b border-clay text-clay"
          href="mailto:lemchiyakh@gmail.com"
        >
          lemchiyakh@gmail.com
        </a>{" "}
        or drop a message below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[540px] flex-col gap-4 text-left"
      >
        <input
          ref={emailRef}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="rounded-2xl border border-line bg-card px-5 py-4 text-ink transition-all placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--clay)_30%,transparent)]"
        />
        <textarea
          ref={messageRef}
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="min-h-[150px] resize-y rounded-2xl border border-line bg-card px-5 py-4 text-ink transition-all placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--clay)_30%,transparent)]"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
