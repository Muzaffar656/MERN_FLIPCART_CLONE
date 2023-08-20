import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import SearchBar from './SearchBar'
import '../../../App.css'

const Header = () => {
  return (
 <header className='bg-primary-blue py-3 w-full '  >
 {/* nav-container */}
  <div className='flex items-center justify-between sm:w-9/12 sm:px-4 w-full m-auto px-1 '> 
    
    <div className='flex items-center flex-1  '>
      <Link to='/' className='mr-1 sm:mr-4'>
        <img src={logo} alt="Flipkart-logo" className='h-8 ' />
      </Link>
      <SearchBar/>
    </div>

    <div className='flex items-center gap-5 sm:gap-7  ml-5'>
      <Link to='/login' className='bg-white px-2 sm:px-9 py-0.5 text-primary-blue font-semibold'>Login</Link>
      <Link to='/more' className='text-white font-semibold ml-4'>More</Link>
      <Link to='/cart' className='text-white font-semibold ml-4'>Cart</Link>
    </div>
  </div>
 </header>
  )
}

export default Header
