import React from 'react'
import SponsorsList from '../../assets/SponsorsList'



function SponsorsMobile() {
  return (
    <div className='flex-col bg-black'>
        <h1 className='text-3xl  font-semibold pt-[35px] ml-[30px] text-white'>Sponsors</h1>
        {SponsorsList.map(Sponsor=> (
         <Parts
         
         text={Sponsor.title}
         imageUrl={Sponsor.imageUrl}
         tech={Sponsor.Sponsors}
         ></Parts>
        ))}
        
    </div>
  )
}
function Parts({text,imageUrl}){
    return(
        <div>
        <div style={{backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)`}} className='relative rounded-md h-[5px] w-[100%] mt-[35px]'></div>
        <p className='text-white text-2xl text-center mt-1 pb-[15px] '>{text}</p>
        <div className=' grid grid-cols-1 text-center mx-[17vw] gap-[10px] justify-center items-center pb-[40px]'>
                {imageUrl.map(image=>(
                  <div className='w-[90vw] h-[20vh] justify-center items-center align-middle'>
                    
                    <img src={image} className=' w-[60vw] h-[30vh]  align-middle justify-center items-center p-[50px]' alt="" />
                  </div>
                ))
                }
            
            
        </div>
        </div>
    )
}
export default SponsorsMobile