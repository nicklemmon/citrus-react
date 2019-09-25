import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

export default function CardHeader(props) {
  const CardHeader = styled.div`
    ${color}
    background-color: ${props => props.theme.colors.offWhite};
    border-radius: ${props => props.theme.radii[0]} ${props =>
    props.theme.radii[0]} 0 0;
    padding: ${props => props.theme.space[2]};
  `

  return <CardHeader {...props}>{props.children}</CardHeader>
}
