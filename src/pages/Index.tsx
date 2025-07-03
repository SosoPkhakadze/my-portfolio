// Import the Reveal component
import { Reveal } from '@/components/Reveal';

import Header from '@/components/Header';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import CursorTrail from '@/components/CursorTrail'; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CursorTrail /> {/* Add the component here */}
      <ParticleBackground />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />

        {/* --- ADD width="100%" TO EACH REVEAL WRAPPER --- */}
        <Reveal width="100%">
          <AboutSection />
        </Reveal>
        <Reveal width="100%">
          <ExperienceSection />
        </Reveal>
        <Reveal width="100%">
          <SkillsSection />
        </Reveal>
        <Reveal width="100%">
          <ProjectsSection />
        </Reveal>
        <Reveal width="100%">
          <EducationSection />
        </Reveal>
        <Reveal width="100%">
          <ContactSection />
        </Reveal>
      </main>
      
      <footer className="relative z-10 py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Soso Pkhakadze. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;