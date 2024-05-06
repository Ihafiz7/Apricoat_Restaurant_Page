import React from 'react'

const DisplayReview = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center w-[550px] h-auto gap-4'>
            <div className='w-full h-10 rounded-md flex items-center gap-4 border border-gray-400 px-2'>
                <img src="search.svg" alt="Search" className='w-8 h-8' />
                <input type="text" placeholder='Search In Reviews' className='w-3/4 h-full focus:outline-none' />
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>690 Reviews</p>
                <select name="raingFilter" id="filter" className='p-2 border border-gray-400 focus:outline-none'>
                    <option value="defult">Newest</option>
                    <option value="2">Highest Rating</option>
                    <option value="3">Lowest rating</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
            <div className='flex justify-between items-center px-2'>
                <div>
                    <p className='flex items-center gap-2'><img src="profile.svg" alt="Profile Picture" className='w-12 h-12' /><span>Person Name</span></p>
                    <p>Dined on : xx/yy/zz</p>
                </div>
                <div>
                    <p>Overall</p>
                    <p className='flex items-center gap-2'><img src="rating.svg" alt="Star" className='w-8 h-8' /><span>4.9</span></p>
                </div>
            </div>
            <p>My experience here was great! The manager by the name of Majed was very helpful and kind and the service was fast! Would come here again.</p>
        </div>
    </div>
  )
}

export default DisplayReview