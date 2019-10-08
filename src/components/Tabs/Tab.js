import React, { useEffect, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { TabsContext } from './TabsContext'

export default function Tab(props) {
  const tabEl = useRef(null)
  const { id, children, index, isActive, isDisabled } = props
  const { activeTabIndex, setActiveTabIndex, tabsLength, setTabsLength } = useContext(TabsContext)
  const StyledButton = styled.button`
    font-size: ${props => props.theme.fontSizes[1]};
    padding: ${props => props.theme.space[3]};
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom: 0;
    outline: none;
    ${isDisabled ? 'cursor: not-allowed' : 'cursor: pointer'}
    ${isActive &&
      css`
        border-color: ${props => props.theme.colors.lightGray};
        background-color: ${props => props.theme.colors.offWhite};
      `}

    &:first-child {
      border-radius: ${props => props.theme.radii[0]} 0 0 0;
    }

    &:last-child {
      border-radius: 0 ${props => props.theme.radii[0]} 0 0;
    }

    &:focus {
      outline: 3px solid ${props => props.theme.colors.blue}66;
    }
  `

  const handleClick = e => {
    setActiveTabIndex(index)
  }

  const handleKeyDown = e => {
    e.preventDefault() // Prevent page or container scrolling

    // Right arrow key
    if (e.keyCode === 39) {
      if (activeTabIndex === tabsLength) {
        return setActiveTabIndex(0)
      }

      setActiveTabIndex(activeTabIndex + 1)
    }

    // Left arrow key
    if (e.keyCode === 37) {
      if (activeTabIndex === 0) {
        return setActiveTabIndex(tabsLength)
      }

      setActiveTabIndex(activeTabIndex - 1)
    }
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
      onKeyDown={e => handleKeyDown(e)}
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
