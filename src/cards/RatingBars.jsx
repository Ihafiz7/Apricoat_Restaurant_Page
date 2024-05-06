import React from 'react'

const RatingBars = ({ratings}) => {
    const totalRatings = ratings.length;
    const ratingCounts = [1,2,3,4,5].map(star => ratings.filter(r => r === star).length);
    const ratingPercentages = ratingCounts.map(count => (count / totalRatings) * 100);
  return (
    <div>
        {ratingPercentages.reverse().map((percentage, index) => (
            <div key={index} className='flex items-center gap-1 my-2'> <span>{6 - (index + 1)}</span>
                <div className='bg-gray-400 w-full h-5'>
                    <div style={{width: `${percentage}%`, background: '#EF0107', height: '20px'}}></div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RatingBars