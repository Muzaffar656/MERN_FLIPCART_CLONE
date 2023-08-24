import React from 'react'

const SearchBar = () => {
  return (

    <div className=' bg-white  sm:w-9/12 w-80 px-1 sm:px-4  overflow-hidden rounded-sm '>
      <input className=' text-sm text-gray-500 py-2  outline-none w-full  border-none rounded-sm '  type="text" placeholder='Search for products for more' />
    </div>
  )
}

export default SearchBar
