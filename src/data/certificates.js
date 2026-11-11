// =============================================================================
// Certificates shown in the Certificates section.
//
// Fields:
//   id            unique string (used as React key)
//   title         certificate / course name
//   issuer        who issued it (e.g. freeCodeCamp, Coursera, Google, your school)
//   date          display text, e.g. 'March 2026' ('' to hide)
//   credentialUrl link to verify / view it ('' to hide the button)
//   image         optional thumbnail, e.g. '/certificates/my-cert.png'
//                 (put the file in /public/certificates/). '' shows an icon instead.
//   placeholder   true shows a "Placeholder" badge; delete it once it's real
//
// To add a certificate: copy one object below, paste it into the list, and edit it.
// To remove one: delete its object. If the list is empty, the section hides itself.
// Shown as a 3D rotating ring on desktop when there are 3+ certificates (5–8 looks
// best); fewer than 3, phones, or reduced-motion users get a simple grid instead.
// =============================================================================

export const certificates = [
  {
    id: 'cert-placeholder-1',
    title: 'Placeholder Certificate One',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialUrl: 'https://example.com',
    image: '',
    placeholder: true,
  },
  {
    id: 'cert-placeholder-2',
    title: 'Placeholder Certificate Two',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialUrl: 'https://example.com',
    image: '',
    placeholder: true,
  },
  {
    id: 'cert-placeholder-3',
    title: 'Placeholder Certificate Three',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialUrl: '',
    image: '',
    placeholder: true,
  },
  {
    id: 'cert-placeholder-4',
    title: 'Placeholder Certificate Four',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialUrl: 'https://example.com',
    image: '',
    placeholder: true,
  },
  {
    id: 'cert-placeholder-5',
    title: 'Placeholder Certificate Five',
    issuer: 'Issuing Organization',
    date: '',
    credentialUrl: 'https://example.com',
    image: '',
    placeholder: true,
  },
]
