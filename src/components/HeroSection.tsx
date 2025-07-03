import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { ResumeViewer } from './ResumeViewer';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  
  const fullText = "Hi, I'm Soso Pkhakadze";
  const roles = [
    "Software Developer",
    "No-code Developer",
    "Automation Engineer"
  ];

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 relative">
              {/* Hexagonal frame */}
              <div className="absolute inset-0 bg-gradient-glow rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-2 bg-card rounded-full overflow-hidden float">
                <img 
                  src={profileImage} 
                  alt="Soso Pkhakadze"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating particles around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-neon-cyan rounded-full animate-float opacity-60"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Main heading with typewriter effect */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-display">
              <span className="gradient-text">
                {displayText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </span>
            </h1>

            {/* Rotating subtitle */}
            <div className="text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-muted-foreground mr-2">I'm a</span>
              <span 
                key={currentRole}
                className="gradient-text font-semibold animate-fade-in"
              >
                {roles[currentRole]}
              </span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Passionate about building scalable backend solutions, automating processes, 
              and transforming data into actionable insights. Currently working on cutting-edge 
              AI-powered platforms and automation systems.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground glow-blue transition-bounce hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce hover:scale-105"
              >
                Get In Touch
              </Button>
              <ResumeViewer triggerType="button" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-muted-foreground text-sm mb-2">Explore my journey</span>
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;