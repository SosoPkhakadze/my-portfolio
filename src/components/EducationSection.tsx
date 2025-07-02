import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const endYear = 2026;
  const progress = Math.min(((currentYear - startYear) / (endYear - startYear)) * 100, 100);

  // --- YOUR PERSONALIZED EDUCATION DATA ---
  const achievements = [
    "Backend Development with Django",
    "Data Structures & Algorithms", 
    "Database Design & Management",
    "Software Engineering Principles",
    "Computer Architecture",
    "Human Resource Management & Leadership"
  ];

  const courses = [
    { name: "Algorithms & Data Structures", grade: "A", completed: true },
    { name: "Backend Dev with Django", grade: "A", completed: true },
    { name: "Databases I", grade: "A", completed: true },
    { name: "Software Engineering I", grade: "A-", completed: true },
    { name: "Entrepreneurial Business", grade: "A", completed: true },
    { name: "Operating Systems", grade: "In Progress", completed: false }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 font-display">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey in computer science and business.
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
                      style={{ width: `${progress}%` }}
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
                        {course.grade}
                      </Badge>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-card p-4 border-border">
                  <h5 className="font-semibold text-foreground mb-2">Academic Focus</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pursuing an innovative computer science degree with a comprehensive curriculum and a minor in Business Administration to blend technical skills with practical project leadership.
                  </p>
                </Card>

              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;