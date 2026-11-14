import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const LIGHT_QUERY = '(prefers-color-scheme: light)'

// The inline script in index.html has already set <html data-theme> before
// first paint, so start from whatever it chose.
const currentTheme = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme
  // Keep the mobile browser toolbar colour in sync
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f5fb' : '#0b0b12')
}

/**
 * Sun/moon button that switches between light and dark mode.
 * - Your choice is saved (localStorage) and wins on later visits.
 * - Until you choose, the site follows your device's light/dark setting,
 *   live, if it changes.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme)

  // Follow the system setting, but only while the visitor hasn't picked a theme
  useEffect(() => {
    const mql = window.matchMedia(LIGHT_QUERY)
    const onChange = (e) => {
      let saved = null
      try {
        saved = localStorage.getItem(STORAGE_KEY)
      } catch {
        /* storage blocked: just follow the system */
      }
      if (saved) return
      const next = e.matches ? 'light' : 'dark'
      applyTheme(next)
      setTheme(next)
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    applyTheme(next)
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage blocked (private mode): the switch still works for this visit */
    }
  }

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? (
        // Moon: shown in light mode (click for dark)
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
        </svg>
      ) : (
        // Sun: shown in dark mode (click for light)
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  )
}
