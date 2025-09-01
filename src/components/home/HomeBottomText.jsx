import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      
      <Link className='text-[6vw] border-2 border-white hover:border-[#d3fd50] hover:text-[#4eae42] rounded-full px-8 py-1 uppercase text-center text-white leading-[6vw]' to='/projects'>Project</Link>
      <Link className='text-[6vw] border-2 border-white hover:border-[#d3fd50] hover:text-[#4eae42] rounded-full px-8 pt-2 uppercase text-center   text-white  leading-[6vw] ' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText