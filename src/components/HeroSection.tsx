import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Terminal, Rocket, Zap } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

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

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;

      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 0.5 + 0.2;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());
    
    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-black" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-600/5 via-transparent to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Terminal-style greeting */}
            <div className="mb-6 font-mono text-sm">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400 ml-2">~</span>
              <span className="text-slate-400 ml-2">whoami</span>
            </div>

            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="block text-white">
                  Soso Pkhakadze
                </span>
              </h1>
              
              {/* Animated subtitle with gradient */}
              <div className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Building the Future
                </span>
              </div>

              <div className="h-20 relative overflow-hidden">
                <div className="font-mono text-lg md:text-xl text-slate-300">
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
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400 ml-2">magic</span>
                      <span className="text-slate-400 ml-2">=</span>
                      <span className="text-yellow-300 ml-2">{snippet}</span>
                      <span className={`ml-1 text-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▊</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Full-stack developer specializing in <span className="text-blue-400 font-semibold">Python</span>, 
              <span className="text-purple-400 font-semibold"> React</span>, and 
              <span className="text-pink-400 font-semibold"> AI/ML</span>. 
              I transform complex problems into elegant, scalable solutions that make a real impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="group relative px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="px-8 py-6 bg-slate-800/50 hover:bg-slate-700/50 border-2 border-slate-700 hover:border-blue-500 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
            </div>

            {/* Stats or quick info */}
            <div className="flex gap-8 pt-4 border-t border-slate-800">
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
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Visual Element */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Floating Code Window */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    portfolio.tsx
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-slate-500">
                      <span className="text-purple-400">import</span>
                      <span className="text-blue-400"> {'{ Innovation }'} </span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400"> './brain'</span>
                    </div>
                    <div className="text-slate-500">
                      <span className="text-purple-400">import</span>
                      <span className="text-blue-400"> {'{ Passion }'} </span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400"> './heart'</span>
                    </div>
                    <div className="h-4" />
                    <div>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400"> Developer </span>
                      <span className="text-slate-400">= () =&gt; {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span>
                      <span className="text-slate-400"> {'{'}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-400">name</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-green-400">'Soso Pkhakadze'</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-400">skills</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-green-400">'Python'</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-green-400">'React'</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-green-400">'AI'</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-400">passion</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-pink-400">Infinity</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-400">mission</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-green-400">'Build & Innovate'</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">{'}'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">{'}'}</span>
                    </div>
                  </div>
                </div>

                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
              </div>

              {/* Floating tech badges around the code window */}
              <div className="absolute -right-4 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg px-3 py-2 shadow-lg animate-float">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              
              <div className="absolute -left-4 bottom-1/4 bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-2 shadow-lg animate-float-delayed">
                <Terminal className="w-5 h-5 text-purple-400" />
              </div>

              {/* Glowing orbs for depth */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-slow"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 text-slate-600 hover:text-blue-400 transition-colors">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;