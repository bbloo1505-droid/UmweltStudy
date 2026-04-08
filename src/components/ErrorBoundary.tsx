import React from 'react'

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message?: string; stack?: string }
> {
  state: { hasError: boolean; message?: string; stack?: string } = { hasError: false }

  static getDerivedStateFromError(err: unknown) {
    return {
      hasError: true,
      message: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-[880px] p-6">
          <div className="rounded-lg border bg-card p-4 shadow-soft">
            <div className="text-sm font-semibold">The app hit a runtime error.</div>
            <div className="mt-2 text-sm text-muted-foreground">{this.state.message}</div>
            {this.state.stack ? (
              <pre className="mt-3 max-h-[40vh] overflow-auto rounded-md border bg-background p-3 text-xs">
                {this.state.stack}
              </pre>
            ) : null}
            <div className="mt-3 text-xs text-muted-foreground">
              Tip: hard refresh with <span className="font-semibold">Ctrl+F5</span>.
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

