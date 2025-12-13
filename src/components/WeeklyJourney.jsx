import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, X } from 'lucide-react';

const WeeklyJourney = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const entries = [
    {
      id: 1,
      week: "Week 1",
      title: "Orientation & Setup",
      date: "Dec 12, 2025",
      tags: ["Onboarding", "Environment Setup", "Team Meet"],
      excerpt: "The beginning of my practicum journey. Navigating the new environment, meeting the team, and setting up the development workspace for the upcoming projects.",
      content: "My first week was focused on understanding the company culture and the technical stack. I attended the orientation session where we were introduced to the team and the projects we'd be working on. I also spent time setting up my local development environment, ensuring I had all the necessary tools and access permissions. It was exciting to finally apply what I've learned in a professional setting. We also discussed the project roadmap and the specific modules I would be contributing to."
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-slide-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Weekly Journal</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="mt-4 text-text-secondary max-w-xl">
              Documenting my experiences, challenges, and learnings week by week.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="inline-block px-4 py-2 rounded-full bg-surface border border-white/10 text-text-secondary text-sm">
              Total Entries: {entries.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map((entry) => (
            <article key={entry.id} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                    {entry.week}
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary text-xs">
                    <Calendar size={14} />
                    <span>{entry.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {entry.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {entry.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {entry.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs text-text-muted">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedEntry(entry)}
                  className="w-full py-3 rounded-xl bg-surface hover:bg-white/5 border border-white/5 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  Read Full Entry
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedEntry(null)}>
          <div
            className="bg-zinc-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              onClick={() => setSelectedEntry(null)}
            >
              <X size={24} />
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                {selectedEntry.week}
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">{selectedEntry.title}</h3>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Calendar size={16} />
                <span>{selectedEntry.date}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
              <p>{selectedEntry.content}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {selectedEntry.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1 text-xs text-text-muted bg-surface px-3 py-1 rounded-full border border-white/5">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeeklyJourney;
