import React from 'react'

const ProjectCard = (props) => {
  return (
<>          <div className='w-1/2     group transition-all relative rounded-none   hover:rounded-[55px] overflow-hidden h-full '>
          <img className='h-full w-full object-cover' src={props.image1} alt="" srcset="" />
            
            <div  className=' opacity-0 transition-all group-hover:opacity-100 absolute flex justify-center  items-center top-0 left-0 h-full w-full bg-black/10'>
              
              <h2 className='uppercase font-[font1] text-3xl p-2.5 px-5 text-white      border-4 rounded-full'>
               View project 
              </h2>
            </div>
          </div>
          <div className='w-1/2     group transition-all relative rounded-none   hover:rounded-[55px] overflow-hidden h-full '>
          <img className='h-full w-full object-cover' src={props.image2} alt="" srcset="" />
            
            <div  className=' opacity-0 transition-all group-hover:opacity-100 absolute flex justify-center  items-center top-0 left-0 h-full w-full bg-black/10'>
              
              <h2 className='uppercase font-[font1] text-3xl p-2.5 px-5 text-white      border-4 rounded-full'>
               View project 
              </h2>
            </div>
          </div>
          </>
 
 
)
}

export default ProjectCard