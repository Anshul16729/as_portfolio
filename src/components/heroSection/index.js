import React from 'react'
import { words } from '../../utils/Constants'
import Typewriter from '../../reusable-components/typeWriter'

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Anshul Shrivastava</h1>
      <p>I'm a <Typewriter strings={words}/></p>
    </div>
  </section>
  )
}

export default HeroSection