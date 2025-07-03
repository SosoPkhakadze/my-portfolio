// src/components/sections/SkillsSection.tsx

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Code, Database, AreaChart, GitMerge } from 'lucide-react';

// --- TYPE DEFINITIONS (Good practice for clarity) ---
interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind color e.g., 'sky-400'
  skills: Skill[];
}

interface UnifiedSkill extends Skill {
  categoryId: string;
  categoryTitle: string;
  categoryColor: string;
  categoryIcon: React.ElementType;
}

// --- YOUR PERSONALIZED SKILLS DATA (with Icons and simpler colors) ---
const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Programming & Development',
    icon: Code,
    color: 'sky-400',
    skills: [
        { name: 'Python', level: 95, description: 'Advanced proficiency in Django, Flask, and data science libraries for robust backends.' },
        { name: 'JavaScript', level: 90, description: 'Expertise in modern JS (ES6+) and asynchronous programming for dynamic web experiences.' },
        { name: 'React', level: 90, description: 'Building complex, scalable, and performant user interfaces with a deep understanding of hooks and state management.' },
        { name: 'Django', level: 90, description: 'Architecting secure, high-performance web applications and REST APIs following best practices.' },
        { name: 'OOP & DSA', level: 90, description: 'Strong foundation in Object-Oriented principles and Data Structures & Algorithms for efficient solutions.' },
        { name: 'HTML/CSS', level: 85, description: 'Crafting semantic, accessible, and responsive layouts with modern CSS like Flexbox and Grid.' },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & APIs',
    icon: Database,
    color: 'emerald-400',
    skills: [
      { name: 'SQL', level: 90, description: 'Advanced queries, optimization, and database design across PostgreSQL, MySQL & MariaDB.' },
      { name: 'PostgreSQL', level: 85, description: 'Experience with advanced features, indexing strategies, and performance tuning.' },
      { name: 'REST APIs', level: 95, description: 'Designing, building, and consuming secure, scalable RESTful services from the ground up.' },
      { name: 'Postman', level: 85, description: 'Skilled in API testing, automation, and documentation to ensure reliability and quality.' },
    ]
  },
  {
    id: 'bi_data',
    title: 'BI & Data Visualization',
    icon: AreaChart,
    color: 'purple-400',
    skills: [
      { name: 'Power BI', level: 90, description: 'Creating insightful, interactive dashboards and reports to drive data-informed decisions.' },
      { name: 'Tableau', level: 80, description: 'Developing compelling data visualizations for exploratory analysis and business storytelling.' },
      { name: 'Pandas & NumPy', level: 85, description: 'Core libraries for data manipulation, cleaning, and numerical computing in Python.' },
      { name: 'Matplotlib', level: 80, description: 'Generating a wide range of static, animated, and interactive visualizations in Python.' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Version Control',
    icon: GitMerge,
    color: 'pink-400',
    skills: [
      { name: 'Docker', level: 80, description: 'Containerizing applications for consistent development, deployment, and scalability.' },
      { name: 'Git & GitHub', level: 95, description: 'Mastery of version control, complex branching strategies, and collaborative CI/CD workflows.' },
      { name: 'Agile/Scrum', level: 85, description: 'Experienced in iterative development, sprint planning, and collaborative team environments.' },
      { name: 'Testing & Debugging', level: 90, description: 'Implementing comprehensive unit/integration tests and employing systematic debugging techniques.' },
    ]
  }
];


// --- Sub-component for the Animated Circular Progress ---
const CircularProgress = ({ level, color, size = 120 }: { level: number; color: string; size?: number }) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="absolute top-0 left-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-muted/40"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          className={`text-${color}`} // Make sure you have text-sky-400, text-emerald-400 etc. in your safelist or defined
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ rotate: -90, strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{level}%</span>
      </div>
    </div>
  );
};


// --- Sub-component for the Sticky Skill Detail Panel ---
const SkillDetailCard = ({ skill }: { skill: UnifiedSkill }) => {
  if (!skill) return null;

  return (
    <motion.div
      key={skill.name} // Key ensures re-animation when skill changes
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-28" // This makes the card "stick" as you scroll
    >
      <Card className="glass-effect shadow-lg border-primary/20">
        <CardHeader className="flex flex-col items-center text-center p-6">
            <CircularProgress level={skill.level} color={skill.categoryColor} />
            <h3 className="text-2xl font-bold mt-4 text-foreground">{skill.name}</h3>
            <Badge 
              variant="outline" 
              className={`mt-2 border-${skill.categoryColor} text-${skill.categoryColor}`}
            >
              <skill.categoryIcon className="mr-2 h-4 w-4" />
              {skill.categoryTitle}
            </Badge>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-muted-foreground text-center">
            {skill.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// --- Main Skills Section Component ---
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Flatten all skills into a single array, but keep their category info.
  // useMemo prevents this from recalculating on every render.
  const allSkills = useMemo(() => 
    skillCategories.flatMap(category => 
      category.skills.map(skill => ({
        ...skill,
        categoryId: category.id,
        categoryTitle: category.title,
        categoryColor: category.color,
        categoryIcon: category.icon,
      }))
    ), 
  []);

  // We need an initial skill to show in the detail panel before the user hovers
  const [hoveredSkill, setHoveredSkill] = useState<UnifiedSkill>(allSkills[0]);
  
  const categories = [{ id: 'all', title: 'All Skills', icon: Lightbulb }, ...skillCategories];

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
       {/* You can add cool background elements here if you wish */}
       {/* <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div> */}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            My Digital Toolkit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of the technologies and methodologies I leverage to build efficient, scalable, and impactful digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Filters and Skill Grid */}
          <div className="lg:col-span-2">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={clsx(
                    'flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out',
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-foreground'
                  )}
                >
                  <cat.icon className="h-4 w-4"/>
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div 
              layout 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {allSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: (activeCategory === 'all' || activeCategory === skill.categoryId) ? 1 : 0.3,
                    scale: (activeCategory === 'all' || activeCategory === skill.categoryId) ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  className="cursor-pointer"
                >
                  <Card className={clsx(
                    'h-full p-4 flex items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                    hoveredSkill?.name === skill.name
                      ? `shadow-lg border-${skill.categoryColor} bg-muted`
                      : 'bg-card/70 border-transparent',
                  )}>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      {skill.name}
                    </h4>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

          </div>
          
          {/* RIGHT SIDE: Sticky Detail Panel */}
          <div className="hidden lg:block lg:col-span-1">
              <AnimatePresence mode="wait">
                {hoveredSkill && <SkillDetailCard skill={hoveredSkill} />}
              </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;