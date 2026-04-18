import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { config } from './config'

const t = config.theme
const root = document.documentElement
root.style.setProperty('--color-primary', t.primary)
root.style.setProperty('--color-primary-light', t.primaryLight)
root.style.setProperty('--color-primary-dark', t.primaryDark)
root.style.setProperty('--color-accent', t.accent)
root.style.setProperty('--color-accent-light', t.accentLight)
root.style.setProperty('--color-bg', t.bg)
root.style.setProperty('--color-bg-dark', t.bgDark)
root.style.setProperty('--color-surface', t.surface)
root.style.setProperty('--color-surface-alt', t.surfaceAlt)
root.style.setProperty('--color-text-light', t.textLight)
root.style.setProperty('--color-text-muted', t.textMuted)
root.style.setProperty('--color-border', t.border)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
