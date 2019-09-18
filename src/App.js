import React, { Component } from 'react'
import CitrusThemeProvider from './components/CitrusTheme/CitrusThemeProvider'
import './App.css'
import Accordion from './components/Accordion/Accordion'

class App extends Component {
  render() {
    return (
      <CitrusThemeProvider>
        <Accordion bg="red" my={3} buttonContent="Click Me">
          <p>Hello world.</p>
        </Accordion>
      </CitrusThemeProvider>
    )
  }
}

export default App
