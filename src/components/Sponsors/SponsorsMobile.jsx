import React from 'react'

function SponsorsMobile() {
  return (
    <div className='flex-col bg-black'>
        <h1 className='text-3xl  font-semibold pt-[35px] ml-[30px] text-white'>Sponsors</h1>
        <Parts text={"Platinum Sponsors"}></Parts>
        <Parts text={"Gold Sponsors"}></Parts>
        <Parts text={"Silver Sponsors"}></Parts>
        <Parts text={"Partners"}></Parts>
    </div>
  )
}
function Parts({text}){
    return(
        <div>
        <div style={{backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)`}} className='relative rounded-md h-[5px] w-[100%] mt-[35px]'></div>
        <p className='text-white text-2xl text-center mt-1 pb-[15px] '>{text}</p>
        <div className=' grid grid-cols-2 text-center mx-[17vw] gap-[10px] justify-center items-center pb-[40px]'>
            <div className='h-[16vh] border-[3px] rounded-3xl text-white '></div>
            <div className='h-[16vh] border-[3px] rounded-3xl text-white '></div>
            <div className='h-[16vh] border-[3px] rounded-3xl text-white '></div>
            <div className='h-[16vh] border-[3px] rounded-3xl text-white '></div>
        </div>
        </div>
    )
}
export default SponsorsMobile