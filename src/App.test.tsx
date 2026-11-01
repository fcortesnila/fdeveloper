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

    expect(screen.getByRole('heading', { name: /i build useful software/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('navigates to the experience section with the router', () => {
    render(<App />)

    const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    fireEvent.click(navigation.getByRole('link', { name: 'Experience' }))

    expect(window.location.hash).toBe('#/experience')
    expect(screen.getByRole('heading', { name: /different systems/i })).toBeInTheDocument()
    expect(screen.getByText(/Wealth management institution/)).toBeInTheDocument()
  })
})
