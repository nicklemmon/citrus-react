import React from 'react'
import { addDecorator, configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.(js|mdx)$/), module)

import CitrusThemeProvider from '../src/components/CitrusTheme'

function withThemeAndGlobalStyles(getStory) {
  return (
    <CitrusThemeProvider>
      <div style={{ padding: 40 }}>{getStory()}</div>
    </CitrusThemeProvider>
  )
}

addDecorator(withThemeAndGlobalStyles)
