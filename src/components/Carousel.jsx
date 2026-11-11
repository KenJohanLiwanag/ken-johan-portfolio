import { useEffect, useRef, useState } from 'react'
import './Carousel.css'

const CARD_WIDTH = 280 // px, keep in sync with --card-width in Carousel.css
const CARD_GAP = 48 // px of breathing room between neighbouring cards
const SECONDS_PER_LOOP = 24
const DEG_PER_MS = 360 / (SECONDS_PER_LOOP * 1000)

/** Wraps any angle into the range [-180, 180) so we always take the short way round. */
const shortestDelta = (deg) => ((((deg + 180) % 360) + 360) % 360) - 180

/**
 * Reusable 3D ring carousel (used by Projects and Certificates).
 *
 * Props:
 *   items       array of objects, each with a unique `id` and a `title`
 *   renderItem  (item) => JSX for one card
 *   label       accessible name for the carousel, e.g. "Projects"
 *
 * How it works:
 *  - Each card i is rotated i * (360 / n) degrees around the Y axis, then pushed
 *    out by `radius` with translateZ, which spreads the cards evenly around a circle.
 *  - The ring itself is rotated a little every animation frame (requestAnimationFrame).
 *    A positive rotateY moves the front card to the right, giving left-to-right motion.
 *  - Rotation is driven from JS (not a CSS @keyframes animation) so that when a
 *    keyboard user tabs into a card on the far side, we can spin it to the front.
 *  - It pauses on hover, on keyboard focus, via the Pause button, and while
 *    the ring is scrolled off-screen.
 */
export default function Carousel({ items, renderItem, label }) {
  const sceneRef = useRef(null)
  const ringRef = useRef(null)

  const angleRef = useRef(0) // current ring rotation in degrees
  const targetRef = useRef(null) // angle to ease towards (when a card is focused)
  const hoverRef = useRef(false)
  const focusRef = useRef(false)
  const visibleRef = useRef(true)
  const userPausedRef = useRef(false)

  // The only piece of state that affects rendering: the Pause/Play button label
  const [userPaused, setUserPaused] = useState(false)

  const count = items.length
  const step = 360 / count
  // Distance from the ring's center to each card so neighbours don't overlap:
  // half a card (plus gap) divided by tan(half the angle between cards).
  const radius = Math.max(
    Math.round((CARD_WIDTH / 2 + CARD_GAP / 2) / Math.tan(Math.PI / count)),
    CARD_WIDTH, // keeps small rings (3–4 cards) from looking cramped
  )

  // Animation loop
  useEffect(() => {
    const ring = ringRef.current
    let frame
    let last = performance.now()

    const tick = (now) => {
      // Clamp dt so returning to a background tab doesn't cause a big jump
      const dt = Math.min(now - last, 64)
      last = now

      if (targetRef.current !== null) {
        // Ease towards the focused card (roughly 90% of the way in ~250ms)
        const delta = shortestDelta(targetRef.current - angleRef.current)
        angleRef.current += delta * Math.min(1, dt / 110)
        if (Math.abs(delta) < 0.05) angleRef.current = targetRef.current
      } else {
        const paused = hoverRef.current || focusRef.current || userPausedRef.current || !visibleRef.current
        if (!paused) angleRef.current = (angleRef.current + dt * DEG_PER_MS) % 360
      }

      // translateZ(-radius) pulls the ring back so the front card sits at normal size
      ring.style.transform = `translateZ(${-radius}px) rotateY(${angleRef.current}deg)`
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [radius])

  // Don't spin (or burn CPU) while the ring is off-screen
  useEffect(() => {
    const scene = sceneRef.current
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
    })
    observer.observe(scene)
    return () => observer.disconnect()
  }, [])

  // When KEYBOARD focus enters a card, rotate that card to the front and hold it there.
  // Mouse clicks also focus links; spinning then would move the link out from
  // under the cursor mid-click, so pointer focus is ignored (hover already pauses).
  const handleFocus = (e, index) => {
    if (!e.target.matches(':focus-visible')) return
    focusRef.current = true
    targetRef.current = -index * step
  }

  // Resume only when focus leaves the whole carousel, not when moving between cards
  const handleBlur = (e) => {
    if (!sceneRef.current.contains(e.relatedTarget)) {
      focusRef.current = false
      targetRef.current = null
    }
  }

  const togglePause = () => {
    userPausedRef.current = !userPausedRef.current
    setUserPaused(userPausedRef.current)
  }

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="carousel__controls container">
        {/* The label itself changes, so no aria-pressed (it would contradict the label) */}
        <button type="button" className="carousel__pause" onClick={togglePause}>
          {userPaused ? (
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          )}
          {userPaused ? 'Play rotation' : 'Pause rotation'}
          <span className="visually-hidden">: {label}</span>
        </button>
      </div>

      <div
        ref={sceneRef}
        className="carousel__scene"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        onBlur={handleBlur}
      >
        <ul ref={ringRef} className="carousel__ring">
          {items.map((item, i) => (
            <li
              key={item.id}
              className="carousel__item"
              style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${item.title}`}
              onFocus={(e) => handleFocus(e, i)}
            >
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
