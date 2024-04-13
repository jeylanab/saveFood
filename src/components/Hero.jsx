import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import hero4 from '../assets/hero4.png'
import hero5 from '../assets/hero5.png'
import hero6 from '../assets/hero6.png'


// hero component of the page
const Hero = () => {
  // a useState hook to display a dynamic hero section picture
    const [currentHero, setCurrentHero] = useState(hero1);
    const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];
  
    useEffect(() => {
      const interval = setInterval(() => {
        
        setCurrentHero(prevHero =>
          heroImages[(heroImages.indexOf(prevHero) + 1) % heroImages.length]
        );
        // a waiting time of 5 second to change the hero section of the picture 
      }, 5000);
  
      return () => clearInterval(interval);
    }, [heroImages]);

 
  return (
      <div className='backg'>
          <div className='hero lg:flex flex  lg:justify-evenly lg:flex-row flex-col h-full items-center '>
              <div>
          <div>
            {/* static hero section text */}
                      <h1 className='font-poppins text-center font-bold lg:text-5xl py-5 text-4xl '>Let's Dish Out Compassion: <br />SaveFood Heroes Unite!</h1>
                      <h3 className='lg:text-2xl text-md font-poppins text-center'> Serving Up Smiles, One Plate at a Time!</h3>
                      {/* CTA to the website */}
                      <button className='btn  rounded-md text-white p-2 my-5 ml-10 font-poppins '> Explore</button>
                  </div>
              </div>
              <div>
                {/* dynamic picture of the hero section */}
                  <img className='lg:py-0 py-10'  
            src={currentHero}  alt="" />
              </div>
              
          </div>
    </div>
  )
}

export default Hero