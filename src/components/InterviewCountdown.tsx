import { Link } from 'react-router-dom'
import { CalendarClock } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { usePrepSettings } from '../hooks/usePrepSettings'

function dayStart(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function daysBetween(a: Date, b: Date) {
  const ms = dayStart(b).getTime() - dayStart(a).getTime()
  return Math.round(ms / (24 * 60 * 60 * 1000))
}

export function InterviewCountdown() {
  const s = usePrepSettings()
  const iso = s.interviewDateISO

  const line = (() => {
    if (!iso?.trim()) {
      return (
        <span>
          Set your <strong>interview date</strong> in{' '}
          <Link to="/prep-settings" className="font-medium underline">
            Prep settings
          </Link>{' '}
          to see a countdown here.
        </span>
      )
    }
    const target = new Date(iso + 'T12:00:00')
    if (Number.isNaN(target.getTime())) {
      return <span className="text-destructive">Invalid date — fix it in Prep settings.</span>
    }
    const today = new Date()
    const n = daysBetween(today, target)
    if (n > 1) return <span>{n} days until interview ({formatNice(iso)}).</span>
    if (n === 1) return <span>Interview is <strong>tomorrow</strong> ({formatNice(iso)}).</span>
    if (n === 0) return <span className="font-semibold text-foreground">Interview is today.</span>
    if (n === -1) return <span>Interview was yesterday — update the date if you rescheduled.</span>
    return <span>That date is in the past — update in Prep settings if needed.</span>
  })()

  return (
    <Card className="border-dashed print:hidden">
      <CardContent className="flex flex-wrap items-center gap-3 py-4 text-sm">
        <CalendarClock className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <div className="min-w-0 flex-1 text-muted-foreground">{line}</div>
        <Link to="/prep-settings" className="shrink-0 text-sm font-medium text-primary underline">
          Prep settings
        </Link>
      </CardContent>
    </Card>
  )
}

function formatNice(iso: string) {
  try {
    const d = new Date(iso + 'T12:00:00')
    return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}
