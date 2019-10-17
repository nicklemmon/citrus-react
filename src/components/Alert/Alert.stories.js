import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './Alert'

storiesOf('Alert', module)
  .add('with required props only', () => (
    <Alert heading="ALERT!" variant="success">
      <p>This is the alert content</p>
    </Alert>
  ))
  .add('success variant', () => (
    <Alert heading="Success Alert" variant="success">
      <p>This is alert content.</p>
    </Alert>
  ))
  .add('error variant', () => (
    <Alert heading="Error Alert" variant="error">
      <p>This is alert content.</p>
    </Alert>
  ))
  .add('info variant', () => (
    <Alert heading="Info Alert" variant="info">
      <p>This is alert content.</p>
    </Alert>
  ))
