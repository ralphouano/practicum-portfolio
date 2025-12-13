import React from 'react';
import { Camera, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "/images/orientation.jpg",
      caption: "Orientation",
      category: "Meeting"
    },
    {
      id: 2,
      url: "/images/first-task.jpg",
      caption: "First Task",
      category: "Work"
    },
    {
      id: 3,
      url: "/images/first-task-complete.jpg",
      caption: "First Task Complete",
      category: "Work"
    },
    {
      id: 4,
      url: "",
      caption: "Office Setup",
      category: "Workspace"
    },
    {
      id: 5,
      url: "",
      caption: "Coffee Break",
      category: "Lifestyle"
    },
    {
      id: 6,
      url: "",
      caption: "Client Presentation",
      category: "Work"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Practicum Gallery</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Captured moments from my internship journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-lg text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.caption}
                </h3>
                <div className="mt-4 p-2 bg-white/10 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 hover:bg-white/20">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
