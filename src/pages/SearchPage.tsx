import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { PageLayout } from '../components/PageLayout'
import { branches } from '../data/mockData'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const allItems = branches.flatMap(b => [
    { type: 'Branch' as const, name: b.name, id: b.id, link: `/branch/${b.id}`, sub: b.description },
    ...b.semesters.flatMap(s => s.subjects.flatMap(sub => [
      { type: 'Subject' as const, name: sub.name, id: sub.id, link: `/subject/${sub.id}`, sub: `${b.name} • Semester ${s.number}` },
      ...sub.units.flatMap(u => u.topics.map(t => ({
        type: 'Topic' as const, name: t.title, id: t.id, link: `/topic/${t.id}`, sub: `${sub.name} • ${u.title}`
      })))
    ]))
  ])

  const filtered = query.length > 1
    ? allItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.sub.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h1 className="text-4xl sm:text-5xl font-black mb-8 text-foreground text-center">Search</h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search branches, subjects, topics..."
              className="w-full bg-card clean-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue text-lg"
              autoFocus
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {filtered.length === 0 && query.length > 1 && (
            <p className="text-center text-muted-foreground py-8">No results found for "{query}"</p>
          )}
          {filtered.slice(0, 20).map(item => (
            <Link key={item.id} to={item.link} className="flex items-center gap-4 bg-card clean-border rounded-xl p-4 gentle-animation hover:bg-muted/50 hover:scale-[1.01]">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                item.type === 'Branch' ? 'bg-accent-blue/10 text-accent-blue' :
                item.type === 'Subject' ? 'bg-accent-emerald/10 text-accent-emerald' :
                'bg-accent-purple/10 text-accent-purple'
              }`}>{item.type}</span>
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-medium truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground truncate">{item.sub}</p>
              </div>
            </Link>
          ))}
          {query.length <= 1 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Start typing to search across all content</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}
