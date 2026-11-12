// =============================================================================
// Certificates shown in the Certificates section.
//
// Fields:
//   id            unique string (used as React key)
//   title         certificate / course name
//   issuer        who issued it
//   date          display text, e.g. 'March 18, 2026' ('' to hide)
//   credentialId  verification code printed on the certificate ('' to hide)
//   credentialUrl link to verify / view it ('' to hide the button)
//   image         picture of the certificate, e.g. '/certificates/my-cert.png'
//                 (put it in /public/certificates/). Shown on the card and in the
//                 viewer. '' shows an award icon instead.
//   file          the original PDF, e.g. '/files/my-cert.pdf' (put it in
//                 /public/files/). Adds a "View certificate" button. Optional.
//   tba           true shows a "Coming soon" badge (for slots not filled yet)
//
// To add a certificate: replace one of the TBA entries below with it.
// Shown as a 3D rotating ring on desktop when there are 3+ certificates (5–8 looks
// best); fewer than 3, phones, or reduced-motion users get a simple grid instead.
// =============================================================================

export const certificates = [
  {
    id: 'pmi-project-management-ready',
    title: 'PMI Project Management Ready®',
    issuer: 'Project Management Institute (via Certiport)',
    date: 'March 18, 2026',
    credentialId: 'wYUSR-2FaU',
    credentialUrl: 'https://verify.certiport.com',
    image: '/certificates/pmi-project-management-ready.png',
    file: '/files/pmi-project-management-ready.pdf',
  },
  {
    id: 'its-python',
    title: 'Information Technology Specialist: Python',
    issuer: 'Certiport · Pearson',
    date: 'July 16, 2025',
    credentialId: '28K7-XMzH',
    credentialUrl: 'https://verify.certiport.com',
    image: '/certificates/it-specialist-python.png',
    file: '/files/it-specialist-python.pdf',
  },
  {
    id: 'tba-1',
    title: 'TBA',
    issuer: 'More certifications coming soon',
    date: '',
    credentialId: '',
    credentialUrl: '',
    image: '',
    tba: true,
  },
  {
    id: 'tba-2',
    title: 'TBA',
    issuer: 'More certifications coming soon',
    date: '',
    credentialId: '',
    credentialUrl: '',
    image: '',
    tba: true,
  },
  {
    id: 'tba-3',
    title: 'TBA',
    issuer: 'More certifications coming soon',
    date: '',
    credentialId: '',
    credentialUrl: '',
    image: '',
    tba: true,
  },
]
