import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, MapPin, ExternalLink, ArrowRight, Download } from 'lucide-react';
import { ResumeViewer } from './ResumeViewer';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactChannels = [
    {
      icon: Mail,
      label: "Email",
      value: "soso.pkhakadze.dev@gmail.com",
      href: "mailto:soso.pkhakadze.dev@gmail.com",
      subtext: "Best for detailed inquiries",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sosopkhakadze",
      href: "https://github.com/sosopkhakadze",
      subtext: "Check my work & repositories",
      color: "from-slate-600 to-slate-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sosopkhakadze",
      href: "https://linkedin.com/in/sosopkhakadze",
      subtext: "Professional connections",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kutaisi, Georgia",
      href: "#",
      subtext: "Remote work available",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Contact</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Let's collaborate on exciting projects. Reach out through any channel below
          </p>
        </div>

        {/* Main Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon;
            const isLink = channel.href !== '#';
            
            return (
              <a
                key={idx}
                href={channel.href}
                target={isLink ? '_blank' : undefined}
                rel={isLink ? 'noopener noreferrer' : undefined}
                className={`group ${isLink ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <Card className="bg-gradient-to-br from-white/70 to-white/50 dark:from-slate-800/70 dark:to-slate-800/50 backdrop-blur-xl p-7 border border-white/20 dark:border-slate-700/20 hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300 hover:shadow-lg h-full hover:scale-105 transform">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        {channel.label}
                      </h3>
                      <p className="text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {channel.value}
                      </p>
                    </div>
                    {isLink && (
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{channel.subtext}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Resume CTA Card */}
        <Card className="bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-purple-500/10 dark:from-violet-900/20 dark:via-fuchsia-900/20 dark:to-purple-900/20 backdrop-blur-xl p-8 border border-violet-200/50 dark:border-violet-800/50 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Want to know more about me?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-md">
                Check out my detailed resume to see my full experience, education, and technical skills.
              </p>
            </div>
            <ResumeViewer triggerType="button">
              <Button className="group px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </ResumeViewer>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 backdrop-blur-xl p-8 border border-blue-200/50 dark:border-blue-800/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Ready to work together?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-md">
                I'm always open to new opportunities and collaborations. Drop me a message anytime!
              </p>
            </div>
            <a
              href="mailto:soso.pkhakadze.dev@gmail.com"
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Send Email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;