'use client'

export function Team() {
  const educators = [
    { name: "focneth", role: "Lead Developer", bio: "Full-stack architect with expertise in modern web technologies and system design.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face", rotation: 'rotate-3' },
    { name: "nam.neth", role: "Backend Specialist", bio: "Database wizard and API designer. Builds scalable infrastructure that powers everything.", image: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=400&h=400&fit=crop&crop=face", rotation: 'rotate-2' },
    { name: "vel.neth", role: "UI/UX Designer", bio: "Crafts beautiful, intuitive interfaces. Turns complex problems into simple, elegant solutions.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face", rotation: '-rotate-2' },
    { name: "hike.neth", role: "Content Strategist", bio: "Curates and structures academic content. Ensures every topic is clear, concise, and engaging.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", rotation: 'rotate-1' },
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
                  <div className="relative w-full h-48 overflow-hidden">
                    <img src={educator.image} alt={educator.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
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
