import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export default function Card(props) {
  const { children, hasShadow } = props
  const StyledDiv = styled.div`
    ${space}
    border-radius: ${props => props.theme.radii[0]};
    border: 1px solid ${props => props.theme.colors.offWhite};
    ${hasShadow &&
      css`
        box-shadow: 0 4px 8px 0 ${props => props.theme.colors.darkGray}15;
      `};
  `

  return (
    <StyledDiv {...props}>
      <div>{children}</div>
    </StyledDiv>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  hasShadow: PropTypes.bool
}

Card.defaultProps = {
  hasShadow: false
}
