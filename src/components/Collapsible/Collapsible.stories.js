import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Collapsible from './Collapsible'
import CollapsibleButton from './CollapsibleButton'
import CollapsibleContent from './CollapsibleContent'

/* eslint-disable no-undef */
storiesOf('Collapsible', module)
  .add('with a theme', () => {
    return (
      <Collapsible id="example-id">
        <CollapsibleButton>
          Testing Cloning!
        </CollapsibleButton>

        <CollapsibleContent>
          Hello, world.
        </CollapsibleContent>
      </Collapsible>
    )
  })
