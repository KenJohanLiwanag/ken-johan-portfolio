import { useCallback, useSyncExternalStore } from 'react'

/**
 * Returns true while the given CSS media query matches, and re-renders
 * when it changes (e.g. resizing the window or toggling reduced motion).
 *
 *   const isMobile = useMediaQuery('(max-width: 767px)')
 */
export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  const getSnapshot = () => window.matchMedia(query).matches
  // No window during a server render; default to "doesn't match"
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
