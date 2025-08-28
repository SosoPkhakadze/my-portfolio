import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image as ImageIcon, Github, ExternalLink } from 'lucide-react';

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

// --- NEW: A clear type definition for a Project ---
// This makes demoLink and githubLink optional, fixing the error.
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  images: any[]; // Using 'any' to match original image imports
  githubLink?: string; // Optional
  demoLink?: string;   // Optional
};

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // --- We now define the array as being of type Project[] ---
  const projects: Project[] = [
    {
      id: 'taskflow-ai',
      title: 'TaskFlow AI - Automation App',
      description: 'A full-stack to-do application built with Next.js, featuring a realtime UI powered by Supabase. Integrated with n8n and the OpenAI API to create an AI-powered automation that enhances, clarifies, and breaks down user tasks into actionable steps in the background.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'n8n', 'OpenAI API', 'Vercel', 'Tailwind CSS'],
      tags: ['nextjs', 'react', 'full-stack', 'automation', 'ai', 'api'],
      images: [],
      githubLink: 'https://github.com/SosoPkhakadze/taskflow-ai',
      demoLink: 'https://taskflow-ai-km3x.vercel.app/',
    },
    {
      id: 'github-repo-browser',
      title: 'GitHub Repository Browser',
      description: 'A Flask-based web application that enables GitHub users to authenticate and browse their repositories. Features include technology-based filtering, responsive design, and secure OAuth integration.',
      technologies: ['Python', 'Flask', 'GitHub API', 'OAuth'],
      tags: ['python', 'flask', 'api'],
      images: [browseRepos1, browseRepos2],
      githubLink: 'https://github.com/SosoPkhakadze/Github-repository-browsing',
    },
    {
      id: 'k-line-data-analysis',
      title: 'K-line Data Analysis',
      description: 'This project focuses on analyzing financial K-line data using Python libraries like Pandas, NumPy, and Matplotlib to derive meaningful insights from candlestick charts.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      tags: ['python', 'data'],
      images: [kLine1, kLine2, kLine3],
      githubLink: 'https://github.com/SosoPkhakadze/K-line-Data-Analysis',
    },
    {
      id: 'search-products',
      title: 'Search Products',
      description: 'Developed a Django web application for searching products from e-commerce platforms using a web scraping API (RapidAPI) to extract and display product information.',
      technologies: ['Python', 'Django', 'RapidAPI'],
      tags: ['python', 'django', 'backend', 'api'],
      images: [productSearch1, productSearch2],
      githubLink: 'https://github.com/SosoPkhakadze/Search_Products',
    },
    {
      id: 'weather-forecast',
      title: 'Weather Forecast',
      description: 'A Django-based weather forecast application that utilizes the OpenWeatherMap API to fetch and display current weather data based on user location or a specified city.',
      technologies: ['Django', 'Python', 'OpenWeatherMap API'],
      tags: ['python', 'django', 'backend', 'api'],
      images: [weather1, weather2],
      githubLink: 'https://github.comcom/SosoPkhakadze/Weather-forecast',
    },
    {
      id: "job-aggregator",
      title: "Job Aggregator Website",
      description: "A full-stack web application utilizing Django for the backend and React for the frontend, enabling users to search for job listings based on title and location from an external API.",
      technologies: ["React", "Django", "Python", "RapidAPI"],
      tags: ['react', 'django', 'full-stack', 'api'],
      images: [jobSearch1, jobSearch2, jobSearch3],
      githubLink: "https://github.com/SosoPkhakadze/Job_Search",
    },
    {
      id: 'image-resizing',
      title: 'Image Resizing & Interpolation',
      description: 'Built an image resizing application from scratch using bilinear and bicubic interpolation techniques without relying on built-in libraries. This project demonstrates image processing fundamentals.',
      technologies: ['Python', 'Matplotlib', 'Computer Vision'],
      tags: ['python'],
      images: [],
      githubLink: 'https://github.com/SosoPkhakadze/Image_Resizing_and_Interpolation',
    },
    {
      id: 'sales-dashboard',
      title: 'Sales Dashboard',
      description: 'Developed an advanced sales dashboard using Tableau, leveraging data from SQL databases. Demonstrated expertise in data cleaning, exploratory data analysis, and predictive modeling.',
      technologies: ['Tableau', 'SQL'],
      tags: ['data', 'bi'],
      images: [salesDashboard1, salesDashboard2],
    },
    {
      id: 'tiktok-insight-analysis',
      title: 'TikTok Content Analysis Dashboard',
      description: 'Leveraged Power BI to analyze TikTok account data, providing insights about views, age statistics, and genders interested in the content for better content strategy.',
      technologies: ['Power BI'],
      tags: ['data', 'bi'],
      images: [TikTokReport1, TikTokReport2],
    },
  ];
  
  const allTags = new Set(projects.flatMap(p => p.tags));
  const filters = [{ id: 'all', label: 'All Projects' }, ...Array.from(allTags).map(tag => ({ id: tag, label: tag.charAt(0).toUpperCase() + tag.slice(1) }))];
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 capitalize ${
                selectedFilter === filter.id 
                  ? 'glass glow-blue text-primary border-primary' 
                  : 'bg-card hover:bg-muted text-muted-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Dialog key={project.id}>
              <Card 
                className="glass overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 bg-gradient-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-display gradient-text opacity-50">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.demoLink ? (
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/80">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </a>
                      </Button>
                    ) : (
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/80"
                          disabled={!project.images || project.images.length === 0}
                        >
                          <ImageIcon className="w-4 h-4 mr-2" />
                          View Images
                        </Button>
                      </DialogTrigger>
                    )}
                    {project.githubLink && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold gradient-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images?.map((img, i) => (
                      <CarouselItem key={i}>
                        <img src={img} alt={`${project.title} screenshot ${i+1}`} className="rounded-lg w-full h-auto object-contain" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;