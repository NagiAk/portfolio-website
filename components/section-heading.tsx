import React from "react";

type SectionHeadingProps = {
  number: string;
  children: React.ReactNode;
  center?: boolean;
};

export default function SectionHeading({
  number,
  children,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 flex items-baseline gap-4 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="font-mono text-sm text-muted">{number}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}
