import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CollapsibleContext } from './CollapsibleContext'

export default function CollapsibleContent(props) {
  const { id, children } = props
  const { isOpen } = useContext(CollapsibleContext)
  const CollapsibleContent = styled.div`
    padding: ${props => props.theme.space[2]};
    font-size: ${props => props.theme.fontSizes[2]};
    display: ${isOpen ? 'block' : 'none'};
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
