import React, { useState, isValidElement, cloneElement } from 'react'
import { chevronDown } from 'react-icons-kit/feather/chevronDown'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { FormGroupContext } from './FormGroupContext'
import FormGroupCap from './FormGroupCap'
import Icon from '../Icon'

export default function FormGroup(props) {
  const { children, initialAlerts, id, variant, description } = props
  const [alerts, setAlerts] = useState(initialAlerts)
  const StyledWrapper = styled.div`
    ${space}
  `
  const StyledSubwrapper = styled.div`
    overflow: hidden;
    border: 2px solid ${props => props.theme.colors.lightGray};
    border-radius: ${props => props.theme.radii[0]};
    transition: border-color ${props => props.theme.animation.timing}
        ${props => props.theme.animation.easing},
      box-shadow ${props => props.theme.animation.timing} ${props => props.theme.animation.easing};

    &:hover {
      border-color: ${props => props.theme.colors.gray};
    }

    &:focus-within {
      border-color: ${props => props.theme.colors.blue};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.blue}66;
    }
  `
  const StyledControlWrapper = styled.div`
    display: flex;
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
      if (!isValidElement(child)) return

      if (child.type.name === 'FormLabel') return child
    })
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childName = child.type.name

      if (!isValidElement(child) || childName === 'FormLabel') return

      if (childName === 'FormControl' || childName === 'FormGroupCap') return child
    })
  }

  return (
    <StyledWrapper {...props}>
      <FormGroupContext.Provider value={{ id, variant, alerts, setAlerts, description }}>
        {renderLabel()}

        <StyledSubwrapper>
          <StyledControlWrapper>
            {renderChildren()}

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
      </FormGroupContext.Provider>
    </StyledWrapper>
  )
}

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  description: PropTypes.string
}
