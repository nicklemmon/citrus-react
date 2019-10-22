import React, { useContext, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormGroupContext } from './FormGroupContext'

export default function FormGroupCap(props) {
  const { children, variant } = props
  const { id } = useContext(FormGroupContext)
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.darkGray};
    background-color: ${props => props.theme.colors.white};
    width: ${props => props.theme.space[4]};
  `

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      console.log('child!', child)
      if (!isValidElement(child)) return

      if (child.type.name === 'Icon') return cloneElement(child, { size: 13 })
    })
  }

  return <StyledDiv id={`${id}-cap`}>{renderChildren()}</StyledDiv>
}

FormGroupCap.propTypes = {
  variant: PropTypes.string.isRequired
}
