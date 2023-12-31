import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../../assets/images/logo.png'
import SearchBar from './SearchBar'
import '../../../App.css'
import { useSelector } from 'react-redux'
const Header = () => {
  const {isAuthintication,user} = useSelector((state)=>state.user)
  console.log(user)
  return (
 <header className='bg-primary-blue py-2.5 px-3 w-full overflow-hidden  top-0 fixed z-10  '  >
 {/* nav-container */}
  <div className='flex    sm:items-center  sm:justify-end sm:w-11/12 sm:px-4   ' > 
    
    <div className='  sm:grow-0 gap-1  flex flex-col sm:flex-row w-full sm:w-auto    '>
      <Link to="/" className='mr-1 sm:mr-4 mt-2'>
        <img className='sm:h-5 h-5' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart-logo"  />
        <span className='flex relative bottom-1 italic tracking-wider text-white font-medium text-xs'>Explore  <span className=' font-medium text-primary-plus'> Plus</span> <img className='h-4 text-xxs' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="logo" /></span>
      </Link>
   
      <SearchBar/>
    </div>
{
isAuthintication === false ?
  ( <div className=' login-section hidden  sm:flex  sm:items-center ml-3   sm:gap-3  font-sans   '>
      <Link to="/login" className='sm:bg-white px-2 sm:px-9 text-white py-1 sm:text-primary-blue sm:font-semibold'>Login</Link>
    </div> ):(
      <span className=' ml-4 capitalize text-white'>{user.user.name}</span>
    )
}

<div className='flex'>
      <Link to="/cart" className='text-white font-semibold ml-4'> Become a Seller </Link>
      <Link to="/more" className=' hidden sm:block text-white font-semibold ml-4 '>More</Link>
  
</div>
 
  </div>
 </header>
  )
}

export default Header
