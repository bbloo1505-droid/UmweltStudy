import { ExternalLink } from 'lucide-react'

import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { sources } from '../data/sources'
import { includesQuery } from '../lib/search'
import { useMemo, useState } from 'react'

const groups = [
  { key: 'umwelt', title: 'Umwelt' },
  { key: 'commonwealth', title: 'Commonwealth (EPBC / DCCEEW)' },
  { key: 'qld', title: 'Queensland mapping / offsets' },
  { key: 'legislation', title: 'Legislation (official PDFs)' },
  { key: 'framework', title: 'Restoration frameworks' },
  { key: 'tool', title: 'Tools and databases' },
  { key: 'needs_verification', title: 'Needs verification' },
] as const

export function ResourcesPage() {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    if (!q.trim()) return sources
    return sources.filter((s) => includesQuery(`${s.title} ${s.notes ?? ''} ${s.url ?? ''}`, q))
  }, [q])

  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Hand-picked official pages (government + Umwelt). Use these to double-check details before the interview."
        tip="Search works across titles and notes. “Needs verification” means we haven’t locked a live URL yet — treat with care."
      />

      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold text-muted-foreground">Search</div>
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search sources…" />
            </div>
            <div className="rounded-lg border bg-muted/30 p-3 text-sm">
              <div className="font-semibold">About your attached SEQ Restoration Framework PDFs</div>
              <div className="mt-1 text-muted-foreground">
                They aren’t present in this workspace yet, so entries that rely on them are flagged “Needs verification”.
                If you add the PDFs into this project folder, I can wire up extraction in the next iteration.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {groups.map((g) => {
          const groupItems = filtered.filter((s) => s.kind === g.key)
          if (groupItems.length === 0) return null
          return (
            <section key={g.key}>
              <div className="mb-2 text-sm font-semibold">{g.title}</div>
              <div className="grid gap-3 md:grid-cols-2">
                {groupItems.map((s) => (
                  <Card key={s.id}>
                    <CardHeader className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="muted">{s.kind}</Badge>
                        {s.lastVerifiedISO ? <Badge variant="secondary">{s.lastVerifiedISO}</Badge> : null}
                      </div>
                      <CardTitle className="text-base">{s.title}</CardTitle>
                      {s.notes ? <CardDescription>{s.notes}</CardDescription> : null}
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-2">
                      {s.url ? (
                        <Button asChild variant="outline" size="sm">
                          <a href={s.url} target="_blank" rel="noreferrer">
                            Open <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <div className="text-xs text-muted-foreground">No link (local/attached source).</div>
                      )}
                      <div className="text-xs text-muted-foreground">ID: {s.id}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

