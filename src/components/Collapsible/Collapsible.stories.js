import React from 'react'
import { storiesOf } from '@storybook/react'
import Collapsible from './Collapsible'
import CollapsibleButton from './CollapsibleButton'
import CollapsibleContent from './CollapsibleContent'

storiesOf('Collapsible', module)
  .add('with required props only', () => {
    return (
      <Collapsible id="default-state">
        <CollapsibleButton>
          Click on me
        </CollapsibleButton>

        <CollapsibleContent>
          Hello, world.
        </CollapsibleContent>
      </Collapsible>
    )
  })
  .add('initially open', () => {
    return (
      <Collapsible id="initially-open" isOpen>
        <CollapsibleButton>
          Click on me
        </CollapsibleButton>

        <CollapsibleContent>
          Hello, world.
        </CollapsibleContent>
      </Collapsible>
    )
  })
  .add('with a left chevron', () => {
    return (
      <Collapsible id="left-chevron">
        <CollapsibleButton hasLeftChevron>
          Click on me
        </CollapsibleButton>

        <CollapsibleContent>
          Hello, world.
        </CollapsibleContent>
      </Collapsible>
    )
  })
  .add('with a right chevron', () => {
    return (
      <Collapsible id="right-chevron">
        <CollapsibleButton hasRightChevron>
          Click on me
        </CollapsibleButton>

        <CollapsibleContent>
          Hello, world.
        </CollapsibleContent>
      </Collapsible>
    )
  })
