import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './Label'

storiesOf('Label', module).add('with required props only', () => (
  <Label htmlFor="random-id">Some Content</Label>
))
