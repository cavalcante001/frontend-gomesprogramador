import { Articles } from "./_components/articles";
import { Certifications } from "./_components/certifications";
import { Contact } from "./_components/contact";
import { Education } from "./_components/education";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Certifications />
      <Projects />
      <Articles />
      <Contact />
    </>
  );
}
