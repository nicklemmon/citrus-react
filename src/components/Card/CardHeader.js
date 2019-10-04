import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

export default function CardHeader(props) {
  const StyledDiv = styled.div`
    ${color}
    border-radius: ${props => props.theme.radii[0]} ${props =>
    props.theme.radii[0]} 0 0;
    border-bottom: 1px solid ${props => props.theme.colors.offWhite};
    padding: ${props => props.theme.space[3]};
  `

  return <StyledDiv {...props}>{props.children}</StyledDiv>
}

CardHeader.propTypes = {
  ...color.propTypes
}
