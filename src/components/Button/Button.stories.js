import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import ButtonWrapper from '../ButtonWrapper'

storiesOf('Button', module)
  .add('with required props only', () => {
    return (
      <Button>
        Click Me
      </Button>
    )
  })
  .add('primary variant', () => {
    return (
      <Button variant="primary">
        Click Me
      </Button>
    )
  })
  .add('secondary variant', () => {
    return (
      <Button variant="secondary">
        Click Me
      </Button>
    )
  })
  .add('tertiary variant', () => {
    return (
      <Button variant="tertiary">
        Click Me
      </Button>
    )
  })
  .add('all variants in a row', () => {
    return (
      <ButtonWrapper>
        <Button variant="primary">
          Continue
        </Button>

        <Button variant="secondary">
          Back
        </Button>

        <Button variant="tertiary">
          Cancel
        </Button>
      </ButtonWrapper>
    )
  })
