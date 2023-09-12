import React from 'react'
import { PersonalInfo } from '../PersonalInfo/PersonalInfo'
import { Languages } from '../Languages/Languages'
import { Methodologies } from '../Methodologies/Methodologies'

export const Home = () => {
  return (
    <div className='flex items-center justify-around gap-x-44 animate-fade animate-duration-[800ms]'>
        <div>
            <PersonalInfo/>
        </div>
        <div className='flex flex-col items-end justify-center'>
            <Languages/>
            <Methodologies/>
        </div>
    </div>
  )
}
