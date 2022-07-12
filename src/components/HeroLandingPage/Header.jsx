import React from 'react'
import Logo from '../../assets/g2700.png';
import Button from '../Buttons/Button';
import Button2 from '../Buttons/Button2';
import "./Header.css";
// import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import { useState } from "react";
import Hamburger from 'hamburger-react'

// import LandingPageSVG from '../../assets/LandingPageSVG.svg'; 

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navContExpanded,setNavContExpanded]=useState(false);
  return (
    <section className="LandingPage container-center-horizontal md:h-screen pb-10" >
         <div className="overlap-group-container"> 
      
           
         <div className={navContExpanded?"nav-cont2 navigation-container":"nav3 navigation-container"}>
           <div className={isNavExpanded?"Hidex":"logo"}>
           <a href="#"> <img src={Logo} alt="No img" height="80px" width="80px"/></a>
           </div>
           <h2 className={isNavExpanded?"logowritten":'Hide'}>HackOdisha 2.0</h2>
      <div className={isNavExpanded ?"nav-menu w-nav-menu" :"nav-menu"}>
      <ul>
       <li><a href="#">Home</a></li>
       <li> <a href="#">About</a></li>
       <li> <a href="#">Tracks</a></li>
       <li> <a href="#">Sponsors</a></li>
       <li> <a href="#">Schedule</a></li>
       <li> <a href="#">Prizes</a></li>
       <li> <a href="#">Events</a></li>
       <li> <a href="#">Team</a></li>
       {/* <div className={isNavExpanded?'disp':'Hide'}> */}
       <li> <a href="#">FAQs</a></li>
    
      
      </ul>
      </div>
      <a className="hamburger open absolute" onClick={() => {
          setNavContExpanded(!navContExpanded);
          setIsNavExpanded(!isNavExpanded);
        }}><Hamburger/></a>
      {/* <a className={isNavExpanded?"cross absolute":"Hide"} onClick={() => {
          setNavContExpanded(!navContExpanded);
          setIsNavExpanded(!isNavExpanded);
        }}><ImCross/></a> */}
    </div>
           {/* <div className='head-main'>
            <p className='text1'>Lorem ipsum dolor</p>
            <p className='text2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Button2>Register</Button2>
            </div> */}

<main className="mt-10 mx-auto lg:ml-32 max-w-[800px] px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-6xl tracking-tight font-bold text-slate-100 sm:text-5xl md:text-6xl">
                <span className="block fontx inline">HACK</span>{' '}
                <span className="block text-[#05893d]  xl:inline">ODISHA 2.0</span>
              </h1>
              <p className="mt-3 text-base text-slate-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Take charge of your ideas and make a difference with real-life solutions for Odisha at HackOdisha 2.0.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                   Register with Devfolio
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-100 bg-[#05893d] hover:bg-[#037a34] md:py-4 md:text-lg md:px-10"
                  >
                    Join Us as Partner
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