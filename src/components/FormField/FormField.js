import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import propTypes from '@styled-system/prop-types'

function FormField(props) {
  const {
    id,
    variant,
    description,
    children,
    name,
    isDisabled,
    isRequired,
    value,
    onChange,
    ariaDescribedBy
  } = props
  const baseStyles = css`
    appearance: none;
    -moz-appearance: none;
    width: 100%;
    padding: 0.66rem ${props => props.theme.space[2]};
    font-size: ${props => props.theme.fontSizes[1]};
    border: 0;
    outline: none;
    ${space}
  `
  const StyledInput = styled.input`
    ${baseStyles}
  `
  const StyledSelect = styled.select`
    background: 0;
    ${baseStyles}
  `

  const getAriaDescribedBy = () => {
    let calculatedAriaDescribedBy = ariaDescribedBy || ''

    if (description) calculatedAriaDescribedBy = `${id}-description ${calculatedAriaDescribedBy}`

    return calculatedAriaDescribedBy.trim()
  }

  return (
    <>
      {variant === 'select' && (
        <StyledSelect
          id={`${id}-control`}
          name={name}
          disabled={isDisabled}
          required={isRequired}
          onChange={onChange}
          aria-describedby={getAriaDescribedBy()}
        >
          {children}
        </StyledSelect>
      )}

      {variant !== 'select' && (
        <StyledInput
          id={`${id}-control`}
          name={name}
          type={variant}
          disabled={isDisabled}
          required={isRequired}
          value={value}
          onChange={onChange}
          aria-describedby={getAriaDescribedBy()}
        />
      )}
    </>
  )
}

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.element,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  value: PropTypes.any,
  variant: PropTypes.oneOf(['text', 'number', 'select', 'textarea', 'email', 'password', 'tel']),
  ...propTypes.space
}

FormField.defaultProps = {
  isRequired: true
}

export default FormField
