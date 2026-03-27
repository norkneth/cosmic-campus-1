import { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { Coffee, AlertTriangle, PartyPopper, Calculator } from 'lucide-react'
import { motion } from 'framer-motion'

const IPU_TOTAL_CLASSES: Record<string, number> = {
  'theory': 45,
  'practical': 30,
  'tutorial': 15,
}

const bunkableQuotes = [
  "Go touch some grass, you've earned it 🌿",
  "Netflix won't watch itself. Go bunk responsibly 🎬",
  "Your bed misses you. Take the day off 🛏️",
  "Legend says toppers bunk too... strategically 🧠",
  "Bunk karo, par syllabus mat chhodo 📚",
  "Chill maar, attendance surplus hai 😎",
]

const attendanceWarnings = [
  "Bhai, ab toh class jaana padega... har ek class 💀",
  "Your attendance is giving 'debarred' vibes 🚨",
  "Even your proxy friend can't save you now 😭",
  "Teacher aapka naam yaad rakhne lage hain... galat reason se 📝",
  "One does not simply skip class with this attendance 🧙",
  "Bro really said 'college is optional' 💀",
]

export default function BunkCalculator() {
  const [totalClasses, setTotalClasses] = useState('')
  const [attendedClasses, setAttendedClasses] = useState('')
  const [classType, setClassType] = useState<'theory' | 'practical' | 'tutorial'>('theory')
  const [result, setResult] = useState<null | {
    current: number
    canBunk: boolean
    bunkable: number
    mustAttend: number
    message: string
  }>(null)

  const calculate = () => {
    const total = parseInt(totalClasses) || IPU_TOTAL_CLASSES[classType]
    const attended = parseInt(attendedClasses)
    if (isNaN(attended) || attended < 0) return

    const currentPct = (attended / total) * 100
    const threshold = 0.75

    if (currentPct >= 75) {
      // Can bunk some classes
      // After bunking x more: attended / (total + x) >= 0.75 => no, total stays same for IPU
      // attended / total >= 0.75 already, so bunkable = attended - ceil(0.75 * total) for remaining
      // Actually: how many future classes can skip while staying >= 75%
      // If total classes = T, attended = A, remaining = T - (classes held so far)
      // But simpler: bunkable = floor(attended / 0.75) - total
      // Wait, let's think: if total stays fixed at IPU total
      // attended / total >= 0.75 => can bunk = total - attended only if already at 75%
      // Actually bunkable from remaining: attended / total >= 0.75 => bunkable = attended - ceil(0.75 * total)
      const minRequired = Math.ceil(threshold * total)
      const bunkable = Math.max(0, attended - minRequired)
      const quote = bunkableQuotes[Math.floor(Math.random() * bunkableQuotes.length)]
      setResult({
        current: Math.round(currentPct * 10) / 10,
        canBunk: true,
        bunkable,
        mustAttend: 0,
        message: bunkable > 0 ? `You can bunk ${bunkable} more class${bunkable > 1 ? 'es' : ''}! ${quote}` : `You're right at 75%. One bunk and it's over. Tread carefully 🧊`,
      })
    } else {
      // Need to attend more
      // (attended + x) / (total + x) >= 0.75 if more classes are added... 
      // For IPU fixed total: need attended + x such that (attended + x) / total >= 0.75
      const minRequired = Math.ceil(threshold * total)
      const mustAttend = Math.max(0, minRequired - attended)
      const remaining = total - (parseInt(totalClasses) || total)
      const quote = attendanceWarnings[Math.floor(Math.random() * attendanceWarnings.length)]
      setResult({
        current: Math.round(currentPct * 10) / 10,
        canBunk: false,
        bunkable: 0,
        mustAttend,
        message: `You need to attend ${mustAttend} more class${mustAttend > 1 ? 'es' : ''} straight! ${quote}`,
      })
    }
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-8 py-16 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-accent-purple" />
            <h1 className="text-4xl font-black text-foreground mb-2">Bunk Calculator</h1>
            <p className="text-muted-foreground">Find out if you can afford to skip class today</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <label className="text-foreground font-semibold text-sm mb-2 block">Class Type</label>
              <div className="flex gap-3">
                {(['theory', 'practical', 'tutorial'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => { setClassType(t); setTotalClasses('') }}
                    className={`flex-1 py-3 rounded-lg font-medium text-sm capitalize gentle-animation cursor-pointer ${
                      classType === t
                        ? 'bg-accent-purple text-white'
                        : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-foreground font-semibold text-sm mb-2 block">
                Total Classes (IPU default: {IPU_TOTAL_CLASSES[classType]})
              </label>
              <input
                type="number"
                min="1"
                placeholder={`${IPU_TOTAL_CLASSES[classType]}`}
                value={totalClasses}
                onChange={e => setTotalClasses(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              />
            </div>

            <div>
              <label className="text-foreground font-semibold text-sm mb-2 block">Classes You Attended</label>
              <input
                type="number"
                min="0"
                placeholder="How many classes did you attend?"
                value={attendedClasses}
                onChange={e => setAttendedClasses(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              />
            </div>

            <button
              onClick={calculate}
              className="w-full bg-accent-purple text-white font-bold py-4 rounded-lg hover:opacity-90 gentle-animation cursor-pointer flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" /> Can I Bunk?
            </button>
          </div>

          {result && (
            <motion.div
              className={`mt-8 rounded-2xl p-8 text-center ${
                result.canBunk ? 'glass-effect' : 'glass-effect border-destructive/30'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={!result.canBunk ? { borderColor: 'var(--destructive)' } : {}}
            >
              <div className="mb-4">
                {result.canBunk ? (
                  <PartyPopper className="w-16 h-16 mx-auto text-accent-emerald" />
                ) : (
                  <AlertTriangle className="w-16 h-16 mx-auto text-destructive" />
                )}
              </div>
              <p className="text-muted-foreground mb-1">Current Attendance</p>
              <p className="text-5xl font-black text-foreground mb-4">{result.current}%</p>
              <p className="text-foreground text-lg font-medium">{result.message}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  )
}
