import React from 'react'
import Button from '../Button'
import styled from 'styled-components'

export default function ButtonWrapper(props) {
  const { children } = props

  const ButtonWrapper = styled.div`
    & ${Button} {
      margin-right: 20px;
    }
  `

  return <ButtonWrapper>{children}</ButtonWrapper>
}
