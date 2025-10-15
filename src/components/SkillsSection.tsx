import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Database, GitMerge, Cpu, TestTube2, Server,
  TrendingUp, Zap, Sparkles, Grid3x3, BarChart3, Layout, X, Award
} from 'lucide-react';

interface Skill {
  name: string;
  description: string;
  proficiency: number;
  yearsOfExperience: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  skills: Skill[];
}

interface UnifiedSkill extends Skill {
  categoryId: string;
  categoryTitle: string;
  categoryColor: string;
  categoryGradient: string;
  categoryIcon: React.ElementType;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Programming & Development',
    icon: Code,
    color: 'blue',
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    skills: [
      { name: 'Next.js', description: 'Built full-stack applications with App Router, API Routes, and Vercel deployment', proficiency: 90, yearsOfExperience: 1.5 },
      { name: 'React', description: 'Developed dynamic and responsive user interfaces for complex web applications', proficiency: 92, yearsOfExperience: 2 },
      { name: 'TypeScript', description: 'Utilized strong typing to build scalable, maintainable applications', proficiency: 88, yearsOfExperience: 2 },
      { name: 'Python', description: 'Advanced proficiency with Django, FastAPI, Pandas for backend services', proficiency: 95, yearsOfExperience: 3 },
      { name: 'Django', description: 'Developed multiple web applications with robust backend architecture', proficiency: 93, yearsOfExperience: 2.5 },
      { name: 'HTML/CSS', description: 'Frontend development with responsive design and modern standards', proficiency: 90, yearsOfExperience: 3 },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & APIs',
    icon: Database,
    color: 'emerald',
    gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
    skills: [
      { name: 'Supabase', description: 'Leveraged PostgreSQL database, authentication, and realtime capabilities', proficiency: 85, yearsOfExperience: 1 },
      { name: 'PostgreSQL', description: 'Engineered scalable data pipelines and storage solutions', proficiency: 90, yearsOfExperience: 2.5 },
      { name: 'MySQL', description: 'Proficient in relational database design and management', proficiency: 87, yearsOfExperience: 2 },
      { name: 'OpenAI API', description: 'Integrated AI models for NLP, text generation, and task enhancement', proficiency: 88, yearsOfExperience: 1 },
      { name: 'REST APIs', description: 'Designed and implemented RESTful APIs with external integrations', proficiency: 92, yearsOfExperience: 3 },
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Workflow',
    icon: GitMerge,
    color: 'pink',
    gradient: 'from-pink-500 via-rose-500 to-pink-600',
    skills: [
      { name: 'n8n', description: 'Designed complex, multi-step automation workflows connecting APIs and AI', proficiency: 95, yearsOfExperience: 2 },
      { name: 'Make.com', description: 'Created visual workflows to automate tasks and integrate cloud services', proficiency: 88, yearsOfExperience: 1.5 },
      { name: 'CI/CD', description: 'Optimized pipelines reducing release cycle time and enhancing stability', proficiency: 85, yearsOfExperience: 2 },
      { name: 'Git', description: 'Version control and collaborative development workflows', proficiency: 90, yearsOfExperience: 3 },
    ]
  },
  {
    id: 'data',
    title: 'Data & AI',
    icon: Cpu,
    color: 'purple',
    gradient: 'from-purple-500 via-violet-500 to-purple-600',
    skills: [
      { name: 'Pandas & NumPy', description: 'Data manipulation and numerical computing for large-scale datasets', proficiency: 92, yearsOfExperience: 2.5 },
      { name: 'Matplotlib', description: 'Created visualizations for data analysis and image processing', proficiency: 85, yearsOfExperience: 2 },
      { name: 'OpenCV', description: 'Image processing and computer vision applications', proficiency: 80, yearsOfExperience: 1.5 },
      { name: 'Power BI', description: 'Data visualization and business intelligence reporting', proficiency: 87, yearsOfExperience: 2 },
    ]
  },
  {
    id: 'cloud',
    title: 'Deployment & Cloud',
    icon: Server,
    color: 'orange',
    gradient: 'from-orange-500 via-amber-500 to-orange-600',
    skills: [
      { name: 'Vercel', description: 'Deployed modern web applications with Git integration and serverless functions', proficiency: 88, yearsOfExperience: 1.5 },
      { name: 'AWS', description: 'Managed automation pipelines on AWS Ubuntu servers', proficiency: 83, yearsOfExperience: 2 },
      { name: 'Docker', description: 'Containerized applications for consistent deployment environments', proficiency: 82, yearsOfExperience: 1.5 },
    ]
  },
  {
    id: 'testing',
    title: 'QA & Testing',
    icon: TestTube2,
    color: 'yellow',
    gradient: 'from-yellow-500 via-orange-400 to-yellow-600',
    skills: [
      { name: 'Automated Testing', description: 'Developed test scripts reducing manual testing time by 80%', proficiency: 90, yearsOfExperience: 2 },
      { name: 'QA Processes', description: 'In-depth QA for backend functionalities across Python and JavaScript', proficiency: 92, yearsOfExperience: 2.5 },
      { name: 'Debugging', description: 'Identified issues in data processing and API calls', proficiency: 88, yearsOfExperience: 3 },
      { name: 'Postman', description: 'API testing, documentation, and validation for backend services', proficiency: 85, yearsOfExperience: 2 },
    ]
  }
];

const SkillsSection = () => {
  const [viewMode, setViewMode] = useState<'categories' | 'grid' | 'compact'>('compact');
  const [selectedSkill, setSelectedSkill] = useState<UnifiedSkill | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const allSkills = useMemo(() => 
    skillCategories.flatMap(category => 
      category.skills.map(skill => ({
        ...skill,
        categoryId: category.id,
        categoryTitle: category.title,
        categoryColor: category.color,
        categoryGradient: category.gradient,
        categoryIcon: category.icon,
      }))
    ), 
  []);

  const topSkills = useMemo(() => 
    [...allSkills].sort((a, b) => b.proficiency - a.proficiency).slice(0, 6),
    [allSkills]
  );

  const stats = useMemo(() => ({
    totalSkills: allSkills.length,
    avgProficiency: Math.round(allSkills.reduce((acc, s) => acc + s.proficiency, 0) / allSkills.length),
    avgExperience: (allSkills.reduce((acc, s) => acc + s.yearsOfExperience, 0) / allSkills.length).toFixed(1),
    expertLevel: allSkills.filter(s => s.proficiency >= 90).length,
  }), [allSkills]);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary">Technical Arsenal</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies with a focus on building scalable, efficient solutions
          </p>
        </motion.div>

        

        {/* View Mode Toggle - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex gap-1 p-1 rounded-xl bg-muted/50 border border-border/50">
            {[
              { id: 'compact', label: 'Compact', icon: Layout },
              { id: 'categories', label: 'Categories', icon: Grid3x3 },
              { id: 'grid', label: 'Grid', icon: BarChart3 },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {viewMode === mode.id && (
                  <motion.div
                    layoutId="viewMode"
                    className="absolute inset-0 bg-primary rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 ${
                  viewMode === mode.id ? 'text-white' : 'text-muted-foreground'
                }`}>
                  <mode.icon className="w-3.5 h-3.5" />
                  {mode.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Views */}
        <AnimatePresence mode="wait">
          {/* Compact View - Featured Skills with Categories */}
          {viewMode === 'compact' && (
            <motion.div
              key="compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto space-y-6"
            >
              {/* Top Skills Spotlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Top Proficiencies
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {topSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedSkill(skill)}
                      className="cursor-pointer"
                    >
                      <Card className="h-full bg-card/30 border border-primary/30 hover:border-primary/60 hover:bg-card/50 transition-all backdrop-blur-sm group">
                        <CardContent className="p-3">
                          <div className="flex flex-col items-center text-center gap-2">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.categoryGradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                              <skill.categoryIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-sm mb-0.5">{skill.name}</div>
                              <div className="text-xs text-primary font-semibold">{skill.proficiency}%</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Category Overview Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <Card className="h-full bg-card/30 border border-border/50 hover:border-primary/40 transition-all backdrop-blur-sm group">
                      <div className={`h-0.5 bg-gradient-to-r ${category.gradient}`} />
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm truncate">{category.title}</h4>
                            <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map((skill) => {
                            const unifiedSkill: UnifiedSkill = {
                              ...skill,
                              categoryId: category.id,
                              categoryTitle: category.title,
                              categoryColor: category.color,
                              categoryGradient: category.gradient,
                              categoryIcon: category.icon,
                            };
                            
                            return (
                              <motion.button
                                key={skill.name}
                                onClick={() => setSelectedSkill(unifiedSkill)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-2 py-1 rounded-md bg-muted/50 hover:bg-muted border border-border/50 hover:border-primary/30 text-xs font-medium transition-all"
                              >
                                {skill.name}
                              </motion.button>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Categories View - More Detailed */}
          {viewMode === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 max-w-6xl mx-auto"
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="bg-card/30 border border-border/50 hover:border-primary/40 transition-all backdrop-blur-sm overflow-hidden group">
                    <div className={`h-1 bg-gradient-to-r ${category.gradient}`} />
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:rotate-6 transition-transform`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{category.title}</h3>
                          <p className="text-xs text-muted-foreground">{category.skills.length} technologies</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {category.skills.map((skill) => {
                          const unifiedSkill: UnifiedSkill = {
                            ...skill,
                            categoryId: category.id,
                            categoryTitle: category.title,
                            categoryColor: category.color,
                            categoryGradient: category.gradient,
                            categoryIcon: category.icon,
                          };
                          
                          return (
                            <motion.div
                              key={skill.name}
                              whileHover={{ scale: 1.03, y: -2 }}
                              onClick={() => setSelectedSkill(unifiedSkill)}
                              className="cursor-pointer"
                            >
                              <div className="p-3 rounded-lg bg-muted/40 hover:bg-muted border border-border/50 hover:border-primary/40 transition-all h-full">
                                <div className="flex flex-col gap-1.5">
                                  <div className="flex items-center justify-between">
                                    <span className="font-semibold text-xs">{skill.name}</span>
                                    <Badge variant="secondary" className="text-[10px] h-4 px-1">{skill.proficiency}</Badge>
                                  </div>
                                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${skill.proficiency}%` }}
                                      viewport={{ once: true }}
                                      className={`h-full bg-gradient-to-r ${category.gradient}`}
                                    />
                                  </div>
                                  <span className="text-[10px] text-muted-foreground">{skill.yearsOfExperience}y exp</span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Grid View - All Skills */}
          {viewMode === 'grid' && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-w-7xl mx-auto"
            >
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.01 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="cursor-pointer"
                >
                  <Card className="h-full bg-card/30 border border-border/50 hover:border-primary/40 transition-all backdrop-blur-sm group overflow-hidden">
                    <div className={`h-0.5 bg-gradient-to-r ${skill.categoryGradient}`} />
                    <CardContent className="p-3">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.categoryGradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                          <skill.categoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-full">
                          <div className="font-bold text-xs mb-1 truncate">{skill.name}</div>
                          <div className="flex items-center justify-center gap-2 text-[10px]">
                            <Badge variant="outline" className="h-4 text-[10px]">{skill.proficiency}%</Badge>
                            <span className="text-muted-foreground">{skill.yearsOfExperience}y</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
                className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
              >
                <Card className="backdrop-blur-xl bg-card border-2 border-primary/50 shadow-2xl overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${selectedSkill.categoryGradient}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedSkill.categoryGradient} flex items-center justify-center flex-shrink-0`}>
                          <selectedSkill.categoryIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{selectedSkill.name}</h3>
                          <Badge variant="outline" className="text-xs">{selectedSkill.categoryTitle}</Badge>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedSkill(null)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1.5 hover:bg-muted rounded-lg flex-shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="text-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <div className="text-2xl font-bold text-primary mb-0.5">{selectedSkill.proficiency}%</div>
                        <div className="text-xs text-muted-foreground">Proficiency Level</div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <div className="text-2xl font-bold text-primary mb-0.5">{selectedSkill.yearsOfExperience}y</div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {selectedSkill.description}
                    </p>

                    <div>
                      <div className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Skill Breakdown</div>
                      <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex-1">
                            <motion.div
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className={`h-2 rounded-full ${
                                i < Math.ceil(selectedSkill.proficiency / 20)
                                  ? `bg-gradient-to-r ${selectedSkill.categoryGradient}`
                                  : 'bg-muted'
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-1 text-[10px] text-muted-foreground">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;