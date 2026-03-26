'use client'

export function Team() {
  const educators = [
    { name: "focneth", role: "Founder", bio: "Visionary leader behind Cosmic Campus. Architecting the future of digital education.", rotation: 'rotate-3' },
    { name: "nam.neth", role: "Co-Founder & CEO", bio: "Driving strategy, growth, and partnerships. Building bridges between technology and learning.", rotation: 'rotate-2' },
    { name: "vel.neth", role: "Chief Executive Officer", bio: "Overseeing operations and ensuring every student gets a world-class learning experience.", rotation: '-rotate-2' },
    { name: "hike.neth", role: "Chief Technology Officer & Content Strategist", bio: "Leading tech innovation and curating structured academic content for maximum impact.", rotation: 'rotate-1' },
  ]

  return (
    <div className="relative py-32 bg-background w-full" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Our Team</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">Meet the Minds</span>
            <span className="block text-foreground">Behind Cosmic Campus</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The team building your learning experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto" style={{ overflow: 'visible', height: 'auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" style={{ overflow: 'visible', height: 'auto' }}>
            {educators.map((educator) => (
              <div key={educator.name} className={`group transform ${educator.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-20`} style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))', overflow: 'visible', height: 'auto' }}>
                <div className="bg-card clean-border rounded-2xl overflow-hidden elevated-shadow" style={{ overflow: 'visible', height: 'auto' }}>
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-emerald/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-3xl font-black text-foreground">
                      {educator.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-black text-foreground mb-1">{educator.name}</h3>
                    <p className="text-sm font-semibold text-accent-blue mb-3">{educator.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{educator.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
