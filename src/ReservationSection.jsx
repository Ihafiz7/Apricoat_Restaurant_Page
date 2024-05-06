import CalenderDropdown from './dropdwon/CalenderDropdown'
import DropdownPeople from './dropdwon/DropdownPeople'
import DropdownTime from './dropdwon/DropdownTime'

const ReservationSection = () => {
  
  return (
    <div className='w-[400px] h-auto font-open sticky top-0'>
      <h1 className='text-xl text-center border-b-[1px] border-gray-200 py-3 bg-white rounded-lg'>Make a reservation</h1>
      <div className='p-2 mt-8'>
        <li className='font-normal list-none mb-2'>Party Size</li>
        <DropdownPeople />
      </div>
      <div className='flex gap-4 flex-grow'>
        <div className='p-2'>
          <li className='font-normal list-none mb-2'>Date</li>
          <CalenderDropdown />
        </div>
        <div className='p-2 flex-grow'>
          <li className='font-normal list-none mb-2'>Time</li>
          <DropdownTime />
        </div>
      </div>
      <p className='flex items-center justify-between w-full h-auto border border-gray-200 p-2 text-center rounded-md'>For 2 People at 7 PM, Sunday <span><button className='w-auto h-10 p-2 hover:bg-stone-200 rounded-md focus:outline-none'>Edit</button></span> </p>
      <p className='flex items-center justify-start p-2 my-2'><button className='w-auto h-10 p-2 text-[#EF0107] border border-[#EF0107] hover:bg-stone-200 rounded-md font-semibold'>Notify Me</button></p>
      <p className='flex items-center justify-center my-2 border border-gray-200 p-2 rounded-md'><button className='w-auto h-10 p-2 font-semibold rounded-md hover:text-[#EF0107] '>Show Next Available</button>
      </p>
    </div>
  )
}

export default ReservationSection