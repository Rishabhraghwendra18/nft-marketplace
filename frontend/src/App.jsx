import { useState } from 'react'
import { Navbar } from './components'
import { CTA, CTAImage } from './section'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className="hero-section">
        <CTA/>
        <CTAImage/>
      </div>
    </>
  )
}

export default App
