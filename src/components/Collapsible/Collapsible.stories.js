import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Collapsible from './Collapsible'

/* eslint-disable no-undef */
storiesOf('Collapsible', module)
  .add('with a theme', () => {
    const [isOpen, setIsOpen] = useState(false);

    return <Collapsible id="example-id" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} buttonContent="Click Me"><p>Hello world.</p></Collapsible>
  })
