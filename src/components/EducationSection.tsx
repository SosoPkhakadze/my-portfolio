import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Flame,
  TrendingUp,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';

const EducationSection = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const endYear = 2026;
  const progress = Math.min(((currentYear - startYear) / (endYear - startYear)) * 100, 100);
  const yearsComplete = currentYear - startYear;

  const categoryInfo = [
    {
      name: "Core CS",
      description: "Algorithms, Backend, Databases, Software Engineering, Architecture",
      icon: Flame,
      gradient: "from-red-500 to-orange-500",
      darkGradient: "dark:from-red-600 dark:to-orange-600",
      bgLight: "from-red-50 to-orange-50",
      bgDark: "dark:from-red-900/20 dark:to-orange-900/20",
      borderLight: "border-red-200/50",
      borderDark: "dark:border-red-800/50"
    },
    {
      name: "Business",
      description: "Entrepreneurship, Leadership, Management",
      icon: TrendingUp,
      gradient: "from-blue-500 to-purple-600",
      darkGradient: "dark:from-blue-600 dark:to-purple-700",
      bgLight: "from-blue-50 to-purple-50",
      bgDark: "dark:from-blue-900/20 dark:to-purple-900/20",
      borderLight: "border-blue-200/50",
      borderDark: "dark:border-blue-800/50"
    },
    {
      name: "Mathematics",
      description: "Linear Algebra, Calculus, Discrete Probability",
      icon: Sparkles,
      gradient: "from-emerald-500 to-teal-500",
      darkGradient: "dark:from-emerald-600 dark:to-teal-600",
      bgLight: "from-emerald-50 to-teal-50",
      bgDark: "dark:from-emerald-900/20 dark:to-teal-900/20",
      borderLight: "border-emerald-200/50",
      borderDark: "dark:border-emerald-800/50"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Education</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Academic Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Building comprehensive expertise in computer science
          </p>
        </div>

        {/* Main Education Card */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-slate-800/80 dark:to-blue-900/20 backdrop-blur-xl p-10 md:p-14 border border-white/40 dark:border-slate-700/40 shadow-2xl">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Main Info */}
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                  B.S. Computer Science
                </h3>
                <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-5">
                  Kutaisi International University
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold">Kutaisi, Georgia</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-semibold">{startYear} - {endYear}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Progress */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Degree Progress</h4>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base px-4 py-2 font-bold shadow-lg">
                    {Math.round(progress)}%
                  </Badge>
                </div>
                <div className="relative w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-lg">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1500 rounded-full shadow-lg"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm font-semibold text-slate-600 dark:text-slate-400 mt-3">
                  <span>Year {yearsComplete + 1} of 4</span>
                  <span>Est. {endYear}</span>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                <p className="text-xs uppercase tracking-widest font-bold text-blue-700 dark:text-blue-300 mb-2">Specialization</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Full-Stack Development & Software Engineering</p>
              </div>
            </div>
          </div>

          {/* Learning Domains */}
          <div className="pt-12 border-t border-white/20 dark:border-slate-700/20">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Learning Domains</h4>
            <div className="grid md:grid-cols-3 gap-5">
              {categoryInfo.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="group">
                    <div className={`relative bg-gradient-to-br ${cat.bgLight} ${cat.bgDark} p-5 rounded-xl border ${cat.borderLight} ${cat.borderDark} hover:shadow-lg transition-all duration-300 h-full`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${cat.gradient} ${cat.darkGradient} rounded-lg flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-bold text-slate-900 dark:text-white">{cat.name}</h5>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;