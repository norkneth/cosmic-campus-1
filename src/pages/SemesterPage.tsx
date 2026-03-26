import { useParams, Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { findSemester } from '../data/mockData'

export default function SemesterPage() {
  const { semesterId } = useParams()
  const result = findSemester(semesterId || '')
  if (!result) return <PageLayout><div className="py-32 text-center text-muted-foreground">Semester not found</div></PageLayout>
  const { semester, branch } = result

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Link to={`/branch/${branch.id}`} className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">← {branch.name}</Link>
        <h1 className="text-4xl sm:text-5xl font-black mb-2 text-foreground">Semester {semester.number}</h1>
        <p className="text-muted-foreground mb-12">{branch.name} • {semester.subjects.length} Subjects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semester.subjects.map(sub => (
            <Link key={sub.id} to={`/subject/${sub.id}`} className="group bg-card clean-border rounded-2xl p-6 gentle-animation hover:scale-[1.02] hover:elevated-shadow">
              <div className="text-3xl mb-4">{sub.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{sub.name}</h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{sub.units.length} Units</span>
                <span>•</span>
                <span>{sub.units.reduce((a, u) => a + u.topics.length, 0)} Topics</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
