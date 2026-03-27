import { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { Plus, Trash2, Calculator } from 'lucide-react'
import { motion } from 'framer-motion'

const gradePoints: Record<string, number> = {
  'O': 10, 'A+': 9, 'A': 8.5, 'B+': 8, 'B': 7, 'C+': 6, 'C': 5, 'D': 4, 'F': 0
}

interface SubjectEntry {
  id: number
  name: string
  credits: string
  grade: string
}

export default function SGPACalculator() {
  const [subjects, setSubjects] = useState<SubjectEntry[]>([
    { id: 1, name: '', credits: '', grade: '' },
    { id: 2, name: '', credits: '', grade: '' },
    { id: 3, name: '', credits: '', grade: '' },
  ])
  const [result, setResult] = useState<number | null>(null)

  const addSubject = () => {
    setSubjects(prev => [...prev, { id: Date.now(), name: '', credits: '', grade: '' }])
  }

  const removeSubject = (id: number) => {
    if (subjects.length > 1) setSubjects(prev => prev.filter(s => s.id !== id))
  }

  const update = (id: number, field: keyof SubjectEntry, value: string) => {
    setSubjects(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s))
  }

  const calculate = () => {
    let totalPoints = 0, totalCredits = 0
    for (const sub of subjects) {
      const credits = parseFloat(sub.credits)
      const gp = gradePoints[sub.grade]
      if (isNaN(credits) || gp === undefined) continue
      totalPoints += gp * credits
      totalCredits += credits
    }
    setResult(totalCredits > 0 ? Math.round((totalPoints / totalCredits) * 100) / 100 : null)
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-8 py-16 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 mx-auto mb-4 text-accent-emerald" />
            <h1 className="text-4xl font-black text-foreground mb-2">SGPA Calculator</h1>
            <p className="text-muted-foreground">Enter your subjects, credits, and grades</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {Object.entries(gradePoints).map(([g, p]) => (
              <span key={g} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                {g} = {p}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            {subjects.map((sub, i) => (
              <motion.div
                key={sub.id}
                className="glass-effect rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <input
                  placeholder="Subject name"
                  value={sub.name}
                  onChange={e => update(sub.id, 'name', e.target.value)}
                  className="flex-1 bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-emerald/50"
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Credits"
                  value={sub.credits}
                  onChange={e => update(sub.id, 'credits', e.target.value)}
                  className="w-full sm:w-24 bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-emerald/50"
                />
                <select
                  value={sub.grade}
                  onChange={e => update(sub.id, 'grade', e.target.value)}
                  className="w-full sm:w-24 bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent-emerald/50 cursor-pointer"
                >
                  <option value="">Grade</option>
                  {Object.keys(gradePoints).map(g => <option key={g} value={g}>{g}</option>)}
                </select>
                <button onClick={() => removeSubject(sub.id)} className="text-muted-foreground hover:text-destructive gentle-animation cursor-pointer p-2 self-center">
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={addSubject} className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 gentle-animation cursor-pointer">
              <Plus className="w-4 h-4" /> Add Subject
            </button>
            <button onClick={calculate} className="flex-1 bg-accent-emerald text-white font-bold py-3 rounded-lg hover:opacity-90 gentle-animation cursor-pointer">
              Calculate SGPA
            </button>
          </div>

          {result !== null && (
            <motion.div
              className="mt-8 glass-effect rounded-2xl p-8 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <p className="text-muted-foreground mb-2">Your SGPA</p>
              <p className="text-6xl font-black text-foreground">{result}</p>
              <p className="text-muted-foreground mt-3 text-sm">
                {result >= 9 ? '🎯 Top-tier performance!' : result >= 8 ? '🌟 Great semester!' : result >= 7 ? '📖 Well done!' : result >= 6 ? '⚡ Not bad, keep it up!' : '🚀 Time to lock in!'}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  )
}
