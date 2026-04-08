import { Badge } from './ui/badge'
import { cn } from '../lib/utils'

export function PageHeader({
  title,
  subtitle,
  right,
  badge,
}: {
  title: string
  subtitle?: string
  badge?: string
  right?: React.ReactNode
}) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className={cn('text-xl font-semibold tracking-tight md:text-2xl')}>{title}</h1>
          {badge ? <Badge variant="muted">{badge}</Badge> : null}
        </div>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  )
}

