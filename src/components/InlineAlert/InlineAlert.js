import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { alertCircle } from 'react-icons-kit/feather/alertCircle'
import { checkCircle } from 'react-icons-kit/feather/checkCircle'
import { info } from 'react-icons-kit/feather/info'
import Icon from '../Icon'

export default function InlineAlert(props) {
  const { children, variant } = props
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.5;
    font-size: ${props => props.theme.fontSizes[0]};
    color: ${props => props.theme.colors[variant]};
    ${space}
  `
  const StyledIcon = styled(Icon)`
    display: inline-block;
    margin-right: ${props => props.theme.space[1]};
    transform: translateY(-1px);
  `

  const getVariantIcon = variant => {
    switch (variant) {
      case 'success':
        return {
          icon: checkCircle,
          label: 'Success!'
        }
      case 'error':
        return {
          icon: alertCircle,
          label: 'Error!'
        }
      case 'info':
        return {
          icon: info,
          label: 'Heads up:'
        }
      default:
        console.error(`Supplied value for variant prop ${variant} not a valid value`)
    }
  }

  return (
    <StyledDiv {...props}>
      <StyledIcon
        icon={getVariantIcon(variant).icon}
        label={getVariantIcon(variant).label}
        size={15}
      />

      {children}
    </StyledDiv>
  )
}

InlineAlert.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
}
