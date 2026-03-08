import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PageLayout } from '../components/PageLayout'
import { findSubject } from '../data/mockData'

export default function SubjectPage() {
  const { subjectId } = useParams()
  const result = findSubject(subjectId || '')
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null)
  if (!result) return <PageLayout><div className="py-32 text-center text-muted-foreground">Subject not found</div></PageLayout>
  const { subject, semester, branch } = result

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Link to={`/semester/${semester.id}`} className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">← Semester {semester.number}</Link>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl">{subject.icon}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground">{subject.name}</h1>
        </div>
        <p className="text-muted-foreground mb-12">{branch.name} • Semester {semester.number}</p>

        <div className="max-w-3xl space-y-4">
          {subject.units.map(unit => (
            <div key={unit.id} className="bg-card clean-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                className="w-full flex items-center justify-between p-6 text-left gentle-animation hover:bg-muted/50 cursor-pointer"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">{unit.title}</h3>
                  <p className="text-sm text-muted-foreground">{unit.topics.length} Topics</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedUnit === unit.id ? 'rotate-180' : ''}`} />
              </button>
              {expandedUnit === unit.id && (
                <div className="border-t border-border px-6 pb-4">
                  {unit.topics.map(topic => (
                    <Link key={topic.id} to={`/topic/${topic.id}`} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 hover:bg-muted/30 px-2 rounded gentle-animation">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${topic.completed ? 'bg-accent-emerald' : 'bg-muted'}`} />
                        <span className="text-foreground">{topic.title}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{topic.duration}</span>
                    </Link>
                  ))}
                  <Link to={`/unit/${unit.id}`} className="block mt-3 text-sm text-accent-blue hover:underline">View Unit Details →</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
