import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import defaultTheme from './defaultTheme.config.js'

export default function CitrusThemeProvider(props) {
  const { customConfig, children } = props
  const MergedThemeConfig = Object.assign({}, defaultTheme, customConfig)
  const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap');

    * {
      box-sizing: border-box;
    }

    *:focus {
      outline: 3px solid currentColor;
    }

    html,
    body {
      margin: 0;
      font-family: ${MergedThemeConfig.fontFamilies.primary};
    }
  `

  return (
    <ThemeProvider theme={MergedThemeConfig}>
      <>
        <Reset />

        <GlobalStyles />

        {children}
      </>
    </ThemeProvider>
  )
}
