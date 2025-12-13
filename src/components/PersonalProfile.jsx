import React from 'react';
import { User, Code, GraduationCap, Briefcase } from 'lucide-react';

const PersonalProfile = () => {
  const skills = [
    "React", "Laravel", "PHP", "C#", "MySQL", "Tailwind CSS",
    "JavaScript (ES6+)", "Git/GitHub", "Node.js", "UI/UX Design"
  ];

  return (
    <section id="profile" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Personal Profile</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <div className="glass-card p-8 rounded-2xl animate-slide-up">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 group">
                  {/* Animated Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>

                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-xl">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src="/images/profile.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    <User size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">About Me</h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  I am a passionate aspiring Full-Stack Developer dedicated to crafting intuitive and visually stunning web experiences.
                  Currently undergoing my practicum, I am focused on bridging the gap between theoretical knowledge and real-world application.
                  My goal is to build scalable, accessible, and performant applications that solve real problems.
                </p>

                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Briefcase size={18} className="text-accent" />
                    <span>Aspiring Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <GraduationCap size={18} className="text-accent" />
                    <span>BS Information Technology Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Skills */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-surface border border-white/5 text-text-secondary text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-lg text-accent">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="border-l-2 border-white/10 pl-6 ml-2 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-surface"></div>
                  <h4 className="text-lg font-semibold text-white">Bachelor of Science in Information Technology</h4>
                  <p className="text-primary text-sm mb-1">2022 - Present</p>
                  <p className="text-text-secondary text-sm">Saint Columban College, Pagadian City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;
