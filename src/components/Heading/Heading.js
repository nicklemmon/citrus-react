import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

export default function Heading(props) {
  const { level, children, alignment } = props
  const StyledDiv = styled.div`
    margin: 0;
    font-weight: 700;
    ${space}
  `

  return (
    <StyledDiv
      role="heading"
      aria-level={level}
      style={{ textAlign: alignment }}
      {...props}
    >
      {children}
    </StyledDiv>
  )
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}
