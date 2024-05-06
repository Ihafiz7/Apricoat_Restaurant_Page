import React from 'react'
import ReservationSection from './ReservationSection'
import HeroCard from './HeroCard'

const MainSection = () => {
  return (
    <div className='w-[3/4] h-auto flex items-center justify-center mt-[-48px] z-[1] relative'>
      <div className='flex gap-12'>
        <HeroCard />
        <div>
          <ReservationSection /> 
        </div>
      </div> 
    </div>
  )
}

export default MainSection