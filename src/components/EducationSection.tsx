import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const endYear = 2026;
  const progress = ((currentYear - startYear) / (endYear - startYear)) * 100;

  const achievements = [
    "Advanced Backend Development",
    "Data Structures & Algorithms", 
    "Database Design & Management",
    "Software Engineering Principles",
    "Machine Learning Fundamentals",
    "Web Development Technologies"
  ];

  const courses = [
    { name: "Data Structures & Algorithms", grade: "A", completed: true },
    { name: "Database Systems", grade: "A", completed: true },
    { name: "Software Engineering", grade: "A-", completed: true },
    { name: "Web Development", grade: "A", completed: true },
    { name: "Machine Learning", grade: "B+", completed: true },
    { name: "Computer Networks", grade: "A-", completed: false }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Building a strong foundation in computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass p-8 hover-lift">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* University Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    Bachelor in Computer Science
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    Kutaisi International University
                  </p>
                  <p className="text-muted-foreground">
                    Kutaisi, Georgia • {startYear} - {endYear}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Degree Progress</span>
                    <Badge variant="outline" className="text-primary border-primary">
                      {Math.round(progress)}% Complete
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out glow-blue"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{startYear}</span>
                    <span>Current: {currentYear}</span>
                    <span>{endYear}</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Learning Areas:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Highlights */}
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Course Highlights</h4>
                
                <div className="space-y-3">
                  {courses.map((course, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          course.completed ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <span className="text-foreground font-medium">{course.name}</span>
                      </div>
                      <Badge 
                        variant={course.completed ? "default" : "secondary"}
                        className={course.completed ? "bg-primary text-primary-foreground" : ""}
                      >
                        {course.completed ? course.grade : "In Progress"}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Academic Focus */}
                <Card className="bg-gradient-card p-4 border-border">
                  <h5 className="font-semibold text-foreground mb-2">Academic Focus</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    My studies focus on practical software development, with emphasis on 
                    backend systems, data management, and automation. I actively apply 
                    classroom knowledge to real-world projects, combining theoretical 
                    foundations with hands-on industry experience.
                  </p>
                </Card>

                {/* University Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">3.8+</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;