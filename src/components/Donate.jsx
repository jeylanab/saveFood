import React from 'react'

const Donate = () => {
  return (
      <div>
          <div className='donatebg p-10 flex items-center lg:flex-row flex-col  justify-center'>
              <div className='border lg:w-[50%]'>
                  <h1 className='lg:text-4xl font-bold font-poppins  '> Support Our Cause By Donating Now! </h1>
                  <p className='font-poppins lg:text-lg text-sm'>Help us make a difference by making a donation today. Every contribution, no matter how small, can have a big impact on those in need.</p>

              </div>
              <div>
                  <form action="form" className='flex justify-start items-start flex-col'>
                      <div className='location '>
                           <label htmlFor="location">Location:</label>
                            <input type="text" className='lg:w-[100px] m-2 primeColor font-poppins text-center font-semibold' placeholder='Country' />
                            <input type="text" className='lg:w-[100px] m-2 primeColor font-poppins text-center font-semibold  ' placeholder='City' />
                            <input type="text" className='lg:w-[100px] m-2 primeColor font-poppins text-center font-semibold' placeholder='Street' />
                      </div>
                      <div>
                           <label htmlFor="amount">Amount:</label>
                           <input type="number" className='lg:w-[100px] m-2 primeColor' /><label htmlFor="type">Type:</label>
                            <input type="type" className='lg:w-[100px] m-2 font-poppins text-center font-semibold' />
                      </div>
                     
                      <div>
                            
                          
                            
                      </div>
                     
                      <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='your name'  className='lg:w-auto m-2 primeColor  font-poppins text-center font-semibold' />

                            <label htmlFor="email">Email:</label>
                            <input type="text" placeholder='example@gmail.com'  className='lg:w-auto primeColor  m-2 primeColor font-poppins text-center font-semibold' />
                      </div>
                      

                      <input type="submit" className='text-center primeColor' />
                 
                </form>
                 
             </div>
         </div>
    </div>
  )
}

export default Donate