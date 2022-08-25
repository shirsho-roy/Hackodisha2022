import React from 'react'
import App from './App'
import Team from './components/team/Team'
import { Routes,Route } from 'react-router-dom'


const Home = () => {
  return (
    <Routes>
      <Route path='/team' element={<Team/>}/>
      <Route path='/' element={<App />}/>

      
    </Routes>
    
  )
}

export default Home