import React from 'react'
import journeyImg from '../../img/journey.png'

export const Journey = () => {
  return (
    <div className='flex items-center justify-center lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[62.5rem] m-auto animate-fade animate-duration-[800ms]'>
        <img src={journeyImg} alt="Journey" />
    </div>
  )
}
