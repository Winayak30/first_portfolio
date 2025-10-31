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
            className="md:col-span-2 md:row-span-2"
            staggerIndex={0}
          >
            <HeroCell />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={1}>
            <ProjectCard project={projects[0]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={2}>
            <ProjectCard project={projects[1]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={3}>
            <ProjectCard project={projects[2]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell staggerIndex={4}>
            <ProjectCard project={projects[3]} />
          </AnimatedBentoCell>
          <AnimatedBentoCell className="md:col-span-2" staggerIndex={5}>
            <SkillsCell />
          </AnimatedBentoCell>
          <AnimatedBentoCell className="md:col-span-2" staggerIndex={6}>
            <ContactCell />
          </AnimatedBentoCell>
        </BentoGrid>
      </main>
    </>
  );
}
