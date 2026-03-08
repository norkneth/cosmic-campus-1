'use client'

import { ImageWithFallback } from './figma/ImageWithFallback'
import marcusPhoto from '../assets/team-member-1.png'
import sofiaPhoto from '../assets/team-member-2.png'
import jakePhoto from '../assets/team-member-3.png'
import mayaPhoto from '../assets/team-member-4.png'
import connorPhoto from '../assets/team-member-5.png'
import zaraPhoto from '../assets/team-member-6.png'
import leoPhoto from '../assets/team-member-7.png'

export function Team() {
  const educators = [
    { name: "Dr. Marcus Rivera", role: "Computer Science Lead", bio: "PhD in AI & Machine Learning. 15+ years teaching data structures, algorithms, and system design.", image: marcusPhoto, rotation: 'rotate-3' },
    { name: "Prof. Sofia Chen", role: "Mathematics Head", bio: "Award-winning mathematician specializing in applied mathematics and numerical methods for engineering students.", image: sofiaPhoto, rotation: 'rotate-2' },
    { name: "Dr. Jake Thompson", role: "Engineering Director", bio: "Former NASA engineer turned educator. Expert in mechanical systems, thermodynamics, and robotics.", image: jakePhoto, rotation: 'rotate-2' },
    { name: "Dr. Maya Patel", role: "Electronics Specialist", bio: "Pioneer in digital electronics education. Makes complex circuit theory accessible and engaging for all students.", image: mayaPhoto, rotation: '-rotate-2' },
    { name: "Prof. Connor Walsh", role: "Physics Department", bio: "Renowned physicist with a gift for making quantum mechanics and electromagnetism intuitive and fun.", image: connorPhoto, rotation: 'rotate-1' },
    { name: "Dr. Zara Ahmed", role: "Civil Engineering Lead", bio: "Structural engineer with expertise in sustainable design. Brings real-world project experience to every lecture.", image: zaraPhoto, rotation: '-rotate-1' },
    { name: "Prof. Leo Santos", role: "Research & Innovation", bio: "Cross-disciplinary researcher bridging the gap between theoretical knowledge and practical industry applications.", image: leoPhoto, rotation: 'rotate-3' },
  ]

  return (
    <div className="relative py-32 bg-background w-full" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Our Educators</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">Meet the Minds</span>
            <span className="block text-foreground">Behind Studify</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Expert educators passionate about your success
          </p>
        </div>

        <div className="max-w-7xl mx-auto" style={{ overflow: 'visible', height: 'auto' }}>
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8" style={{ overflow: 'visible', height: 'auto' }}>
            {educators.slice(0, 4).map((educator) => (
              <div key={educator.name} className={`group transform ${educator.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-20`} style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))', overflow: 'visible', height: 'auto' }}>
                <div className="bg-card clean-border rounded-2xl overflow-hidden elevated-shadow" style={{ overflow: 'visible', height: 'auto' }}>
                  <div className="relative w-full h-48 overflow-hidden">
                    <ImageWithFallback src={educator.image} alt={educator.name} className="w-full h-full object-cover" />
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
          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ overflow: 'visible', height: 'auto' }}>
            {educators.slice(4, 7).map((educator) => (
              <div key={educator.name} className={`group transform ${educator.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-20`} style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))', overflow: 'visible', height: 'auto' }}>
                <div className="bg-card clean-border rounded-2xl overflow-hidden elevated-shadow" style={{ overflow: 'visible', height: 'auto' }}>
                  <div className="relative w-full h-48 overflow-hidden">
                    <ImageWithFallback src={educator.image} alt={educator.name} className="w-full h-full object-cover" />
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
