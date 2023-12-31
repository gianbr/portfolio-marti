import React from 'react'
import { useState } from 'react'

import carouselButtonLeft from '../../img/carousel-button-left.png'
import carouselButtonRight from '../../img/carousel-button-right.png'
import carouselIndexCurrentImg from '../../img/carousel-index-current.png'
import carouselIndexIndicatorImg from '../../img/carousel-index-indicator.png'
import carouselBack from '../../img/back-button.png'

import images from './gallery.json'
import { lazy } from 'react'

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

  const imagesCarrousel = [
    { id: 1, url: "/assets/gallery/gallery-carousel/carousel-scifi.png", "caption": "Sci-fi" },
    { id: 2, url: "/assets/gallery/gallery-carousel/carousel-onboarding.png", "caption": "Onboarding" },
    { id: 3, url: "/assets/gallery/gallery-carousel/carousel-zomboard.png", "caption": "Zomboard" },
    { id: 4, url: "/assets/gallery/gallery-carousel/carousel-astrology.png", "caption": "Astrology" },
    { id: 5, url: "/assets/gallery/gallery-carousel/carousel-scoreboard.png", "caption": "Scoreboard" },
    { id: 6, url: "/assets/gallery/gallery-carousel/carousel-fermin.png", "caption": "Fermin" },
    { id: 7, url: "/assets/gallery/gallery-carousel/carousel-goodreads.png", "caption": "Goodreads" },
    { id: 8, url: "/assets/gallery/gallery-carousel/carousel-veganapp.png", "caption": "Veganapp" },
    { id: 9, url: "/assets/gallery/gallery-carousel/carousel-terappi.png", "caption": "Terappi" },
    { id: 10, url: "/assets/gallery/gallery-carousel/carousel-portfolio.png", "caption": "Portfolio" }
  ]

  const imageSrc = '/assets/gallery/'

  return (
    <div>
      {!selectedImage && <div className='m-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[93rem] grid grid-cols-3 lg:gap-2 xl:gap-5 2xl:gap-10 mb-6 animate-fade animate-duration-[800ms]'>
        {images.map((image) =>
          <img className='cursor-pointer hover:-rotate-2 hover:duration-300 transition ease-in-out' src={imageSrc + image.url} alt={image.caption} key={image.id} onClick={() => openImage(image.id - 1)} />
        )}
      </div>}
      {selectedImage && (
        <div className="z-50 lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl m-auto">
          {/* Back button */}
          <button className='cursor-pointer absolute md:max-w-[7rem] md:top-12 md:left-4 xl:max-w-[8rem] lg:top-12 lg:max-xl:left-4 xl:left-16 2xl:left-58 2xl:top-[3rem] z-50 hover:-rotate-2 hover:duration-300 transition ease-in-out' onClick={closeImage}>
            <img src={carouselBack} alt="carousel-back" />
          </button>
          <div className="flex flex-col items-center justify-center xl:gap-10 2xl:gap-28 overflow-hidden m-auto">
            <div className='h-[590px] whitespace-nowrap pt-8' style={{ transition: 'transform 0.3s', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', transform: `translate(-${currentIndex * 100}%)` }}>
              {/* Carousel image */}
              {imagesCarrousel.map((image) => {
                return (
                  <div key={image.id} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', verticalAlign: 'top' }}>

                    <img src={image.url} alt={image.caption} loading={lazy}/>
                  </div>
                )
              }
              )}
            </div>
            <div className='flex items-center gap-8 pb-8'>
              {/* Prev button */}
              <button className="cursor-pointer hover:-rotate-2 hover:duration-300 transition ease-in-out" onClick={goToPrevImage}>
                <img src={carouselButtonLeft} alt="" />
              </button>
              <div className='flex gap-6'>
                {
                  images.map((_, index) => (
                    <img className='cursor-pointer' onClick={() => setCurrentIndex(index)} src={index === currentIndex ? carouselIndexCurrentImg : carouselIndexIndicatorImg} alt="carousel-indicator" key={index} />
                  ))
                }
              </div>
              {/* Next button */}
              <button className='cursor-pointer hover:-rotate-2 hover:duration-300 transition ease-in-out' onClick={goToNextImage}>
                <img src={carouselButtonRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
