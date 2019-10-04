import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import ButtonWrapper from '../ButtonWrapper'

storiesOf('Button', module)
  .add('with required props only', () => <Button>Click Me</Button>)
  .add('primary variant', () => <Button variant="primary">Click Me</Button>)
  .add('secondary variant', () => <Button variant="secondary">Click Me</Button>)
  .add('tertiary variant', () => <Button variant="tertiary">Click Me</Button>)
  .add('all variants in a ButtonWrapper', () => (
    <ButtonWrapper>
      <Button variant="primary">Continue</Button>

      <Button variant="secondary">Back</Button>

      <Button variant="tertiary">Cancel</Button>
    </ButtonWrapper>
  ))
  .add('full width', () => <Button isFullWidth>Click Me</Button>)
  .add('disabled', () => <Button isDisabled>Click Me</Button>)
  .add('small', () => <Button isSmall>Click Me</Button>)
  .add('loading', () => <Button isLoading>Click Me</Button>)
