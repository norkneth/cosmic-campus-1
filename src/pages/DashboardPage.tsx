import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { branches } from '../data/mockData'
import { BookOpen, Flame, Clock, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  const totalTopics = branches.reduce((a, b) => a + b.semesters.reduce((a2, s) => a2 + s.subjects.reduce((a3, sub) => a3 + sub.units.reduce((a4, u) => a4 + u.topics.length, 0), 0), 0), 0)
  const completedTopics = branches.reduce((a, b) => a + b.semesters.reduce((a2, s) => a2 + s.subjects.reduce((a3, sub) => a3 + sub.units.reduce((a4, u) => a4 + u.topics.filter(t => t.completed).length, 0), 0), 0), 0)

  const recentTopics = branches.flatMap(b => b.semesters.flatMap(s => s.subjects.flatMap(sub => sub.units.flatMap(u => u.topics.filter(t => t.completed).map(t => ({ ...t, subjectName: sub.name, branchName: b.name })))))).slice(0, 5)

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h1 className="text-4xl sm:text-5xl font-black mb-2 text-foreground">Welcome back! 👋</h1>
        <p className="text-muted-foreground mb-12">Keep up the great work. Here's your study overview.</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: BookOpen, label: 'Topics Completed', value: completedTopics, color: 'accent-blue' },
            { icon: TrendingUp, label: 'Overall Progress', value: `${Math.round((completedTopics / totalTopics) * 100)}%`, color: 'accent-emerald' },
            { icon: Flame, label: 'Study Streak', value: '7 days', color: 'accent-purple' },
            { icon: Clock, label: 'Time Spent', value: '42h', color: 'accent-blue' },
          ].map(stat => (
            <div key={stat.label} className="bg-card clean-border rounded-2xl p-6 gentle-animation hover:elevated-shadow">
              <stat.icon className={`w-8 h-8 mb-4`} style={{ color: `var(--${stat.color})` }} />
              <div className="text-3xl font-black text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Continue Learning */}
        <h2 className="text-2xl font-bold text-foreground mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {branches.slice(0, 3).map(branch => {
            const sub = branch.semesters[0].subjects[0]
            return (
              <Link key={branch.id} to={`/subject/${sub.id}`} className="bg-card clean-border rounded-2xl p-6 gentle-animation hover:scale-[1.02] hover:elevated-shadow">
                <div className="text-2xl mb-3">{sub.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{sub.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{branch.name}</p>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent-emerald rounded-full" style={{ width: '35%' }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2">35% completed</p>
              </Link>
            )
          })}
        </div>

        {/* Recent Activity */}
        <h2 className="text-2xl font-bold text-foreground mb-6">Recently Completed</h2>
        <div className="space-y-3 max-w-3xl">
          {recentTopics.map(topic => (
            <Link key={topic.id} to={`/topic/${topic.id}`} className="flex items-center gap-4 bg-card clean-border rounded-xl p-4 gentle-animation hover:bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-accent-emerald shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-medium truncate">{topic.title}</p>
                <p className="text-xs text-muted-foreground">{topic.subjectName} • {topic.branchName}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{topic.duration}</span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
