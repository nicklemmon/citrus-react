import React from 'react'
import { addDecorator, configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module)

import CitrusThemeProvider from '../src/components/CitrusTheme'

function withTheme(getStory) {
  return <CitrusThemeProvider>{getStory()}</CitrusThemeProvider>
}

addDecorator(withTheme)
