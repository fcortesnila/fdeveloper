export type ProjectVisualType = 'contacts' | 'api' | 'game' | 'rag' | 'scoop'

export type ProjectLink = {
  label: string
  href: string
  secondary?: boolean
}

export type ProjectSection = {
  heading: string
  body: string
}

type ProjectContent = {
  number: string
  slug: string
  category: string
  title: string
  description: string
  purpose: string
  implemented: string
  keyTechnologies: string[]
  details: ProjectSection[]
  technologies: string[]
  links: ProjectLink[]
}

export type Project = ProjectContent & {
  visual: ProjectVisualType
}

export const featuredProject: ProjectContent & { visual: 'architecture' } = {
  number: '01',
  slug: 'avian-vet',
  category: 'FULL-STACK STARTER',
  title: 'Avian Vet',
  description: 'A clinic software starter for appointments and patient records, with a citation-grounded care information assistant. The README describes system boundaries, safety controls, and release gates. The assistant uses a local retrieval baseline with no external model configured; the product is neither clinically validated nor deployed.',
  purpose: 'A clinic software starter for appointment and patient-record workflows with a cited care-information assistant.',
  implemented: 'React interface, FastAPI service, MariaDB persistence, and a local retrieval baseline. Not deployed or clinically validated.',
  keyTechnologies: ['React', 'FastAPI', 'MariaDB', 'Docker Compose'],
  details: [
    {
      heading: 'A clinic software starting point',
      body: 'Avian Vet brings appointment and patient-record workflows together in a full-stack starter. Its architecture connects a React interface, a FastAPI service, and MariaDB, with Docker Compose and Terraform included in the project stack.',
    },
    {
      heading: 'An assistant with explicit boundaries',
      body: 'The care-information assistant is designed around cited information. The current setup uses a local retrieval baseline and has no external model configured, so it should not be read as a validated clinical tool.',
    },
    {
      heading: 'Current project scope',
      body: 'This is a starter rather than a deployed or clinically validated product. The repository documents system boundaries, safety controls, and release gates to make those limits clear.',
    },
  ],
  technologies: ['React', 'TypeScript', 'FastAPI', 'MariaDB', 'Docker Compose', 'Terraform'],
  links: [{ label: 'Review source, architecture & scope', href: 'https://github.com/fcortesnila/avian-vet' }],
  visual: 'architecture',
}

export const projects: Project[] = [
  {
    number: '02',
    slug: 'phone-book',
    category: 'CONTACT MANAGEMENT DEMO',
    title: 'Phone Book',
    description: 'Search, add, edit, and delete contacts. The React frontend persists to localStorage; a separate FastAPI service uses SQLite. They are not connected, so their data does not sync. This is a local demo for synthetic data.',
    purpose: 'A local contact-management demo for browsing and maintaining synthetic contacts.',
    implemented: 'The React app searches, adds, edits, and deletes contacts in localStorage. A separate FastAPI/SQLite example is included but does not sync with the frontend.',
    keyTechnologies: ['React', 'Vite', 'FastAPI', 'SQLite'],
    details: [
      {
        heading: 'Contact management in the browser',
        body: 'The React interface demonstrates the everyday contact workflow: search, add, edit, and delete. The frontend keeps its data in localStorage.',
      },
      {
        heading: 'A separate API example',
        body: 'The repository also includes a FastAPI service backed by SQLite. It is a separate implementation, not a backend connected to the React app, so contact data does not sync between them.',
      },
      {
        heading: 'Demo data only',
        body: 'This project is intended as a local demo using synthetic data, not as a service for real personal information.',
      },
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'SQLite'],
    links: [{ label: 'Review source & frontend/API scope', href: 'https://github.com/fcortesnila/phone-book' }],
    visual: 'contacts',
  },
  {
    number: '03',
    slug: 'basic-phone-directory-api',
    category: 'BACKEND API & AGENT PROTOTYPE',
    title: 'Basic Phone Directory API',
    description: 'A FastAPI phone directory with list, get, create, PATCH, and delete endpoints, plus an optional OpenAI-backed agent that answers questions and prepares create/update proposals for explicit confirmation. Agent routes require a bearer token, and sharing directory data with OpenAI is opt-in. Core directory routes are unauthenticated and storage is in memory, so this is a local demo for synthetic data—not safe for public exposure or real personal data.',
    purpose: 'A phone-directory API with an optional assistant for questions and proposed updates.',
    implemented: 'List/get/create/PATCH/delete endpoints and agent proposals requiring confirmation. Agent access is token-protected; core routes are unauthenticated and storage is in memory, so use synthetic data only.',
    keyTechnologies: ['Python', 'FastAPI', 'OpenAI API', 'pytest'],
    details: [
      {
        heading: 'Directory endpoints',
        body: 'The FastAPI service provides list, get, create, PATCH, and delete operations for a phone directory. Automated tests and a GitHub Actions workflow are part of the project.',
      },
      {
        heading: 'An optional agent workflow',
        body: 'An optional OpenAI-backed agent can answer questions and prepare create or update proposals. Changes require explicit confirmation. Agent routes require a bearer token, and sending directory data to OpenAI is opt-in.',
      },
      {
        heading: 'Important deployment limits',
        body: 'Core directory routes are unauthenticated and data is held in memory. This is a local prototype for synthetic data—not a service to expose publicly or use with real personal information.',
      },
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'pytest', 'Docker', 'GitHub Actions'],
    links: [
      { label: 'View source on GitHub', href: 'https://github.com/fcortesnila/basic-api' },
      { label: 'View passing test run', href: 'https://github.com/fcortesnila/basic-api/actions/runs/40998575101', secondary: true },
    ],
    visual: 'api',
  },
  {
    number: '04',
    slug: 'tic-tac-toe-vue',
    category: 'EARLIER WEB EXPERIMENT',
    title: 'Tic Tac Toe in Vue',
    description: 'A small browser game built with Vue 3 and the Composition API. The profile also includes an earlier Java terminal version, showing practice across frameworks and interfaces.',
    purpose: 'A small browser game exploring interactive development with Vue.',
    implemented: 'Tic Tac Toe in Vue 3 with the Composition API, alongside an earlier Java terminal version.',
    keyTechnologies: ['Vue 3', 'JavaScript', 'Composition API'],
    details: [
      {
        heading: 'A small browser game',
        body: 'This experiment implements Tic Tac Toe in Vue 3 using the Composition API, practicing interactive UI development in a different framework.',
      },
      {
        heading: 'A broader learning trail',
        body: 'The profile also includes an earlier Java terminal version of the game, showing the same small project explored through both a browser interface and a command-line interface.',
      },
    ],
    technologies: ['Vue 3', 'JavaScript', 'Composition API'],
    links: [{ label: 'Explore Vue repository', href: 'https://github.com/fcortesnila/ticTacToc' }],
    visual: 'game',
  },
  {
    number: '05',
    slug: 'fastapi-rag-api',
    category: 'RETRIEVAL-AUGMENTED GENERATION API',
    title: 'FastAPI RAG API',
    description: 'A small FastAPI service that indexes text in a local ChromaDB collection and answers questions with relevant passages. Run it locally or with Docker Compose; responses include retrieved source chunks and metadata so answers can be inspected and grounded in source material.',
    purpose: 'A retrieval-augmented API for answering questions using an indexed text collection.',
    implemented: 'Document ingestion, ChromaDB retrieval, and generated answers with source chunks and metadata; runs locally or through Docker Compose.',
    keyTechnologies: ['Python', 'FastAPI', 'ChromaDB', 'OpenAI API'],
    details: [
      {
        heading: 'Ingest, retrieve, and answer',
        body: 'The API accepts documents for indexing through /ingest and questions through /query. It embeds documents and questions, retrieves nearby chunks from ChromaDB, then supplies those passages as context to the language model.',
      },
      {
        heading: 'Answers with inspectable sources',
        body: 'Query responses include both a generated answer and a sources array with the retrieved text and metadata. The implementation uses a direct FastAPI, OpenAI, and ChromaDB pipeline rather than a RAG framework.',
      },
      {
        heading: 'Local and containerized setup',
        body: 'Run the service directly with Python or build it with Docker Compose. Compose exposes the API on port 8000 and stores ChromaDB data in a named volume, preserving the indexed collection across container restarts.',
      },
      {
        heading: 'Test coverage',
        body: 'Tests mock the OpenAI and ChromaDB operations and cover indexing metadata, retrieval options, context passed to generation, response validation, and empty-query validation without making network calls.',
      },
      {
        heading: 'API key behavior',
        body: 'The service can start without an OpenAI API key, but /ingest and /query return a clear 503 error until one is configured.',
      },
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'ChromaDB', 'Docker Compose', 'pytest'],
    links: [{ label: 'Review source & RAG API scope', href: 'https://github.com/fcortesnila/rag-api' }],
    visual: 'rag',
  },
  {
    number: '06',
    slug: 'scoop',
    category: 'ICE CREAM TRUCK ORDERING & OPERATIONS',
    title: 'Scoop',
    description: 'A full-stack starter for ice-cream truck sales, combining a customer ordering experience with operator tools for orders, inventory, and truck stops. It uses Google sign-in and MariaDB-backed services, with optional AI-powered recommendations.',
    purpose: 'A mobile-first ordering and operations app for an ice-cream truck.',
    implemented: 'Flavor browsing, cart and order status, plus operator order and stop workflows, daily summaries, and inventory insights. Optional AI recommendations complement non-AI alerts; this is a starter, not a deployed service.',
    keyTechnologies: ['React', 'Spring Boot', 'MariaDB', 'Docker Compose', 'Google OAuth', 'AI'],
    details: [
      {
        heading: 'Customer ordering flow',
        body: 'Customers can browse flavors, build a cart, place orders, and check order status through a mobile-first React app backed by a Spring Boot API.',
      },
      {
        heading: 'Tools for truck operators',
        body: 'Operator features include an order queue, walk-up orders, daily sales summaries, inventory alerts, and truck-stop management. Verified operator access is controlled by a configured email allow-list.',
      },
      {
        heading: 'A containerized full-stack setup',
        body: 'Docker Compose runs the React/Vite web app, Java 21 and Spring Boot 3 API, and MariaDB. Flyway manages the schema and starter data; the repository also includes unit tests and MariaDB integration tests.',
      },
      {
        heading: 'Optional AI recommendations',
        body: 'AI-powered inventory and route recommendations are optional and can be enabled with the IA_API_KEY environment variable. Numeric inventory alerts and historical route suggestions remain available without it.',
      },
      {
        heading: 'Starter project scope',
        body: 'This repository is a software starter, not a deployed ordering service. Local development uses Google OAuth configuration, and the optional demo login is intended only for development.',
      },
    ],
    technologies: ['React', 'Vite', 'Java 21', 'Spring Boot 3', 'MariaDB', 'Flyway', 'Docker Compose', 'Google OAuth', 'AI'],
    links: [{ label: 'Review source & project scope', href: 'https://github.com/fcortesnila/scoop' }],
    visual: 'scoop',
  },
]
