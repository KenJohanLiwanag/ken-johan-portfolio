import useMediaQuery from './useMediaQuery.js'

/**
 * Whether to show the 3D ring carousel. Phones (under 768px) and users who
 * prefer reduced motion get a plain list instead, and a ring needs 3+ cards.
 */
export default function useShowRing(itemCount) {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  return !isMobile && !prefersReducedMotion && itemCount >= 3
}
