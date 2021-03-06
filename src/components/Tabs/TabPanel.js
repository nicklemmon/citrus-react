import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { TabsContext } from './TabsContext'

export default function TabPanel(props) {
  const { children, isActive, id, index } = props
  const StyledDiv = styled.div`
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[3]};
    border-radius: 0 0 ${props => props.theme.radii[0]} ${props => props.theme.radii[0]};
    border: 1px solid ${props => props.theme.colors.lightGray};
    display: ${isActive ? 'block' : 'none'};
  `

  return (
    <StyledDiv
      role="tabpanel"
      id={`tab-panel-${id}-${index}`}
      aria-labelledby={`tab-${id}-${index}`}
    >
      {children}
    </StyledDiv>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  id: PropTypes.string
}

TabPanel.defaultProps = {
  isActive: false
}
