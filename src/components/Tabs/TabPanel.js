import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function TabPanel(props) {
  const { children, isActive, id, index } = props
  const StyledDiv = styled.div`
    padding: ${props => props.theme.space[3]};
    border: 1px solid ${props => props.theme.colors.lightGray};
    border-radius: 0 0 ${props => props.theme.radii[0]} ${props => props.theme.radii[0]};
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
