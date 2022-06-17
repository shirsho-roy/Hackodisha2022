import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import {FaRegUser} from "react-icons/fa";
import {FaNetworkWired} from "react-icons/fa";

function Stats(){
  return(<div id='stats' style={{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, #000000 100%)`}}>
    <section className='text-white text-2xl font-bold'>  
    <h1 className='mx-16 py-10 mb-4 text-4xl font-normal'>HackOdisha 1.0 Statistics</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    <div className='flex flex-col items-center'>   
        <FaRegUser className='h-[90px] w-[90px]'/>
        <h3 className='mt-14'>69420+</h3>
        <p className='mb-8 md:mt-4 md:mb-8'>Registrations</p>
    </div>
    <div className='flex flex-col items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width={"90px"} height={"90px"} fill="white" viewBox="0 0 512 512"><path d="M243.4 2.587C251.4-.8625 260.6-.8625 268.6 2.587L492.6 98.59C506.6 104.6 514.4 119.6 511.3 134.4C508.3 149.3 495.2 159.1 479.1 160V168C479.1 181.3 469.3 192 455.1 192H55.1C42.74 192 31.1 181.3 31.1 168V160C16.81 159.1 3.708 149.3 .6528 134.4C-2.402 119.6 5.429 104.6 19.39 98.59L243.4 2.587zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM127.1 416H167.1V224H231.1V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V224H127.1V416z"/></svg>
        <h3 className='mt-14'>420+</h3>
        <p className='md:mt-3 md:mb-8'>Institutions</p>
    </div>
    <div className='flex flex-col items-center'>    
        <FaRegHandshake className='h-[110px] w-[110px]'/>
        <h3 className='mt-6'>69+</h3>
        <p className='mb-2 md:mt-4 md:mb-8'>Sponsors</p>
    </div>
    <div className='flex flex-col items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width={"130px"} height={"130px"} fill="white" viewBox="0 0 640 512"><path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"/></svg>
        <h3 className='mt-2 lg:mt-6'>69420+</h3>
        <p className='mb-8 md:mt-4'>Registrations</p>
    </div>
    <div className='flex flex-col items-center '>
        <svg xmlns="http://www.w3.org/2000/svg" width={"130px"} height={"130px"} fill="white" viewBox="0 0 640 512"><path d="M144 48C144 21.49 165.5 0 192 0C218.5 0 240 21.49 240 48C240 74.51 218.5 96 192 96C165.5 96 144 74.51 144 48zM152 512C134.3 512 120 497.7 120 480V256.9L91.43 304.5C82.33 319.6 62.67 324.5 47.52 315.4C32.37 306.3 27.47 286.7 36.58 271.5L94.85 174.6C112.2 145.7 143.4 128 177.1 128H320V48C320 21.49 341.5 .0003 368 .0003H592C618.5 .0003 640 21.49 640 48V272C640 298.5 618.5 320 592 320H368C341.5 320 320 298.5 320 272V224H384V256H576V64H384V128H400C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192H264V480C264 497.7 249.7 512 232 512C214.3 512 200 497.7 200 480V352H184V480C184 497.7 169.7 512 152 512L152 512z"/></svg>
        <h3 className='mt-6'>420+</h3>
        <p className='mb-8 md:mt-4'>Institutions</p>
    </div>
    <div className='flex flex-col items-center'>    
        <FaNetworkWired className='h-[130px] w-[130px]'/>
        <h3 className='mt-6'>69+</h3>
        <p className='md:mt-3'>Sponsors</p>
    </div>
    </div>
    <div className='flex justify-end mr-16 py-10'>
    <a href="/"><i className='text-2xl'>Go to HackOdisha 1.0{'>'}</i></a>
    </div>
   </section>
   </div>
  )
}

export default Stats;
