import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Code,
  Database,
  Cpu,
  PieChart,
  BookOpen,
  Layers,
  Calculator,
  Share2,
  Zap,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Monitor,
  Award,
  Star,
  Clock,
  CheckCircle,
  PlayCircle,
  Globe,
  Sparkles,
  Brain,
  Target,
  Trophy
} from 'lucide-react';

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState('university');
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const scrollRef = useRef(null);

  // Animation cycle for the floating elements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Progress calculation
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const endYear = 2026;
  const progress = Math.min(((currentYear - startYear) / (endYear - startYear)) * 100, 100);

  const courseIcons = {
    'Algorithms and Data Structures': <Layers className="w-4 h-4" />,
    'Backend Development with Django': <Code className="w-4 h-4" />,
    'Databases I': <Database className="w-4 h-4" />,
    'Software Engineering I': <Code className="w-4 h-4" />,
    'Computer Architecture': <Cpu className="w-4 h-4" />,
    'Operating Systems': <Monitor className="w-4 h-4" />,
    'Theory of Computation': <Zap className="w-4 h-4" />,
    'Discrete Probability Theory': <PieChart className="w-4 h-4" />,
    'Linear Algebra': <Share2 className="w-4 h-4" />,
    'Calculus I': <Calculator className="w-4 h-4" />,
    'Entrepreneurial Business': <TrendingUp className="w-4 h-4" />,
    'Human Resource Management & Leadership': <Users className="w-4 h-4" />,
    'Project Management': <Calendar className="w-4 h-4" />,
    'Financial Accounting': <DollarSign className="w-4 h-4" />
  };

  const completedCourses = [
    { name: "Algorithms & Data Structures", semester: "Fall 2023", credits: 6 },
    { name: "Backend Development with Django", semester: "Spring 2024", credits: 6 },
    { name: "Databases I", semester: "Fall 2023", credits: 6 },
    { name: "Software Engineering I", semester: "Spring 2024", credits: 6 },
    { name: "Computer Architecture", semester: "Fall 2023", credits: 6 },
    { name: "Entrepreneurial Business", semester: "Spring 2024", credits: 4 },
    { name: "Human Resource Management & Leadership", semester: "Fall 2024", credits: 4 },
    { name: "Linear Algebra", semester: "Fall 2022", credits: 6 },
    { name: "Calculus I", semester: "Fall 2022", credits: 6 }
  ];



  const onlineCourses = [
    {
      title: "CS50's Introduction to Computer Science",
      platform: "HarvardX (via edX)",
      skills: ["Algorithms", "Data Structures", "C Programming"],
      completed: true,
      certificate: true
    },
    {
      title: "CS50's Introduction to Programming with Python",
      platform: "HarvardX (via edX)",
      skills: ["Python Programming", "Problem Solving"],
      completed: true,
      certificate: true
    },
    {
      title: "CS50's Web Programming with Python and JavaScript",
      platform: "HarvardX (via edX)",
      skills: ["Web Development", "Full-Stack Development"],
      completed: true,
      certificate: true
    },
    {
      title: "Django Web Framework",
      platform: "Coursera",
      skills: ["Django", "Backend Development"],
      completed: true,
      certificate: false
    },
    {
      title: "API Development",
      platform: "Coursera",
      skills: ["API Design", "Backend Integration"],
      completed: true,
      certificate: false
    }
  ];

  const FloatingElement = ({ children, delay = 0 }) => (
    <div 
      className="absolute opacity-20 pointer-events-none"
      style={{
        animation: `float 6s ease-in-out infinite ${delay}s`,
        transform: `translateY(${Math.sin(animationPhase + delay) * 20}px)`
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="education" >

      {/* Main Content */}
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 font-display">
            Educational Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Crafting excellence through continuous learning and academic achievement
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20">
            <div className="flex space-x-2">
              {[
                { id: 'university', label: 'University', icon: <GraduationCap className="w-5 h-5" /> },
                { id: 'online', label: 'Online Learning', icon: <Globe className="w-5 h-5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/70'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* University Tab */}
        {activeTab === 'university' && (
          <div className="max-w-7xl mx-auto">
            {/* Centered container for main card */}
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3">
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold mb-2">
                        Kutaisi International University
                      </p>
                      <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>Kutaisi, Georgia</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>2022 - 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* Progress Section */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Degree Progress</h4>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-bold">
                        {Math.round(progress)}% Complete
                      </Badge>
                    </div>
                    <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-2000 ease-out shadow-lg"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span>Started {startYear}</span>
                      <span className="font-medium">Year {currentYear - startYear + 1} of 4</span>
                      <span>Graduating {endYear}</span>
                    </div>
                  </div>
        
                  {/* Academic Focus */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Academic Focus</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pursuing an innovative computer science degree with comprehensive curriculum covering theoretical foundations 
                      and practical software engineering skills. Complemented with Business Administration minor for project 
                      leadership and entrepreneurial expertise.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
        
            {/* Completed Courses Grid */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">Completed Coursework</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedCourses.map((course, index) => (
                  <Card 
                    key={index}
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    onMouseEnter={() => setHoveredCourse(index)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          {courseIcons[course.name] || <BookOpen className="w-5 h-5 text-white" />}
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-tight">
                            {course.name}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{course.semester}</p>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Online Learning Tab */}
        {activeTab === 'online' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {onlineCourses.map((course, index) => (
                <Card key={index} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{course.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{course.platform}</p>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs border-teal-300 text-teal-600">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      {course.certificate && (
                        <Award className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}


      <style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  .font-display {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`}</style>
    </section>
  );
};

export default EducationSection;