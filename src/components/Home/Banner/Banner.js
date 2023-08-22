import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import gadgetSale from '../../../assets/images/Banners/gadget-sale.jpg';
import kitchenSale from '../../../assets/images/Banners/kitchen-sale.jpg';
import poco from '../../../assets/images/Banners/poco-m4-pro.webp';
import realme from '../../../assets/images/Banners/realme-9-pro.webp';
import fashionSale from '../../../assets/images/Banners/fashionsale.jpg';
import oppo from '../../../assets/images/Banners/oppo-reno7.webp';
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}
export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={`${className } hidden`} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}
const Banner = () => {
  
  const settings = {
   autoplay:true,
   dots:true,
   autoplaySpeed:2000,
   infinite:true,
   speed :500,
   slidesToShow:1,
   slidesToScroll:1,
   prevArrow: <PreviousBtn />,
   nextArrow: <NextBtn />,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      }
    }
  ]

  }
const banners = [gadgetSale,kitchenSale,poco,realme,fashionSale,oppo]
  return (
    <>
    <section className='sm:h-72 overflow-hidden  ' >

      <Slider {...settings}>
  {
    banners.map((el,i)=>(
      <img src={el} className='sm:h-72 w-full object-cover h-32' alt="banner" key={i}/>
    ))
  }
      
      </Slider>
    </section>
    </>
  )
}
export default Banner
