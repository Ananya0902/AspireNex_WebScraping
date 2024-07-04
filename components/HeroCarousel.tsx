"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/images/hero-1.svg', alt: 'smartwatch'},
  { imgUrl: '/images/hero-2.svg', alt: 'bag'},
  { imgUrl: '/images/hero-3.svg', alt: 'lamp'},
  { imgUrl: '/images/hero-4.svg', alt: 'air fryer'},
  { imgUrl: '/images/hero-5.svg', alt: 'chair'},
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel ">
      <Carousel
        showThumbs={false}
        // autoPlay
        infiniteLoop
        // interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image 
            src={image.imgUrl}
            alt={image.alt}
            width={200}
            height={200}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image 
        src="/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarousel