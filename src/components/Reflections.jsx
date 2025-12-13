const Reflections = () => {
  const reflections = [
    {
      title: "Professional Growth",
      icon: "📈",
      text: "I entered SSS as a student with theoretical knowledge. I leave as a professional with practical skills, real-world experience, and the confidence to tackle IT challenges in any environment."
    },
    {
      title: "Technical Mastery",
      icon: "⚡",
      text: "From database optimization to network troubleshooting, every technical challenge sharpened my skills. I learned that mastery comes not from avoiding problems, but from solving them."
    },
    {
      title: "Service Excellence",
      icon: "❤️",
      text: "Working at SSS taught me that technology serves people. Every system I maintained, every member I assisted reminded me that IT is ultimately about improving lives and delivering service."
    },
    {
      title: "Team Collaboration",
      icon: "🤝",
      text: "I discovered the power of teamwork. The IT team welcomed me, mentored me, and trusted me with responsibilities. I learned that great achievements are always team efforts."
    },
    {
      title: "Adaptability",
      icon: "🔄",
      text: "Government IT operations taught me to be flexible and resourceful. Not every problem has a textbook solution. Sometimes you need creativity, patience, and the willingness to learn on the fly."
    },
    {
      title: "Gratitude",
      icon: "🙏",
      text: "I'm deeply grateful to SSS Pagadian, my supervisors, and colleagues who invested time in my growth. This experience shaped not just my career path, but who I am as a person."
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-card/30 to-dark-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-sss-bright to-purple-500 bg-clip-text text-transparent">Reflections</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sss-bright to-purple-500 mx-auto mb-6 shadow-lg shadow-blue-400/30"></div>
          <p className="text-center text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            Looking back at 500 hours of transformation. These are the lessons, insights, and realizations that will stay with me forever.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reflections.map((reflection, index) => (
              <div 
                key={index}
                className="glass glass-hover rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{reflection.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-sss-bright mb-3">{reflection.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{reflection.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Final reflection quote */}
          <div className="glass rounded-3xl p-12 border-2 border-blue-400/40 text-center relative overflow-hidden shadow-2xl shadow-blue-400/10">
            <div className="absolute top-0 left-0 text-9xl text-blue-400/10 font-serif">"</div>
            <div className="absolute bottom-0 right-0 text-9xl text-cyan-accent/10 font-serif">"</div>
            <p className="text-2xl md:text-3xl font-light text-text-primary leading-relaxed mb-6 relative z-10">
              This wasn't just an OJT requirement. It was a <span className="text-sss-bright font-semibold">transformative journey</span> that 
              prepared me for the real world. I didn't just complete 500 hours—I <span className="text-cyan-500 font-semibold">invested</span> them 
              in becoming the IT professional I aspire to be.
            </p>
            <p className="text-xl text-sss-bright font-semibold">— A Grateful BSIT Student</p>
          </div>
          
          {/* Key takeaways */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="text-lg font-bold text-sss-bright mb-2">Academic Excellence</h4>
              <p className="text-text-secondary text-sm">Theory met practice in the most beautiful way</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="text-lg font-bold text-cyan-accent mb-2">Career Ready</h4>
              <p className="text-text-secondary text-sm">Confident and prepared for the professional world</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="text-lg font-bold text-purple-accent mb-2">Personal Growth</h4>
              <p className="text-text-secondary text-sm">Matured as both a professional and individual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reflections

