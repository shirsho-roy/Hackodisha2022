import {React,useRef,useEffect} from 'react'
import SponsorsList from '../../assets/SponsorsList'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from 'classnames';
import styled from 'styled-components';


const Style=styled.a`
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
    <div  className='flex  lg:flex-row md:flex-col sm:flex-col md:w-[100vw] sm:w-[100vw] lg:w-[100vw] gap-[10vh] md:gap[5vh] overflow-hidden'>
        <div className='flex flex-col w-[50vh] lg:basis-1/4 md:1/5 relative font-sans'>
            <div>
                <h1 className=' text-white lg:text-[45px] mb-[20px] md:text-[40px] sm:text-[40px] font-medium'>
                Sponsors
            </h1>
            </div>
            
            
            <div style={{backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%`}} className='relative rounded-md h-[5px] w-[100%] '></div>
            <div>
                <h2 className='text-slate-100 text-3xl leading-[50px] font-medium'>
                    {title}
                </h2>
            </div>
        </div>
        <div id='gridItems' className=' lg:basis-3/5 md:basis-2/6 align-middle  items-start lg:max-w-[60vw] sm:max-w-[500px] md:max-w-[80vw]   text-centers'>
           <div className='grid grid-cols-3  gap-[30px] md:gap-[10px] lg:my-10 md:my-[0px]'>
                {imageUrl.map(image=>(
                    <div className='flex m-5 w-[200px] justify-center items-center border-solid border-white border-[3px] rounded-[3vh] '>
                      <p className="text-slate-100">To be Announced..</p>
                    <img src={imageUrl} className='block my-[25%]  mx-[10%] align-middle justify-center items-center' alt="" />
                    </div>
                  
                ))
                }
           </div>
           
        </div>
        <div>
            <h1 id='Announced' className='hidden text-white text-5xl'>To Be Announced...</h1>
        </div>
    </div>
    </div>
    </Style>
  )
}



export default function SponsorsMap() {
  
  const ref = useRef(null);
  useEffect(()=>{
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
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
    
    <div ref={ref}  className=' h-[100vh] max-h-[100vh] max-w-[100vw]'>
        <div  className='flex flex-nowrap lg:top-[100px] right-[50px]  lg:left-[120px] md:top-[50px] sm:top-[50px] sm:left-[10px] md:left-[70px] relative '>
        {SponsorsList.map(Sponsor=> (
         <Sponsors
         
         title={Sponsor.title}
         imageUrl={Sponsor.imageUrl}
         tech={Sponsor.Sponsors}
         ></Sponsors>
        ))}
    </div>
    </div>
  )
}

