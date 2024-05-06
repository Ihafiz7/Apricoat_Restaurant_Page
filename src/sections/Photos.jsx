import React from 'react'

const Photos = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='font-open text-3xl font-bold tracking-wider border-b-[1px] border-gray-400 pl-4 pr-5 py-4'>Photos of Apricoat</h1>
        <div className='w-[550px] h-auto grid grid-cols-4 grid-rows-2 gap-1 cursor-pointer'>
            <img src='hero.webp' alt='Sceens At Apricoat' loading='lazy' className='w-full h-full object-cover row-span-full col-span-2 rounded-md' />
            <img src='photo2.webp' alt='Sceens At Apricoat' loading='lazy' className='w-full h-full object-cover rounded-md' />
            <img src='photo3.webp' alt='Sceens At Apricoat' loading='lazy' className='w-full h-full object-cover rounded-md' />
            <img src='photo4.webp' alt='Sceens At Apricoat' loading='lazy' className='w-full h-full object-cover rounded-md' />
            <img src='photo5.webp' alt='Sceens At Apricoat' loading='lazy' className='w-full h-full object-cover rounded-md' />
        </div>
    </div>
  )
}

export default Photos