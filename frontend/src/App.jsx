import { useState } from 'react'
import { Navbar,Ellipse } from './components'
import { CTA, CTAImage } from './section'
import './App.css'

function App() {
  
  return (
    <>
      <Ellipse style={{position:'absolute',top:'-0.7rem',left:'-0.6rem'}}/>
      <Navbar/>
      <div className="hero-section">
        <CTA/>
        <CTAImage/>
      </div>
      <Ellipse style={{position:'absolute',bottom:'-4rem',right:'-4rem'}}/>
    </>
  )
}

export default App
