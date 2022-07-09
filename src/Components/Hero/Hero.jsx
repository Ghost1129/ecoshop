import React from 'react'
import './Hero.sass'
import man from '../../Assets/manwithscooter.png'

const Hero = () => {
  return (
    <div className='heroContainer'>
        <div className='hero'>
        <div className='heroText'>
            <span>In This Season Find The Best!</span>
            <h1>Exclusive Collection<br></br> For Everyone</h1>
            <button className='heroButton'>Explore Now</button>
        </div>
        </div>
        <div className="heroImage">
            <img  src={man} alt="" />
        </div>
    </div>
  )
}

export default Hero