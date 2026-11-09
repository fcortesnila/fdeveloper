import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
  window.location.hash = ''
})

describe('portfolio routes', () => {
  it('shows the portfolio home page', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /full-stack software/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('opens the featured project directly from the home-page headline area', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: 'Explore featured project: Avian Vet' }))

    expect(window.location.hash).toBe('#/projects/avian-vet')
    expect(screen.getByRole('heading', { name: 'A clinic software starting point' })).toBeInTheDocument()
  })

  it('navigates to the experience section with the router', () => {
    render(<App />)

    const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    fireEvent.click(navigation.getByRole('link', { name: 'Experience' }))

    expect(window.location.hash).toBe('#/experience')
    expect(screen.getByRole('heading', { name: /different systems/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /RBC Wealth management/i })).toBeInTheDocument()
  })

  it('explains the engineering-to-software connection with a concrete project example', () => {
    render(<App />)

    const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    fireEvent.click(navigation.getByRole('link', { name: 'About' }))

    expect(screen.getByRole('heading', { name: 'From engineering to software' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Building and checking real examples' })).toBeInTheDocument()
    expect(screen.getByText(/In Avian Vet, I documented a clear boundary for the care-information assistant/)).toBeInTheDocument()
    const diagramCaption = screen.getByText('Understand the system, clarify requirements, then verify the result.')
    expect(diagramCaption.parentElement?.tagName).toBe('FIGURE')
    const processIllustration = screen.getByRole('img', { name: 'ASCII illustration connecting electronics engineering to full-stack software and verification' })
    expect(processIllustration).toHaveTextContent('ELECTRONICS')
    expect(processIllustration).toHaveTextContent('FRONT')
    expect(processIllustration).toHaveTextContent('API')
    expect(processIllustration).toHaveTextContent('DATA')
    expect(processIllustration).toHaveTextContent('TEST / TRACE / VERIFY')
    expect(screen.getByText('Professional focus', { exact: false, selector: 'p' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/fcortesnila/')
  })

  it('renders the project entries from portfolio data', () => {
    render(<App />)

    const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    fireEvent.click(navigation.getByRole('link', { name: 'Projects' }))

    expect(window.location.hash).toBe('#/projects')
    expect(screen.getByRole('heading', { name: 'Avian Vet' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Phone Book' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Basic Phone Directory API' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tic Tac Toe in Vue' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'FastAPI RAG API' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Scoop' })).toBeInTheDocument()

    const projectCards = screen.getAllByRole('article')
    expect(projectCards).toHaveLength(6)
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getByRole('img', { name: 'ASCII illustration of Avian Vet\'s app, care assistant, API, and database' })).toBeInTheDocument()
    for (const card of projectCards) {
      const quickRead = within(card)
      expect(quickRead.getByText('Purpose', { selector: 'dt' })).toBeInTheDocument()
      expect(quickRead.getByText('Implemented', { selector: 'dt' })).toBeInTheDocument()
      expect(quickRead.getByText('Key technologies', { selector: 'dt' })).toBeInTheDocument()
      expect(quickRead.getByRole('list', { name: 'Key technologies' })).toBeInTheDocument()
    }
  })

  it('opens a project as an article with its implementation notes', () => {
    render(<App />)

    const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    fireEvent.click(navigation.getByRole('link', { name: 'Projects' }))
    fireEvent.click(screen.getAllByRole('link', { name: /read project details/i })[0])

    expect(window.location.hash).toBe('#/projects/avian-vet')
    expect(screen.getByRole('heading', { name: 'Avian Vet' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'A clinic software starting point' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /all projects/i })).toHaveAttribute('href', '#/projects')
  })

  it('shows the RAG API Docker setup and persistent storage details', () => {
    window.location.hash = '#/projects/fastapi-rag-api'
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Local and containerized setup' })).toBeInTheDocument()
    expect(screen.getByText(/Compose exposes the API on port 8000 and stores ChromaDB data in a named volume/)).toBeInTheDocument()
    expect(within(screen.getByLabelText('Technologies used')).getByText('Docker Compose')).toBeInTheDocument()
  })

  it('shows the Scoop customer, operator, and optional AI features', () => {
    window.location.hash = '#/projects/scoop'
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Scoop' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tools for truck operators' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Optional AI recommendations' })).toBeInTheDocument()
    expect(screen.getByText(/enabled with the IA_API_KEY environment variable/)).toBeInTheDocument()
    expect(within(screen.getByLabelText('Technologies used')).getByText('Spring Boot 3')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'ASCII ice cream truck in a Matrix-inspired code scene' })).toHaveTextContent('SCOOP')
  })

  it('shows the not-found page for an unknown project', () => {
    window.location.hash = '#/projects/unknown-project'
    render(<App />)

    expect(screen.getByRole('heading', { name: /that route isn’t here/i })).toBeInTheDocument()
  })
})
