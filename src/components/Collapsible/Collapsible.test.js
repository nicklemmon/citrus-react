import React from 'react'
import { render, screen } from '@testing-library/react'
import { CitrusTheme } from 'src/components'
import Collapsible from './Collapsible'

describe('Collapsible', () => {
  const subject = props =>
    render(
      <CitrusTheme>
        <Collapsible id="collapsible" {...props}>
          <Collapsible.Button onClick={() => {}}>Click Me</Collapsible.Button>
          <Collapsible.Content>
            <p>Boo!</p>
          </Collapsible.Content>
        </Collapsible>
      </CitrusTheme>
    )

  it('renders with default props', () => {
    const { container } = subject()

    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveAttribute(
      'aria-controls',
      'collapsible-content'
    )
    expect(container.querySelector('#collapsible-content')).toHaveAttribute('hidden')
  })

  it('renders with relevant attributes when expanded', () => {
    const { container } = subject({ isExpanded: true })

    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(container.querySelector('#collapsible-content')).not.toHaveAttribute('hidden')
  })
})
