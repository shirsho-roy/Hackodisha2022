import {React,useRef,useEffect} from 'react'
import SponsorsList from '../../assets/SponsorsList'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from 'classnames';
import styled from 'styled-components';
import SponsorsMobile from './SponsorsMobile';


const Style=styled.a`
#blureffect{
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255,255, 0)); 
     -webkit-backdrop-filter: blur(20px);
     backdrop-filter: blur(20px);
     box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
     border: 1px solid rgba(255, 255, 255, 0.18); 
     border-radius: 32px;
      
    }

@media only screen and (max-width: 768px) {
    #gridItems{
      display: none;
    }
    #Announced{
      display: block;
    }
    .h1,.h2{
      font-size: 40px;
    }
    

}

`
gsap.registerPlugin( ScrollTrigger );


function Sponsors({title,imageUrl}) {
  return (
    <Style>
    <div className={cn("panel")}>
    <div  className=' justify-center md:w-[100vw] sm:w-[100vw] lg:w-[100vw] gap-[10vh] md:gap[5vh] overflow-hidden'>
    <div id='blureffect' className='flex  lg:flex-row md:flex-col sm:flex-col  h-[80vh] w-[90vw] '>
        <div  className='flex flex-col m-[5%]  lg:basis-1/4 md:1/5 relative font-sans'>
            <div>
                <h1 className=' text-white lg:text-[45px] mb-[20px] md:text-[40px] sm:text-[40px] font-medium'>
                Sponsors
            </h1>
            </div>
            
            
            <div>
                <h2 className='text-slate-100 text-3xl leading-[50px] font-medium'>
                    {title}
                </h2>
            </div>
        </div>
        <div className='w-[50vw]   lg:my-10 mx-10 md:my-[0px]'>
        <div className='grid grid-cols-2 gap-[40px]'>
                {imageUrl.map(image=>(
                  <div className='w-[30vw] h-[20vh] justify-center items-center align-middle'>
                    
                    <img src={image} className=' w-[22vw] h-[30vh] p-8 align-middle justify-center items-center' alt="" />
                  </div>
                ))
                }
              </div>
           </div>
        
    </div>
    </div>
    </div>
    </Style>
  )
}



function Sponsors2({title,imageUrl}) {
  return (
    <Style>
    <div  className='flex  lg:flex-row md:flex-col sm:flex-col md:w-[100vw] sm:w-[100vw] lg:w-[100vw] gap-[10vh] md:gap[5vh] overflow-hidden'>
    <div id='blureffect' className='flex mb-[10vh] lg:flex-row md:flex-col sm:flex-col  h-[120vh] w-[80vw] '>
        <div className='flex flex-col w-[50vh] m-[5%] lg:basis-1/4 md:1/5 relative font-sans '>
            <div>
                <h1 className=' text-white lg:text-[45px] mb-[20px] md:text-[40px] sm:text-[40px] font-medium'>
                Sponsors
            </h1>
            </div>
            
            
            <div  className='relative rounded-md h-[5px] w-[100%] '></div>
            <div className='flex flex-col'>
                <h2 className='text-slate-100 text-3xl leading-[50px] font-medium'>
                    {title}
                </h2>
                <div className='flex flex-row flex-wrap justify-center w-[80vw] gap-[50px] mt-[100px] pr-[50px]'>
                {imageUrl.map(image=>(
                  <div className='w-[30vw] h-[20vh] justify-center items-center align-middle'>
                    
                    <img src={image} className=' w-[30vw] h-[30vh] p-8 align-middle justify-center items-center' alt="" />
                  </div>
                ))
                }
              </div>
            </div>
        </div>
        <div id='gridItems' className=' lg:basis-3/5 md:basis-2/6 align-middle  items-start lg:max-w-[60vw] sm:max-w-[500px] md:max-w-[80vw]   text-centers'>
           
           
        </div>
        <br></br>
      </div>
    </div>
    </Style>
  )
}


export default function SponsorsMap() {
  
  const ref = useRef(null);
  useEffect(()=>{
    setTimeout(() => {
      
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      start: "top top",
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 1,
        end: () => `+=${ref.current.offsetWidth}`,
      }
    });
    ScrollTrigger.refresh();
    });
  },[]);
  
  return (
  <div>
    <div ref={ref}  className='hidden lg:block h-[100vh] max-h-[100vh] max-w-[100vw]'>
        <div  className='flex md:flex-col lg:flex-row lg:top-[100px] right-[50px]  lg:left-[120px] md:top-[50px] sm:top-[50px] sm:left-[10px] md:left-[70px] relative '>
        {SponsorsList.map(Sponsor=> (
         <Sponsors
         
         title={Sponsor.title}
         imageUrl={Sponsor.imageUrl}
         tech={Sponsor.Sponsors}
         ></Sponsors>
        ))}
        
    </div>
    </div>
    <div>
    <div className='lg:hidden md:block hidden  max-w-[100vw]'>
        <div  className='flex flex-col lg:top-[100px] right-[50px]  lg:left-[120px] md:top-[50px] sm:top-[50px] sm:left-[10px] md:left-[70px] relative '>
        {SponsorsList.map(Sponsor=> (
         <Sponsors2
         title={Sponsor.title}
         imageUrl={Sponsor.imageUrl}
         tech={Sponsor.Sponsors}
         ></Sponsors2>
        ))}
    </div>
    </div>
    </div>
    <div className='lg:hidden md:hidden block'>
      <SponsorsMobile/>
    </div>
    
  </div>
    
  )
}

