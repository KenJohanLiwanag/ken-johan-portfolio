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
//   image         optional thumbnail, e.g. '/certificates/my-cert.png'
//                 (put the file in /public/certificates/). '' shows an icon instead.
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
    image: '',
  },
  {
    id: 'its-python',
    title: 'Information Technology Specialist: Python',
    issuer: 'Certiport · Pearson',
    date: 'July 16, 2025',
    credentialId: '28K7-XMzH',
    credentialUrl: 'https://verify.certiport.com',
    image: '',
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
