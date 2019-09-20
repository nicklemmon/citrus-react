import React from 'react'
import PropTypes from 'prop-types'
import { Icon as ReactIconsKitIcon } from 'react-icons-kit'

export default function Icon(props) {
  const { icon, size, label } = props

  return (
    <div
      role={label ? 'img' : null}
      aria-label={label}
      aria-hidden={label ? 'false' : 'true'}
    >
      <ReactIconsKitIcon size={size} icon={icon} />
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string,
  size: PropTypes.number
}
