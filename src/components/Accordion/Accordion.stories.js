import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from './Accordion'
import CitrusTheme from '../CitrusTheme/CitrusTheme'

/* eslint-disable no-undef */
storiesOf('Accordion', module)
  .addDecorator((getStory) => (
    <CitrusTheme>{getStory()}</CitrusTheme>
  ))
  .add('with a theme', () => {
    return <Accordion color="error" my={3} buttonContent="Click Me"><p>Hello world.</p></Accordion>
  })
