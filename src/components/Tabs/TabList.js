import React, { useContext, isValidElement, cloneElement } from 'react'
import styled from 'styled-components'
import { TabsContext } from './TabsContext'

export default function TabList(props) {
  const { children } = props
  const { activeTabIndex, id, setTabsLength } = useContext(TabsContext)
  const StyledDiv = styled.div``

  const renderChildren = () => {
    setTabsLength(React.Children.count(children) - 1)

    return React.Children.map(children, (child, index) => {
      if (!isValidElement(child)) return

      if (child.type.name === 'Tab') {
        return cloneElement(child, {
          id: id,
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

  return <StyledDiv role="tablist">{renderChildren()}</StyledDiv>
}
