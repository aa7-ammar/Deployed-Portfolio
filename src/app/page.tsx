import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Recommendations } from "@/components/recommendations";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
