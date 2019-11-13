import React, { isValidElement, cloneElement } from 'react'
import { chevronDown } from 'react-icons-kit/feather/chevronDown'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { FormGroupContext } from './FormGroupContext'
import FormGroupCap from './FormGroupCap'
import Icon from '../Icon'

export default function FormGroup(props) {
  const { children, id, variant, description } = props

  const hasError = () => {
    let hasError = false

    React.Children.map(children, (child, index) => {
      if (child.props.variant === 'error') hasError = true
    })

    return hasError
  }

  const StyledWrapper = styled.div`
    ${space}

    label {
      color: ${hasError() &&
        css`
          ${props => props.theme.colors.error}
        `};
    }
  `
  const StyledSubwrapper = styled.div`
    overflow: hidden;
    border: 2px solid ${props => props.theme.colors.lightGray};
    border-radius: ${props => props.theme.radii[0]};
    transition: border-color ${props => props.theme.animation.timing}
        ${props => props.theme.animation.easing},
      box-shadow ${props => props.theme.animation.timing} ${props => props.theme.animation.easing};
    ${hasError() &&
      css`
        border-color: ${props => props.theme.colors.error};
      `};

    &:hover {
      border-color: ${props => props.theme.colors.gray};
      ${hasError() &&
        css`
          border-color: ${props => props.theme.colors.error};
        `};
    }

    &:focus-within {
      border-color: ${props => props.theme.colors.blue};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.blue}66;
    }
  `
  const StyledControlWrapper = styled.div`
    display: flex;

    button,
    a {
      border-radius: 0;
    }
  `
  const StyledDescription = styled.div`
    font-size: ${props => props.theme.fontSizes[0]};
    color: ${props => props.theme.colors.darkGray};
    padding: ${props => props.theme.space[2]};
    background-color: ${props => props.theme.colors.offWhite};
    border-top: 2px solid ${props => props.theme.colors.lightGray};
    border-top: 0;
  `

  const renderLabel = () => {
    return React.Children.map(children, (child, index) => {
      const childName = child.type.name

      if (!isValidElement(child)) return

      if (childName === 'FormLabel') {
        return cloneElement(child, { id })
      }
    })
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childName = child.type.name

      // Do not render `FormLabels` here!
      if (!isValidElement(child) || childName === 'FormLabel') return

      if (childName === 'FormField' || childName === 'FormGroupCap' || childName === 'Button') {
        return cloneElement(child, {
          id,
          variant,
          description
        })
      }
    })
  }

  const renderAlerts = () => {
    return React.Children.map(children, (child, index) => {
      if (!isValidElement(child)) return

      if (child.type.name === 'InlineAlert') {
        const alertId = `${id}-inline-alert-${index}`

        return cloneElement(child, {
          id: alertId
        })
      }
    })
  }

  return (
    <StyledWrapper {...props}>
      <FormGroupContext.Provider value={{ id, variant, description }}>
        {renderLabel()}

        <StyledSubwrapper>
          <StyledControlWrapper>
            {renderChildren()}

            {/* <select> elements always have the chevron down as an end cap */}
            {variant === 'select' && (
              <FormGroupCap>
                <Icon icon={chevronDown} />
              </FormGroupCap>
            )}
          </StyledControlWrapper>

          {description && (
            <StyledDescription id={`${id}-description`}>{description}</StyledDescription>
          )}
        </StyledSubwrapper>

        {renderAlerts()}
      </FormGroupContext.Provider>
    </StyledWrapper>
  )
}

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  description: PropTypes.string
}
