import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming & Development',
      color: 'neon-blue',
      skills: [
        { name: 'Python', level: 95, description: 'Django, FastAPI, Pandas, NumPy' },
        { name: 'JavaScript', level: 85, description: 'React, Node.js, ES6+' },
        { name: 'SQL', level: 90, description: 'Complex queries, optimization' },
        { name: 'HTML/CSS', level: 85, description: 'Modern web standards' },
        { name: 'Java', level: 75, description: 'Object-oriented programming' },
        { name: 'C', level: 70, description: 'System programming basics' }
      ]
    },
    {
      id: 'data',
      title: 'Data Analysis & Visualization',
      color: 'neon-purple',
      skills: [
        { name: 'Pandas', level: 90, description: 'Data manipulation & analysis' },
        { name: 'Matplotlib', level: 85, description: 'Data visualization' },
        { name: 'Power BI', level: 80, description: 'Business intelligence' },
        { name: 'Tableau', level: 75, description: 'Interactive dashboards' },
        { name: 'NumPy', level: 85, description: 'Numerical computing' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      color: 'neon-cyan',
      skills: [
        { name: 'PostgreSQL', level: 90, description: 'Advanced queries, optimization' },
        { name: 'MongoDB', level: 85, description: 'NoSQL, aggregation pipelines' },
        { name: 'MySQL', level: 85, description: 'Relational database design' },
        { name: 'MariaDB', level: 80, description: 'Database administration' },
        { name: 'SQLite', level: 85, description: 'Lightweight databases' }
      ]
    },
    {
      id: 'devops',
      title: 'Automation & DevOps',
      color: 'neon-pink',
      skills: [
        { name: 'n8n', level: 95, description: 'Workflow automation' },
        { name: 'Make', level: 90, description: 'Process automation' },
        { name: 'CI/CD', level: 85, description: 'Pipeline optimization' },
        { name: 'AWS', level: 80, description: 'Cloud infrastructure' },
        { name: 'Docker', level: 75, description: 'Containerization' },
        { name: 'Git/GitHub', level: 90, description: 'Version control' }
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

        {/* Filter Buttons */}
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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, categoryIndex) => (
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
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className="text-primary border-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out glow-blue"
                        style={{ 
                          width: selectedCategory === 'all' || selectedCategory === category.id 
                            ? `${skill.level}%` 
                            : '0%' 
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