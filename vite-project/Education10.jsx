import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Education10() {
  return (
    <div className=' flex flex-col gap-3 items-start border border-green-900 relative'>
     <img src="https://templates.hibootstrap.com/eduon/default/assets/img/single-course/single-course.jpg" alt="" />
     <p className=' text-[1.3rem] font-bold hover:text-[#ffb607]'>Course Description</p>
     <p className='w-[45rem] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has svived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
     <p className='text-[1.3rem] font-bold hover:text-[#ffb607]'>Certification Online</p>
     <p className='w-[45rem] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
     <div className=' flex flex-col text-start gap-2'>
      <p className='text-[1.3rem] font-bold hover:text-[#ffb607]'>What you’ll learn?</p>
      <div className=' flex items-center gap-2 pl-6'>
      <FaCheck className='text-[#ffb607] h-6 w-6' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className=' flex items-center gap-2 pl-6'>
      <FaCheck className='text-[#ffb607] h-6 w-6' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className=' flex items-center gap-2 pl-6'>
      <FaCheck  className='text-[#ffb607] h-6 w-6'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className=' flex items-center gap-2 pl-6'>
      <FaCheck  className='text-[#ffb607] h-6 w-6'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
     </div>
     <p className='text-[1.3rem] font-bold hover:text-[#ffb607]'>Who This Course is for</p>
     <p className='w-[45rem] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

     <div className='border border-red-500  w-[20rem] absolute top-0'>
      i am aysuh
     </div>
    </div>
  )
}

export default Education10