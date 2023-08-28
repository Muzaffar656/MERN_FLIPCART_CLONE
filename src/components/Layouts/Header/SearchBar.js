import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (

    <div className=' bg-white font-sans flex justify-between items-center   sm:w-72  px-1 sm:px-4  overflow-hidden rounded-sm  '>
      <input className=' text-sm text-gray-700 py-2 sm:p-0 w-full outline-none   border-none rounded-sm '  type="text" placeholder='Search for products, brands and more' />
      <SearchIcon  color="primary" className='sm:left-1.5 relative' />
    </div>
  )
}

export default SearchBar
