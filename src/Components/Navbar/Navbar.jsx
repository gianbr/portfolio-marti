import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import navSelectedImg from '../../img/nav-selected.png'
import navMenuImg from '../../img/nav-menu.png'
import { useLocation } from "react-router-dom";
import behance from '../../img/behance.png'
import behanceHover from '../../img/behance-hover.png'
import curriculum from '../../img/curriculum.png'
import curriculumHover from '../../img/curriculum-hover.png'
import linkedin from '../../img/linkedin.png'
import linkedinHover from '../../img/linkedin-hover.png'
import ImageHover from '../ImageHover/ImageHover';

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
    <nav className={`z-40 flex m-auto justify-center max-w-[105rem] text-[32px] text-[#323232] sticky top-0 ${location === 'gallery' && isScrolled ? 'bg-black bg-opacity-30' : ''}`} style={navPadding}>
        <div className='flex gap-4 ml-auto mr-[-9.5rem]'>
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
        <div className='flex items-center ml-auto gap-4'>
            <a href="https://www.behance.net/martimanzo" target="_blank" rel="noopener noreferrer">
                <ImageHover src={behance} srcHover={behanceHover} alt="Behance"/>
            </a>
            <a href="https://www.linkedin.com/in/martinamanzo/" target="_blank" rel="noopener noreferrer">
                <ImageHover src={linkedin} srcHover={linkedinHover} alt="Behance"/>
            </a>
            <a href="https://drive.google.com/file/d/1M21ITx9qsSqZ4mRqABS8wfUUSggomM0B/view" target="_blank" rel="noopener noreferrer">
                <ImageHover src={curriculum} srcHover={curriculumHover} alt="Behance"/>
            </a>
        </div>
    </nav>
  )
}
