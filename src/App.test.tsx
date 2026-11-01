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
  })
})
