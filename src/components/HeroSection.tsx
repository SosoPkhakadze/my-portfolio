import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Terminal, Rocket, Zap, FileText } from 'lucide-react';
import { ResumeViewer } from './ResumeViewer';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  const codeSnippets = [
    "developer.build('innovative solutions')",
    "creative.solve(complexProblems)",
    "engineer.create('digital experiences')",
    "coder.transform(ideas => reality)"
  ];

  useEffect(() => {
    setMounted(true);
    
    const codeInterval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3500);

    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);

    return () => {
      clearInterval(codeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Terminal-style greeting */}
            <div className="mb-6 font-mono text-sm">
              <span className="text-green-500">➜</span>
              <span className="text-primary ml-2">~</span>
              <span className="text-muted-foreground ml-2">whoami</span>
            </div>

            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="block text-foreground">
                  Soso Pkhakadze
                </span>
              </h1>
              
              {/* Animated subtitle with gradient */}
              <div className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-pink-500 bg-clip-text text-transparent">
                  Building the Future
                </span>
              </div>

              <div className="h-20 relative overflow-hidden">
                <div className="font-mono text-lg md:text-xl text-muted-foreground">
                  {codeSnippets.map((snippet, idx) => (
                    <div
                      key={idx}
                      className={`absolute transition-all duration-700 ease-out ${
                        idx === codeIndex
                          ? 'translate-y-0 opacity-100'
                          : idx < codeIndex
                          ? '-translate-y-full opacity-0'
                          : 'translate-y-full opacity-0'
                      }`}
                    >
                      <span className="text-accent">const</span>
                      <span className="text-primary ml-2">magic</span>
                      <span className="text-muted-foreground ml-2">=</span>
                      <span className="text-yellow-500 dark:text-yellow-300 ml-2">{snippet}</span>
                      <span className={`ml-1 text-primary ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▊</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Full-stack developer specializing in <span className="text-primary font-semibold">Python</span>, 
              <span className="text-accent font-semibold"> React</span>, and 
              <span className="text-pink-500 font-semibold"> AI/ML</span>. 
              I transform complex problems into elegant, scalable solutions that make a real impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="group relative px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-blue-500 hover:to-purple-500 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-background/50 hover:bg-muted/50 border-2 border-border hover:border-primary text-foreground font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>

              <ResumeViewer triggerType="button">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border-2 border-emerald-500/30 hover:border-emerald-500 text-foreground font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/10"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
                </Button>
              </ResumeViewer>
            </div>

            {/* Stats or quick info */}
            <div className="flex gap-8 pt-4 border-t border-border">
              {[
                { label: 'Projects', value: '20+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Coffee Cups', value: '∞' }
              ].map((stat, idx) => (
                <div 
                  key={stat.label}
                  className="group cursor-default"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${1 + idx * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-pink-400 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Visual Element */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Floating Code Window */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 text-xs text-muted-foreground font-mono flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    portfolio.tsx
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">import</span>
                      <span className="text-blue-600 dark:text-blue-400"> {'{ Innovation }'} </span>
                      <span className="text-purple-600 dark:text-purple-400">from</span>
                      <span className="text-green-600 dark:text-green-400"> './brain'</span>
                    </div>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">import</span>
                      <span className="text-blue-600 dark:text-blue-400"> {'{ Passion }'} </span>
                      <span className="text-purple-600 dark:text-purple-400">from</span>
                      <span className="text-green-600 dark:text-green-400"> './heart'</span>
                    </div>
                    <div className="h-4" />
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-blue-600 dark:text-blue-400"> Developer </span>
                      <span className="text-muted-foreground">= () =&gt; {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-600 dark:text-purple-400">return</span>
                      <span className="text-muted-foreground"> {'{'}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-600 dark:text-cyan-400">name</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-green-600 dark:text-green-400">'Soso Pkhakadze'</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-600 dark:text-cyan-400">skills</span>
                      <span className="text-muted-foreground">: [</span>
                      <span className="text-green-600 dark:text-green-400">'Python'</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-green-600 dark:text-green-400">'React'</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-green-600 dark:text-green-400">'AI'</span>
                      <span className="text-muted-foreground">],</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-600 dark:text-cyan-400">passion</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-pink-600 dark:text-pink-400">Infinity</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-600 dark:text-cyan-400">mission</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-green-600 dark:text-green-400">'Build & Innovate'</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-muted-foreground">{'}'}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges around the code window */}
              <div className="absolute -right-4 top-1/4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 shadow-lg animate-float">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              
              <div className="absolute -left-4 bottom-1/4 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-lg px-3 py-2 shadow-lg animate-float-delayed">
                <Terminal className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-slow"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll" />
          </div>
        </div>
      </div>

      <style>{`
        /* --- NEW CSS BACKGROUND --- */
        .bg-aurora {
          background-image: radial-gradient(at 27% 37%, hsl(var(--primary) / 0.1) 0px, transparent 50%),
                            radial-gradient(at 97% 21%, hsl(var(--accent) / 0.1) 0px, transparent 50%),
                            radial-gradient(at 52% 99%, hsl(var(--primary) / 0.1) 0px, transparent 50%),
                            radial-gradient(at 10% 29%, hsl(var(--accent) / 0.1) 0px, transparent 50%),
                            radial-gradient(at 97% 96%, hsl(var(--background)) 0px, transparent 50%),
                            radial-gradient(at 33% 50%, hsl(var(--primary) / 0.1) 0px, transparent 50%),
                            radial-gradient(at 79% 53%, hsl(var(--background)) 0px, transparent 50%);
          background-size: 200% 200%;
        }

        @keyframes aurora {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 200% 50%;
          }
        }
        
        .animate-aurora {
          animation: aurora 20s linear infinite;
        }
        /* --- END NEW CSS BACKGROUND --- */

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          80% { transform: translateY(12px); opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;