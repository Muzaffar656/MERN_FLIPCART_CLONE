import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../../assets/images/logo.png'
import SearchBar from './SearchBar'
import '../../../App.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
 <header className='bg-primary-blue py-3 px-3 w-full overflow-hidden'  >
 {/* nav-container */}
  <div className='flex items-start sm:items-center  justify-between sm:w-9/12 sm:px-4 w-full m-auto px-1 '> 
    
    <div className=' flex-col gap-1 grow flex  sm:flex-1 sm:flex-row   '>
      <Link to='/' className='mr-1 sm:mr-4'>
        <img className='h-5' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart-logo"  />
        <span className='flex relative bottom-1 italic tracking-wider text-white font-medium text-xs'>Explore  <span className=' font-medium text-primary-plus'> Plus</span> <img className='h-4 text-xxs' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="logo" /></span>
      </Link>
   
      <SearchBar/>
    </div>

    <div className=' login-section  sm:flex  sm:items-center   sm:gap-7 flex  sm:ml-5'>
      <Link to='/cart' className='text-white font-semibold ml-4'> <span className='hidden'>Cart</span> <ShoppingCartIcon/> </Link>
      <Link to='/login' className='sm:bg-white px-2 sm:px-9 text-white py-0.5 sm:text-primary-blue sm:font-semibold'>Login</Link>
      <Link to='/more' className=' hidden sm:block text-white font-semibold ml-4 '>More</Link>
    </div>

 
  </div>
 </header>
  )
}

export default Header
