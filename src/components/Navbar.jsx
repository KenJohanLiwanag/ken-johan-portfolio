import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Add a subtle border/shadow once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape. If focus was inside the menu (which is
  // about to be hidden), hand it back to the toggle so keyboard users aren't lost.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (menuRef.current?.contains(document.activeElement)) toggleRef.current?.focus()
      setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main">
        <a href="#top" className="navbar__brand" onClick={close}>
          {profile.shortName}
          <span className="visually-hidden"> – {profile.name}, back to top</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          {/* Three bars that morph into an X via CSS */}
          <span className="navbar__bar" aria-hidden="true" />
          <span className="navbar__bar" aria-hidden="true" />
          <span className="navbar__bar" aria-hidden="true" />
        </button>

        <ul ref={menuRef} id="primary-menu" className={`navbar__links${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
