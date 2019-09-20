import React, { useState, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { CollapsibleContext } from './CollapsibleContext'

export default function Collapsible(props) {
  const [eventType, setEventType] = useState(undefined)
  const [isOpen, setIsOpen] = useState(props.isOpen)

  const CollapsibleWrapper = styled.div`
    ${color}
    ${space}
    border: 1px solid ${props => props.theme.colors.lightGray};
  `

  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      if (!isValidElement(child)) return

      if (child.type.name === 'CollapsibleButton') {
        return cloneElement(child, { 'aria-controls': props.id })
      }

      if (child.type.name === 'CollapsibleContent') {
        return cloneElement(child, { id: props.id })
      }
    })
  }

  return (
    <CollapsibleWrapper {...props}>
      <CollapsibleContext.Provider
        value={{
          eventType: eventType,
          setEventType: setEventType,
          isOpen: isOpen,
          setIsOpen: setIsOpen
        }}
      >
        {renderChildren()}
      </CollapsibleContext.Provider>
    </CollapsibleWrapper>
  )
}

Collapsible.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  id: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
}

Collapsible.defaultProps = {
  color: 'darkerGray',
  isOpen: false
}
