import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
            <div className="hero-hand-icon">
                <img src={hand_icon} alt="" />
            </div>
            <p>Lokāḥ Samastāḥ Sukhino Bhavantu</p>
            <p className='hero-meaning'>"May all beings everywhere be happy and free, and may the thoughts, words, and actions of my own life contribute in some way to that happiness and to that freedom for all."</p>
            
        </div>

      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
