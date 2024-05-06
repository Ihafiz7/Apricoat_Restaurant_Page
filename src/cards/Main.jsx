import React from 'react'
import menuData from '../data/menuData'

const Main = () => {
  return (
    <div className='w-[550px] h-auto overflow-hidden border-[1px] border-gray-200 p-2'>
      <div className='grid grid-cols-2 gap-4'>
        {menuData.map((data) => {
          return(
          <div className='flex flex-col'>
            <div className='flex items-center justify-between font-medium '>
              <p>{data.name}</p>
              <p>৳ {data.price}</p>
            </div>
            <p className='font-thin'> {data.des} </p> 
          </div> 
          )
        })}
      </div>
    </div>
  )
}

export default Main