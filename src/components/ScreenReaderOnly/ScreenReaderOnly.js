import React from 'react'
import styled from 'styled-components'

export default function ScreenReaderOnly(props) {
  const { children } = props
  const StyledSpan = styled.span`
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
  `

  return <StyledSpan>{children}</StyledSpan>
}
