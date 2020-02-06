import React, { isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Modal(props) {
  const ModalWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.darkerGray}75;
  `
  const ModalSubwrapper = styled.div`
    border-radius: ${props => props.theme.radii[1]};
    background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.shadows[2]};
    width: 100%;
    max-width: ${props => props.theme.breakpoints[1]};
  `

  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      if (!isValidElement(child)) return

      if (child.type.name === 'ModalContent' || child.type.name === 'ModalHeader') {
        return cloneElement(child)
      } else {
        console.error(
          `Invalid child component '${child.type.name}' - Only 'ModalContent' and 'ModalHeader' are valid children of 'Modal'`
        )
      }
    })
  }

  return (
    <ModalWrapper role="dialog">
      <ModalSubwrapper>{renderChildren()}</ModalSubwrapper>
    </ModalWrapper>
  )
}
