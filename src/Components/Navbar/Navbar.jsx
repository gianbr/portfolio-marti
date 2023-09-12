import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import navSelectedImg from '../../img/nav-selected.png'
import navMenuImg from '../../img/nav-menu.png'
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const path = useLocation().pathname;
    const location = path.split("/")[1];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
        setIsScrolled(true);
        } else {
        setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);


    const defaultYPadding = {
        paddingTop: '2.75rem',
        paddingBottom: '1rem',
    }

    const paddingYStyleJourney = {
        paddingTop: '2.75rem',
        paddingBottom: '2.75rem',
    };

    const paddingYStyleGallery = {
        paddingTop: '2.75rem',
        paddingBottom: '2.75rem'
    };
    
    const navPadding = location === 'gallery' ? paddingYStyleGallery :  location === 'journey' ? paddingYStyleJourney : defaultYPadding;

  return (
    <nav className={`z-40 flex justify-center text-[32px] text-[#323232] sticky top-0 ${location === 'gallery' && isScrolled ? 'bg-black bg-opacity-30' : ''}`} style={navPadding}>
        <div className='flex gap-4'>
            <NavLink to='/' className='relative cursor-pointer hover:-rotate-2 hover:duration-300 transition ease-in-out'>
                { location === '' ? <img src={navSelectedImg} alt="Home" /> : <img src={navMenuImg} alt="Home" />}
                
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Character</span>
            </NavLink>
            <NavLink to='/gallery' className='relative cursor-pointer hover:-rotate-2 hover:duration-300 transition ease-in-out'>
                {
                    location === 'gallery' ? <img src={navSelectedImg} alt="Gallery" /> : <img src={navMenuImg} alt="Gallery" />
                }
                
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Gallery</span>
            </NavLink>
            <NavLink to='/journey' className='relative cursor-pointer hover:-rotate-2 hover:duration-300 transition ease-in-out'>
                {
                    location === 'journey' ? <img src={navSelectedImg} alt="Journey" /> : <img src={navMenuImg} alt="Journey" />
                }
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Journey</span>
            </NavLink>
        </div>
    </nav>
  )
}
