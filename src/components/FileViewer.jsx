import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './FileViewer.css'

/**
 * A button that opens a file (certificate, paper) in an on-page viewer.
 *
 *   <FileViewer file="/files/x.pdf" title="My certificate" label="View certificate"
 *               image="/certificates/x.png" />
 *
 * - With `image`: the viewer shows that picture (works on every device), plus
 *   "Open PDF" and "Download" links for the original file.
 * - Without `image`: the PDF itself is embedded. Phones with no built-in PDF
 *   viewer (navigator.pdfViewerEnabled === false, e.g. most Android) just get
 *   the file opened in a new tab instead.
 *
 * Uses a native <dialog> (Esc closes, focus stays inside, focus returns to the
 * button after). It's portalled to <body> so the 3D carousel's transforms
 * can't affect it.
 */
export default function FileViewer({ file, title, label, image, className = 'btn btn-ghost' }) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)
  const titleId = useId()

  const handleOpen = () => {
    if (!image && navigator.pdfViewerEnabled === false) {
      window.open(file, '_blank', 'noopener,noreferrer')
      return
    }
    setOpen(true)
  }

  // Show as a modal once the <dialog> is in the DOM
  useEffect(() => {
    const dialog = dialogRef.current
    if (open && dialog && !dialog.open) dialog.showModal()
  }, [open])

  const close = () => dialogRef.current?.close()

  return (
    <>
      <button type="button" className={className} onClick={handleOpen} aria-haspopup="dialog">
        {label}
        <span className="visually-hidden">: {title}</span>
      </button>

      {open &&
        createPortal(
          <dialog
            ref={dialogRef}
            className="viewer"
            aria-labelledby={titleId}
            onClose={() => setOpen(false)}
            // A click on the dimmed backdrop (outside the panel) closes it
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className="viewer__panel">
              <header className="viewer__header">
                <h2 id={titleId} className="viewer__title">
                  {title}
                </h2>
                <div className="viewer__actions">
                  <a className="btn btn-ghost" href={file} target="_blank" rel="noopener noreferrer">
                    Open PDF<span className="visually-hidden"> in a new tab</span>
                  </a>
                  <a className="btn btn-ghost" href={file} download>
                    Download
                  </a>
                  <button type="button" className="viewer__close" onClick={close} aria-label="Close viewer">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </button>
                </div>
              </header>

              <div className={`viewer__body${image ? ' viewer__body--image' : ''}`}>
                {image ? (
                  <img src={image} alt={`Full view of ${title}`} />
                ) : (
                  <iframe src={`${file}#view=FitH`} title={title} />
                )}
              </div>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  )
}
