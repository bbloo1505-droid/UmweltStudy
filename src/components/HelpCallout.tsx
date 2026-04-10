import { Info } from 'lucide-react'
import { cn } from '../lib/utils'

/** Short, friendly explainer — use where jargon might confuse first-time users. */
export function HelpCallout({
  title,
  children,
  className,
  variant = 'default',
}: {
  title?: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'muted'
}) {
  return (
    <div
      className={cn(
        'rounded-lg border px-4 py-3 text-sm leading-relaxed',
        variant === 'default' && 'border-primary/20 bg-primary/[0.06]',
        variant === 'muted' && 'border-muted bg-muted/50',
        className,
      )}
    >
      <div className="flex gap-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
        <div className="min-w-0">
          {title ? <div className="font-semibold text-foreground">{title}</div> : null}
          <div className={cn('text-muted-foreground', title && 'mt-1')}>{children}</div>
        </div>
      </div>
    </div>
  )
}
