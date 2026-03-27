import { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { Plus, Trash2, Calculator } from 'lucide-react'
import { motion } from 'framer-motion'

interface SemesterEntry {
  id: number
  sgpa: string
  credits: string
}

export default function CGPACalculator() {
  const [semesters, setSemesters] = useState<SemesterEntry[]>([
    { id: 1, sgpa: '', credits: '' },
    { id: 2, sgpa: '', credits: '' },
  ])
  const [result, setResult] = useState<number | null>(null)

  const addSemester = () => {
    setSemesters(prev => [...prev, { id: prev.length + 1, sgpa: '', credits: '' }])
  }

  const removeSemester = (id: number) => {
    if (semesters.length > 1) setSemesters(prev => prev.filter(s => s.id !== id))
  }

  const update = (id: number, field: 'sgpa' | 'credits', value: string) => {
    setSemesters(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s))
  }

  const calculate = () => {
    let totalPoints = 0, totalCredits = 0
    for (const sem of semesters) {
      const sgpa = parseFloat(sem.sgpa)
      const credits = parseFloat(sem.credits)
      if (isNaN(sgpa) || isNaN(credits)) continue
      totalPoints += sgpa * credits
      totalCredits += credits
    }
    setResult(totalCredits > 0 ? Math.round((totalPoints / totalCredits) * 100) / 100 : null)
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-8 py-16 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 mx-auto mb-4 text-accent-blue" />
            <h1 className="text-4xl font-black text-foreground mb-2">CGPA Calculator</h1>
            <p className="text-muted-foreground">Enter your semester-wise SGPA and credits</p>
          </div>

          <div className="space-y-4">
            {semesters.map((sem, i) => (
              <motion.div
                key={sem.id}
                className="glass-effect rounded-xl p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-muted-foreground font-bold w-8 shrink-0">S{i + 1}</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  placeholder="SGPA"
                  value={sem.sgpa}
                  onChange={e => update(sem.id, 'sgpa', e.target.value)}
                  className="flex-1 bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Credits"
                  value={sem.credits}
                  onChange={e => update(sem.id, 'credits', e.target.value)}
                  className="w-28 bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                />
                <button onClick={() => removeSemester(sem.id)} className="text-muted-foreground hover:text-destructive gentle-animation cursor-pointer p-2">
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={addSemester} className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 gentle-animation cursor-pointer">
              <Plus className="w-4 h-4" /> Add Semester
            </button>
            <button onClick={calculate} className="flex-1 bg-accent-blue text-white font-bold py-3 rounded-lg hover:opacity-90 gentle-animation cursor-pointer">
              Calculate CGPA
            </button>
          </div>

          {result !== null && (
            <motion.div
              className="mt-8 glass-effect rounded-2xl p-8 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <p className="text-muted-foreground mb-2">Your CGPA</p>
              <p className="text-6xl font-black text-foreground">{result}</p>
              <p className="text-muted-foreground mt-3 text-sm">
                {result >= 9 ? '🔥 Absolute legend!' : result >= 8 ? '✨ Impressive work!' : result >= 7 ? '👍 Solid performance!' : result >= 6 ? '📚 Keep pushing!' : '💪 Room to grow!'}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  )
}
