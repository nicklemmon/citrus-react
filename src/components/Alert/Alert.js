import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { alertCircle } from 'react-icons-kit/feather/alertCircle'
import { checkCircle } from 'react-icons-kit/feather/checkCircle'
import Icon from '../Icon'
import Heading from '../Heading'

export default function Alert(props) {
  const { heading, variant, children } = props

  const getVariantStyles = variant => {
    switch (variant) {
      case 'success':
        return css`
          border-color: ${props => props.theme.colors.success};
        `
      case 'error':
        return css`
          border-color: ${props => props.theme.colors.error};
        `
      default:
        console.error(
          `Supplied value for variant prop ${variant} not a valid value`
        )
    }
  }

  const getVariantIcon = variant => {
    console.log('variant', variant)
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
      default:
        console.error(
          `Supplied value for variant prop ${variant} not a valid value`
        )
    }
  }

  const Alert = styled.div`
    display: grid;
    grid-template-columns: ${props => props.theme.space[6]} auto;
    width: 100%;
    border-radius: ${props => props.theme.radii[0]};
    border: ${props => props.theme.space[1]} solid;
    ${getVariantStyles(variant)}

    p {
      margin: 0;
      color: ${props => props.theme.colors.gray};
    }
  `
  const AlertPreContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0;
  `
  const AlertIconWrapper = styled.div``
  const AlertContent = styled.div`
    padding: ${props => props.theme.space[4]};
  `

  return (
    <Alert role="alert">
      <AlertPreContent>
        <AlertIconWrapper>
          <Icon
            icon={getVariantIcon(variant).icon}
            label={getVariantIcon(variant).label}
            size={28}
            color={'darkGray'}
          />
        </AlertIconWrapper>
      </AlertPreContent>

      <AlertContent>
        <Heading mb={3} level={3}>
          {heading}
        </Heading>

        {children}
      </AlertContent>
    </Alert>
  )
}

Alert.propTypes = {
  heading: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
