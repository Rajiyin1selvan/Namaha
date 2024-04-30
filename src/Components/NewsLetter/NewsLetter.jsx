import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>"Pave your path to Success with Astrology"</h1>
      <h1>Get Your Daily Horoscope in Your Whatsapp</h1>
      <p>Subscribe to our daily Whatsapp Updates</p>
      <div>
        <input type="tel" className="Your Phone Number" placeholder="Your Phone Number" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
