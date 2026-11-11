import { profile } from '../data/profile.js'
import useTilt from '../hooks/useTilt.js'
import Hero3D from './Hero3D.jsx'
import './Hero.css'

export default function Hero() {
  // Mouse position anywhere over the hero turns the 3D cube scene
  const tiltRef = useTilt({ max: 16 })

  return (
    <section id="top" ref={tiltRef} className="hero" aria-labelledby="hero-title">
      {/* Decorative layers: colour glow + receding perspective grid "floor" */}
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__floor" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__greeting">Hi, my name is</p>
          <h1 id="hero-title" className="hero__name">
            {profile.name}
          </h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>

          <p className="hero__location">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            Based in the {profile.location}
          </p>
        </div>

        <Hero3D />
      </div>
    </section>
  )
}
