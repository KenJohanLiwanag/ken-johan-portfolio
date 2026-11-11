// =============================================================================
// Projects shown in the 3D carousel (and the mobile list).
//
// Fields:
//   id          unique string (used as React key)
//   title       project name
//   description one or two short sentences
//   tech        array of technologies used
//   liveUrl     link to the live site ('' to hide the button)
//   repoUrl     link to the source code ('' to hide the button)
//   placeholder true shows a "Placeholder" badge; delete it once it's real
//
// TODO: replace these placeholder projects with your own work.
// The ring works with 3 or more projects; 5–8 looks best.
// =============================================================================

export const projects = [
  {
    id: 'placeholder-1',
    title: 'Placeholder Project One',
    description: 'A short one-line description of what this project does and who it is for.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/project-one',
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    title: 'Placeholder Project Two',
    description: 'Describe the problem it solves and one feature you are proud of.',
    tech: ['React', 'CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/project-two',
    placeholder: true,
  },
  {
    id: 'placeholder-3',
    title: 'Placeholder Project Three',
    description: 'Mention what you learned building it, such as an API, a library, or a technique.',
    tech: ['JavaScript', 'REST API'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/project-three',
    placeholder: true,
  },
  {
    id: 'placeholder-4',
    title: 'Placeholder Project Four',
    description: 'A school or personal project that shows off a different skill.',
    tech: ['React', 'Vite'],
    liveUrl: '',
    repoUrl: 'https://github.com/your-username/project-four',
    placeholder: true,
  },
  {
    id: 'placeholder-5',
    title: 'Placeholder Project Five',
    description: 'Keep descriptions short, since cards have limited space in the 3D ring.',
    tech: ['HTML', 'Sass', 'Git'],
    liveUrl: 'https://example.com',
    repoUrl: '',
    placeholder: true,
  },
]
