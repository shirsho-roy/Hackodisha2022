import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"; 
//import { ReactComponent as IconMenu } from '../../assets/Rectanglefooter.svg' 
import background from '../../assets/backgroundfooter.svg' 

const Footer = () => {

  return (

    <div className='overflow-hidden' >
      <div className='relative z-10 xl:mt-[-7vh]'>
        <img src={background} className='hidden xl:block' />
      </div>
      <div className='xl:mt-[-86vh] relative z-40 bg-black xl:bg-transparent'>
    <div id='footer' className="flex flex-col justify-evenly text-white md:flex-row  xl:mt-40 lg:pt-10"
   >


    
    <div className='flex flex-col sm:flex-row justify-evenly md:w-4/6'>
    <div className='flex justify-evenly md:justify-evenly  md:pl-5 md:pr-5
     lg:pr-8 lg:pl-8    md:w-1/3 '>
        
        <div className='flex flex-col text-white text-md  mb-12 text-lg pr-16 md:pr-3 lg:pr-8 items-start '>
          <h2 className='flex text-3xl pt-10 lg:pt-0  md:pr-4 '>SiteMap</h2>
          <a className='pt-3  hover:text-gray-300 hover:cursor-pointer'>Home</a>
          <a className=' hover:text-gray-300 hover:cursor-pointer'>About</a>
          <a className=' hover:text-gray-300 hover:cursor-pointer'>Event</a>
          <a className=' hover:text-gray-300 hover:cursor-pointer'>ContactUs</a>
          <div className='flex mt-1  mr-2'>
          <a className='mr-4 cursor-pointer'><FontAwesomeIcon icon={faInstagram} size="xl"/></a>
          <a className='cursor-pointer'><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
          </div>
          
        </div>
        <div className='flex flex-col text-white text-lg  pt-24 md:pt-24 lg:pt-12 items-start'>
          <a className=' hover:text-gray-300 hover:cursor-pointer'>Sponsors</a>
          <a className=' hover:text-gray-300 hover:cursor-pointer'>FAQs</a>
          
        </div>
    </div>

    <div className='flex justify-center mb-12 pl-3  lg:pt-0 sm:pt-16'>
        <img className=' h-48 lg:h-54 items-center' src={require('../../assets/g2700.png')}/>
    </div>
    </div>
    
    
    <div className="flex flex-col items-center pb-10 pr-8 ml-4 md:pl-10  md:w-2/5 md:pt-16 lg:pt-4">
        <div className='text-3xl text-white mb-4  text-center'>Want to become a sponsor of Hackodisha 2.0?</div>
        <button type='button ' className='cursor-pointer rounded-3xl ring ring-white p-3 lg:p-1 text-xl w-64 sm:w-80 md:w-64 lg:w-80 md:mt-6 lg:mt-10 hover:text-gray-300  hover:ring-gray-400'>
            Become a sponsor
            </button> 

    </div>
    
    
    </div>
   
    <div className=' flex justify-end text-white xl:mt-10'>copyright 2022,Hackodisha 2.0</div>
    </div>
    </div>
    
  )
}

export default Footer