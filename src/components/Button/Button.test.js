import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import { CitrusTheme } from 'src/components'

describe('Button', () => {
  const subject = ({ variant = 'primary', children = 'Click Me', ...props }) =>
    render(
      <CitrusTheme>
        <Button variant={variant} {...props}>
          {children}
        </Button>
      </CitrusTheme>
    )

  it('renders with passed in children', () => {
    subject({ children: 'Click Me' })

    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('renders with `aria-disabled="true"` when the "isDisabled" prop is true', () => {
    subject({ isDisabled: true })

    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
  })

  it('renders with `aria-disabled="false"` when the "isDisabled" prop is false', () => {
    subject({ isDisabled: false })

    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'false')
  })

  it('renders the loading stated when "isLoading" is true', () => {
    subject({ isLoading: true, children: 'I am not here!' })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByText('I am not here!')).not.toBeInTheDocument()
  })
})
