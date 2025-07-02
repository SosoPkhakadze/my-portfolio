import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // --- YOUR PERSONALIZED SKILLS DATA ---
  const skillCategories = [
    {
      id: 'development',
      title: 'Programming & Development',
      color: 'neon-blue',
      skills: [
        { name: 'Python', level: 95, description: 'Advanced proficiency in Django, Flask, and data science libraries.' },
        { name: 'JavaScript', level: 85, description: 'Strong in modern JS (ES6+) and React for frontend development.' },
        { name: 'React', level: 85, description: 'Building interactive and responsive user interfaces.' },
        { name: 'Django', level: 90, description: 'Expertise in creating robust backend systems and REST APIs.' },
        { name: 'Flask', level: 80, description: 'Building lightweight web applications and microservices.' },
        { name: 'OOP', level: 90, description: 'Strong foundation in Object-Oriented Programming principles.' },
        { name: 'Data Structures & Algorithms', level: 90, description: 'Proficient in design, analysis, and implementation.' },
        { name: 'HTML/CSS', level: 85, description: 'Creating semantic, accessible, and stylish web pages.' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases & APIs',
      color: 'neon-cyan',
      skills: [
        { name: 'SQL', level: 90, description: 'Advanced queries, optimization across MySQL & MariaDB.' },
        { name: 'PostgreSQL', level: 85, description: 'Experience with advanced features and performance tuning.' },
        { name: 'SQLite', level: 80, description: 'Utilizing for lightweight and embedded applications.' },
        { name: 'Postman', level: 85, description: 'Skilled in API testing, documentation, and automated checks.' },
        { name: 'REST APIs', level: 95, description: 'Designing, building, and integrating RESTful services.' },
      ]
    },
    {
      id: 'bi_data',
      title: 'BI & Data Visualization',
      color: 'neon-purple',
      skills: [
        { name: 'Power BI', level: 90, description: 'Creating insightful and interactive business intelligence dashboards.' },
        { name: 'Tableau', level: 80, description: 'Developing data visualizations for exploratory analysis.' },
        { name: 'Pandas & NumPy', level: 85, description: 'Core libraries for data manipulation and numerical computing in Python.' },
        { name: 'Matplotlib', level: 80, description: 'Standard Python library for static and interactive visualizations.' },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Version Control',
      color: 'neon-pink',
      skills: [
        { name: 'Docker', level: 80, description: 'Containerization for consistent deployment and scalability.' },
        { name: 'Git & GitHub', level: 95, description: 'Advanced version control, branching strategies, and collaboration.' },
        { name: 'Agile Methodologies', level: 80, description: 'Working in iterative development cycles, familiar with Scrum.' },
        { name: 'Testing & Debugging', level: 90, description: 'Unit testing, integration testing, and effective debugging.' },
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === 'all' 
                ? 'glass glow-blue text-primary border-primary' 
                : 'bg-card hover:bg-muted text-muted-foreground'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'glass glow-blue text-primary border-primary' 
                  : 'bg-card hover:bg-muted text-muted-foreground'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="glass p-6 hover-lift">
              <h3 className="text-xl font-semibold gradient-text mb-6 flex items-center">
                <div className={`w-3 h-3 bg-${category.color} rounded-full mr-3`}></div>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="space-y-2"
                    style={{
                      animationDelay: `${skillIndex * 50}ms`
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className="text-primary border-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out glow-blue"
                        style={{ 
                          width: `${skill.level}%` 
                        }}
                      ></div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;