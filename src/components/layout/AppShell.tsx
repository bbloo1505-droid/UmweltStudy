import { NavLink, useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'

import { navItems } from '../../app/nav'
import { cn } from '../../lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { useOmniSearch } from '../search/useOmniSearch'
import { ErrorBoundary } from '../ErrorBoundary'
import { DebugDataBanner } from '../DebugDataBanner'

function groupLabel(g: string) {
  return g
}

export function AppShell() {
  const location = useLocation()
  const outlet = useOutlet()
  const { query, setQuery, open, setOpen, results } = useOmniSearch()

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <DebugDataBanner />
      <div className="mx-auto flex min-h-dvh max-w-[1120px]">
        <aside className="hidden w-[280px] shrink-0 border-r bg-background/60 backdrop-blur md:flex md:flex-col">
          <div className="p-4">
            <div className="rounded-lg border bg-card p-3 shadow-soft">
              <div className="text-sm font-semibold leading-tight">Umwelt Interview Study Hub 🌿</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Ecologist (Restoration), QLD — role‑specific prep
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setOpen(true)}
                  placeholder="Search terms, laws, questions…"
                  className="pl-9"
                />
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-auto px-2 pb-24">
            {(['Study', 'Practice', 'Tools'] as const).map((group) => (
              <div key={group} className="mb-4">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {groupLabel(group)}
                </div>
                <div className="space-y-1">
                  {navItems
                    .filter((n) => n.group === group)
                    .map(({ to, label, Icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                            isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/70',
                          )
                        }
                      >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </NavLink>
                    ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col">
          {/* Mobile top bar */}
          <div className="sticky top-0 z-20 border-b bg-background/75 backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-[1120px] items-center gap-2 px-4 py-3">
              <button
                className="text-left"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="text-sm font-semibold leading-tight">Umwelt Interview Study Hub 🌿</div>
                <div className="text-[11px] text-muted-foreground">Ecologist (Restoration), QLD</div>
              </button>
              <div className="ml-auto flex-1">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setOpen(true)}
                    placeholder="Search…"
                    className="h-9 pl-9"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Omni search dropdown */}
          <AnimatePresence>
            {open && query.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="sticky top-[57px] z-20 border-b bg-background/90 backdrop-blur md:top-0 md:border-b-0"
              >
                <div className="mx-auto max-w-[1120px] px-4 py-3">
                  <div className="rounded-lg border bg-card shadow-soft">
                    <div className="flex items-center justify-between px-3 py-2">
                      <div className="text-xs font-semibold text-muted-foreground">Search results</div>
                      <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                        Close
                      </Button>
                    </div>
                    <Separator />
                    <div className="max-h-[46vh] overflow-auto p-2">
                      {results.length === 0 ? (
                        <div className="p-3 text-sm text-muted-foreground">
                          No matches. Try a law/tool name (e.g. “PMST”, “offsets”, “MSES”).
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {results.slice(0, 20).map((r) => (
                            <NavLink
                              key={r.key}
                              to={r.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-md border bg-background p-3 hover:bg-muted/60"
                            >
                              <div className="text-sm font-semibold">{r.title}</div>
                              <div className="mt-1 text-xs text-muted-foreground">{r.subtitle}</div>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mx-auto w-full max-w-[1120px] flex-1 px-4 py-6 pb-24 md:px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                <ErrorBoundary>
                  {outlet ?? (
                    <div className="rounded-lg border bg-card p-4 shadow-soft">
                      <div className="text-sm font-semibold">Nothing rendered for this route.</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Path: <span className="font-mono">{location.pathname}</span>
                      </div>
                      <div className="mt-3 text-sm text-muted-foreground">
                        This usually means the router didn’t match a page component. Refresh with Ctrl+F5.
                      </div>
                    </div>
                  )}
                </ErrorBoundary>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile bottom nav */}
          <div className="fixed bottom-0 left-0 right-0 z-30 border-t bg-background/85 backdrop-blur md:hidden">
            <div className="mx-auto grid max-w-[1120px] grid-cols-5 gap-1 px-2 py-2">
              {navItems.slice(0, 5).map(({ to, shortLabel, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'flex flex-col items-center justify-center gap-1 rounded-md px-2 py-2 text-[11px]',
                      isActive ? 'bg-muted text-foreground' : 'text-muted-foreground',
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="leading-none">{shortLabel}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

