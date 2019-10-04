import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import Label from '../Label'

function FormGroup(props) {
  const { id, label, value, onChange, hasError, type, placeholder } = props
  const StyledWrapper = styled.div`
    ${space}
  `
  const StyledInput = styled.input``

  return (
    <StyledWrapper {...props}>
      <Label htmlFor={id}>{label}</Label>

      <StyledInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledWrapper>
  )
}

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default FormGroup
