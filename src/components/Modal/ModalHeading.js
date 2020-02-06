import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'

export default function ModalHeading(props) {
  const { children } = props
  const StyledHeading = styled(Heading)`
    color: ${props => props.theme.colors.darkGray};
    font-size: ${props => props.theme.fontSizes[2]};
  `

  return (
    <StyledHeading as="div" level={3}>
      {children}
    </StyledHeading>
  )
}
