const Projects = () => {
  const projects = [
    {
      title: "Member Database Optimization",
      description: "Streamlined database queries and improved data retrieval speeds by 40%, making member information access faster and more efficient for staff.",
      tech: ["SQL", "Database Design", "Query Optimization"],
      impact: "Reduced average query time from 5s to 3s",
      icon: "🗄️"
    },
    {
      title: "IT Support Ticketing System",
      description: "Developed a simple web-based ticketing system to track and manage IT support requests, improving response times and accountability.",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      impact: "Organized 200+ support requests efficiently",
      icon: "🎫"
    },
    {
      title: "Digital Services Guide",
      description: "Created comprehensive user guides and video tutorials for SSS online services, helping members navigate e-services with confidence.",
      tech: ["Technical Writing", "Video Editing", "Canva"],
      impact: "Reduced support calls by 25%",
      icon: "📱"
    },
    {
      title: "Network Infrastructure Documentation",
      description: "Mapped and documented the entire branch network infrastructure, creating detailed diagrams and maintenance procedures for future reference.",
      tech: ["Network Mapping", "Visio", "Documentation"],
      impact: "Complete network visibility for IT team",
      icon: "🌐"
    },
    {
      title: "System Backup Automation",
      description: "Implemented automated backup scripts for critical systems, ensuring data safety and reducing manual backup time from 2 hours to 15 minutes.",
      tech: ["Batch Scripting", "Task Scheduler", "Backup Tools"],
      impact: "99.9% backup success rate achieved",
      icon: "💾"
    },
    {
      title: "Employee IT Training Program",
      description: "Designed and conducted IT literacy training sessions for non-technical staff, covering basic troubleshooting and security best practices.",
      tech: ["Training", "Presentation", "Hands-on Labs"],
      impact: "Trained 50+ employees successfully",
      icon: "👨‍🏫"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-sss-bright to-cyan-500 bg-clip-text text-transparent">Projects & Contributions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sss-bright to-cyan-500 mx-auto mb-6 shadow-lg shadow-sss-bright/30"></div>
          <p className="text-center text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            Beyond daily tasks, I contributed to meaningful projects that made a real difference. Here are the initiatives I'm most proud of.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass glass-hover rounded-2xl p-6 flex flex-col"
              >
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-cyan-500 mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1 bg-sss-deep/30 text-sss-bright text-xs rounded-full border border-sss-bright/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-cyan-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-accent shadow-lg shadow-cyan-accent/50"></div>
                    <span className="text-cyan-accent text-sm font-semibold">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="glass rounded-2xl p-8 inline-block border border-sss-bright/30">
              <p className="text-2xl font-bold text-sss-bright mb-2">6 Major Projects</p>
              <p className="text-text-secondary">Each one a stepping stone in my professional growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

