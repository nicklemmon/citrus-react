import React from 'react'
import styled from 'styled-components'

export default function ModalContent(props) {
  const { children } = props
  const ModalContentWrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.space[3]};
    border-radius: 0 0 ${props => props.theme.radii[1]} ${props => props.theme.radii[1]};
  `

  return <ModalContentWrapper>{children}</ModalContentWrapper>
}
