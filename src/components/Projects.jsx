import { projects } from '../data/projects.js'
import useShowRing from '../hooks/useShowRing.js'
import Carousel from './Carousel.jsx'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import './Projects.css'

export default function Projects() {
  const showRing = useShowRing(projects.length)

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <Reveal className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 id="projects-title" className="section-title">
          Things I&apos;ve built
        </h2>
        <p className="section-lead">
          {showRing
            ? 'A selection of my work. Hover over or tab into the ring to pause it.'
            : 'A selection of my work.'}
        </p>
      </Reveal>

      {showRing ? (
        <Reveal delay={150}>
          <Carousel items={projects} label="Projects" renderItem={(project) => <ProjectCard project={project} />} />
        </Reveal>
      ) : (
        <Reveal className="container" delay={150}>
          <ul className="projects__list" aria-label="Projects list">
            {projects.map((project) => (
              <li key={project.id} className="projects__list-item">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  )
}
