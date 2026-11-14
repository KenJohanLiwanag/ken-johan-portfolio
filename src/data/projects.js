// =============================================================================
// Projects shown in the 3D carousel (and the mobile list).
//
// Fields:
//   id          unique string (used as React key)
//   title       project name
//   logo        optional logo image in /public/projects/, shown beside the title
//   description one or two short sentences
//   tech        array of technologies used ([] to hide)
//   liveUrl     link to the live site ('' to hide the button)
//   repoUrl     link to the source code ('' to hide the button)
//   document    optional { label, title, file } — a PDF in /public/files/ that
//               opens in the on-page viewer (e.g. a paper or report)
//   tba         true shows a "Coming soon" badge (for slots not filled yet)
//
// To add a project: replace one of the TBA entries below with your project.
// The ring works with 3 or more projects; 5–8 looks best.
// =============================================================================

export const projects = [
  {
    id: 'odin',
    title: 'ODIN',
    logo: '/projects/odin-logo.png',
    description:
      'Team InsomniCode’s thesis: an 8-bit RPG tutoring system that detects when novice C# programmers are struggling and responds with in-game NPC hints. Students’ test scores rose significantly after using it.',
    tech: ['C#', 'Godot', 'ASP.NET Core', 'Roslyn', 'PostgreSQL'],
    liveUrl: 'https://insomnicode-odin.vercel.app/',
    repoUrl: '',
    document: {
      label: 'Read paper',
      title: 'ODIN research paper',
      file: '/files/odin-insomnicode-paper.pdf',
    },
  },
  {
    id: 'tba-1',
    title: 'TBA',
    description: 'A new project is on the way. Check back soon!',
    tech: [],
    liveUrl: '',
    repoUrl: '',
    tba: true,
  },
  {
    id: 'tba-2',
    title: 'TBA',
    description: 'A new project is on the way. Check back soon!',
    tech: [],
    liveUrl: '',
    repoUrl: '',
    tba: true,
  },
]
