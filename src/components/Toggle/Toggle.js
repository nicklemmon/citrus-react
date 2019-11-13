import React from 'react'
import PropTypes from 'prop-types'

export default function FormToggle(props) {
  const { variant, id, name, children, isChecked } = props

  return (
    <label htmlFor={id}>
      <input type={variant} id={id} name={name} checked={isChecked ? 'checked' : null} />

      {children}
    </label>
  )
}

FormToggle.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}
