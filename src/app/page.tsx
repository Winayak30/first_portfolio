import AnimatedBentoCell from "@/components/bento/animated-bento-cell";
import BentoGrid from "@/components/bento/bento-grid";
import ContactCell from "@/components/bento/contact-cell";
import HeroCell from "@/components/bento/hero-cell";
import ProjectCard from "@/components/bento/project-card";
import SkillsCell from "@/components/bento/skills-cell";
import Header from "@/components/layout/header";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 md:p-8 lg:p-12">
        <BentoGrid>
          <AnimatedBentoCell
            staggerIndex={0}
            className="md:col-span-2 md:row-span-3"
          >
            <HeroCell />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={1} className="md:col-span-2 md:row-span-1">
            <ProjectCard project={projects[0]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={2} className="md:col-span-2 md:row-span-1">
            <ProjectCard project={projects[1]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={3} className="md:col-span-2 md:row-span-1">
            <ProjectCard project={projects[2]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell
            staggerIndex={4}
            className="md:col-span-2 md:row-span-3"
          >
            <SkillsCell />
          </AnimatedBentoCell>
          <AnimatedBentoCell
            staggerIndex={5}
            className="md:col-span-2 md:row-span-3"
          >
            <ContactCell />
          </AnimatedBentoCell>
        </BentoGrid>
      </main>
    </>
  );
}
