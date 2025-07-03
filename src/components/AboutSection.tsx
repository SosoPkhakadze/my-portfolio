import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const [stats, setStats] = useState([
    { label: 'Years Experience', value: 0, target: 3 },
    { label: 'Projects Completed', value: 0, target: 15 },
    { label: 'Technologies Mastered', value: 0, target: 12 },
    { label: 'API Requests Handled', value: 0, target: 500 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: Math.min(stat.value + Math.ceil(stat.target / 50), stat.target)
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const codeSnippet = `// Soso's Tech Stack
const developer = {
  name: "Soso Pkhakadze",
  role: "Software Engineer & QA",
  location: "Kutaisi, Georgia",
  
  backend: ["Python", "Django", "FastAPI"],
  automation: ["n8n", "CI/CD", "AWS"],
  databases: ["PostgreSQL", "MongoDB"],
  testing: ["Automated QA", "API Testing"],
  
  currentFocus: "AI-Powered Platforms",
  passion: "Building Scalable Solutions"
};

developer.getExpertise();`;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into scalable solutions through code, automation, and data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Editor Mockup */}
            <div className="rounded-lg overflow-hidden border border-border">
              {/* Editor header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">about.js</span>
              </div>
              
              {/* Code content */}
              <div className="p-4 font-mono text-sm max-w-full overflow-x-auto bg-background rounded-b-lg custom-scroll">
                <pre className="text-foreground leading-relaxed max-w-full">
                  <code dangerouslySetInnerHTML={{ __html: codeSnippet
                    .replace(/const|let|var/g, '<span style="color: hsl(var(--primary))">$&</span>')
                    .replace(/"[^"]*"/g, '<span style="color: hsl(var(--accent))">$&</span>')
                    .replace(/\/\/.*$/gm, '<span style="color: hsl(var(--muted-foreground))">$&</span>')
                    .replace(/\b(name|role|location|backend|automation|databases|testing|currentFocus|passion)\b/g, '<span style="color: hsl(var(--primary))">$&</span>')
                  }} />
                </pre>
              </div>
            </div>
                

          {/* About Content */}
          <div className="space-y-6">
            <Card className="glass p-6 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my Bachelor's in Computer Science at Kutaisi International University, 
                I've been deeply immersed in the world of software development since 2022. My journey began 
                with data engineering and has evolved into full-stack development with a focus on backend 
                architecture and automation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Pyrashyut LLC, I develop backend solutions and RESTful APIs using Python and JavaScript, 
                while managing automation pipelines that have improved deployment efficiency by 90%. 
                My work at DevsData involves comprehensive QA for backend functionalities, where I've 
                reduced manual testing time by 80% through automated test scripts.
              </p>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="glass p-4 text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}{stat.label.includes('Requests') ? '+' : ''}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;