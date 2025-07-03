import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Code, Database, AreaChart, GitMerge, Cpu, TestTube2 } from 'lucide-react';

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

const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Programming & Development',
    icon: Code,
    color: 'sky-400',
    skills: [
      { name: 'Python', description: 'Advanced proficiency with Django, FastAPI, Pandas, NumPy, OpenCV, and Matplotlib for backend development and data processing.' },
      { name: 'JavaScript', description: 'Experience in building web applications with React and developing browser extensions.' },
      { name: 'Django', description: 'Developed multiple web applications including job search platforms, product search tools, and weather forecast apps.' },
      { name: 'FastAPI', description: 'Built RESTful APIs handling real-time data operations with improved response times.' },
      { name: 'HTML/CSS', description: 'Frontend development for various projects with responsive design.' },
      { name: 'Java', description: 'Basic knowledge of Java programming language.' },
      { name: 'C', description: 'Understanding of low-level programming concepts.' },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & APIs',
    icon: Database,
    color: 'emerald-400',
    skills: [
      { name: 'PostgreSQL', description: 'Engineered scalable data pipelines and storage solutions, reducing data processing time.' },
      { name: 'MongoDB', description: 'Experience with NoSQL database for flexible data storage solutions.' },
      { name: 'MySQL', description: 'Proficient in relational database design and management.' },
      { name: 'REST APIs', description: 'Designed and implemented RESTful APIs for multiple projects with external integrations.' },
      { name: 'Postman', description: 'API testing and documentation for backend services.' },
    ]
  },
  {
    id: 'data',
    title: 'Data & AI',
    icon: Cpu,
    color: 'purple-400',
    skills: [
      { name: 'Pandas', description: 'Data manipulation and analysis for large-scale dataset management.' },
      { name: 'NumPy', description: 'Numerical computing for data processing tasks.' },
      { name: 'Matplotlib', description: 'Created visualizations for data analysis and image processing projects.' },
      { name: 'OpenCV', description: 'Image processing and computer vision applications.' },
      { name: 'Power BI', description: 'Data visualization and business intelligence reporting.' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    icon: GitMerge,
    color: 'pink-400',
    skills: [
      { name: 'Docker', description: 'Containerized applications for deployment and testing.' },
      { name: 'AWS', description: 'Managed automation pipelines on AWS Ubuntu servers, improving deployment efficiency.' },
      { name: 'CI/CD', description: 'Optimized pipelines reducing release cycle time and enhancing system stability.' },
      { name: 'Git', description: 'Version control and collaborative development workflows.' },
      { name: 'n8n', description: 'Designed custom nodes to enhance automation workflows, reducing manual intervention.' },
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
    ]
  }
];

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

  const [hoveredSkill, setHoveredSkill] = useState<UnifiedSkill>(allSkills[0]);
  
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