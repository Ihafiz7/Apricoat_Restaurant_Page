import { useState } from 'react'
import Main from '../cards/Main';
import BreakfastCard from '../cards/BreakfastCard';
import DrinksCard from '../cards/DrinksCard';


const Menu = () => {

    const [menuToDisplay, setMenuToDisplay] = useState('breakfast');
  return (
    <div>
      <div className='px-3 pb-4 border-b-[1px] border-gray-200'>
        <h1 className='text-2xl font-bold tracking-wider border-b-[1px] border-gray-400 pr-5 py-4'>Menu</h1>
        <div className='flex items-center gap-8 mt-4 '>
          <button onClick={() => setMenuToDisplay('breakfast')} className='bg-stone-200 py-2 px-4 hover:border-[1px] hover:border-red-400 text-sm hover:bg-stone-300 hover:scale-90'>BreakFast</button>
          <button onClick={() => setMenuToDisplay('main')} className='bg-stone-200 py-2 px-4 hover:border-[1px] hover:border-red-400 text-sm hover:bg-stone-300 hover:scale-90'>Main Course</button>
          <button onClick={() => setMenuToDisplay('drinks')} className='bg-stone-200 py-2 px-4 hover:border-[1px] hover:border-red-400 text-sm hover:bg-stone-300 hover:scale-90'>Drinks</button>
        </div>
      </div>
      {menuToDisplay === 'breakfast' && (
        <div>
          <h1 className='p-2 text-2xl'> Breakfast Menu</h1>
          <BreakfastCard />
        </div>
      )}
      {menuToDisplay === 'main' && (
        <div>
          <h1 className='p-2 text-2xl'> Main Course</h1>
          <Main />
        </div>
      )}
      {menuToDisplay === 'drinks' && (
        <div>
          <h1 className='p-2 text-2xl'> Drinks</h1>
          <DrinksCard />
        </div>
      )}
    </div>

    //className='font-open w-[550px] h-auto border-[1px] border-gray-200 rounded-lg'
  )
}

export default Menu