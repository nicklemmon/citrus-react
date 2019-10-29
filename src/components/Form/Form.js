import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import propTypes from '@styled-system/prop-types'

export default function Form(props) {
  const { children, onSubmit } = props
  const StyledForm = styled.form`
    ${space}
  `

  return (
    <StyledForm action="" novalidate onSubmit={onSubmit} {...props}>
      {children}
    </StyledForm>
  )
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired,
  ...propTypes.space
}
