import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Studies from "@/components/studies";

export default function Home() {
  return (
    <>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Studies />
      <Experience />
      <Contact />
    </>
  );
}
