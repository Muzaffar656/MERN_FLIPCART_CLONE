import React from 'react'
import mobiles from '../../assets/images/Categories/phone.png';
import fashion from '../../assets/images/Categories/fashion.png';
import electronics from '../../assets/images/Categories/electronics.png';
import home from '../../assets/images/Categories/home.png';
import travel from '../../assets/images/Categories/travel.png';
import appliances from '../../assets/images/Categories/appliances.png';
import furniture from '../../assets/images/Categories/furniture.png';
import beauty from '../../assets/images/Categories/beauty.png';
import grocery from '../../assets/images/Categories/grocery.png';
import {Link} from 'react-router-dom'
const Categories = () => {
    const CartNav = [
        {
            name:"Mobiles",
            icon:mobiles
        },
        {
            name:"Fashion",
            icon:fashion
        },
        {
            name:"Electronics",
            icon:electronics
        },
        {
            name:"Home",
            icon:home
        },
        {
            name:"Travel",
            icon:travel
        },
        {
            name:"Appliances",
            icon:appliances
        },
        {
            name:"Furniture",
            icon:furniture
        },
        {
            name:"Beauty",
            icon:beauty
        },
        {
            name:"Grocery",
            icon:grocery
        }
    ]
  return (
    <div className='hidden sm:block bg-white  min-w-full px-12 py-1 shadow overflow-hidden'>
      <div className="item-container flex items-center justify-between  ">
        {
            CartNav.map((item,i)=>(
                <Link key={i} className='flex flex-col items-center gap-1 p-2 group'>
                    <div className="image h-16 w-16">
                        <img src={item.icon} className="h-full w-full object-contain" alt={item.name}/>
                    </div>
                    <span className='text-center text-sm font-medium text-gray-500 group-hover:text-primary-blue'>{item.name}</span>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Categories
