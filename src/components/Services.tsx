'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Video, FileText, Brain, Users, BarChart3 } from 'lucide-react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    { icon: BookOpen, title: "Structured Syllabus", description: "Organized content following Branch → Semester → Subject → Unit → Topic hierarchy.", color: 'accent-emerald' },
    { icon: Video, title: "Video Lectures", description: "High-quality video content with expert explanations for every topic.", color: 'accent-blue' },
    { icon: FileText, title: "Notes & Resources", description: "Downloadable notes, PDFs, and reference materials for offline study.", color: 'accent-purple' },
    { icon: Brain, title: "Smart Progress", description: "Track completion, study streaks, and get personalized recommendations.", color: 'accent-emerald' },
    { icon: Users, title: "Community Learning", description: "Connect with peers, discuss doubts, and collaborate on projects.", color: 'accent-blue' },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Detailed insights into your learning patterns and performance.", color: 'accent-purple' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="services" className="relative py-20 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Platform Features</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            Everything You Need
          </h2>
          <p className={`text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Built for students who want a smarter way to learn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.title} className={`bg-background clean-border rounded-2xl p-8 gentle-animation hover:scale-[1.03] hover:elevated-shadow transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: `${index * 100 + 600}ms` }}>
              <feature.icon className="w-10 h-10 mb-6" style={{ color: `var(--${feature.color})` }} />
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
