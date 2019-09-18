import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme.config.js'

export default function CitrusThemeProvider(props) {
  const { customConfig, children } = props
  // const MergedThemeConfig = Object.assign({}, defaultTheme, customConfig)
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}
