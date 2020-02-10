import React from 'react'
import styled from 'styled-components'

export default function ModalHeader(props) {
  const { children } = props
  const ModalHeaderWrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.space[3]};
    border-radius: ${props => props.theme.radii[1]} ${props => props.theme.radii[1]} 0 0;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  `

  return <ModalHeaderWrapper>{children}</ModalHeaderWrapper>
}
