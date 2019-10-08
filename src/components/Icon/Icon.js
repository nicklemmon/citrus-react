import React from 'react'
import PropTypes from 'prop-types'
import { Icon as ReactIconsKitIcon } from 'react-icons-kit'
import styled from 'styled-components'
import { space, color } from 'styled-system'

export default function Icon(props) {
  const { icon, size, label } = props
  const StyledDiv = styled.div`
    ${color}
    ${space}
  `

  return (
    <StyledDiv
      role={label ? 'img' : null}
      aria-label={label}
      aria-hidden={label ? 'false' : 'true'}
      {...props}
    >
      <ReactIconsKitIcon size={size} icon={icon} />
    </StyledDiv>
  )
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string,
  size: PropTypes.number
}
