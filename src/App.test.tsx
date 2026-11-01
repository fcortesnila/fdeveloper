import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio starter screen', () => {
  it('shows the portfolio foundation message', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: 'Built with React, Vite, and Tailwind CSS.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Portfolio foundation')).toBeInTheDocument()
  })
})
