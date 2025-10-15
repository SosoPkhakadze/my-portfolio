import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Calendar, Briefcase, Award, ExternalLink, 
  Code, Zap, CheckCircle2, Building2, Rocket, Target, 
  TrendingUp, Sparkles, ChevronDown, Star, Flame
} from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  achievements: string[];
  technologies: string[];
  impact: { metric: string; improvement: string; }[];
  color: string;
  gradient: string;
}

const ExperienceSection = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const experiences: Experience[] = [
    {
      id: 0,
      title: "AI Automation Developer",
      company: "Notretek Solutions Inc.",
      period: "Jul 2025 - Present",
      location: "Remote, Canada",
      description: [
        "Building and maintaining automation workflows using no-code/low-code tools (Zapier, Make, n8n)",
        "Writing custom JavaScript and Python code to extend automation functionality and API integrations",
        "Setting up webhooks, APIs, and third-party AI service integrations",
        "Translating business requirements into scalable technical automation solutions"
      ],
      achievements: [
        "Architected enterprise-grade automation workflows for multiple client projects",
        "Reduced manual processes by 85% through intelligent automation design",
        "Successfully integrated 20+ third-party services and AI tools"
      ],
      technologies: ["JavaScript", "Python", "n8n", "Zapier", "Make", "Webhooks", "AI APIs"],
      impact: [
        { metric: "Automation Rate", improvement: "85%" },
        { metric: "Integrations", improvement: "20+" },
        { metric: "Process Time", improvement: "-70%" }
      ],
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      gradient: "bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"
    },
    {
      id: 1,
      title: "Software Engineer & QA Automation Engineer",
      company: "Pyrashyut LLC",
      period: "Jan 2024 - Present",
      location: "Remote",
      description: [
        "Spearheading backend solutions and RESTful APIs using Python and JavaScript",
        "Architecting automation pipelines executing code from GitHub on AWS Ubuntu servers",
        "Designing custom n8n nodes for enhanced automation workflows",
        "Leading CI/CD pipeline optimization for faster releases"
      ],
      achievements: [
        "Improved deployment efficiency by 90% through automated pipeline optimization",
        "Reduced manual intervention by 80% with custom automation workflows",
        "Successfully integrated 15+ third-party services via REST APIs"
      ],
      technologies: ["Python", "JavaScript", "n8n", "AWS", "CI/CD", "REST APIs", "Docker"],
      impact: [
        { metric: "Deploy Speed", improvement: "90%" },
        { metric: "Manual Work", improvement: "-80%" },
        { metric: "Uptime", improvement: "99.9%" }
      ],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      gradient: "bg-gradient-to-r from-blue-500/20 to-teal-500/20"
    },
    {
      id: 2,
      title: "QA Engineer",
      company: "DevsData",
      period: "Jul 2024 - Present",
      location: "Remote",
      description: [
        "Conducting comprehensive QA for backend functionalities across Python and JavaScript",
        "Reviewing and testing 10+ new features monthly with zero regression issues",
        "Testing and debugging backend processes and browser extensions",
        "Developing automated test scripts integrated into CI/CD pipeline"
      ],
      achievements: [
        "Reduced manual testing time by 80% through automation",
        "Achieved 100% test coverage for critical backend features",
        "Identified and resolved 200+ bugs before production"
      ],
      technologies: ["Python", "JavaScript", "Automation Testing", "CI/CD", "Extensions", "Postman"],
      impact: [
        { metric: "Test Speed", improvement: "80%" },
        { metric: "Coverage", improvement: "100%" },
        { metric: "Bugs Found", improvement: "200+" }
      ],
      color: "from-pink-500 via-rose-500 to-red-500",
      gradient: "bg-gradient-to-r from-pink-500/20 to-red-500/20"
    },
    {
      id: 3,
      title: "Lead Python Backend Developer",
      company: "Blueberry Systems AI",
      period: "Mar 2023 - Mar 2025",
      location: "Remote",
      description: [
        "Led backend architecture for AI-powered conversational platform",
        "Built and optimized RESTful APIs with sub-second response times",
        "Engineered scalable data pipelines using PostgreSQL and MongoDB",
        "Integrated OAuth2, payment processors, and AI models with robust error handling"
      ],
      achievements: [
        "Improved API response times by 75% through optimization",
        "Reduced data processing time by 55% with efficient pipelines",
        "Successfully scaled platform to handle 10,000+ concurrent users"
      ],
      technologies: ["Python", "PostgreSQL", "MongoDB", "REST APIs", "AI Integration", "OAuth2", "FastAPI"],
      impact: [
        { metric: "Response Time", improvement: "-75%" },
        { metric: "Processing", improvement: "-55%" },
        { metric: "Users", improvement: "10K+" }
      ],
      color: "from-emerald-500 via-green-500 to-lime-500",
      gradient: "bg-gradient-to-r from-emerald-500/20 to-lime-500/20"
    },
    {
      id: 4,
      title: "Data Engineer & AI Training Support",
      company: "Netex Consulting LLC",
      period: "Apr 2022 - Aug 2023",
      location: "Remote",
      description: [
        "Developed robust ETL pipelines for efficient data transformation",
        "Designed backend data processing systems for large-scale datasets",
        "Implemented monitoring systems for tracking data processing efficiency",
        "Collaborated with distributed teams on data architecture standards"
      ],
      achievements: [
        "Processed 1M+ records daily with 99.9% accuracy",
        "Reduced data processing costs by 40% through optimization",
        "Established data quality standards adopted company-wide"
      ],
      technologies: ["Python", "ETL", "Data Processing", "Distributed Systems", "Apache Airflow"],
      impact: [
        { metric: "Accuracy", improvement: "99.9%" },
        { metric: "Cost", improvement: "-40%" },
        { metric: "Records/Day", improvement: "1M+" }
      ],
      color: "from-orange-500 via-amber-500 to-yellow-500",
      gradient: "bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
    }
  ];

  const currentExp = experiences[selectedJob];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]"></div>
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Experience</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into scalable solutions
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: Flame, value: "3+", label: "Years", color: "text-orange-500" },
            { icon: Building2, value: "5", label: "Companies", color: "text-blue-500" },
            { icon: Rocket, value: "50+", label: "Projects", color: "text-purple-500" },
            { icon: Star, value: "10K+", label: "Users", color: "text-yellow-500" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <Card className="glass p-4 text-center border border-border/50 hover:border-primary/50 transition-all">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Compact Timeline */}
            <div className="lg:col-span-4">
              <div className="sticky top-20 space-y-2">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.id}
                    onClick={() => setSelectedJob(index)}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full text-left relative group"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        selectedJob === index
                          ? 'bg-gradient-to-r ' + exp.color + ' p-[2px]'
                          : 'bg-transparent'
                      }`}
                    >
                      <Card className={`p-4 transition-all duration-300 ${
                        selectedJob === index
                          ? 'bg-background/95 backdrop-blur-sm'
                          : 'bg-card/50 hover:bg-card border-border/50 hover:border-primary/30'
                      }`}>
                        <div className="flex items-start gap-3">
                          <motion.div
                            className={`p-2 rounded-lg ${exp.gradient}`}
                            animate={selectedJob === index ? { rotate: [0, 5, -5, 0] } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            <Building2 className={`w-4 h-4 ${
                              selectedJob === index ? 'text-primary' : 'text-muted-foreground'
                            }`} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold text-sm mb-1 truncate ${
                              selectedJob === index ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {exp.company}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-1 line-clamp-1">
                              {exp.title}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {exp.period.split(' - ')[0]}
                            </div>
                          </div>
                          {selectedJob === index && (
                            <motion.div
                              layoutId="activeIndicator"
                              className={`w-1 h-full rounded-full bg-gradient-to-b ${exp.color} absolute right-0 top-0`}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Compact Details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedJob}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.3 }}
                  onMouseMove={handleMouseMove}
                  className="relative"
                >
                  <Card className="glass p-6 border-2 border-primary/20 overflow-hidden relative group">
                    {/* Spotlight Effect */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: useTransform(
                          [mouseX, mouseY],
                          ([x, y]) =>
                            `radial-gradient(600px circle at ${x}px ${y}px, rgba(var(--primary), 0.1), transparent 40%)`
                        ),
                      }}
                    />

                    {/* Header */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <Badge className={`mb-2 bg-gradient-to-r ${currentExp.color} text-white border-0 text-xs`}>
                            {currentExp.period}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {currentExp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1 font-semibold text-foreground">
                              <Building2 className="w-4 h-4 text-primary" />
                              {currentExp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {currentExp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Impact Metrics - Compact */}
                      <div className="grid grid-cols-3 gap-3">
                        {currentExp.impact.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className={`p-3 rounded-lg ${currentExp.gradient} border border-primary/20 text-center`}
                          >
                            <div className="text-xs text-muted-foreground mb-1">{item.metric}</div>
                            <div className={`text-lg font-bold bg-gradient-to-r ${currentExp.color} bg-clip-text text-transparent`}>
                              {item.improvement}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities - Compact */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-sm">Key Responsibilities</h4>
                      </div>
                      <div className="space-y-2">
                        {currentExp.description.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ChevronDown className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 rotate-[-90deg]" />
                            <p className="leading-relaxed">{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements - Compact */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-accent" />
                        <h4 className="font-semibold text-sm">Key Achievements</h4>
                      </div>
                      <div className="space-y-2">
                        {currentExp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            whileHover={{ x: 3 }}
                            className="flex items-start gap-2 p-2 rounded-lg bg-green-500/5 hover:bg-green-500/10 transition-colors text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <p className="text-foreground leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies - Compact */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-sm">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentExp.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.03, type: "spring" }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge 
                              className={`px-2 py-1 text-xs bg-gradient-to-r ${currentExp.color} text-white border-0 cursor-pointer`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ExperienceSection;