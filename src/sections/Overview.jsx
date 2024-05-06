import { useState } from 'react'

const Overview = () => {
  const [isExpanded, SetIsExpanded] = useState(false);

  function handleCLick () {
    SetIsExpanded((p) => !p)
  }
  return (
    <section className='font-open w-[550px] h-auto p-2'>
        <h1 className='text-4xl font-bold tracking-wider border-b-[1px] border-gray-400 pr-5 py-8'>Recreation Bar</h1>
        <ul className='flex items-center gap-4 my-4'>
            <li className='flex items-center gap-2'><span><img src='rating.svg' alt='Star Icon' className='w-6 h-6' /></span>4.9</li>
            <li className='flex items-center gap-2'><span><img src='reviews.svg' alt='Review Icon' className='w-6 h-6' /></span>699 Reviews</li>
            <li className='flex items-center gap-2'><span><img src='budget.svg' alt='Money Icon' className='w-6 h-6' /></span>৳ 3000 and Under</li>
            <li className='flex items-center gap-2'><span><img src='spoon.svg' alt='Culinary Icon' className='w-6 h-6' /></span>Bangladeshi</li>
        </ul>
        <p>Recreation is a communal co-working space and lunch space by day and a cocktail lounge by night - serving as the ultimate living room for the neighborhood. Drawing inspiration from the rec room at your neighbor's house, Recreation features an old school Arcade Machine with games like Ms. Pacman,Centipede and Donkey 
        {!isExpanded &&(<button onClick={handleCLick} className='text-red-600 pl-3'>{!isExpanded ? '...Read More' : '...Read Less'}</button>)}
        {isExpanded && (<span>kong, Jenga, and - designed to host events or just play ball - a half court-sized basketball court. <br/><br/>
        Please note, the kitchen closes at 10pm; the last order we take is at 9:45pm.
        Email <span className=' cursor-pointer text-red-400 underline'> <a href='recreationrsvp@concretehg.com'>recreationrsvp@concretehg.com</a> </span> for more information. </span>)}
        </p>
        {isExpanded &&(<button  onClick={handleCLick} className='text-red-600 pl-3'>{!isExpanded ? '...Read More' : '...Read Less'}</button>)}
        
    </section>
    
  )
}

export default Overview