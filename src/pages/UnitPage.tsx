import { useParams, Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { findUnit } from '../data/mockData'
import { Play, CheckCircle, Clock } from 'lucide-react'

export default function UnitPage() {
  const { unitId } = useParams()
  const result = findUnit(unitId || '')
  if (!result) return <PageLayout><div className="py-32 text-center text-muted-foreground">Unit not found</div></PageLayout>
  const { unit, subject, semester } = result

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Link to={`/subject/${subject.id}`} className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">← {subject.name}</Link>
        <h1 className="text-4xl font-black mb-2 text-foreground">{unit.title}</h1>
        <p className="text-muted-foreground mb-12">{subject.name} • Semester {semester.number}</p>

        <div className="max-w-3xl space-y-3">
          {unit.topics.map((topic, index) => (
            <Link key={topic.id} to={`/topic/${topic.id}`} className="flex items-center gap-4 bg-card clean-border rounded-xl p-5 gentle-animation hover:scale-[1.01] hover:elevated-shadow group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground font-bold text-sm shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{topic.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{topic.duration}</span>
                  {topic.completed && <span className="flex items-center gap-1 text-accent-emerald"><CheckCircle className="w-3 h-3" />Completed</span>}
                </div>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 gentle-animation">
                <Play className="w-4 h-4 text-accent-blue" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
