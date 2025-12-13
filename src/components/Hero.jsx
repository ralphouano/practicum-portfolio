import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl text-secondary font-medium tracking-wide uppercase">
              Personal Practicum Portfolio
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              My Personal <br />
              <span className="text-gradient">Intern Portfolio</span>
            </h1>

            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-xl text-text-secondary">
              Documenting my journey, growth, and contributions during my OJT practicum.
              A showcase of skills, preparation, and weekly progress.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start gap-4">
              <a href="#blog" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 shadow-lg shadow-primary/25">
                Read Journal
              </a>
              <a href="#profile" className="px-8 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-all duration-300">
                View Profile
              </a>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start gap-6 text-text-secondary">
              <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
              {/* Image Container */}
              <div className="relative w-full h-full">
                <img
                  src="/images/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#profile" className="text-text-secondary hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
