export type ProjectVisualType = 'contacts' | 'api' | 'game'

export type ProjectLink = {
  label: string
  href: string
  secondary?: boolean
}

type ProjectContent = {
  number: string
  category: string
  title: string
  description: string
  technologies: string[]
  links: ProjectLink[]
}

export type Project = ProjectContent & {
  visual: ProjectVisualType
}

export const featuredProject: ProjectContent & { visual: 'architecture' } = {
  number: '01',
  category: 'FULL-STACK STARTER',
  title: 'Avian Vet',
  description: 'A clinic software starter for appointments and patient records, with a citation-grounded care information assistant. The README describes system boundaries, safety controls, and release gates. The assistant uses a local retrieval baseline with no external model configured; the product is neither clinically validated nor deployed.',
  technologies: ['React', 'TypeScript', 'FastAPI', 'MariaDB', 'Docker Compose', 'Terraform'],
  links: [{ label: 'Review source, architecture & scope', href: 'https://github.com/fcortesnila/avian-vet' }],
  visual: 'architecture',
}

export const projects: Project[] = [
  {
    number: '02',
    category: 'CONTACT MANAGEMENT DEMO',
    title: 'Phone Book',
    description: 'Search, add, edit, and delete contacts. The React frontend persists to localStorage; a separate FastAPI service uses SQLite. They are not connected, so their data does not sync. This is a local demo for synthetic data.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'SQLite'],
    links: [{ label: 'Review source & frontend/API scope', href: 'https://github.com/fcortesnila/phone-book' }],
    visual: 'contacts',
  },
  {
    number: '03',
    category: 'BACKEND API & AGENT PROTOTYPE',
    title: 'Basic Phone Directory API',
    description: 'A FastAPI phone directory with list, get, create, PATCH, and delete endpoints, plus an optional OpenAI-backed agent that answers questions and prepares create/update proposals for explicit confirmation. Agent routes require a bearer token, and sharing directory data with OpenAI is opt-in. Core directory routes are unauthenticated and storage is in memory, so this is a local demo for synthetic data—not safe for public exposure or real personal data.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'pytest', 'Docker', 'GitHub Actions'],
    links: [
      { label: 'View source on GitHub', href: 'https://github.com/fcortesnila/basic-api' },
      { label: 'View passing test run', href: 'https://github.com/fcortesnila/basic-api/actions/runs/40998575101', secondary: true },
    ],
    visual: 'api',
  },
  {
    number: '04',
    category: 'EARLIER WEB EXPERIMENT',
    title: 'Tic Tac Toe in Vue',
    description: 'A small browser game built with Vue 3 and the Composition API. The profile also includes an earlier Java terminal version, showing practice across frameworks and interfaces.',
    technologies: ['Vue 3', 'JavaScript', 'Composition API'],
    links: [{ label: 'Explore Vue repository', href: 'https://github.com/fcortesnila/ticTacToc' }],
    visual: 'game',
  },
]
