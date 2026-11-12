// =============================================================================
// Your personal info: edit everything here; components read from this file.
// =============================================================================

export const profile = {
  name: 'Ken Johan Liwanag',
  shortName: 'KJL', // shown as the logo in the navbar
  title: 'Computer Science Student · Software Developer',
  location: 'Philippines',

  // One line that sums you up (shown in the hero)
  tagline:
    'I build clean, accessible software, from responsive websites to game-based learning tools that help people learn to code.',

  // Each string is one paragraph in the About section
  bio: [
    'Hi! I am Ken, a Computer Science student at FEU Institute of Technology in Manila. For my thesis, our team built ODIN, an 8-bit RPG tutoring system that spots when novice programmers are struggling and steps in with hints. We wrote it up as an ACM-format research paper.',
    'I hold the IT Specialist certification in Python and the PMI Project Management Ready® credential. I enjoy the whole journey of a project, from planning and research to front-end, back-end, and game development.',
  ],

  // Skills grouped into categories; each group renders as a row of 3D keys
  skills: [
    { group: 'Languages', items: ['C#', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
    { group: 'Frameworks & tools', items: ['React', 'ASP.NET Core', 'Godot', 'PostgreSQL', 'Git & GitHub'] },
    {
      group: 'Practices',
      items: ['Project Management', 'Agile', 'Responsive Design', 'Accessibility', 'User Research'],
    },
  ],

  links: {
    github: 'https://github.com/KenJohanLiwanag',
    linkedin: 'https://www.linkedin.com/in/ken-johan-liwanag-93101525a/',
    email: 'kenjohannunez@gmail.com',
  },
}
