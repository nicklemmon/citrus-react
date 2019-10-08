import React, { useContext, isValidElement, cloneElement } from 'react'
import styled from 'styled-components'
import { TabsContext } from './TabsContext'

export default function TabPanels(props) {
  const { children } = props
  const { activeTabIndex, id } = useContext(TabsContext)
  const StyledDiv = styled.div``

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (!isValidElement(child)) return

      if (child.type.name === 'TabPanel') {
        return cloneElement(child, {
          index: index,
          isActive: activeTabIndex === index
        })
      } else {
        console.error(
          `Invalid child component '${child.type.name}' - Only 'Tab' is a valid child of 'TabList'`
        )
      }
    })
  }

  return <StyledDiv>{renderChildren()}</StyledDiv>
}
