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
  const { title, issuer, date, credentialUrl, image, placeholder } = certificate

  return (
    <article className="cert-card">
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
          {placeholder && <span className="project-card__badge">Placeholder</span>}
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

        {credentialUrl && (
          <a className="cert-card__link" href={credentialUrl} target="_blank" rel="noopener noreferrer">
            View credential
            <span className="visually-hidden"> for {title} (opens in a new tab)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
        )}
      </div>
    </article>
  )
}
