import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

/** Reduces blanking / rambling: thesis + three bullets + next step — matches your prep profile. */
export function AnswerFrameCard({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2 text-sm">
        <span className="font-semibold text-foreground">60s frame:</span>{' '}
        <span className="text-muted-foreground">Thesis → 3 bullets → what you’d verify next.</span>
      </div>
    )
  }

  return (
    <Card className="border-primary/25 bg-primary/[0.04]">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Answer structure (anti-blank / anti-ramble)</CardTitle>
        <CardDescription>
          Direct coaching style: use this in mock interview and scenarios. About 60–90 seconds max for the core answer.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <ol className="list-decimal space-y-2 pl-5 text-foreground/90">
          <li>
            <strong>Thesis (one sentence):</strong> what you’re recommending or what matters most.
          </li>
          <li>
            <strong>Three bullets:</strong> evidence (desktop/field), risk or constraint, mitigation or next step.
          </li>
          <li>
            <strong>Stop line:</strong> “What I’d verify next is…” (season, extent, tenure, etc.).
          </li>
        </ol>
        <p className="text-xs text-muted-foreground">
          If you feel blank: say the thesis only, then ask for a second to think — better than filling with noise.
        </p>
      </CardContent>
    </Card>
  )
}
