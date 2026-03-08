import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { branches } from '../data/mockData'

export default function BranchesPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-foreground">Explore Branches</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose your engineering discipline and start learning</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {branches.map(branch => (
            <Link key={branch.id} to={`/branch/${branch.id}`} className="group relative rounded-2xl overflow-hidden elevated-shadow gentle-animation hover:scale-[1.02]">
              <div className="aspect-video relative">
                <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-black text-white mb-2">{branch.name}</h2>
                  <p className="text-white/80 text-sm">{branch.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">8 Semesters</span>
                    <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">{branch.semesters.reduce((a, s) => a + s.subjects.length, 0)} Subjects</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
