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
  .add('all variants in a ButtonWrapper', () => {
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
  .add('full width', () => {
    return (
      <Button isFullWidth>
        Click Me
      </Button>
    )
  })
  .add('disabled', () => {
    return (
      <Button isDisabled>
        Click Me
      </Button>
    )
  })
  .add('small', () => {
    return (
      <Button isSmall>
        Click Me
      </Button>
    )
  })
