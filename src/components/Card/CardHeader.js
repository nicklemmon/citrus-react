import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

export default function CardHeader(props) {
  const CardHeader = styled.div`
    ${color}
    border-radius: ${props => props.theme.radii[0]} ${props =>
    props.theme.radii[0]} 0 0;
    border-bottom: 1px solid ${props => props.theme.colors.offWhite};
    padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]};
  `

  return <CardHeader {...props}>{props.children}</CardHeader>
}

CardHeader.propTypes = {
  ...color.propTypes
}
