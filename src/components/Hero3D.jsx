import './Hero3D.css'

// Labels on the cube's six faces (purely decorative, so hidden from screen readers)
const FACES = [
  { side: 'front', label: '</>' },
  { side: 'back', label: 'KJ' },
  { side: 'right', label: 'JS' },
  { side: 'left', label: 'CSS' },
  { side: 'top', label: 'React' },
  { side: 'bottom', label: 'Git' },
]

/**
 * Decorative CSS-3D scene for the hero: a glassy spinning cube, two orbit
 * rings, and a few floating tiles.
 *
 * The whole stage turns toward the mouse using the --tilt-x / --tilt-y
 * custom properties that Hero's useTilt() sets on the <section> (they
 * inherit down to here).
 */
export default function Hero3D() {
  return (
    <div className="hero3d" aria-hidden="true">
      <div className="hero3d__stage">
        <div className="hero3d__orbit hero3d__orbit--a" />
        <div className="hero3d__orbit hero3d__orbit--b" />

        <div className="hero3d__cube">
          {FACES.map((face) => (
            <div key={face.side} className={`hero3d__face hero3d__face--${face.side}`}>
              {face.label}
            </div>
          ))}
        </div>

        <span className="hero3d__tile hero3d__tile--1" />
        <span className="hero3d__tile hero3d__tile--2" />
        <span className="hero3d__tile hero3d__tile--3" />
      </div>

      {/* Soft glow "shadow" under the cube */}
      <div className="hero3d__shadow" />
    </div>
  )
}
