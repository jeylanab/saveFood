import React from 'react'
import { services } from '../constants'

const Service = () => {
  return (
    <div>
      <div>
        <div className='flex  justify-center my-10 items-center'>
          <h1 className='primeColor btn rounded-md px-5 lg:text-6xl font-poppins font-bold text-3xl' >Services</h1>
          <p className='font-poppins px-5 lg:flex hidden'>programs and initiatives aimed at addressing hunger, promoting nutrition, <br />and reducing food waste within our communities.</p>
        </div>
        <div className="service-card flex justify-center items-center ">
          <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
            {services.map((service, index) => (
              <div className=' flex cardbg shadow-sm rounded-lg justify-center items-center mx-10 border' key={service.id}>
                <div className='px-2'>
                  <h1 className='font-poppins text-semibold'>{service.title}</h1> 
                  <p className='py-2 text-sm'>{ service.description}</p>
                </div>
                <div>
                  <img src={service.imageUrl} alt={service.id} />
                </div>
              </div>
            ))

            }

          </div>
           
        </div>

        
      </div>



    </div>
  )
}

export default Service