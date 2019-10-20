import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { alertCircle } from 'react-icons-kit/feather/alertCircle'
import { checkCircle } from 'react-icons-kit/feather/checkCircle'
import { info } from 'react-icons-kit/feather/info'
import Icon from '../Icon'

export default function InlineAlert(props) {
  const { children, variant } = props
  const StyledSpan = styled.span``

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
    <StyledSpan>
      <Icon icon={getVariantIcon(variant).icon} label={getVariantIcon(variant).label} size={16} />

      {children}
    </StyledSpan>
  )
}

InlineAlert.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired
}
