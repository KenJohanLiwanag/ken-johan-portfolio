import { useEffect, useRef } from 'react'

// Only tilt for a real mouse, and never when the user prefers reduced motion
const CAN_TILT = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

/**
 * Mouse-tracking 3D tilt. Attach the returned ref to an element; while the
 * mouse moves over it, these CSS custom properties are set on it:
 *
 *   --tilt-x / --tilt-y   rotation angles (the element "turns to face" the cursor)
 *   --glare-x / --glare-y cursor position in % (for a light glare)
 *   --glare-o             1 while hovering, 0 otherwise
 *
 * CSS decides what to do with them (see .tilt in index.css, and Hero3D.css).
 * Custom properties inherit, so descendants can use them too.
 *
 * Attach the ref to an element that does NOT itself tilt, and put .tilt on a
 * child. If the tilting element tracked the mouse itself, its edges would
 * rotate out from under the cursor, firing pointerleave and making it flicker.
 */
export default function useTilt({ max = 10 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia(CAN_TILT).matches) return

    let frame = 0
    let px = 0.5 // pointer position, 0–1 across the element
    let py = 0.5

    // Writes happen at most once per animation frame
    const apply = () => {
      frame = 0
      el.style.setProperty('--tilt-x', `${((0.5 - py) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--tilt-y', `${((px - 0.5) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      const rect = el.getBoundingClientRect()
      px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
      py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
      el.style.setProperty('--glare-o', '1')
      schedule()
    }

    // Ease back to flat when the mouse leaves
    const onLeave = () => {
      px = 0.5
      py = 0.5
      el.style.setProperty('--glare-o', '0')
      schedule()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      ;['--tilt-x', '--tilt-y', '--glare-x', '--glare-y', '--glare-o'].forEach((p) => el.style.removeProperty(p))
    }
  }, [max])

  return ref
}
