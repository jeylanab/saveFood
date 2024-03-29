import React from 'react'

const Donate = () => {
  return (
      <div>
          <div className='donatebg p-10 flex items-center lg:flex-row flex-col  justify-evenly'>
              <div className='border lg:w-[50%] '>
                  <h1 className='lg:text-4xl font-bold font-poppins p-2  '> Support Our Cause By Donating Now! </h1>
                  <p className='font-poppins lg:text-lg text-sm p-2'>Help us make a difference by making a donation today. Every contribution, no matter how small, can have a big impact on those in need.</p>

              </div>
              <div>
                  <form action="form" className='flex justify-start items-start flex-col'>
                      <label htmlFor="location">Location:</label>
                      <div className='location '>
                           
                            <input type="text" className='lg:w-[100px] m-2 primeColor font-poppins text-center font-semibold' placeholder='Country' />
                            <input type="text" className='lg:w-[100px] m-2 primeColor font-poppins text-center font-semibold  ' placeholder='City' />
                            <input type="text" className='lg:w-[100px] m-2 primeColor font-poppins text-center font-semibold' placeholder='Street' />
                      </div>
                      <label htmlFor="amount">Amount:</label>
                      <div>
                          
                          <input type="number" className='lg:w-[100px] m-2 primeColor' />
                         
                      </div>
                      <label htmlFor="type">Type:</label>
                      <div>
                          
                            <input type="type" className='lg:w-[100px] m-2 font-poppins text-center font-semibold' />
                      </div>
                      
                      <label htmlFor="name">Name</label>
                     
                      <div>
                            
                         
                          <input type="text" placeholder='your name'  className='lg:w-auto m-2 primeColor  font-poppins text-center font-semibold' />
                            
                      </div>
                      <label htmlFor="email">Email:</label>
                     
                      <div>   
                            
                            <input type="text" placeholder='example@gmail.com'  className='lg:w-auto primeColor  m-2 primeColor font-poppins text-center font-semibold' />
                      </div>
                      

                     <button type='submit ' className='btndonate text-center rounded-md p-2 text-black font-poppins text-lg font-medium'>Donate Now</button>
                 
                </form>
                 
             </div>
         </div>
    </div>
  )
}

export default Donate