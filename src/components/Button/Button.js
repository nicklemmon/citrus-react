import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, color } from 'styled-system'

export default function Button(props) {
  const { variant, to, isFullWidth, isSmall, isDisabled, children } = props
  const primaryStyles = css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    border-color: ${props => props.theme.colors.blue};

    &:hover {
      background-color: ${props => props.theme.colors.darkBlue};
      border-color: ${props => props.theme.colors.darkBlue};
    }
  `
  const secondaryStyles = css`
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.blue};

    &:hover {
      color: ${props => props.theme.colors.darkBlue};
      background-color: ${props => props.theme.colors.offWhite};
      border-color: ${props => props.theme.colors.darkBlue};
    }
  `
  const tertiaryStyles = css`
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};

    &:hover {
      color: ${props => props.theme.colors.darkBlue};
      background-color: ${props => props.theme.colors.offWhite};
      border-color: ${props => props.theme.colors.offWhite};
    }
  `
  const Button = styled.button`
    ${space}
    ${color}
    font-size: ${props => props.theme.fontSizes[1]};
    padding: ${props => `${props.theme.space[2]} ${props.theme.space[2]}`};
    background: none;
    border: 2px solid #000;
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
    border-radius: ${props => props.theme.radii[0]};
    transition: background-color ${props =>
      props.theme.animation.timing} ${props =>
    props.theme.animation.easing}, border-color ${props =>
    props.theme.animation.timing} ${props =>
    props.theme.animation.easing}, color ${props =>
    props.theme.animation.timing} ${props => props.theme.animation.easing};
    ${variant === 'primary' && primaryStyles}
    ${variant === 'secondary' && secondaryStyles}
    ${variant === 'tertiary' && tertiaryStyles}
  `

  return (
    <Button {...props}>
      <span>{children}</span>
    </Button>
  )
}

Button.propTypes = {
  ...space.propTypes,
  variant: PropTypes.string.isRequired
}

Button.defaultProps = {
  variant: 'primary'
}
