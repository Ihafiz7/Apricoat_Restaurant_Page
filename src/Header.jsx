import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 pt-4 border-gray-400 border-b-[0.5px]'>
        <div className='flex items-center gap-1'>
            <div className=' flex items-center justify-center'>
                <img src='logo.svg' alt='Logo' className='w-12 h-12' />
                <p className='text-xl font-open font-medium pr-[2px] border-gray-400 border-r-[0.5px]'>Apricot Fine Dine</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src='location.svg' alt='Icon' className='w-8 h-8' />
                <p className='text-sm font-open font-medium '>Gulshan-2 Circle</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-6'>
            <button type='text' className='px-2 py-1 bg-blue-500 text-white rounded-sm'>Sign in</button>
            <img src='search.svg' alt='Search Icon' className='w-8 h-8' />
        </div>
    </div>
  )
}

export default Header