import React, { Component, useState } from 'react'
import CitrusThemeProvider from './components/CitrusTheme/CitrusThemeProvider'
import './App.css'
import Collapsible from './components/Collapsible'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <CitrusThemeProvider>
      <main>
        <button onClick={handleClick}>Toggle</button>

        <Collapsible id="my-id" isOpen={isOpen} buttonContent="Click Me">
          <p>Hello world.</p>
        </Collapsible>
      </main>
    </CitrusThemeProvider>
  )
}

export default App
