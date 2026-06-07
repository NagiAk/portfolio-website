"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex items-center justify-center gap-2.5 self-start rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_var(--shadow)] disabled:translate-y-0 disabled:opacity-65"
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-paper border-b-transparent" />
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </>
      )}
    </button>
  );
}
