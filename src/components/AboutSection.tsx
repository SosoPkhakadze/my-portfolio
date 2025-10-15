import { motion } from 'framer-motion';
import { Code, BrainCircuit, Users, Sparkles, Briefcase } from 'lucide-react';

// --- Data Definitions (no change) ---
const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: 'B.S.', label: 'In Computer Science' },
];

const corePhilosophies = [
  {
    icon: <Code size={20} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Clean & Scalable Code',
    description: 'I prioritize writing code that is not just functional, but also maintainable and ready to scale. For me, good architecture is non-negotiable.',
  },
  {
    icon: <BrainCircuit size={20} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Pragmatic Problem Solving',
    description: 'I focus on finding the most effective and efficient solution for the task at hand, balancing ideal implementation with practical project constraints.',
  },
  {
    icon: <Users size={20} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Collaborative Spirit',
    description: 'I thrive in team environments, believing that the best products are built through open communication, shared knowledge, and mutual respect.',
  },
];

const keyTechnologies = [
  'Python', 'PyTorch', 'N8N', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'AI/ML Libraries'
];

// --- Animation Variants (no change) ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
} as const;

// --- The Main Component ---
const AboutSection = () => {
  return (
    // CHANGED: Removed specific background colors (bg-gray-50 dark:bg-gray-950)
    // to inherit the main theme background. It now uses theme-aware text colors.
    <section id="about" className="py-24 sm:py-32 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* --- LEFT COLUMN: Introduction & Philosophy --- */}
          <div className="lg:col-span-2">
            {/* CHANGED: Using theme-aware 'foreground' color for main text elements */}
            <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-16"
                    >
                      
                      <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        About Me
                      </h2>
                    </motion.div>

            {/* CHANGED: Using theme-aware 'muted-foreground' for secondary text */}
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am a dedicated Computer Science student at Kutaisi International University, with a profound passion for engineering intelligent digital solutions. My journey in software development is driven by a desire to tackle complex, real-world challenges and build applications that are not only powerful but also elegant in their design and execution.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-6">
              {corePhilosophies.map((philosophy) => (
                <div key={philosophy.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mt-1">
                    {philosophy.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{philosophy.title}</h3>
                    <p className="text-muted-foreground">{philosophy.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Stats & Skills --- */}
          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">At a Glance</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat) => (
                  // CHANGED: Using 'card' and 'card-foreground' semantics for better theme integration
                  <div key={stat.label} className="p-4 bg-card rounded-lg border border-border shadow-sm">
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {keyTechnologies.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    // CHANGED: Using 'muted' and 'muted-foreground' for better theme integration
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;