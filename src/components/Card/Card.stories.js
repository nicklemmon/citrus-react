import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'
import ButtonWrapper from '../ButtonWrapper'
import Button from '../Button'

storiesOf('Card', module).add('with required props only', () => {
  return (
    // <Card hasShadow>
    //   <CardHeader>
    //     <CardHeading>Card Heading</CardHeading>
    //   </CardHeader>

    //   <CardContent>
    //     <p>Boo!</p>

    //     <ButtonWrapper>
    //       <Button variant="primary">Continue</Button>

    //       <Button variant="secondary">Back</Button>

    //       <Button variant="tertiary">Cancel</Button>
    //     </ButtonWrapper>
    //   </CardContent>
    // </Card>

    <Card hasShadow>
      <Card.Header>
        <Card.Heading>Card Heading</Card.Heading>
      </Card.Header>

      <Card.Content>
        <ButtonWrapper>
          <Button variant="primary">Continue</Button>

          <Button variant="secondary">Back</Button>

          <Button variant="tertiary">Cancel</Button>
        </ButtonWrapper>
      </Card.Content>
    </Card>
  )
})
