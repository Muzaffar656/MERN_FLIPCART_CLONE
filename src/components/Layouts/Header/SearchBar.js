import React from 'react'

const SearchBar = () => {
  return (

    <div className=' bg-white font-sans   sm:w-72  px-1 sm:px-4  overflow-hidden rounded-sm '>
      <input className=' text-sm text-gray-700 py-2  w-full outline-none   border-none rounded-sm '  type="text" placeholder='Search for products, brands and more' />
    </div>
  )
}

export default SearchBar
