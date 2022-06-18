import React from 'react'
import Logo from '../../assets/g2700.png';
import Button from '../Buttons/Button';
import Button2 from '../Buttons/Button2';
import "./Header.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from "react";

// import LandingPageSVG from '../../assets/LandingPageSVG.svg'; 

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <section className="LandingPage container-center-horizontal md:h-screen pb-10" >
         <div className="overlap-group-container">
         <div id="navigation-container">
           <div className="logo">
           <a href="#"> <img src={Logo} alt="No img"/></a>
           </div>
      <div className={isNavExpanded ?"nav-menu w-nav-menu" :"nav-menu"}>
      <ul>
       <li><a href="#">Home</a></li>
       <li> <a href="#">About</a></li>
       <li> <a href="#">Events</a></li>
       <li> <a href="#">Contact Us</a></li>
       <li><a href="#"><Button>Register</Button></a></li>
      </ul>
      </div>
      <a className='hamburger absolute' onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><GiHamburgerMenu/></a>
    </div>
           {/* <div className='head-main'>
            <p className='text1'>Lorem ipsum dolor</p>
            <p className='text2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Button2>Register</Button2>
            </div> */}

<main className="mt-10 mx-auto lg:ml-32 max-w-[800px] px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-slate-100 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block text-[#05893d] xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-base text-slate-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-100 bg-[#05893d] hover:bg-[#037a34] md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
          </div>      
            

         
        </section >   
  )
}

// const style = {
//   LandingPageSVG: {
//     backgroundImage: `url(${LandingPageSVG})`, 
//   }
// }

export default Header