'use client'

import { Link } from 'react-router-dom'

export function Footer() {
  const features = ['Structured Syllabus', 'Video Lectures', 'Notes & PDFs', 'Progress Tracking', 'Study Streaks', 'Smart Search', 'Mobile Friendly', 'Offline Access']

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-4">
            <div className="font-bagel text-background text-3xl tracking-wider mb-4">STUDIFY</div>
            <p className="text-background/70 leading-relaxed mb-6">
              A smarter way to explore your entire syllabus. Browse, learn, and track your academic progress.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/branches" className="text-background/60 hover:text-background gentle-animation text-sm">Branches</Link>
              <Link to="/dashboard" className="text-background/60 hover:text-background gentle-animation text-sm">Dashboard</Link>
              <Link to="/search" className="text-background/60 hover:text-background gentle-animation text-sm">Search</Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <h4 className="font-black text-2xl text-background mb-4">FEATURES</h4>
            <p className="text-background/70 text-base mb-8 leading-relaxed">
              Everything you need to ace your studies — structured content, progress tracking, and a beautiful learning experience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {features.map(feature => (
                <div key={feature} className="text-background/80 hover:text-background gentle-animation text-sm font-medium">{feature}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">© 2025 Studify. All rights reserved.</div>
            <div className="text-sm text-background/70">Built for students, by students.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
