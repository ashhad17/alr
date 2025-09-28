import { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroSlide from './HeroSlide'

import hajj from "./images/hajj-package.jpg"
import umrah from "./images/umrah-package.jpg"
import ziyarath from "./images/zyarath-package.jpg"

import special from "./images/special-package.jpg"



const slides = [
  {
    title: 'Hajj Packages',
    description: 'Embark on a spiritual journey with our comprehensive Hajj packages',
    image: hajj,
    link: '/packages'
  },
  {
    title: 'Umrah Services',
    description: 'Experience the sacred journey with our guided Umrah services',
    image: umrah,
    link: '/packages'
  },
  {
    title: 'Zyarath Tours',
    description: 'Discover spiritual landmarks with our Zyarath packages',
    image: ziyarath,
    link: '/packages'
  },
  {
    title: 'Special Packages',
    description: 'Explore our specially curated packages for groups and families',
    image: special,
    link: '/packages'
  }
]

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <HeroSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  )
}

export default Hero