import React from 'react';
import { FileText, BookOpen, Users, Briefcase } from 'lucide-react';

const Preparation = () => {
  const steps = [
    {
      title: "Enrolled 2nd Semester",
      date: "Nov. 28, 2025",
      icon: <BookOpen size={20} />,
      description: "Enrolled 2nd semester with only internship as course."
    },
    {
      title: "Workshop on Workplace Etiquette",
      date: "Dec. 5, 2025",
      icon: <Users size={20} />,
      description: "Joined a workshop on workplace etiquette."
    },
    {
      title: "MOA & Paperworks",
      date: "Dec. 8, 2025",
      icon: <FileText size={20} />,
      description: "Started to work on our MOA and other paperworks needed for internship."
    },
    {
      title: "First Day at SSS",
      date: "Dec. 12, 2025",
      icon: <Briefcase size={20} />,
      description: "Started our first day at SSS Pagadian branch."
    },
    {
      title: "Mid-Practicum Progress Check",
      date: "Feb. 19, 2026",
      icon: <Users size={20} />,
      description: "Handled both client-facing and backend documentation tasks with improved confidence and consistency."
    },
    {
      title: "Transmittal and Documentation Focus",
      date: "Mar. 16, 2026",
      icon: <FileText size={20} />,
      description: "Strengthened encoding accuracy, document organization, and coordination with the team during busy periods."
    },
    {
      title: "500 Hours Completed",
      date: "Apr. 23, 2026",
      icon: <Briefcase size={20} />,
      description: "Successfully completed the required 500 practicum hours while maintaining accurate records and client support."
    },
    {
      title: "System Turnover",
      date: "Apr. 29, 2026",
      icon: <FileText size={20} />,
      description: "Final turnover of our system and related deliverables after completion of internship hour requirements."
    }
  ];

  return (
    <section id="preparation" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Practicum Preparation</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            The steps taken to ensure a successful transition from student to intern.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-surface border-2 border-secondary rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className={`glass-card p-6 rounded-xl ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                        {step.icon}
                      </div>
                      <span className="text-sm font-mono text-secondary">{step.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preparation;
