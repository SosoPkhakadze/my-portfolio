import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Job Search Platform",
      description: "Full-stack job search platform allowing users to search for jobs by title and location, with 100% accuracy in search filters. Integrated with external APIs and retrieving data from several major platforms.",
      image: "/api/placeholder/600/400",
      technologies: ["Django", "React", "RapidAPI", "PostgreSQL", "REST APIs"],
      category: "full-stack",
      features: [
        "Real-time job search with location filtering",
        "Integration with multiple job platforms",
        "Advanced search algorithms",
        "Responsive user interface"
      ],
      stats: {
        lines: "5,000+",
        duration: "3 months",
        apis: "5+"
      },
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Image Resizing & Interpolation",
      description: "Built an image resizing application using bilinear and bicubic interpolation techniques, without relying on built-in libraries. Showcases image processing fundamentals with Matplotlib visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Matplotlib", "NumPy", "Computer Vision"],
      category: "python",
      features: [
        "Custom bilinear interpolation algorithm",
        "Bicubic interpolation implementation",
        "Real-time image processing",
        "Comprehensive visualization tools"
      ],
      stats: {
        lines: "2,000+",
        duration: "1 month",
        algorithms: "2"
      },
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Product Search Engine",
      description: "Product search web application integrating web scraping API with Django to pull live data from 2+ e-commerce sites. Implemented price tracking with real-time updates and insights.",
      image: "/api/placeholder/600/400",
      technologies: ["Django", "RapidAPI", "Web Scraping", "PostgreSQL"],
      category: "backend",
      features: [
        "Multi-platform product aggregation",
        "Real-time price tracking",
        "Advanced search filters",
        "Price history analytics"
      ],
      stats: {
        lines: "3,500+",
        duration: "2 months",
        platforms: "2+"
      },
      liveDemo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Developed a weather forecast application that pulls data from the OpenWeatherMap API. Designed backend functionality handling 500+ API requests with accurate, location-based weather updates.",
      image: "/api/placeholder/600/400",
      technologies: ["Django", "OpenWeatherMap API", "JavaScript", "Charts.js"],
      category: "api",
      features: [
        "Real-time weather data",
        "Location-based forecasts",
        "Interactive weather charts",
        "Mobile-responsive design"
      ],
      stats: {
        lines: "1,500+",
        duration: "3 weeks",
        requests: "500+"
      },
      liveDemo: "#",
      github: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full Stack' },
    { id: 'python', label: 'Python' },
    { id: 'backend', label: 'Backend' },
    { id: 'api', label: 'API Integration' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my technical expertise and problem-solving skills
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedFilter === filter.id 
                  ? 'glass glow-blue text-primary border-primary' 
                  : 'bg-card hover:bg-muted text-muted-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-display gradient-text opacity-50">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/80"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-sm font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;