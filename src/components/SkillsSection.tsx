import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// Added Server icon for the new category
import { Lightbulb, Code, Database, AreaChart, GitMerge, Cpu, TestTube2, Server } from 'lucide-react';

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

interface UnifiedSkill extends Skill {
  categoryId: string;
  categoryTitle: string;
  categoryColor: string;
  categoryIcon: React.ElementType;
}

// --- UPDATED SKILL CATEGORIES DATA ---
const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Programming & Development',
    icon: Code,
    color: 'sky-400',
    skills: [
      { name: 'Next.js', description: 'Built full-stack, server-rendered applications with the App Router, API Routes, and Vercel deployment.' },
      { name: 'React', description: 'Developed dynamic and responsive user interfaces for complex web applications.' },
      { name: 'TypeScript', description: 'Utilized strong typing to build scalable, maintainable, and error-resistant applications.' },
      { name: 'Python', description: 'Advanced proficiency with Django, FastAPI, Pandas, and NumPy for backend services and data processing.' },
      { name: 'Django', description: 'Developed multiple web applications including job search platforms and product search tools.' },
      { name: 'HTML/CSS', description: 'Frontend development for various projects with a focus on responsive design and modern standards.' },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & APIs',
    icon: Database,
    color: 'emerald-400',
    skills: [
      { name: 'Supabase', description: 'Leveraged Supabase for its PostgreSQL database, authentication, and realtime capabilities to build event-driven applications.' },
      { name: 'PostgreSQL', description: 'Engineered scalable data pipelines and storage solutions, reducing data processing time.' },
      { name: 'MySQL', description: 'Proficient in relational database design and management for various backend systems.' },
      { name: 'OpenAI API', description: 'Integrated AI models for natural language processing, text generation, and task enhancement.' },
      { name: 'REST APIs', description: 'Designed and implemented RESTful APIs for multiple projects with external integrations.' },
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Workflow',
    icon: GitMerge, // Using GitMerge icon for automation
    color: 'pink-400',
    skills: [
      { name: 'n8n', description: 'Designed and built complex, multi-step automation workflows connecting APIs and AI services to perform background tasks.' },
      { name: 'Make.com', description: 'Experienced in creating visual workflows to automate repetitive tasks and integrate various cloud services.' },
      { name: 'CI/CD', description: 'Optimized pipelines reducing release cycle time and enhancing system stability.' },
      { name: 'Git', description: 'Version control and collaborative development workflows using Git and GitHub.' },
    ]
  },
  {
    id: 'data',
    title: 'Data & AI',
    icon: Cpu,
    color: 'purple-400',
    skills: [
      { name: 'Pandas & NumPy', description: 'Data manipulation and numerical computing for large-scale dataset management and analysis.' },
      { name: 'Matplotlib', description: 'Created visualizations for data analysis and image processing projects.' },
      { name: 'OpenCV', description: 'Image processing and computer vision applications.' },
      { name: 'Power BI', description: 'Data visualization and business intelligence reporting for data-driven insights.' },
    ]
  },
  {
    id: 'cloud',
    title: 'Deployment & Cloud',
    icon: Server, // New icon
    color: 'orange-400', // New color
    skills: [
        { name: 'Vercel', description: 'Deployed and managed modern web applications with seamless Git integration and serverless functions.' },
        { name: 'AWS', description: 'Managed automation pipelines on AWS Ubuntu servers, improving deployment efficiency.' },
        { name: 'Docker', description: 'Containerized applications for consistent development, testing, and deployment environments.' },
    ]
  },
  {
    id: 'testing',
    title: 'QA & Testing',
    icon: TestTube2,
    color: 'amber-400',
    skills: [
      { name: 'Automated Testing', description: 'Developed test scripts reducing manual testing time with improved accuracy.' },
      { name: 'QA Processes', description: 'Conducted in-depth QA for backend functionalities across Python and JavaScript applications.' },
      { name: 'Debugging', description: 'Identified issues in data processing and API calls to improve system reliability.' },
      { name: 'Postman', description: 'API testing, documentation, and validation for backend services.' },
    ]
  }
];

// --- NO CHANGES TO THE REST OF THE COMPONENT ---

const SkillDetailCard = ({ skill }: { skill: UnifiedSkill }) => {
  if (!skill) return null;

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-28"
    >
      <Card className="glass-effect shadow-lg border-primary/20">
        <CardHeader className="flex flex-col items-center text-center p-6">
            <div className={`bg-${skill.categoryColor}/20 p-4 rounded-full mb-4`}>
              <skill.categoryIcon className={`h-8 w-8 text-${skill.categoryColor}`} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{skill.name}</h3>
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

const MobileSkillDetail = ({ skill }: { skill: UnifiedSkill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden mt-6"
    >
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="flex flex-col items-center text-center p-4">
          <div className={`bg-${skill.categoryColor}/20 p-3 rounded-full mb-3`}>
            <skill.categoryIcon className={`h-6 w-6 text-${skill.categoryColor}`} />
          </div>
          <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
          <Badge 
            variant="outline" 
            className={`mt-1 border-${skill.categoryColor} text-${skill.categoryColor}`}
          >
            <skill.categoryIcon className="mr-1 h-3 w-3" />
            {skill.categoryTitle}
          </Badge>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <p className="text-sm text-muted-foreground text-center">
            {skill.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<UnifiedSkill | null>(null);
  
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

  // Set the default hovered skill safely, checking if allSkills has content.
  const [hoveredSkill, setHoveredSkill] = useState<UnifiedSkill>(allSkills[0] || null);
  
  const categories = [{ id: 'all', title: 'All Skills', icon: Lightbulb }, ...skillCategories];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.categoryId === activeCategory);

  return (
    <section id="skills" className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            Technical Skills
          </h2>
          <p className="text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and methodologies I leverage to build efficient, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* LEFT SIDE: Filters and Skill Grid */}
          <div className="lg:col-span-2">
            {/* Filter Buttons - Horizontal scroll for mobile */}
            <div className="mb-6 lg:mb-10 overflow-x-auto pb-2">
              <div className="flex flex-nowrap lg:flex-wrap gap-2 w-max lg:w-full">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSelectedSkill(null);
                    }}
                    className={clsx(
                      'flex items-center gap-2 px-3 py-2 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 ease-in-out whitespace-nowrap',
                      activeCategory === cat.id
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-foreground'
                    )}
                  >
                    <cat.icon className="h-3 w-3 lg:h-4 lg:w-4"/>
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <motion.div 
              layout 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            >
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                  className="cursor-pointer"
                >
                  <Card className={clsx(
                    'h-full p-3 flex items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1',
                    (hoveredSkill?.name === skill.name || selectedSkill?.name === skill.name)
                      ? `shadow-md border-${skill.categoryColor} bg-muted`
                      : 'bg-card/70 border-transparent',
                  )}>
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground">
                      {skill.name}
                    </h4>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Skill Detail */}
            {selectedSkill && (
              <MobileSkillDetail skill={selectedSkill} />
            )}
          </div>
          
          {/* RIGHT SIDE: Sticky Detail Panel (Desktop only) */}
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