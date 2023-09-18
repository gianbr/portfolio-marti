import React, { useState } from 'react'

const ImageHover = ({ src, srcHover, alt}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

  return (
    <>
        <img className='cursor-pointer' src={isHovered ? srcHover : src } alt={alt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    </>
  )
}

export default ImageHover