import React from 'react'
import styled from 'styled-components'

export default function CardContent(props) {
  const StyledDiv = styled.div`
    padding: ${props => props.theme.space[3]};
    color: ${props => props.theme.colors.darkGray};
  `

  return <StyledDiv>{props.children}</StyledDiv>
}