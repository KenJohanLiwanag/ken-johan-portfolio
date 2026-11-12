import { profile } from '../data/profile.js'
import useTilt from '../hooks/useTilt.js'
import Reveal from './Reveal.jsx'
import './About.css'

export default function About() {
  const tiltRef = useTilt({ max: 10 })

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal>
          <span className="section-eyebrow">About</span>
          <h2 id="about-title" className="section-title">
            A little about me
          </h2>
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="about__bio">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={150}>
          {/* The outer box tracks the mouse and never moves (so tilted edges can't
              slip out from under the cursor); the inner card tilts using the
              inherited --tilt-* values. Title and keys float on raised layers. */}
          <div ref={tiltRef}>
            <div className="about__skills-card tilt">
              <h3 className="about__skills-title">Skills &amp; tools</h3>
              <div className="about__skill-groups">
                {profile.skills.map(({ group, items }) => (
                  <div key={group} className="about__skill-group">
                    <h4 className="about__skill-group-title">{group}</h4>
                    <ul className="about__skills">
                      {items.map((skill) => (
                        <li key={skill} className="about__skill">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
