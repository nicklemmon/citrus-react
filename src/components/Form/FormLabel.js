import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { FormGroupContext } from './FormGroupContext'

export default function FormLabel(props) {
  const { children, variant } = props
  const { id, alerts } = useContext(FormGroupContext)
  const StyledLabel = styled.label`
    display: block;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes[0]};
    color: ${props => props.theme.colors.darkGray};
    letter-spacing: 0.0125rem;
    margin-bottom: ${props => props.theme.space[2]};
    ${space}
    ${color}
  `

  return (
    <StyledLabel htmlFor={`${id}-control`} {...props}>
      {children}
    </StyledLabel>
  )
}

FormLabel.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(['label', 'legend']),
  ...propTypes.space,
  ...propTypes.color
}

FormLabel.defaultProps = {
  variant: 'label'
}
