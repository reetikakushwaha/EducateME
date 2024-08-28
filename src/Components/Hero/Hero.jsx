import React from 'react';
import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Provide education to make the world better</h1>
        <p>Our main agenda is to build empower students with the knowledge, Skills, and experiences needed to excel the dynamic world of eduction</p>
        <button className='btn'>Explore <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
