import React from 'react'
import { words } from '../../utils/constants'
import Typewriter from '../../reusable-components/typeWriter'

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center home-section">
    <div className="hero-container" data-aos="fade-in">
      <h1>Anshul Shrivastava</h1>
      <p>I'm a <Typewriter strings={words}/></p>
    </div>
  </section>
  )
}

export default HeroSection