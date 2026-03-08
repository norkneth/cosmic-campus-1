import { useParams, Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { findBranch } from '../data/mockData'

export default function BranchPage() {
  const { branchId } = useParams()
  const branch = findBranch(branchId || '')
  if (!branch) return <PageLayout><div className="py-32 text-center text-muted-foreground">Branch not found</div></PageLayout>

  return (
    <PageLayout>
      <div className="relative">
        <div className="h-64 relative overflow-hidden">
          <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-6 sm:px-8 lg:px-12">
            <Link to="/branches" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">← All Branches</Link>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground">{branch.name}</h1>
            <p className="text-muted-foreground mt-2">{branch.description}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Select Semester</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {branch.semesters.map(sem => (
            <Link key={sem.id} to={`/semester/${sem.id}`} className="group glass-effect rounded-2xl p-8 text-center gentle-animation hover:scale-105">
              <div className="text-4xl font-black text-foreground mb-2">{sem.number}</div>
              <div className="text-sm text-muted-foreground font-medium">Semester {sem.number}</div>
              <div className="text-xs text-muted-foreground mt-2">{sem.subjects.length} Subjects</div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
