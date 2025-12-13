const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
      color: "sss-bright"
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "#",
      color: "text-primary"
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:your.email@example.com",
      color: "gold"
    },
    {
      name: "Facebook",
      icon: "👤",
      url: "#",
      color: "sss-bright"
    }
  ]

  const contactInfo = [
    {
      label: "Email",
      value: "your.email@example.com",
      icon: "📧"
    },
    {
      label: "Phone",
      value: "+63 XXX XXX XXXX",
      icon: "📱"
    },
    {
      label: "Location",
      value: "Pagadian City, Philippines",
      icon: "📍"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-sss-bright to-cyan-500 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sss-bright to-cyan-500 mx-auto mb-6 shadow-lg shadow-blue-400/30"></div>
          <p className="text-center text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            Interested in my journey? Want to discuss opportunities or collaborate? I'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-sss-bright mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-dark-bg/50 rounded-lg hover:bg-dark-bg/70 transition-all">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <p className="text-text-secondary text-sm">{info.label}</p>
                      <p className="text-text-primary font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-cyan-500 mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-6 bg-dark-bg/50 rounded-xl hover:bg-${social.color}/20 border border-transparent hover:border-${social.color}/50 transition-all text-center group`}
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{social.icon}</div>
                    <p className="text-text-primary font-medium">{social.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="glass rounded-2xl p-8 text-center border border-blue-400/30 shadow-xl shadow-blue-400/10">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-sss-bright to-cyan-500 bg-clip-text text-transparent">Thank You</span>
              </h3>
              <p className="text-text-secondary">
                To SSS Pagadian City Branch, my supervisors, colleagues, and everyone who made this journey unforgettable.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-sss-deep/30 text-sss-bright rounded-full text-sm font-semibold border border-sss-bright/30">
                Social Security System
              </span>
              <span className="px-4 py-2 bg-sss-deep/30 text-sss-bright rounded-full text-sm font-semibold border border-sss-deep/30">
                Pagadian City Branch
              </span>
              <span className="px-4 py-2 bg-sss-bright/20 text-sss-bright rounded-full text-sm font-semibold border border-sss-bright/30">
                500 Hours OJT
              </span>
            </div>
            
            <div className="pt-6 border-t border-sss-bright/20">
              <p className="text-text-secondary text-sm">
                © 2024-2025 • Built with React, Tailwind CSS, and gratitude ✨
              </p>
              <p className="text-text-secondary text-xs mt-2">
                A proud BSIT student's practicum journey
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-accent hover:from-cyan-accent hover:to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-400/40 hover:shadow-cyan-accent/60 transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </section>
  )
}

export default Contact

