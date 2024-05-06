
const Experiences = () => {
  return (
    <div className="flex flex-col w-[550px] h-auto gap-4 font-open ">
        <h1 className='font-open text-3xl font-bold tracking-wider border-b-[1px] border-gray-400 pl-4 pr-5 py-4'>Experiences</h1>
        <div className="grid grid-cols-3 border border-gray-200 rounded-md">
            <div className="flex flex-col gap-2 items-start justify-between p-2 col-span-2">
                <h1 className="text-2xl">Under The Influence Brunch</h1>
                <h2 className=" flex items-center justify-between gap-2 text-lg"><span><img src="calendar.svg" alt="Calender Icon"className="w-6 h-6" /></span>Multiple dates available</h2>
                <p className="text-sm">Come join us for the Under the Influence Brunch featuring special guest mixologist as well as different influencers ranging from</p>
                <button className="w-auto h-auto bg-red-500 text-white px-4 py-2 rounded-md">Reserve</button>
            </div>
            <div className="p-1">
                <img src="photo5.webp" alt="Glass of Drink" loading="lazy" className="object-cover rounded-md" />
            </div>
            
        </div>
    </div>
  )
}

export default Experiences