import React from 'react'
//import './Loader.css'
import './style.css'
import './style.css.map'



const Loader = () => {
  return (
    <div className="wrapper">
    <div className="ball"></div>
    <div className="side-1">
        <span></span>
        <span></span>
    </div>
    <div className="side-2">
        <span></span>
        <span></span>
    </div>
    <div className="side-3--half side-3--1">
        <span></span>
        <span></span>
    </div>
    <div className="side-3--half side-3--2">
        <span></span>
        <span></span>
    </div>
</div>
  )
}

export default Loader