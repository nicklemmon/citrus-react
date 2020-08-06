import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeading = styled.div`
  margin: 0;
  font-weight: 700;
  color: ${props => props.theme.colors.darkGray};

  ${props => {
    switch (props.looksLike) {
      case 'h1':
        return `font-size: ${props.theme.fontSizes[6]}`
      case 'h2':
        return `font-size: ${props.theme.fontSizes[5]}`
      case 'h3':
        return `font-size: ${props.theme.fontSizes[4]}`
      case 'h4':
        return `font-size: ${props.theme.fontSizes[3]}`
      case 'h5':
        return `font-size: ${props.theme.fontSizes[2]}`
      case 'h6':
        return `font-size: ${props.theme.fontSizes[1]}`
      default:
        return `font-size: ${props.theme.fontSizes[4]}`
    }
  }}
`

function Heading(props) {
  const { as, looksLike, id, children } = props
  const actuallyLooksLike = looksLike ? looksLike : as
  const headingLevel = as.replace('h', '')

  return (
    <StyledHeading looksLike={actuallyLooksLike} role="heading" aria-level={headingLevel} id={id}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired
}

export default Heading
