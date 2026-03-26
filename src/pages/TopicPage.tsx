import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { findTopic } from '../data/mockData'
import { ChevronLeft, ChevronRight, CheckCircle, BookOpen, Download, StickyNote, FileQuestion } from 'lucide-react'

export default function TopicPage() {
  const { topicId } = useParams()
  const result = findTopic(topicId || '')
  const [completed, setCompleted] = useState(result?.topic.completed || false)
  const [notes, setNotes] = useState('')

  if (!result) return <PageLayout><div className="py-32 text-center text-muted-foreground">Topic not found</div></PageLayout>
  const { topic, unit, subject } = result

  const topicIndex = unit.topics.findIndex(t => t.id === topic.id)
  const prevTopic = topicIndex > 0 ? unit.topics[topicIndex - 1] : null
  const nextTopic = topicIndex < unit.topics.length - 1 ? unit.topics[topicIndex + 1] : null

  return (
    <PageLayout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <Link to={`/unit/${unit.id}`} className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">← {unit.title}</Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video/Content Placeholder */}
            <div className="aspect-video bg-card clean-border rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Content for <span className="text-foreground font-semibold">{topic.title}</span></p>
                <p className="text-sm text-muted-foreground mt-1">{topic.duration} estimated</p>
              </div>
            </div>

            {/* Topic Info */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-black text-foreground">{topic.title}</h1>
                <p className="text-sm text-muted-foreground mt-1">{subject.name} • {unit.title}</p>
              </div>
              <button
                onClick={() => setCompleted(!completed)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium gentle-animation cursor-pointer ${completed ? 'bg-accent-emerald/20 text-accent-emerald' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <CheckCircle className="w-4 h-4" />
                {completed ? 'Completed' : 'Mark Complete'}
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              {prevTopic ? (
                <Link to={`/topic/${prevTopic.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground gentle-animation">
                  <ChevronLeft className="w-4 h-4" /> {prevTopic.title}
                </Link>
              ) : <div />}
              {nextTopic ? (
                <Link to={`/topic/${nextTopic.id}`} className="flex items-center gap-2 text-sm text-accent-blue hover:underline gentle-animation">
                  {nextTopic.title} <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>

            {/* Notes */}
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="flex items-center gap-2 font-bold text-foreground mb-4"><StickyNote className="w-4 h-4" /> Your Notes</h3>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Write your notes here..."
                className="w-full h-32 bg-background border border-border rounded-lg p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">Topics in this Unit</h3>
              <div className="space-y-2">
                {unit.topics.map((t, i) => (
                  <Link key={t.id} to={`/topic/${t.id}`} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm gentle-animation ${t.id === topic.id ? 'bg-accent-blue/10 text-accent-blue font-medium' : 'text-muted-foreground hover:bg-muted'}`}>
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                    <span className="truncate">{t.title}</span>
                    {t.completed && <CheckCircle className="w-3 h-3 text-accent-emerald shrink-0 ml-auto" />}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Download className="w-4 h-4" /> Resources</h3>
              <div className="space-y-3">
                {['Lecture Notes.pdf', 'Practice Problems.pdf', 'Reference Material.pdf'].map(file => (
                  <button key={file} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground w-full text-left gentle-animation cursor-pointer">
                    <Download className="w-4 h-4 shrink-0" />
                    <span>{file}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* PYQs Section */}
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><FileQuestion className="w-4 h-4" /> Previous Year Questions</h3>
              <div className="space-y-3">
                {['PYQ 2023.pdf', 'PYQ 2022.pdf', 'PYQ 2021.pdf', 'PYQ 2020.pdf', 'PYQ 2019.pdf'].map(file => (
                  <button key={file} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground w-full text-left gentle-animation cursor-pointer">
                    <FileQuestion className="w-4 h-4 shrink-0" />
                    <span>{file}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
