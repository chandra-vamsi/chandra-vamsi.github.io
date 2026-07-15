import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { LearningProjects } from "@/components/sections/LearningProjects";
import { GithubSection } from "@/components/sections/GithubSection";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Chatbot } from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-white/20">
      <CustomCursor />
      <Chatbot />
      <div className="fixed inset-0 z-[100] pointer-events-none bg-noise opacity-[0.03] mix-blend-overlay" />
      
      <Navbar />
      
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <LearningProjects />
        <GithubSection />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
