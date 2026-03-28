import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { branches } from '../data/mockData'

const btechIds = ['cs', 'it', 'ece', 'eee', 'mech', 'ee', 'civil', 'biotech', 'aiml', 'ds', 'csit'];
const lawIds = ['ballb', 'bballb', 'llb'];
const pgIds = ['mba', 'mca'];

export default function BranchesPage() {
  const btech = branches.filter(b => btechIds.includes(b.id));
  const law = branches.filter(b => lawIds.includes(b.id));
  const pg = branches.filter(b => pgIds.includes(b.id));
  const other = branches.filter(b => !btechIds.includes(b.id) && !lawIds.includes(b.id) && !pgIds.includes(b.id));

  const Section = ({ title, subtitle, items }: { title: string; subtitle: string; items: typeof branches }) => (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(branch => (
          <Link key={branch.id} to={`/branch/${branch.id}`} className="group relative rounded-2xl overflow-hidden elevated-shadow gentle-animation hover:scale-[1.02]">
            <div className="aspect-video relative">
              <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{branch.name}</h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2">{branch.description}</p>
                <div className="mt-3 flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">{branch.semesters.length} Semesters</span>
                  <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">{branch.semesters.reduce((a, s) => a + s.subjects.length, 0)} Subjects</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-foreground">Explore Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">All IPU affiliated courses & degrees — choose yours and start learning</p>
        </div>

        <Section title="🎓 B.Tech Programs" subtitle="Engineering & Technology undergraduate degrees" items={btech} />
        <Section title="⚖️ Law Programs" subtitle="Integrated & 3-year professional law degrees" items={law} />
        <Section title="📚 Other UG Programs" subtitle="BCA, BBA, B.Com, BJMC, BHMCT, B.Pharm & more" items={other} />
        <Section title="🎯 Postgraduate Programs" subtitle="MBA, MCA & other master's degrees" items={pg} />
      </div>
    </PageLayout>
  )
}
