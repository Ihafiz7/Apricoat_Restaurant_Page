import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-start gap-10 bg-slate-950 text-white font-open w-full h-auto py-10'>
        <h1 className='text-3xl px-4 hover:text-red-600'>Apricoat Fine Dine</h1>
        <ul className='flex items-center justify-between px-4 w-full h-auto cursor-pointer'>
            <li className='hover:text-red-600'>About Us</li>
            <li className='hover:text-red-600'>Blog</li>
            <li className='hover:text-red-600'>Careers</li>
            <li className='hover:text-red-600'>Social Links</li>
            <li className='hover:text-red-600'>Awards</li>
        </ul>
    </div>
  )
}

export default Footer