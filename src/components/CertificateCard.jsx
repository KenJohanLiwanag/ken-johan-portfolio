import FileViewer from './FileViewer.jsx'

/**
 * A single certificate card. Used both inside the 3D ring and in the
 * mobile / reduced-motion grid. Styles live in Certificates.css.
 */
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 13.9 7 22l5-3 5 3-1.5-8.1" />
  </svg>
)

export default function CertificateCard({ certificate }) {
  const { title, issuer, date, credentialId, credentialUrl, image, file, tba } = certificate

  return (
    <article className={`cert-card${tba ? ' cert-card--tba' : ''}`}>
      <div className="cert-card__media">
        {image ? (
          <img src={image} alt={`${title} certificate from ${issuer}`} loading="lazy" />
        ) : (
          <span className="cert-card__icon">
            <AwardIcon />
          </span>
        )}
      </div>

      <div className="cert-card__body">
        <div className="cert-card__header">
          <h3 className="cert-card__title">{title}</h3>
          {tba && <span className="project-card__badge">Coming soon</span>}
        </div>
        <p className="cert-card__meta">
          {issuer}
          {date && (
            <>
              <span aria-hidden="true"> · </span>
              <span className="visually-hidden">, issued </span>
              {date}
            </>
          )}
        </p>

        {credentialId && (
          <p className="cert-card__id">
            Credential ID: <span className="cert-card__code">{credentialId}</span>
          </p>
        )}

        {(file || credentialUrl) && (
          <div className="cert-card__actions">
            {file && (
              <FileViewer
                file={file}
                image={image}
                title={title}
                label="View certificate"
                className="btn btn-primary cert-card__view"
              />
            )}
            {credentialUrl && (
              <a className="cert-card__link" href={credentialUrl} target="_blank" rel="noopener noreferrer">
                Verify
                <span className="visually-hidden"> {title} on Certiport (opens in a new tab)</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
