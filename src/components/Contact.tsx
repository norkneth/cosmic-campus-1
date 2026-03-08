'use client'

import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Get Started</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Ready to Start Learning?</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join thousands of students mastering their syllabus the smarter way
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/branches" className="bg-accent-blue text-white font-bold px-10 py-4 rounded-xl text-lg hover:opacity-90 gentle-animation hover:scale-105">
              Explore Branches
            </Link>
            <Link to="/dashboard" className="bg-card clean-border text-foreground font-bold px-10 py-4 rounded-xl text-lg hover:bg-muted gentle-animation hover:scale-105">
              Go to Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow text-center">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-accent-blue rounded-full" />
            </div>
            <h4 className="font-black text-foreground mb-2">Browse Freely</h4>
            <p className="text-muted-foreground text-sm">Access all branches, semesters, and subjects</p>
          </div>
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow text-center">
            <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-accent-emerald rounded-full" />
            </div>
            <h4 className="font-black text-foreground mb-2">Track Progress</h4>
            <p className="text-muted-foreground text-sm">Monitor your learning journey with analytics</p>
          </div>
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow text-center">
            <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-accent-purple rounded-full" />
            </div>
            <h4 className="font-black text-foreground mb-2">Learn Anywhere</h4>
            <p className="text-muted-foreground text-sm">Fully responsive — study on any device</p>
          </div>
        </div>
      </div>
    </section>
  )
}
