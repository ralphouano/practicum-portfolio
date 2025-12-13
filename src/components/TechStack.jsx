const TechStack = () => {
  const categories = [
    {
      category: "Programming Languages",
      color: "sss-bright",
      items: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      color: "gold",
      items: [
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 }
      ]
    },
    {
      category: "Tools & Technologies",
      color: "gold-glow",
      items: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "MySQL/PostgreSQL", level: 75 },
        { name: "Microsoft Office", level: 95 }
      ]
    },
    {
      category: "IT Operations",
      color: "sss-deep",
      items: [
        { name: "Windows Server", level: 70 },
        { name: "Network Troubleshooting", level: 75 },
        { name: "Hardware Maintenance", level: 80 },
        { name: "System Documentation", level: 85 }
      ]
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-bg to-dark-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-sss-bright to-sss-deep bg-clip-text text-transparent">Tech Stack & Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sss-bright to-sss-deep mx-auto mb-6"></div>
          <p className="text-center text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            The technical skills I brought, refined, and mastered during my OJT journey at SSS.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, catIndex) => (
              <div 
                key={catIndex}
                className="glass glass-hover rounded-2xl p-8"
              >
                <h3 className={`text-2xl font-bold text-${cat.color} mb-6`}>
                  {cat.category}
                </h3>
                
                <div className="space-y-6">
                  {cat.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-text-primary font-medium">{item.name}</span>
                        <span className="text-sss-bright font-semibold">{item.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-dark-bg rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${cat.color} to-gold rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center border border-sss-bright/30">
              <div className="text-4xl font-bold text-sss-bright mb-2">15+</div>
              <p className="text-text-secondary">Technologies Used</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center border border-sss-deep/30">
              <div className="text-4xl font-bold text-sss-bright mb-2">100+</div>
              <p className="text-text-secondary">Hours of Learning</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center border border-sss-bright/30">
              <div className="text-4xl font-bold text-sss-bright mb-2">∞</div>
              <p className="text-text-secondary">Room for Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

