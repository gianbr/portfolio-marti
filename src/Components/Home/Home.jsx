import React from 'react'
import { PersonalInfo } from '../PersonalInfo/PersonalInfo'
import { Languages } from '../Languages/Languages'
import { Methodologies } from '../Methodologies/Methodologies'

export const Home = () => {
  return (
    <div className='flex items-center justify-around animate-fade animate-duration-[800ms] 2xl:gap-x-44'>
      <div className='lg:max-w-sm 2xl:max-w-md'>
        <PersonalInfo />
      </div>
      <div>
        {/*  xl:w-96 xl:h-[32rem] 2xl:w-[29rem] 2xl:h-[38rem] */}
        <div className="lg:w-[29rem] lg:h-[38rem] relative">
          <div className="lg:left-52 absolute">
            <Languages />
          </div>
          <div className="2xl:left-1 lg:top-72 2xl:top-96 absolute">
            <Methodologies />
          </div>
        </div>
      </div>
    </div>
  )
}

