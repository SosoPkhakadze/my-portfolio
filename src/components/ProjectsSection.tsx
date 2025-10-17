import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image, Github, ExternalLink, ArrowRight } from 'lucide-react';

// --- YOUR PROJECT IMAGES (NO CHANGE) ---
import jobSearch1 from "@/assets/Job_Search/Job_Search_1.png";
import jobSearch2 from "@/assets/Job_Search/Job_Search_2.png";
import jobSearch3 from "@/assets/Job_Search/Job_Search_3.png";
import productSearch1 from "@/assets/Product_Search/Product_Search_1.png";
import productSearch2 from "@/assets/Product_Search/Product_Search_2.png";
import weather1 from "@/assets/Weather/Weather_1.png";
import weather2 from "@/assets/Weather/Weather_2.png";
import kLine1 from "@/assets/K-Line/K-Line_1.png";
import kLine2 from "@/assets/K-Line/K-Line_2.png";
import kLine3 from "@/assets/K-Line/K-Line_3.png";
import TikTokReport1 from "@/assets/TikTokReport/TikTokReport_2.png";
import TikTokReport2 from "@/assets/TikTokReport/TikTokReport_2.png";
import salesDashboard1 from "@/assets/Sales_Dashboard/Sales_Dashboard_1.jpg";
import salesDashboard2 from "@/assets/Sales_Dashboard/Sales_Dashboard_2.jpg";
import browseRepos1 from "@/assets/Browse_Repos/Browse-Repos_1.png";
import browseRepos2 from "@/assets/Browse_Repos/Browse-Repos_2.png";
import taskflow1 from "@/assets/TaskFlow_AI/taskflow_1.png";
import taskflow2 from "@/assets/TaskFlow_AI/taskflow_2.png"
import giftadvisor from "@/assets/GiftAdvisor/GiftAdvisor.png"

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  images: any[];
  githubLink?: string;
  demoLink?: string;
};

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'giftideas-ai',
      title: 'GiftIdeas AI',
      description: 'AI-powered gift recommendations with Amazon product integration and dynamic form experience.',
      technologies: ['Next.js', 'OpenAI', 'Amazon PA-API', 'TypeScript'],
      category: 'ai',
      images: [giftadvisor],
      githubLink: 'https://github.com/SosoPkhakadze/gift-ideas',
      demoLink: 'https://gift-ideas-brown.vercel.app/',
    },
    {
      id: 'taskflow-ai',
      title: 'TaskFlow AI',
      description: 'Full-stack task management application with AI-powered automation. Features real-time updates via Supabase and intelligent task breakdown using OpenAI API.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'n8n'],
      category: 'automation',
      images: [taskflow1, taskflow2],
      githubLink: 'https://github.com/SosoPkhakadze/taskflow-ai',
      demoLink: 'https://taskflow-ai-km3x.vercel.app/',
    },
    {
      id: 'github-repo-browser',
      title: 'GitHub Repository Browser',
      description: 'Flask-based application with OAuth authentication for browsing GitHub repositories with advanced filtering capabilities.',
      technologies: ['Python', 'Flask', 'GitHub API', 'OAuth'],
      category: 'development',
      images: [browseRepos1, browseRepos2],
      githubLink: 'https://github.com/SosoPkhakadze/Github-repository-browsing',
    },
    {
      id: 'k-line-data-analysis',
      title: 'Financial Data Analysis',
      description: 'Analysis tool for K-line candlestick data using statistical methods and data visualization to extract market insights.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      category: 'data',
      images: [kLine1, kLine2, kLine3],
      githubLink: 'https://github.com/SosoPkhakadze/K-line-Data-Analysis',
    },
    {
      id: 'search-products',
      title: 'E-commerce Product Aggregator',
      description: 'Django application that aggregates product listings from multiple e-commerce platforms using web scraping APIs.',
      technologies: ['Python', 'Django', 'RapidAPI'],
      category: 'development',
      images: [productSearch1, productSearch2],
      githubLink: 'https://github.com/SosoPkhakadze/Search_Products',
    },
    {
      id: 'weather-forecast',
      title: 'Weather Forecast Application',
      description: 'Location-based weather application built with Django, integrating OpenWeatherMap API for real-time weather data.',
      technologies: ['Django', 'Python', 'OpenWeatherMap API'],
      category: 'development',
      images: [weather1, weather2],
      githubLink: 'https://github.com/SosoPkhakadze/Weather-forecast',
    },
    {
      id: "job-aggregator",
      title: "Job Search Platform",
      description: "Full-stack job aggregation platform combining Django REST framework backend with React frontend for real-time job listings.",
      technologies: ["React", "Django", "Python", "RapidAPI"],
      category: 'development',
      images: [jobSearch1, jobSearch2, jobSearch3],
      githubLink: "https://github.com/SosoPkhakadze/Job_Search",
    },
    {
      id: 'image-resizing',
      title: 'Image Processing Engine',
      description: 'Custom-built image resizing application implementing bilinear and bicubic interpolation algorithms from scratch.',
      technologies: ['Python', 'NumPy', 'Computer Vision'],
      category: 'development',
      images: [],
      githubLink: 'https://github.com/SosoPkhakadze/image-resizing-interpolation',
    },
    {
      id: 'sales-dashboard',
      title: 'Sales Analytics Dashboard',
      description: 'Enterprise-grade analytics dashboard built with Tableau featuring advanced data modeling and predictive analytics.',
      technologies: ['Tableau', 'SQL'],
      category: 'data',
      images: [salesDashboard1, salesDashboard2],
    },
    {
      id: 'tiktok-insight-analysis',
      title: 'Social Media Analytics',
      description: 'Power BI dashboard for analyzing TikTok content performance with demographic insights and engagement metrics.',
      technologies: ['Power BI'],
      category: 'data',
      images: [TikTokReport1, TikTokReport2],
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'development', label: 'Development' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'automation', label: 'Automation' }
  ];
  
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
                Featured Projects
              </h2>
            </div>
            <div className="text-muted-foreground">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </div>
          </div>
          
          {/* Filter Bar */}
          <div className="flex items-center gap-3 border-b border-border pb-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  selectedFilter === filter.id 
                    ? 'bg-foreground text-background' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <Card className="group overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                {/* Project Image/Preview */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                      <div className="text-5xl font-bold text-muted-foreground/30">
                        {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    {project.demoLink && (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {!project.demoLink && project.images && project.images.length > 0 && (
                      <DialogTrigger asChild>
                        <Button size="sm" variant="secondary">
                          <Image className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                    )}
                    {project.githubLink && (
                      <Button asChild size="sm" variant="outline" className="bg-background/90">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.demoLink ? (
                        <Button asChild size="sm" className="flex-1 group/btn">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                        </Button>
                      ) : project.images && project.images.length > 0 ? (
                        <DialogTrigger asChild>
                          <Button size="sm" className="flex-1">
                            View Details
                          </Button>
                        </DialogTrigger>
                      ) : (
                        <Button asChild size="sm" variant="outline" className="flex-1">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Dialog for Images */}
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
                  <DialogDescription>
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                
                {project.images && project.images.length > 0 && (
                  <div className="mt-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <div className="rounded-lg overflow-hidden border border-border">
                              <img 
                                src={img} 
                                alt={`${project.title} screenshot ${i + 1}`} 
                                className="w-full h-auto"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious />
                          <CarouselNext />
                        </>
                      )}
                    </Carousel>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  {project.demoLink && (
                    <Button asChild className="flex-1">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button asChild variant="outline" className="flex-1">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">No projects found with the selected filter.</p>
            <Button onClick={() => setSelectedFilter('all')} variant="outline">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;