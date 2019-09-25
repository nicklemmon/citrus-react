import React from 'react'
import styled from 'styled-components'

export default function CardContent(props) {
  const CardContent = styled.div`
    padding: ${props => props.theme.space[2]};
  `
  return <CardContent>{props.children}</CardContent>
}
