import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/project'
import Navbar from './components/Navigation/Navbar'


const App = () => {

  return (
    <div className='text-white text-5xl' >
      
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App