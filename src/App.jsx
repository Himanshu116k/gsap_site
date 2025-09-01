import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project.jsx'
import Navbar from './components/Navigation/Navbar'
import FullScreanNav from './components/Navigation/FullScreanNav'


const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreanNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App