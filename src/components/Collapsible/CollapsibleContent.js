import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CollapsibleContext } from './CollapsibleContext'

export default function CollapsibleContent(props) {
  const { id, children } = props
  const { isOpen } = useContext(CollapsibleContext)
  const CollapsibleContent = styled.div`
    padding: ${props => props.theme.space[3]};
    font-size: ${props => props.theme.fontSizes[1]};
    display: ${isOpen ? 'block' : 'none'};
    border: 1px solid ${props => props.theme.colors.lightGray};
    border-top: 0;
    border-radius: 0 0 ${props => props.theme.radii[0]}
      ${props => props.theme.radii[0]};
  `

  return <CollapsibleContent id={id}>{children}</CollapsibleContent>
}

CollapsibleContent.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool
}

CollapsibleContent.defaultProps = {
  isOpen: false
}
