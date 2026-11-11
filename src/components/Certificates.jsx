import { certificates } from '../data/certificates.js'
import useShowRing from '../hooks/useShowRing.js'
import Carousel from './Carousel.jsx'
import CertificateCard from './CertificateCard.jsx'
import Reveal from './Reveal.jsx'
import './Certificates.css'

export default function Certificates() {
  const showRing = useShowRing(certificates.length)

  // Nothing to show yet, so skip the section entirely
  if (certificates.length === 0) return null

  return (
    <section id="certificates" className="section certificates" aria-labelledby="certificates-title">
      <Reveal className="container">
        <span className="section-eyebrow">Certificates</span>
        <h2 id="certificates-title" className="section-title">
          Certifications &amp; courses
        </h2>
        <p className="section-lead">
          {showRing
            ? 'Courses and credentials I’ve completed. Hover over or tab into the ring to pause it.'
            : 'Courses and credentials I’ve completed along the way.'}
        </p>
      </Reveal>

      {showRing ? (
        <Reveal delay={150}>
          <Carousel
            items={certificates}
            label="Certificates"
            renderItem={(cert) => <CertificateCard certificate={cert} />}
          />
        </Reveal>
      ) : (
        <Reveal className="container" delay={150}>
          <ul className="certificates__grid" aria-label="Certificates list">
            {certificates.map((cert) => (
              <li key={cert.id}>
                <CertificateCard certificate={cert} />
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  )
}
