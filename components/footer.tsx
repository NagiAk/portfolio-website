import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-[5] border-t border-[var(--line-2)] px-5 py-12 text-center">
      <div className="mb-1.5 font-display text-lg">Mohammed Lamchiyakh</div>
      <small className="block text-[0.82rem] leading-relaxed text-muted">
        &copy; 2024 — 2026. All rights reserved.
      </small>
      <p className="mt-2.5 font-mono text-[0.7rem] tracking-wide text-muted">
        Built with React · Next.js · TypeScript · Tailwind · Framer Motion ·
        Resend
      </p>
    </footer>
  );
}
