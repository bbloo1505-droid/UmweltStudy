import { useEffect, useState } from 'react'
import { NavLink, useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'

import { navGroupHints, navItems } from '../../app/nav'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prev
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <DebugDataBanner />
      <div className="mx-auto flex min-h-dvh max-w-[1120px]">
        <aside className="hidden w-[280px] shrink-0 border-r bg-background/60 backdrop-blur print:hidden md:flex md:flex-col">
          <div className="p-4">
            <div className="rounded-lg border bg-card p-3 shadow-soft">
              <div className="text-sm font-semibold leading-tight">Umwelt Interview Study Hub 🌿</div>
              <div className="mt-1 text-xs leading-snug text-muted-foreground">
                Prep for the <span className="text-foreground/90">Ecologist (Restoration), QLD</span> role — study at your
                own pace; progress saves in this browser.
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setOpen(true)}
                  placeholder="Search: e.g. PMST, BioCondition, offsets…"
                  className="pl-9"
                />
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-auto px-2 pb-24">
            {(['Study', 'Practice', 'Tools'] as const).map((group) => (
              <div key={group} className="mb-4">
                <div className="px-3 py-1.5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{groupLabel(group)}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground/90">{navGroupHints[group]}</div>
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
          <div className="sticky top-0 z-20 border-b bg-background/75 backdrop-blur print:hidden md:hidden">
            <div className="mx-auto flex max-w-[1120px] items-center gap-2 px-3 py-2.5">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 shrink-0"
                aria-label="Open menu — all pages"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <button
                type="button"
                className="min-w-0 flex-1 text-left"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="truncate text-sm font-semibold leading-tight">Umwelt Study Hub 🌿</div>
                <div className="truncate text-[11px] text-muted-foreground">Interview prep · saves on this device</div>
              </button>
              <div className="min-w-0 flex-[1.2]">
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

          {/* Mobile full menu — every route (mirrors desktop groups) */}
          <AnimatePresence>
            {mobileMenuOpen ? (
              <motion.div
                key="mobile-full-menu"
                className="fixed inset-0 z-50 flex flex-col bg-background print:hidden md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className="flex items-center justify-between border-b px-4 py-3">
                  <div className="text-sm font-semibold">Every page in this app</div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex-1 overflow-y-auto overscroll-contain px-3 pb-8 pt-2">
                  {(['Study', 'Practice', 'Tools'] as const).map((group) => (
                    <div key={group} className="mb-5">
                      <div className="px-2 py-2">
                        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {groupLabel(group)}
                        </div>
                        <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{navGroupHints[group]}</div>
                      </div>
                      <div className="space-y-1">
                        {navItems
                          .filter((n) => n.group === group)
                          .map(({ to, label, Icon }) => (
                            <NavLink
                              key={to}
                              to={to}
                              onClick={() => setMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                cn(
                                  'flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors',
                                  isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/70',
                                )
                              }
                            >
                              <Icon className="h-5 w-5 shrink-0" />
                              <span>{label}</span>
                            </NavLink>
                          ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Omni search dropdown */}
          <AnimatePresence>
            {open && query.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="sticky top-[57px] z-20 border-b bg-background/90 backdrop-blur print:hidden md:top-0 md:border-b-0"
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

          <div className="mx-auto w-full max-w-[1120px] flex-1 px-4 py-6 pb-24 print:pb-4 md:px-6">
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

          {/* Mobile bottom nav — all destinations; swipe horizontally */}
          <div
            className={cn(
              'fixed bottom-0 left-0 right-0 z-30 border-t bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur print:hidden md:hidden',
              mobileMenuOpen && 'hidden',
            )}
          >
            <div className="px-1 pt-1 text-center text-[10px] text-muted-foreground">
              Swipe sideways for more · <span className="text-foreground/80">☰ Menu</span> lists everything
            </div>
            <div className="scrollbar-none mx-auto flex max-w-[1120px] gap-1 overflow-x-auto px-2 py-1.5 touch-pan-x">
              {navItems.map(({ to, shortLabel, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'flex min-w-[4.75rem] shrink-0 flex-col items-center justify-center gap-0.5 rounded-md px-2 py-2 text-[10px] leading-tight',
                      isActive ? 'bg-muted text-foreground' : 'text-muted-foreground',
                    )
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="max-w-[4.75rem] text-center leading-none">{shortLabel}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

