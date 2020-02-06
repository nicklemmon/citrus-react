import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, typography } from 'styled-system'

export default function Heading(props) {
  const { level, children, alignment, className } = props
  const StyledDiv = styled.div`
    margin: 0;
    font-weight: 700;
    color: ${props => props.theme.colors.darkGray};
    ${level === 1 &&
      css`
        font-size: ${props => props.theme.fontSizes[5]};
      `};
    ${level === 2 &&
      css`
        font-size: ${props => props.theme.fontSizes[4]};
      `};
    ${level === 3 &&
      css`
        font-size: ${props => props.theme.fontSizes[3]};
      `};
    ${level === 4 &&
      css`
        font-size: ${props => props.theme.fontSizes[2]};
      `};
    ${level === 5 &&
      css`
        font-size: ${props => props.theme.fontSizes[1]};
      `};
    ${level === 6 &&
      css`
        font-size: ${props => props.theme.fontSizes[0]};
      `};
    ${space}
    ${typography}
  `

  return (
    <StyledDiv
      role="heading"
      aria-level={level}
      style={{ textAlign: alignment }}
      className={className}
    >
      {children}
    </StyledDiv>
  )
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}
