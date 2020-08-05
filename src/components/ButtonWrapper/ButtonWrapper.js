import React, { cloneElement, isValidElement } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const StyledWrapper = styled.div`
  ${space}
  width: 100%;
  margin-top: ${props => props.theme.space[3]};

  > * + * {
    margin-top: ${props => props.theme.space[2]};

    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      margin-top: 0;
      margin-left: ${props => props.theme.space[2]};
    }
  }
`

export default function ButtonWrapper(props) {
  const renderChildren = () => {
    return React.Children.map(props.children, (child, index) => {
      if (!isValidElement(child)) return

      if (child.type.name === 'Button') {
        return cloneElement(child)
      } else {
        console.error(
          `Invalid child component '${child.type.name}' - Only 'Button' components are valid children of 'ButtonWrapper'`
        )
      }
    })
  }

  return <StyledWrapper>{renderChildren()}</StyledWrapper>
}

ButtonWrapper.propTypes = {
  ...space.propTypes
}
