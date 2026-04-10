import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { learningProfile } from '../data/learningProfile'
import { usePrepSettings } from '../hooks/usePrepSettings'
import { parseRhythmExtra } from '../lib/prepSettings'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function PersonalizedPrepCard() {
  const settings = usePrepSettings()
  const p = useMemo(() => {
    const extra = parseRhythmExtra(settings.rhythmExtraLines ?? '')
    return {
      ...learningProfile,
      gisFraming: settings.gisFramingOverride?.trim() || learningProfile.gisFraming,
      rhythm: [...learningProfile.rhythm, ...extra],
    }
  }, [settings])
  const formatLabel =
    p.interviewFormat === 'in-person'
      ? 'In person'
      : p.interviewFormat === 'video'
        ? 'Video'
        : p.interviewFormat === 'phone'
          ? 'Phone'
          : 'TBD'

  return (
    <Card className="border-primary/30 bg-gradient-to-b from-primary/[0.07] to-transparent">
      <CardHeader>
        <CardTitle className="text-lg">{p.label}</CardTitle>
        <CardDescription>
          Shaped from your answers: read → notes → quizzes → repetition; longer daily blocks; direct feedback; priority on
          law, language, offsets, GIS; interview: {formatLabel.toLowerCase()}, technical + fit.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Rhythm</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90">
            {p.rhythm.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Priority gaps to drill</h3>
          <ul className="space-y-2 text-sm">
            {p.priorityTopics.map((t) => (
              <li key={t.label} className="rounded-md border bg-background/80 px-3 py-2">
                <span className="font-semibold text-foreground">{t.label}</span>
                <span className="text-muted-foreground"> — {t.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Interview goals</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90">
            {p.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Under pressure</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90">
            {p.pressureTips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">GIS one-liner (honest growth)</h3>
          <p className="rounded-md border bg-muted/40 px-3 py-2 text-sm italic text-foreground/95">“{p.gisFraming}”</p>
        </section>

        <p className="text-xs text-muted-foreground">
          <Link to="/prep-settings" className="font-medium text-primary underline">
            Edit prep settings
          </Link>{' '}
          (interview date, GIS line, extra rhythm notes).
        </p>

        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Priority links for you</h3>
          <div className="flex flex-wrap gap-2">
            {p.quickLinks.map((l) => (
              <Button key={l.to} variant="secondary" size="sm" className="h-auto py-2" asChild>
                <Link to={l.to} className="flex flex-col items-start gap-0.5">
                  <span>{l.label}</span>
                  <span className="text-[10px] font-normal text-muted-foreground">{l.why}</span>
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
