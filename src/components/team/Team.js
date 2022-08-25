import React,{ useState} from 'react'
import {Link} from 'react-router-dom'
import TeamData from './TeamData' 
import Card from './Card'
import './Card.css'

import CommunityData from './CommunityData'

const Team = () => {
  const [data,setData]= useState(TeamData);
  const [datacom,setDataCom]=useState(CommunityData);
  return (
    <>
    <div className='App  '>
      {/* <div className='text-[48px] text-white flex justify-center pt-8'>Team</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-8 pt-4'>
      {
        data.map((person)=> {
          const {name,image,team,insta,linkedin,github} = person;
          return(
            <div className='flex justify-center color rounded-lg'>    
            <Card  name={name} image={image} team={team} insta={insta} linkedin={linkedin} github={github}/>   
            </div>
          )

        })
      }
      </div> */}
      <div className='text-[32px] md:text-[40px] lg:text-[48px] text-white flex justify-center pt-10'>
        Community Partners
      </div>
      <div className=' flex flex-wrap p-2 lg:p-10 justify-evenly'>
        {
          datacom.map((com)=> {
            const {imglink,contact}=com;
            return(
              <div className='flex justify-center align-middle  mt-4 w-[250px]  p-1 m-2'>
                <a href={contact} className="flex justify-center"><img className=''  src={imglink} alt='a'/></a>
              </div>
            )
          })
        }
      </div>
     
    <div className='flex justify-center'> 
    <Link to='/'><button className='p-4 mb-4 text-2xl rounded-3xl bg-green-800 text-white'>Back to Home Page</button></Link>
    </div>
    </div>
    </>
  )
}

export default Team