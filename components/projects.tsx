"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
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
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
