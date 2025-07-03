import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ResumeViewer } from './ResumeViewer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-text rounded-lg flex items-center justify-center font-display font-bold text-lg glow-blue">
              SP
            </div>
            <span className="font-semibold text-foreground">Soso Pkhakadze</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Experience', id: 'experience' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <ResumeViewer triggerType="icon" />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground glow-blue pulse-glow"
            >
              Let's Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;