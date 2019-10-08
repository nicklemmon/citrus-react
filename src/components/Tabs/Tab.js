import React, { useEffect, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TabsContext } from './TabsContext'

export default function Tab(props) {
  const tabEl = useRef(null)
  const { id, children, index, isActive, isDisabled } = props
  const { setActiveTabIndex, eventType, setEventType } = useContext(TabsContext)
  const StyledButton = styled.button`
    ${isDisabled ? 'cursor: not-allowed' : 'cursor: pointer'}
    background-color: ${isActive ? 'pink' : 'initial'};
    outline: none;

    &:focus {
      box-shadow: 0 0 0 3px ${props => props.theme.colors.blue}66;
    }
  `

  const handleClick = e => {
    setActiveTabIndex(index)
    setEventType(e.type)
  }

  useEffect(() => {
    if (isActive) tabEl.current.focus()
  }, [isActive])

  return (
    <StyledButton
      role="tab"
      id={`tab-${id}-${index}`}
      aria-controls={`tab-panel-${id}-${index}`}
      aria-selected={isActive ? 'true' : 'false'}
      tabIndex={isActive ? 0 : -1}
      onClick={e => handleClick(e)}
      ref={tabEl}
    >
      {children}
    </StyledButton>
  )
}

Tab.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
}

Tab.defaultProps = {
  isActive: false,
  isDisabled: false
}
