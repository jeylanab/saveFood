import React from 'react'
import hero from '../assets/assets/hero.png'

const Hero = () => {
  return (
      <div className='backg'>
          <div className='hero lg:flex flex  lg:justify-evenly lg:flex-row flex-col h-full items-center '>
              <div>
                  <div>
                      <h1 className='font-poppins text-center font-bold lg:text-4xl py-5 sm:text-3xl'>Let's Dish Out Compassion: <br />SaveFood Heroes Unite!</h1>
                      <h3 className='lg:text-2xl text-md font-poppins text-center'> Serving Up Smiles, One Plate at a Time!</h3>
                  </div>
              </div>
              <div>
                  <img className='item-center' src={hero} alt="" />
              </div>
              
          </div>
    </div>
  )
}

export default Hero