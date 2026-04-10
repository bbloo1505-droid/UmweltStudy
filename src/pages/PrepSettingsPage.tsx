import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { learningProfile } from '../data/learningProfile'
import { loadPrepSettings, savePrepSettings, type PrepSettings } from '../lib/prepSettings'

export function PrepSettingsPage() {
  const [interviewDateISO, setInterviewDateISO] = useState('')
  const [gisFramingOverride, setGisFramingOverride] = useState('')
  const [rhythmExtraLines, setRhythmExtraLines] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const s = loadPrepSettings()
    setInterviewDateISO(s.interviewDateISO ?? '')
    setGisFramingOverride(s.gisFramingOverride ?? '')
    setRhythmExtraLines(s.rhythmExtraLines ?? '')
  }, [])

  const save = () => {
    const next: PrepSettings = {
      interviewDateISO: interviewDateISO.trim() || undefined,
      gisFramingOverride: gisFramingOverride.trim() || undefined,
      rhythmExtraLines: rhythmExtraLines.trim() || undefined,
    }
    savePrepSettings(next)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2000)
  }

  const resetOverrides = () => {
    setGisFramingOverride('')
    setRhythmExtraLines('')
    const s = loadPrepSettings()
    savePrepSettings({
      interviewDateISO: s.interviewDateISO,
      gisFramingOverride: undefined,
      rhythmExtraLines: undefined,
    })
  }

  return (
    <div>
      <PageHeader
        title="Prep settings"
        subtitle="Saved only on this device — interview date, optional GIS line, and extra rhythm notes."
        tip="Defaults live in code; overrides merge on top. Clear text fields and save to use defaults again."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Interview date</CardTitle>
            <CardDescription>Used for the countdown on the dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              type="date"
              value={interviewDateISO}
              onChange={(e) => setInterviewDateISO(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base">Quick link</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <Link to="/" className="text-primary underline">
              Back to dashboard
            </Link>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">GIS one-liner (optional override)</CardTitle>
            <CardDescription>
              Default: <span className="italic text-muted-foreground">“{learningProfile.gisFraming}”</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              rows={3}
              value={gisFramingOverride}
              onChange={(e) => setGisFramingOverride(e.target.value)}
              placeholder={learningProfile.gisFraming}
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Extra rhythm notes</CardTitle>
            <CardDescription>One bullet per line — appended below the default rhythm list on your prep card.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              rows={4}
              value={rhythmExtraLines}
              onChange={(e) => setRhythmExtraLines(e.target.value)}
              placeholder="e.g. Block 1: Library drill only&#10;Block 2: Mock interview + Language lab"
            />
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-center gap-2 lg:col-span-2">
          <Button type="button" onClick={save}>
            Save changes
          </Button>
          <Button type="button" variant="outline" onClick={resetOverrides}>
            Clear GIS + rhythm overrides
          </Button>
          {saved ? <span className="text-sm text-muted-foreground">Saved.</span> : null}
        </div>
      </div>
    </div>
  )
}
