import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, color } from 'styled-system'

const primaryStyles = css`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  border-color: ${props => props.theme.colors.blue};

  ${props =>
    !props.isDisabled &&
    !props.isLoading &&
    css`
      &:hover {
        background-color: ${props => props.theme.colors.darkBlue};
        border-color: ${props => props.theme.colors.darkBlue};
      }
    `}
`
const secondaryStyles = css`
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.blue};

  ${props =>
    !props.isDisabled &&
    !props.isLoading &&
    css`
      &:hover {
        color: ${props => props.theme.colors.darkBlue};
        background-color: ${props => props.theme.colors.offWhite};
        border-color: ${props => props.theme.colors.darkBlue};
      }
    `}
`
const tertiaryStyles = css`
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.white};

  ${props =>
    !props.isDisabled &&
    !props.isLoading &&
    css`
      &:hover {
        color: ${props => props.theme.colors.darkBlue};
        background-color: ${props => props.theme.colors.offWhite};
        border-color: ${props => props.theme.colors.offWhite};
      }
    `}
`
const StyledButton = styled.button`
    ${space}
    ${color}
    font-size: ${props =>
      props.isSmall
        ? css`
            ${props => props.theme.fontSizes[0]}
          `
        : css`
            ${props => props.theme.fontSizes[1]}
          `};
    font-weight: 500;
    letter-spacing: 0.0125rem;
    padding: ${props =>
      props.isSmall
        ? css`
            ${props => props.theme.space[1]}
          `
        : css`
            ${props => `${props.theme.space[2]} ${props.theme.space[2]}`}
          `};
    background: none;
    border: 1px solid #000;
    outline: none;
    border-radius: ${props => props.theme.radii[0]};
    ${props => props.variant === 'primary' && primaryStyles}
    ${props => props.variant === 'secondary' && secondaryStyles}
    ${props => props.variant === 'tertiary' && tertiaryStyles}
    cursor: pointer;
    ${props =>
      props.isDisabled &&
      css`
        cursor: not-allowed;
      `};
    ${props =>
      props.isLoading &&
      css`
        cursor: wait;
      `};
    width: 100%;
    ${props => props.isDisabled && 'opacity: 0.75'};
    transition: background-color ${props => props.theme.animation.timing} ${props =>
  props.theme.animation.easing}, border-color ${props => props.theme.animation.timing} ${props =>
  props.theme.animation.easing}, color ${props => props.theme.animation.timing} ${props =>
  props.theme.animation.easing}, box-shadow ${props => props.theme.animation.timing} ${props =>
  props.theme.animation.easing};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px ${props => props.theme.colors.blue}66;
    }

    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      width: ${props => (props.isFullWidth ? '100%' : 'auto')};
    }
  `

export default function Button(props) {
  const { variant, isFullWidth, isSmall, isDisabled, children, isLoading } = props

  return (
    <StyledButton
      variant={variant}
      isFullWidth={isFullWidth}
      isSmall={isSmall}
      isDisabled={isDisabled}
      aria-disabled={isDisabled ? 'true' : 'false'}
    >
      <span>{isLoading ? 'Loading...' : children}</span>
    </StyledButton>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isFullWidth: PropTypes.bool,
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool
}
