import React from 'react'
import Background from '../../assets/bg-darkened.svg' ;

const Track = () => {
  return (
    <>
   
    <div className="text-white pl-5 h-[400px] sm:pl-9 md:pl-28 p-4 pb-9 overflow-hidden"
   style={{ backgroundImage: `url(${Background})` }}>

        <div className='text-[44px]'>Tracks</div>
        <div className='text-[64px] pl-1 '>Updating soon...</div>
        
        
    </div>
    </>
  )
}

export default Track
