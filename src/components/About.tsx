'use client'

import { useEffect, useState } from 'react'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    { number: "01", title: "Choose Your Branch", description: "Select from CS, Mechanical, Electrical, Civil and more", color: "accent-blue" },
    { number: "02", title: "Pick a Semester", description: "Navigate through semesters 1-8 at your own pace", color: "accent-emerald" },
    { number: "03", title: "Explore Subjects", description: "Dive into subject-specific units and topics", color: "accent-purple" },
    { number: "04", title: "Learn & Practice", description: "Study with videos, notes, and practice problems", color: "accent-blue" },
    { number: "05", title: "Track Progress", description: "Monitor your completion and streaks on the dashboard", color: "accent-purple" },
  ]

  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => setActiveFrame(index), index * 2000 + 1000)
      })
    }, 3000)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`, backgroundSize: '3px 3px', animation: 'filmGrain 8s infinite' }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">How It Works</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">Your Learning Journey</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">Follow these simple steps to master your syllabus</p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' }}>
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${animationStarted ? 'perforations-scroll-animation' : ''}`} style={{ width: '200%' }}>
                {[...Array(40)].map((_, i) => (
                  <div key={i} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0" style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${animationStarted ? 'perforations-scroll-animation' : ''}`} style={{ width: '200%' }}>
                {[...Array(40)].map((_, i) => (
                  <div key={i} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0" style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>

            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full">
              <div className={`flex transition-transform duration-1000 ease-in-out ${animationStarted ? 'film-scroll-animation' : ''}`} style={{ width: 'max-content', gap: '32px' }}>
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center">
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </div>
                {processSteps.map((step, index) => (
                  <div key={step.number} className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${activeFrame >= index ? `border-${step.color}` : 'border-gray-600'}`} style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 border-3 border-white text-lg" style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>{step.number}</div>
                      <div>
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center">
                  <div className="text-gray-400 font-mono tracking-wider">● END</div>
                </div>
                {/* Duplicates for loop */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center">
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </div>
                {processSteps.map((step, index) => (
                  <div key={`dup-${step.number}`} className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${activeFrame >= index ? `border-${step.color}` : 'border-gray-600'}`} style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 border-3 border-white text-lg">{step.number}</div>
                      <div>
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activeFrame >= 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 60%)', animation: 'projectorLight 12s ease-in-out infinite' }} />
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm clean-border rounded-2xl px-8 py-4 subtle-shadow">
            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" /><span className="text-sm font-semibold text-foreground">Self-Paced</span></div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" /><span className="text-sm font-semibold text-foreground">8 Semesters</span></div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" /><span className="text-sm font-semibold text-foreground">Premium Quality</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
