import React from "react";

type StarProps = {
  className?: string;
  strokeWidth?: number;
  inner?: boolean;
};

// Moroccan eight-point star (khatim) — the recurring brand mark.
export default function Star({
  className = "",
  strokeWidth = 4,
  inner = false,
}: StarProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 6 L62 38 L94 38 L68 58 L78 92 L50 72 L22 92 L32 58 L6 38 L38 38 Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {inner && (
        <path
          className="star-inner stroke-teal"
          d="M50 22 L58 42 L78 42 L62 56 L68 78 L50 66 L32 78 L38 56 L22 42 L42 42 Z"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
