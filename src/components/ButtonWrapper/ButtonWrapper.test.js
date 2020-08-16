import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonWrapper from './ButtonWrapper'
import { Button, CitrusTheme } from 'src/components'

describe('ButtonWrapper', () => {
  const subject = props =>
    render(
      <CitrusTheme>
        <ButtonWrapper {...props} />
      </CitrusTheme>
    )

  it('renders child <Button /> components', () => {
    subject({ children: <Button variant="primary">Click Me</Button> }).debug()

    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('throws an error when a child element is passed in that is not a <Button />', () => {
    expect(() => subject({ children: <h1>Hello!</h1> })).toThrowError()
  })
})
