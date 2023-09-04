import React from 'react'
import { NavLink } from 'react-router-dom'
import navSelectedImg from '../../img/nav-selected.png'
import navMenuImg from '../../img/nav-menu.png'
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const path = useLocation().pathname;
    const location = path.split("/")[1];

  return (
    <nav className='flex justify-center text-[32px] text-[#323232] p-11 mb-7'>
        <div className='flex gap-4'>
            <NavLink to='/' className='relative cursor-pointer'>
                { location === '' ? <img src={navSelectedImg} alt="Home" /> : <img src={navMenuImg} alt="Home" />}
                
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Character</span>
            </NavLink>
            <NavLink to='/gallery' className='relative cursor-pointer'>
                {
                    location === 'gallery' ? <img src={navSelectedImg} alt="Gallery" /> : <img src={navMenuImg} alt="Gallery" />
                }
                
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Gallery</span>
            </NavLink>
            <NavLink to='/journey' className='relative cursor-pointer'>
                {
                    location === 'journey' ? <img src={navSelectedImg} alt="Journey" /> : <img src={navMenuImg} alt="Journey" />
                }
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Journey</span>
            </NavLink>
        </div>
    </nav>
  )
}
