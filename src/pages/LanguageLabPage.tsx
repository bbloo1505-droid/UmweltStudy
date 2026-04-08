import { PageHeader } from '../components/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const pairs = [
  {
    plain: 'I think there might be a threatened species here.',
    consultant:
      'Desktop screening indicates potential habitat for EPBC-listed species; this requires targeted field verification to confirm presence and inform impact significance.',
  },
  {
    plain: 'The site is really weedy.',
    consultant:
      'The understorey is weed-dominated, which is likely suppressing recruitment; restoration outcomes will depend on threat control and evidence of regeneration capacity.',
  },
  {
    plain: 'We should just plant a lot of natives.',
    consultant:
      'A staged approach is recommended: address limiting factors first, then use targeted infill planting where recruitment remains below defined thresholds.',
  },
  {
    plain: 'The map says it’s important habitat.',
    consultant:
      'Mapping is indicative; we’ll treat it as a constraint flag and confirm on-ground condition and extent via field evidence before finalising design decisions.',
  },
]

const uncertaintyPatterns = [
  'State what you know (evidence + date + source).',
  'State what you don’t know (specific gap).',
  'State why it matters (trigger / cost / time / risk).',
  'Recommend the next step (proportionate).',
  'Define decision points (“if X, then Y”).',
]

export function LanguageLabPage() {
  return (
    <div>
      <PageHeader
        title="Consultant Language Lab"
        subtitle="Sound sharp but honest. Translate field observations into defensible recommendations."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Plain → consultant-style</CardTitle>
            <CardDescription>Steal these structures; adapt to your scenario.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pairs.map((p) => (
              <div key={p.plain} className="rounded-lg border bg-background p-3">
                <div className="text-xs font-semibold text-muted-foreground">Plain</div>
                <div className="mt-1 text-sm">{p.plain}</div>
                <div className="mt-3 text-xs font-semibold text-muted-foreground">Consultant-style</div>
                <div className="mt-1 text-sm">{p.consultant}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">How to describe uncertainty properly</CardTitle>
            <CardDescription>This is a core consulting skill in approvals/offsets.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-2 pl-5 text-sm">
              {uncertaintyPatterns.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
            <div className="mt-4 rounded-lg border bg-muted/30 p-3 text-sm">
              Example: “Based on PMST screening (8 Apr 2026), potential MNES may be present. This is not exhaustive and
              requires field verification; if confirmed, it may alter referral pathway and schedule. Recommend targeted
              habitat assessment and survey scoping before design is finalised.”
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

