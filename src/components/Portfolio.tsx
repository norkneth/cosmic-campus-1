'use client'

import { Link } from 'react-router-dom'
import { branches } from '../data/mockData'

export function Portfolio() {
  const popularBranches = branches
  const recentSubjects = branches.flatMap(b => b.semesters.slice(0, 2).flatMap(s => s.subjects.map(sub => ({ ...sub, branchName: b.name, semNumber: s.number, branchId: b.id })))).slice(0, 8)
  const recommendedTopics = branches.flatMap(b => b.semesters.flatMap(s => s.subjects.flatMap(sub => sub.units.flatMap(u => u.topics.slice(0, 1).map(t => ({ ...t, subjectName: sub.name, branchName: b.name })))))).slice(0, 8)

  return (
    <section id="portfolio" className="relative py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Browse Content</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Your Learning Library</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Browse courses like you browse movies — intuitive, fast, and fun.
          </p>
        </div>

        {/* Popular Branches Row */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Popular Branches</h3>
            <Link to="/branches" className="text-sm text-accent-blue hover:underline">View All →</Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {popularBranches.map(branch => (
              <Link key={branch.id} to={`/branch/${branch.id}`} className="flex-shrink-0 w-72 group">
                <div className="relative rounded-2xl overflow-hidden elevated-shadow gentle-animation group-hover:scale-[1.03]">
                  <div className="aspect-[3/2]">
                    <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="text-lg font-bold text-white">{branch.name}</h4>
                    <p className="text-white/60 text-xs mt-1">8 Semesters • {branch.semesters.reduce((a, s) => a + s.subjects.length, 0)} Subjects</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recently Added Subjects Row */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Recently Added Subjects</h3>
          <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {recentSubjects.map(sub => (
              <Link key={sub.id} to={`/subject/${sub.id}`} className="flex-shrink-0 w-56 bg-card clean-border rounded-xl p-5 gentle-animation hover:scale-[1.03] hover:elevated-shadow">
                <div className="text-3xl mb-3">{sub.icon}</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{sub.name}</h4>
                <p className="text-xs text-muted-foreground">{sub.branchName} • Sem {sub.semNumber}</p>
                <p className="text-xs text-muted-foreground mt-1">{sub.units.length} Units</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Topics Row */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Recommended Topics</h3>
          <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {recommendedTopics.map(topic => (
              <Link key={topic.id} to={`/topic/${topic.id}`} className="flex-shrink-0 w-52 bg-card clean-border rounded-xl p-5 gentle-animation hover:scale-[1.03] hover:elevated-shadow">
                <h4 className="font-bold text-foreground text-sm mb-2">{topic.title}</h4>
                <p className="text-xs text-muted-foreground">{topic.subjectName}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-muted-foreground">{topic.duration}</span>
                  {topic.completed && <span className="text-xs text-accent-emerald">✓ Done</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
