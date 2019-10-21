import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { FormGroupContext } from './FormGroupContext'

export default function FormGroup(props) {
  const { children, initialAlerts, id, variant, description } = props
  const [alerts, setAlerts] = useState(initialAlerts)
  const StyledWrapper = styled.div`
    ${space}
  `
  const StyledDescription = styled.div`
    font-size: ${props => props.theme.fontSizes[0]};
    color: ${props => props.theme.colors.darkGray};
    padding: ${props => props.theme.space[2]};
    background-color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.lightGray};
    border-top: 0;
    border-radius: 0 0 ${props => props.theme.radii[0]} ${props => props.theme.radii[0]};
  `

  return (
    <StyledWrapper {...props}>
      <FormGroupContext.Provider value={{ id, variant, alerts, setAlerts, description }}>
        <div>{children}</div>

        {description && (
          <StyledDescription id={`${id}-description`}>{description}</StyledDescription>
        )}
      </FormGroupContext.Provider>
    </StyledWrapper>
  )
}

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  description: PropTypes.string
}
