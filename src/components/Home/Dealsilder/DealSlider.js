import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './DealSlider.css'
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}
const DealSlider = () => {
  const CartNav = [
    {
      name:"Fashion",
      icon:"https://rukminim2.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
    },
    {
        name:"Top Mirrorless Camreas",
        icon:"https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
    },
    {
        name:"Electronics",
        icon:"https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"
    },
    {
        name:"Home",
        icon:"https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70"
    },
    {
        name:"Travel",
        icon:"https://rukminim2.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70"
    },
    {
        name:"Appliances",
        icon:"https://rukminim2.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70"
    },
    {
        name:"Furniture",
        icon:"https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70"
    },
    {
        name:"Beauty",
        icon:"https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"
    },
    {
        name:"Grocery",
        icon:"https://rukminim2.flixcart.com/image/200/200/xif0q/smartwatch/k/h/s/1-83-38083pp01-android-ios-fastrack-yes-original-imagnhzeabmcfspe.jpeg?q=70"
    }
]
const Toys = [
  {
    name:"Top Selling Stationery",
    icon:"https://rukminim2.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70"
  },
  {
      name:"Coffe Powders",
      icon:"https://rukminim2.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70"
  },
  {
      name:"Dry Fruits",
      icon:"https://rukminim2.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70"
  },
  {
      name:"Home",
      icon:"https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70"
  },
  {
      name:"Travel",
      icon:"https://rukminim2.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70"
  },
  {
      name:"Appliances",
      icon:"https://rukminim2.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70"
  },
  {
      name:"Furniture",
      icon:"https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70"
  },
  {
      name:"Beauty",
      icon:"https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"
  },
  {
      name:"Grocery",
      icon:"https://rukminim2.flixcart.com/image/200/200/xif0q/smartwatch/k/h/s/1-83-38083pp01-android-ios-fastrack-yes-original-imagnhzeabmcfspe.jpeg?q=70"
  }
]
const GridImages = [
  
  {
    icon:"https://rukminim1.flixcart.com/fk-p-flap/250/334/image/b26bd43084464241.png?q=90"
  },
  {
  icon: "https://rukminim1.flixcart.com/fk-p-flap/250/334/image/75b98993a5312a3a.png?q=90",
   
  },
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/334/image/4c6c5b66ace4194b.png?q=90"
    },
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/266/image/836b520e10b5b3b5.png?q=90"
    },
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/334/image/3bd3e5eef3a4ea11.jpeg?q=90"
    }
    ,
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/334/image/4ce8c9bdc5dfeff0.png?q=90"
    },
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/266/image/49918721e375205a.jpeg?q=90"
    },
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/266/image/2edcb735e06911ec.jpg?q=90"
    },
    {
      icon:"https://rukminim1.flixcart.com/fk-p-flap/250/334/image/1e6abbaa21039788.png?q=90"
    }

]

const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 2.5,
  prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,};
  return (
    <>
    <section className='bg-white  overflow-hidden flex my-2 mx-2  '>
      <div className='hidden sm:flex justify-between w-full my-auto items-center'>
        <div style={{width:"230px"}} className='sm:flex hidden flex-col gap-5 items-center  width-widthX'>
          <h2 className='bg-white text-3xl text-center text-gray-700 mt-24 leading-10'>Best of <br /> Electronics</h2>
          <button className='bg-primary-blue text-white capitalize px-2 shadow py-2 rounded-sm'>View All</button>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="banner" />
        </div>
        {/* slider container */}
        <div className='slider-section w-72 grow   ' >
      <Slider {...settings}>

          {
            CartNav.map((el,i)=>(
                <div key={i} className='text-center flex flex-col items-center gap-5 '>
                  <img  src={el.icon} alt={el.name} className=' p-4 m-auto max-w-full ' style={{height:"180px"}}   />

                  <div className="text-items flex flex-col items-center gap-2 mb-6">
                  <div className=' font-semibold mt-11 text-sm tracking-normal '>{el.name}</div>
                  <span className='text-sm text-rs'>From $ 3999</span>
                  <span  className='text-gray-400 text-xs '>Buy Now</span>
                  </div>
           
                </div>
            ))
          }
      </Slider>
        </div>
        <div className='sm:flex hidden  bg-primary-main  '>
          <img width={"230px"} className='p-1'  src="https://rukminim2.flixcart.com/fk-p-flap/464/708/image/8270b79992f45f9d.jpg?q=70" alt="banner" />
        </div>
      </div>
      {/* grid items for mobile phones */}
      <div className='grid grid-cols-3 sm:hidden'>
        {
          GridImages.map((el,i)=>(
            <div key={i} >
              <img src={el.icon} className='h-40' alt="icons" />
            </div>
          ))
        }
      </div>
    </section> 
    <section className='bg-white  overflow-hidden flex my-2 mx-2  '>
      <div className='hidden sm:flex justify-between w-full my-auto items-center'>
        <div style={{width:"230px"}} className='sm:flex hidden flex-col gap-5 items-center  width-widthX'>
          <h2 className='bg-white text-3xl text-center text-gray-700 mt-24 leading-10'>Beauty, Food,  <br /> Toys & more</h2>
          <button className='bg-primary-blue text-white capitalize px-2 shadow py-2 rounded-sm'>View All</button>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="banner" />
        </div>
        {/* slider container */}
        <div className='slider-section w-72 grow   ' >
      <Slider {...settings}>

          {
            Toys.map((el,i)=>(
                <div key={i} className='text-center flex flex-col items-center gap-5 '>
                  <img  src={el.icon} alt={el.name} className=' p-4 m-auto max-w-full ' style={{height:"180px"}}   />

                  <div className="text-items flex flex-col items-center gap-2 mb-6">
                  <div className=' font-semibold mt-11 text-sm tracking-normal '>{el.name}</div>
                  <span className='text-sm text-rs'>From $ 3999</span>
                  <span  className='text-gray-400 text-xs '>Buy Now</span>
                  </div>
           
                </div>
            ))
          }
      </Slider>
        </div>
        
      </div>
 
    </section> 
    <section className='bg-white  overflow-hidden flex my-2 mx-2  '>
      <div className='hidden sm:flex justify-between w-full my-auto items-center'>
        <div style={{width:"230px"}} className='sm:flex hidden flex-col gap-5 items-center  width-widthX'>
          <h2 className='bg-white text-3xl text-center text-gray-700 mt-24 leading-10'>Beauty, Food,  <br /> Toys & more</h2>
          <button className='bg-primary-blue text-white capitalize px-2 shadow py-2 rounded-sm'>View All</button>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="banner" />
        </div>
        {/* slider container */}
        <div className='slider-section w-72 grow   ' >
      <Slider {...settings}>

          {
            Toys.map((el,i)=>(
                <div key={i} className='text-center flex flex-col items-center gap-5 '>
                  <img  src={el.icon} alt={el.name} className=' p-4 m-auto max-w-full ' style={{height:"180px"}}   />

                  <div className="text-items flex flex-col items-center gap-2 mb-6">
                  <div className=' font-semibold mt-11 text-sm tracking-normal '>{el.name}</div>
                  <span className='text-sm text-rs'>From $ 3999</span>
                  <span  className='text-gray-400 text-xs '>Buy Now</span>
                  </div>
           
                </div>
            ))
          }
      </Slider>
        </div>
    
      </div>
     
    </section> 
    </>
  )
}

export default DealSlider
