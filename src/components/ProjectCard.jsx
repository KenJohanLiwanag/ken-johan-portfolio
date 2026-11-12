import FileViewer from './FileViewer.jsx'

/**
 * A single project card. Used both inside the 3D ring and in the
 * mobile / reduced-motion list. Styles live in Projects.css.
 */
export default function ProjectCard({ project, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  const { title, description, tech = [], liveUrl, repoUrl, document: doc, tba } = project

  return (
    <article className={`project-card${tba ? ' project-card--tba' : ''}`}>
      <div className="project-card__header">
        <Heading className="project-card__title">{title}</Heading>
        {tba && <span className="project-card__badge">Coming soon</span>}
      </div>

      <p className="project-card__desc">{description}</p>

      {tech.length > 0 && (
        <ul className="project-card__tech" aria-label={`Technologies used in ${title}`}>
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      {(liveUrl || repoUrl || doc) && (
        <div className="project-card__links">
          {liveUrl && (
            <a className="btn btn-primary" href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live site<span className="visually-hidden"> for {title} (opens in a new tab)</span>
            </a>
          )}
          {repoUrl && (
            <a className="btn btn-ghost" href={repoUrl} target="_blank" rel="noopener noreferrer">
              Code<span className="visually-hidden"> for {title} on GitHub (opens in a new tab)</span>
            </a>
          )}
          {doc && <FileViewer file={doc.file} title={doc.title} label={doc.label} />}
        </div>
      )}
    </article>
  )
}
