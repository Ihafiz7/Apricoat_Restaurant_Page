import RatingBars from "../cards/RatingBars"
import sampleRatings from "../data/ratingData";
import DisplayReview from "./DisplayReview";

const Reviews = () => {
  return (
    <div className="w-[550px] h-auto font-open">
      <h1 className='font-open text-3xl font-bold tracking-wider border-b-[1px] border-gray-400 pl-4 pr-5 py-4'>What 690 people are saying</h1>
      <div className="flex items-start gap-2 ">
        <div className="flex flex-col gap-4">
          <p className="text-xl">Overall ratings and reviews</p>
          <p className="text-base">Reviews can only be made by diners who have eaten at this restaurant</p>
          <p className="flex items-center justify-start gap-2"><span><img src="rating.svg" alt="Star" className="w-8 h-8" /></span>4.9 based on recent ratings</p>
          <div className="flex items-center justify-start gap-4">
            <div className="flex flex-col items-center justify-center border-r-2 border-gray-400 pr-2 text-sm">
              <p>4.9</p>
              <p>Food</p>
            </div>
            <div className="flex flex-col items-center justify-center border-r-2 border-gray-400 pr-2 text-sm">
              <p>5.0</p>
              <p>Service</p>
            </div>
            <div className="flex flex-col items-center justify-center border-r-2 border-gray-400 pr-2 text-sm">
              <p>4.9</p>
              <p>Ambience</p>
            </div>
            <div className="flex flex-col items-center justify-center pr-2 text-sm">
              <p>4.8</p>
              <p>Value</p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-auto mt-10">
          <RatingBars ratings={sampleRatings} />
        </div>
      </div>
      <DisplayReview />
    </div>
  )
}

export default Reviews