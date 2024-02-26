import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className="hero-text">
        <h1>We Ensure better health for a better world</h1>
        <p>Our cutting-edge Software is designed to ease the research of the illness, doctors and medicines with the knowledge, Algorithims, and AI needed to excel in the field of Health</p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero