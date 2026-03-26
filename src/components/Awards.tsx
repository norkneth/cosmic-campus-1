'use client'

import { GraduationCap, Users, BookOpen, Award, Globe, TrendingUp } from 'lucide-react'

export function Awards() {
  const stats = [
    { icon: GraduationCap, value: '5,000+', label: 'Students Enrolled', color: 'accent-blue' },
    { icon: BookOpen, value: '1,200+', label: 'Topics Covered', color: 'accent-emerald' },
    { icon: Users, value: '500+', label: 'Expert Educators', color: 'accent-purple' },
    { icon: Award, value: '69%', label: 'Student Satisfaction', color: 'accent-blue' },
    { icon: Globe, value: 'All IPU', label: 'University Connected', color: 'accent-emerald' },
    { icon: TrendingUp, value: '4.9/5', label: 'Average Rating', color: 'accent-purple' },
  ]

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Our Impact</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Achievements & Impact
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Trusted by students and educators worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group relative flex flex-col items-center text-center">
              <div className="relative p-8 rounded-2xl bg-card clean-border gentle-animation hover:scale-105 hover:elevated-shadow w-full">
                <stat.icon className="w-10 h-10 mx-auto mb-4" style={{ color: `var(--${stat.color})` }} />
                <div className="text-4xl font-black text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
