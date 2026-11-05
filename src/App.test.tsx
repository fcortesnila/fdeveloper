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

  it('navigates to the experience section with the router', () => {
    render(<App />)

    const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    fireEvent.click(navigation.getByRole('link', { name: 'Experience' }))

    expect(window.location.hash).toBe('#/experience')
    expect(screen.getByRole('heading', { name: /different systems/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /RBC Wealth management/i })).toBeInTheDocument()
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

  it('shows the not-found page for an unknown project', () => {
    window.location.hash = '#/projects/unknown-project'
    render(<App />)

    expect(screen.getByRole('heading', { name: /that route isn’t here/i })).toBeInTheDocument()
  })
})
