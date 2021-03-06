import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TabsContext } from './TabsContext'

export default function Tabs(props) {
  const { children, id, initialActiveTabIndex, variant } = props
  const [tabsLength, setTabsLength] = useState(undefined)
  const [activeTabIndex, setActiveTabIndex] = useState(initialActiveTabIndex)

  const StyledDiv = styled.div``

  return (
    <StyledDiv>
      <TabsContext.Provider
        value={{
          id,
          tabsLength,
          setTabsLength,
          activeTabIndex,
          setActiveTabIndex,
          variant
        }}
      >
        {children}
      </TabsContext.Provider>
    </StyledDiv>
  )
}

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  initialActiveTabIndex: PropTypes.number
}

Tabs.defaultProps = {
  initialActiveTabIndex: 0,
  variant: 'default'
}
