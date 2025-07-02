import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experiences = [
    {
      id: 0,
      title: "Software Engineer & QA Automation Engineer",
      company: "Pyrashyut LLC",
      period: "Jan 2024 - Present",
      location: "Remote",
      description: [
        "Developed backend solutions and RESTful APIs using Python and JavaScript, automating business processes with n8n and make",
        "Managed automation pipelines executing code from GitHub on AWS Ubuntu servers, improving deployment efficiency by 90%",
        "Designed custom n8n nodes to enhance automation workflows, reducing manual intervention by 80%",
        "Developed robust backend solutions and RESTful APIs supporting business process automation across multiple platforms",
        "Optimized CI/CD pipelines, reducing release cycle time and enhancing system stability"
      ],
      technologies: ["Python", "JavaScript", "n8n", "AWS", "CI/CD", "REST APIs"]
    },
    {
      id: 1,
      title: "QA Engineer",
      company: "DevsData",
      period: "Jul 2024 - Present",
      location: "Remote",
      description: [
        "Conducted in-depth QA for backend functionalities across Python and JavaScript applications, reviewing code for over 10 new features every month",
        "Tested and debugged backend processes and browser extensions to confirm seamless integration and operation",
        "Developed and implemented automated test scripts for backend tasks, reducing manual testing time by 80%",
        "Collaborated with the development team on integrating tests into the existing CI/CD pipeline"
      ],
      technologies: ["Python", "JavaScript", "Automation Testing", "CI/CD", "Browser Extensions"]
    },
    {
      id: 2,
      title: "Lead Python Backend Developer",
      company: "Blueberry Systems AI",
      period: "Mar 2023 - Mar 2025",
      location: "Remote",
      description: [
        "Spearheaded backend architecture for an AI-powered conversational platform, ensuring scalability for possible number of users",
        "Built RESTful APIs handling real-time data operations, improving response times by 75%",
        "Engineered scalable data pipelines and storage solutions using PostgreSQL and MongoDB, reducing data processing time by 55%",
        "Integrated third-party APIs and external services (OAuth2, payment processors, AI models) with robust error handling"
      ],
      technologies: ["Python", "PostgreSQL", "MongoDB", "REST APIs", "AI Integration", "OAuth2"]
    },
    {
      id: 3,
      title: "Data Engineer & AI Training Support Specialist",
      company: "Netex Consulting LLC",
      period: "Apr 2022 - Aug 2023",
      location: "Remote",
      description: [
        "Developed ETL pipelines for efficient data transformation and storage in distributed environments",
        "Designed and implemented backend data processing systems handling large-scale dataset management",
        "Developed backend monitoring systems to track data processing efficiency and resource utilization",
        "Collaborated with distributed teams to ensure consistent implementation of data architecture standards"
      ],
      technologies: ["Python", "ETL", "Data Processing", "Distributed Systems", "Backend Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey through the tech industry
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedJob(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedJob === index 
                        ? 'glass glow-blue border-primary' 
                        : 'bg-card hover:bg-muted'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{exp.company}</div>
                    <div className="text-xs text-muted-foreground">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
              <Card className="glass p-8 hover-lift min-h-[500px]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      {experiences[selectedJob].title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-primary font-semibold">
                        {experiences[selectedJob].company}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {experiences[selectedJob].period}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {experiences[selectedJob].location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {experiences[selectedJob].description.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[selectedJob].technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;