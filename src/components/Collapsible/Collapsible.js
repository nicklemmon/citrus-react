import React, { cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { buttonReset, focusStyles } from 'src/styles'

const StyledCollapsible = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radii[0]};
`

const StyledButton = styled.button`
  ${buttonReset}
  ${focusStyles}
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: ${props => props.theme.fontSizes[1]};
  padding: ${props => props.theme.space[3]};
  transition-timing-function: ${props => props.theme.animation.easing};
  transition-duration: ${props => props.theme.animation.timing};
  transition-property: background-color, box-shadow;

  &:hover {
    background-color: ${props => props.theme.colors.offWhite};
  }
`

const StyledContent = styled.div`
  padding: ${props => props.theme.space[3]};
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  border-top: ${props => (props.isExpanded ? `1px solid ${props.theme.colors.lightGray}` : 'none')};
`

function Collapsible({ children, isExpanded = false }) {
  const renderChildren = () =>
    React.Children.map(children, child => {
      if (!isValidElement(child)) return

      console.log('child', child)

      if (
        child.type.displayName === 'Collapsible.Button' ||
        child.type.displayName === 'Collapsible.Content'
      ) {
        return cloneElement(child, { isExpanded })
      }

      throw new Error(
        `Invalid child component ${child.type.name} - Only 'Collapsible.Button' and 'Collapsible.Content' are valid children`
      )
    })

  return <StyledCollapsible>{renderChildren()}</StyledCollapsible>
}

Collapsible.propTypes = {
  isExpanded: PropTypes.bool
}

function Button({ isExpanded = false, onClick, children }) {
  return (
    <StyledButton onClick={onClick} aria-expanded={isExpanded ? 'true' : 'false'}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool
}

function Content({ isExpanded = false, children }) {
  return <StyledContent isExpanded={isExpanded}>{children}</StyledContent>
}

Content.propTypes = {
  isExpanded: PropTypes.bool
}

Button.displayName = 'Collapsible.Button'
Collapsible.Button = Button
Content.displayName = 'Collapsible.Content'
Collapsible.Content = Content

export default Collapsible
