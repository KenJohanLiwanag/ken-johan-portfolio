import { useEffect, useRef, useState } from 'react'

/**
 * Wraps content that should swing up into place in 3D the first time it
 * scrolls into view. Styles: .reveal / .is-visible in index.css
 * (reduced-motion users and print just see the content, with no animation).
 *
 *   <Reveal delay={120}>...</Reveal>
 *
 * Visibility lives in React state (not a classList tweak) so that React
 * re-rendering the className can never wipe it out.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  // Old browsers without IntersectionObserver: just show immediately
  const [shown, setShown] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window))

  useEffect(() => {
    if (shown) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect() // animate once only
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [shown])

  const classes = ['reveal', shown && 'is-visible', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} style={{ ...style, '--reveal-delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
