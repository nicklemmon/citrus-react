import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card, CardContent, CardHeader, CardHeading } from './index'

storiesOf('Card', module).add('with required props only', () => {
  return (
    <Card hasShadow>
      <CardHeader>
        <CardHeading>Card Heading</CardHeading>
      </CardHeader>

      <CardContent>
        <p>Boo!</p>
      </CardContent>
    </Card>
  )
})
