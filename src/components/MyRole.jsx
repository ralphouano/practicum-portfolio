const MyRole = () => {
  const responsibilities = [
    {
      title: "IT Support & Troubleshooting",
      description: "Provided technical assistance to SSS staff, resolved hardware and software issues, and maintained computer systems to ensure smooth daily operations.",
      color: "sss-bright"
    },
    {
      title: "Database Management",
      description: "Assisted in maintaining member databases, ensuring data accuracy, performing backups, and generating reports for various SSS programs and services.",
      color: "gold"
    },
    {
      title: "System Documentation",
      description: "Created comprehensive technical documentation, user guides, and standard operating procedures for IT processes and systems used in the branch.",
      color: "sss-deep"
    },
    {
      title: "Web Development Support",
      description: "Contributed to internal web applications, updated content on information systems, and helped improve user interfaces for better accessibility.",
      color: "gold-glow"
    },
    {
      title: "Member Services Assistance",
      description: "Supported frontline services by helping members with online transactions, explaining digital SSS services, and promoting e-services adoption.",
      color: "sss-bright"
    },
    {
      title: "Network Maintenance",
      description: "Monitored network performance, assisted in maintaining network infrastructure, and helped ensure secure and reliable connectivity across the branch.",
      color: "gold"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-sss-bright to-sss-deep bg-clip-text text-transparent">My Role at SSS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sss-bright to-sss-deep mx-auto mb-6"></div>
          <p className="text-center text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            As an OJT trainee at the Social Security System Pagadian City Branch, I wore many hats and embraced every opportunity to learn and contribute.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((role, index) => (
              <div 
                key={index}
                className="glass glass-hover rounded-2xl p-8 border-l-4"
                style={{ borderLeftColor: `var(--tw-${role.color})` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${role.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-${role.color} text-xl font-bold`}>{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sss-bright mb-3">{role.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
            <div className="mt-12 glass rounded-2xl p-8 text-center border border-sss-bright/30">
            <p className="text-lg text-text-secondary leading-relaxed">
              <span className="text-sss-bright font-semibold">Every task</span> was a learning opportunity. 
              <span className="text-sss-bright font-semibold"> Every challenge</span> was a chance to grow. 
              I didn't just complete tasks—I <span className="text-sss-bright font-semibold">immersed myself</span> in the SSS mission to serve Filipino workers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyRole

