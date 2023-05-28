import { useState } from 'react'
import { Navbar,Ellipse } from './components'
import { CTA, CTAImage,Collections } from './section'
import Logo from "./assets/Variant2.png";
import './App.css'

function App() {
  const collections = [
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
  ]
  return (
    <>
      <Ellipse style={{position:'absolute',top:'-0.7rem',left:'-0.6rem'}}/>
      <Navbar/>
      <div className="hero-section">
        <CTA/>
        <CTAImage/>
      </div>
      {collections.length > 0 && (
        <Collections collections={collections}/>
      )}
      <Ellipse style={{position:'absolute',bottom:'-4rem',right:'-4rem'}}/>
    </>
  )
}

export default App
