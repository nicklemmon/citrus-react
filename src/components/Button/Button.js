import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export default function Button(props) {
  const { variant, to, isFullWidth, isSmall, isDisabled, children } = props
  const primaryStyles = css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    border-color: ${props => props.theme.colors.blue};
  `
  const secondaryStyles = css`
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.blue};
  `
  const tertiaryStyles = css`
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};
  `
  const Button = styled.button`
    font-size: ${props => props.theme.fontSizes[1]};
    padding: ${props => `${props.theme.space[2]} ${props.theme.space[2]}`};
    background: none;
    border: 2px solid #000;
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
    border-radius: ${props => props.theme.radii[0]};
    ${variant === 'primary' && primaryStyles}
    ${variant === 'secondary' && secondaryStyles}
    ${variant === 'tertiary' && tertiaryStyles}
  `

  return (
    <Button>
      <span>{children}</span>
    </Button>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired
}

Button.defaultProps = {
  variant: 'primary'
}
