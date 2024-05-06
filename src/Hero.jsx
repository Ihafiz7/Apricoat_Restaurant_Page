import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[75vh] mt-8'>
            <img src='hero.webp' alt='Hero Image' className='w-full h-full object-cover' />
        <div className='absolute top-10 right-10'>
            <button onClick={ () => alert('Press Ctrl+D (Cmd+D on Mac) to bookmark this page.')} className='flex items-center gap-2 text-sm font-open px-4 py-1 bg-stone-200 rounded hover:bg-stone-300 hover:border-[#EF0107] hover:border-[1px]'> <span><img src='save.svg' alt='Save Icon' className='w-8 h-8' /></span>Save This Restaurant</button>  
        </div>
    </div> 
  )
}

export default Hero