import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, space } from 'styled-system'

export default function Collapsible(props) {
  const { buttonContent, children, isOpen, id, onClick } = props
  const CollapsibleWrapper = styled.div`
    ${color}
    ${space}
    border: 1px solid ${props => props.theme.colors.lightGray};
    border-radius: ${props => props.theme.radii[0]};
    overflow: hidden;
  `
  const CollapsibleButton = styled.button`
    border: 0;
    outline: 0;
    width: 100%;
    text-align: left;
    font-size: ${props => props.theme.fontSizes[2]};
    padding: ${props => props.theme.space[2]}px;
  `
  const CollapsibleContent = styled.div`
    padding: ${props => props.theme.space[2]}px;
    font-size: ${props => props.theme.fontSizes[2]};
    display: ${isOpen ? 'block' : 'none'};
  `

  return (
    <CollapsibleWrapper {...props}>
      <CollapsibleButton
        aria-controls={id}
        aria-expanded={isOpen}
        onClick={onClick}
      >
        {buttonContent}
      </CollapsibleButton>

      <CollapsibleContent id={id}>{children}</CollapsibleContent>
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
