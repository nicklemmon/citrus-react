import React, { useContext, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { CollapsibleContext } from './CollapsibleContext'

export default function CollapsibleButton(props) {
  const buttonEl = useRef(null)
  const { id, children } = props
  const { eventType, setEventType, isOpen, setIsOpen } = useContext(
    CollapsibleContext
  )

  const CollapsibleButton = styled.button`
    border: 0;
    width: 100%;
    text-align: left;
    font-size: ${props => props.theme.fontSizes[2]};
    padding: ${props => props.theme.space[2]};
    cursor: pointer;
    border-radius: ${props => props.theme.radii[0]};
  `

  const handleClick = e => {
    setIsOpen(!isOpen)
    setEventType(e.type)
  }

  useEffect(() => {
    if (eventType === 'click') buttonEl.current.focus()
  }, [eventType])

  return (
    <CollapsibleButton
      id={id}
      {...props}
      aria-expanded={isOpen ? 'true' : 'false'}
      onClick={e => handleClick(e)}
      ref={buttonEl}
    >
      {children}
    </CollapsibleButton>
  )
}
