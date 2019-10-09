import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, color } from 'styled-system'

export default function Button(props) {
  const { variant, to, isFullWidth, isSmall, isDisabled, children, isLoading } = props
  const primaryStyles = css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    border-color: ${props => props.theme.colors.blue};

    ${!isDisabled &&
      !isLoading &&
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

    ${!isDisabled &&
      !isLoading &&
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

    ${!isDisabled &&
      !isLoading &&
      css`
        &:hover {
          color: ${props => props.theme.colors.darkBlue};
          background-color: ${props => props.theme.colors.offWhite};
          border-color: ${props => props.theme.colors.offWhite};
        }
      `}
  `
  const Button = styled.button`
    ${space}
    ${color}
    font-size: ${
      isSmall
        ? css`
            ${props => props.theme.fontSizes[0]}
          `
        : css`
            ${props => props.theme.fontSizes[1]}
          `
    };
    font-weight: 500;
    letter-spacing: 0.0125rem;
    padding: ${
      isSmall
        ? css`
            ${props => props.theme.space[2]}
          `
        : css`
            ${props => props.theme.space[3]}
          `
    };
    background: none;
    border: 1px solid #000;
    outline: none;
    border-radius: ${props => props.theme.radii[0]};
    ${variant === 'primary' && primaryStyles}
    ${variant === 'secondary' && secondaryStyles}
    ${variant === 'tertiary' && tertiaryStyles}
    cursor: pointer;
    ${isDisabled &&
      css`
        cursor: not-allowed;
      `};
    ${isLoading &&
      css`
        cursor: wait;
      `};
    width: 100%;
    ${isDisabled && 'opacity: 0.75'};
    transition: background-color ${props => props.theme.animation.timing} ${props =>
    props.theme.animation.easing}, border-color ${props => props.theme.animation.timing} ${props =>
    props.theme.animation.easing}, color ${props => props.theme.animation.timing} ${props =>
    props.theme.animation.easing}, box-shadow ${props => props.theme.animation.timing} ${props =>
    props.theme.animation.easing};

    &:focus {
      box-shadow: 0 0 0 4px ${props => props.theme.colors.blue}66;
    }

    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      width: ${isFullWidth ? '100%' : 'auto'};
    }
  `

  return (
    <Button {...props} aria-disabled={isDisabled ? 'true' : 'false'}>
      <span>{isLoading ? 'Loading...' : children}</span>
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
