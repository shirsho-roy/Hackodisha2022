import React from 'react'
import Logo from './g2700.png';
import Button from '../Buttons/Button';
import Button2 from '../Buttons/Button2';
import "./Header.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from "react";
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <section className="container-center-horizontal">
         <div className="overlap-group-container">
         <div id="navigation-container">
           <div className="Logo">
           <a href="#"> <img src={Logo} alt="No img" height="95px" width="95px" /></a>
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
           <div className='head-main'>
            <p className='text1'>Lorem ipsum dolor</p>
            <p className='text2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Button2>Register</Button2>
            </div>
          </div>      
            
         
        </section>   
  )
}

export default Header