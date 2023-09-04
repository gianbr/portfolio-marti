import React from 'react'
import { useState } from 'react'

import carouselButtonLeft from '../../assets/gallery/gallery-carousel/carousel-button-left.png'
import carouselButtonRight from '../../assets/gallery/gallery-carousel/carousel-button-right.png'
import carouselIndexCurrentImg from '../../assets/gallery/gallery-carousel/carousel-index-current.png'
import carouselIndexIndicatorImg from '../../assets/gallery/gallery-carousel/carousel-index-indicator.png'
import carouselBack from '../../assets/gallery/gallery-carousel/back-button.png'

import images from './gallery.json'
import imagesCarousel from './gallery-carousel.json'

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const goToPrevImage = () => {
    if (currentIndex > 0) {
      openImage(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex < images.length - 1) {
      openImage(currentIndex + 1);
    }
  };


  const imageSrc = 'src/assets/gallery/'
  const imageCarouselSrc = 'src/assets/gallery/gallery-carousel/'

  return (
    <div>
      {!selectedImage && <div className='max-w-7xl m-auto grid grid-cols-3 grid-rows-3 gap-10 mb-6'>
          {images.map((image) =>
          <img className='cursor-pointer hover:-rotate-6' src={imageSrc + image.url} alt={image.caption} key={image.id} onClick={() => openImage(image.id - 1)}/>
          )}
      </div>}
      {selectedImage && (
        <div className="w-full z-50 max-w-screen-2xl m-auto">
          <button className='cursor-pointer' onClick={closeImage}>
            <img src={carouselBack} alt="carousel-back" />
          </button>
          <div className="flex flex-col items-center gap-16">
            <div className='max-w-screen-xl h-[590px]'>
              <img src={imageCarouselSrc + imagesCarousel[currentIndex].url} alt={selectedImage.caption} />
            </div>
            <div className='flex items-center gap-8'>
              <button className="cursor-pointer" onClick={goToPrevImage}>
                <img src={carouselButtonLeft} alt="" />
              </button>
              <div className='flex gap-6'>
              {
                images.map((_, index) => (
                  <img src={index === currentIndex ? carouselIndexCurrentImg : carouselIndexIndicatorImg} alt="carousel-indicator" key={index} />
                ))
              }
              </div>
              <button className='cursor-pointer' onClick={goToNextImage}>
                <img src={carouselButtonRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
