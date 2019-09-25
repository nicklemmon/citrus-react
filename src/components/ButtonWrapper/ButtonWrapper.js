import React, { cloneElement, isValidElement } from 'react'
import styled from 'styled-components'

export default function ButtonWrapper(props) {
  const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: ${props => props.theme.space[3]};
  `

  const renderChildren = () => {
    return React.Children.map(props.children, (child, index) => {
      if (!isValidElement(child)) return

      if (child.type.name === 'Button') {
        // For the last button in the list of children, just return the button
        if (index === props.children.length - 1) return cloneElement(child)

        // otherwise add some space
        return cloneElement(child, { mr: 2 })
      } else {
        console.error(
          `Invalid child component '${child.type.name}' - Only 'Button' components are valid children of 'ButtonWrapper'`
        )
      }
    })
  }

  return <ButtonWrapper>{renderChildren()}</ButtonWrapper>
}
