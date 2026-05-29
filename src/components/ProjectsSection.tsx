import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image, Github, ExternalLink, ArrowRight } from 'lucide-react';

import jobSearch1 from "@/assets/Job_Search/Job_Search_1.png";
import jobSearch2 from "@/assets/Job_Search/Job_Search_2.png";
import jobSearch3 from "@/assets/Job_Search/Job_Search_3.png";
import taskflow1 from "@/assets/TaskFlow_AI/taskflow_1.png";
import taskflow2 from "@/assets/TaskFlow_AI/taskflow_2.png";
import gmailAnalyzer from "@/assets/Gmail_Analyzer_N8N/Gmail Analyzer.png";
import AutomatedWeeklyReport from "@/assets/Automated Weekly Marketing Performance Report/Automated Weekly Marketing Performance Report.png";
import hubspotApprovalWorkflow from "@/assets/N8N-hubspot-approval-workflow/N8N-hubspot-approval-workflow.png";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  images: any[];
  githubLink?: string;
  demoLink?: string;
  status?: string;
  featured?: boolean;
};

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'epoch-ai',
      title: 'Epoch AI',
      description: 'Production AI fitness app for iOS & Android. Real-time nutrition tracking, GPT-4o AI coaching, workout logging, E2E encrypted social community, RevenueCat subscriptions, and 10 languages. Full security audit completed. App Store launch imminent.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'OpenAI GPT-4o', 'RevenueCat'],
      category: 'ai',
      images: [],
      demoLink: 'https://www.epochai.app/',
      status: 'Launching Soon',
      featured: true,
    },
    {
      id: 'miraje',
      title: 'Miraje',
      description: 'AI-powered virtual try-on and wardrobe management mobile app. Upload your photo + a garment, Fashn.ai generates a realistic composite. Includes Claude AI stylist for outfit suggestions, a digital wardrobe, and a Style Scout in-app browser to try on anything from any website.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Fashn.ai', 'Claude AI', 'Supabase'],
      category: 'ai',
      images: [],
      status: 'In Development',
      featured: true,
    },
    {
      id: 'taskflow-ai',
      title: 'TaskFlow AI',
      description: 'Full-stack AI task management app with real-time Supabase sync and OpenAI-powered task breakdown, priority scoring, and automated workflow suggestions.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'n8n'],
      category: 'ai',
      images: [taskflow1, taskflow2],
      githubLink: 'https://github.com/SosoPkhakadze/taskflow-ai',
    },
    {
      id: 'gmail-organizer',
      title: 'Intelligent Gmail Organizer',
      description: 'n8n workflow using a hybrid rule-based + GPT-4o-mini approach to auto-categorize emails, dynamically create labels, and archive at scale — zero manual inbox management.',
      technologies: ['n8n', 'OpenAI API', 'Gmail API', 'JavaScript'],
      category: 'automation',
      images: [gmailAnalyzer],
      githubLink: 'https://github.com/SosoPkhakadze/N8N-Gmail-Analyzer',
    },
    {
      id: 'ai-marketing-report',
      title: 'AI Marketing Report Automator',
      description: 'End-to-end n8n pipeline that fetches Google Sheets data, runs GPT-4o analysis, generates strategic recommendations, and distributes polished reports to Google Docs and Slack — fully automated weekly.',
      technologies: ['n8n', 'OpenAI API', 'Google Sheets API', 'Slack API', 'JavaScript'],
      category: 'automation',
      images: [AutomatedWeeklyReport],
      githubLink: 'https://github.com/SosoPkhakadze/N8N-Weekly-Marketing-Performance-Report',
    },
    {
      id: 'hubspot-approval-workflow',
      title: 'HubSpot Contact Approval Workflow',
      description: 'Enterprise n8n automation with multi-stage data validation, Slack-based human-in-the-loop approval, intelligent HubSpot CRM synchronization, comprehensive error handling, and full audit logging.',
      technologies: ['n8n', 'HubSpot API', 'Slack API', 'Google Sheets API', 'Gmail API'],
      category: 'automation',
      images: [hubspotApprovalWorkflow],
      githubLink: 'https://github.com/SosoPkhakadze/N8N-HubSpot-Approval-Workflow',
    },
    {
      id: 'job-aggregator',
      title: 'Job Search Platform',
      description: 'Full-stack job aggregation platform combining a Django REST framework backend with a React frontend. Aggregates real-time listings from multiple sources with advanced filtering.',
      technologies: ['React', 'Django REST', 'Python', 'RapidAPI', 'PostgreSQL'],
      category: 'development',
      images: [jobSearch1, jobSearch2, jobSearch3],
      githubLink: 'https://github.com/SosoPkhakadze/Job_Search',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Mobile' },
    { id: 'automation', label: 'Automation' },
    { id: 'development', label: 'Development' },
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
              <Card className={`group overflow-hidden border transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
                project.featured
                  ? 'border-primary/40 hover:border-primary/60 shadow-md shadow-primary/10'
                  : 'border-border hover:border-foreground/20'
              }`}>
                {/* Project Image/Preview */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-accent/10">
                      <div className="text-5xl font-bold text-primary/20">
                        {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className={`text-xs font-semibold border-0 ${
                        project.status === 'In Development'
                          ? 'bg-amber-500/90 text-white'
                          : 'bg-green-500/90 text-white'
                      }`}>
                        {project.status}
                      </Badge>
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
                      ) : project.githubLink ? (
                        <Button asChild size="sm" variant="outline" className="flex-1">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            View Code
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="flex-1 opacity-60 cursor-default" disabled>
                          {project.status ?? 'Private'}
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
