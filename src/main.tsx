import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AppStateProvider } from './state/AppStateProvider'

const rootEl = document.getElementById('root')

try {
  if (!rootEl) throw new Error('Root element (#root) not found')
  createRoot(rootEl).render(
    <StrictMode>
      <AppStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppStateProvider>
    </StrictMode>,
  )
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err)
  if (rootEl) {
    rootEl.innerHTML = `
      <div style="padding:16px;font-family:system-ui,Segoe UI,Roboto,sans-serif;">
        <div style="font-weight:700;">App bootstrap error</div>
        <div style="margin-top:6px;color:#b00020;">${msg}</div>
        <div style="margin-top:10px;color:#666;font-size:13px;">Try Ctrl+F5. If it persists, tell me the message above.</div>
      </div>
    `
  }
  // Keep a console error for debugging too.
  console.error('Bootstrap error', err)
}
