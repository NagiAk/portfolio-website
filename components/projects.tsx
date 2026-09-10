"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import Flagship from "./flagship";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="mx-auto w-full max-w-[1120px] scroll-mt-28 px-5 py-20 sm:px-10"
    >
      <SectionHeading number="02">Selected Work</SectionHeading>

      <Flagship />

      <div className="mb-2 mt-20 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Earlier projects
      </div>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
