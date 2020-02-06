import React from 'react'
import styled from 'styled-components'
import { x } from 'react-icons-kit/feather/x'
import Icon from '../Icon'
import ScreenReaderOnly from '../ScreenReaderOnly'

export default function ModalCloseBtn(props) {
  const { onClick } = props
  const StyledButton = styled('button')`
    background: 0;
    border: 0;
    float: right;
    padding: 0;
    color: ${props => props.theme.colors.blue};
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 4px ${props => props.theme.colors.blue}66;
    }
  `

  return (
    <StyledButton onClick={onClick}>
      <Icon icon={x} size={28} />

      <ScreenReaderOnly>Close</ScreenReaderOnly>
    </StyledButton>
  )
}
