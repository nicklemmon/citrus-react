import { css } from 'styled-components'

export const buttonReset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
`

export const focusStyles = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.colors.blue}66;
  }
`
