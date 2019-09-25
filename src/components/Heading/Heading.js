import React from 'react'
import PropTypes from 'prop-types'

export default function Heading(props) {
  const { level, children, alignment } = props

  return (
    <div role="heading" aria-level={level} style={{ textAlign: alignment }}>
      {children}
    </div>
  )
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}
