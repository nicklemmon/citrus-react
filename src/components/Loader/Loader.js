import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { space } from 'styled-system'

export default function Loader(props) {
  const { size, description, variant } = props
  const rotate = keyframes`
    to {
      transform: rotate(360deg);
    }
  `
  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return 'blue'
      case 'secondary':
        return 'darkerGray'
      case 'tertiary':
        return 'offWhite'
      default:
        break
    }
  }
  const getSizeIndex = () => {
    switch (size) {
      case 'sm':
        return 4
      case 'base':
        return 5
      case 'lg':
        return 6
      default:
        break
    }
  }
  const getBorderWidth = () => {
    switch (size) {
      case 'sm':
        return '2px'
      case 'base':
        return '3px'
      case 'lg':
        return '6px'
      default:
        break
    }
  }
  const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${space}

    &:focus {
      outline: 0; /* disable focus styles since this element can only ever receive programmatic focus and is not keyboard interactive */
    }
  `
  const StyledLoader = styled.span`
    height: 100%;
    width: 100%;
    border: ${getBorderWidth()} solid;
    border-color: ${props => props.theme.colors[getBackgroundColor()]}50;
    border-top-color: ${props => props.theme.colors[getBackgroundColor()]};
    border-radius: 50%;
    width: ${props => props.theme.space[getSizeIndex()]};
    height: ${props => props.theme.space[getSizeIndex()]};
    animation: ${rotate} 1s linear infinite;
  `
  const StyledDescription = styled.span`
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fontSizes[1]};
    margin-top: ${props => props.theme.space[2]};
  `

  return (
    <StyledDiv aria-label={description ? description : 'Loading'} tabIndex="-1">
      <StyledLoader />

      {/* using `aria-hidden` to prevent duplicate content found in `aria-label` */}
      {description && <StyledDescription aria-hidden="true">{description}</StyledDescription>}
    </StyledDiv>
  )
}

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  description: PropTypes.string
}

Loader.defaultProps = {
  size: 'base',
  variant: 'primary'
}
