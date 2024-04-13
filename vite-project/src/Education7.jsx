import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

const Education7 = () => {
    return(
       <div className='text-start flex flex-col gap-6'>
        <p className='text-[#ffb607] font-semibold'>Education For All</p>
        <p className='text-[1.5rem] font-bold w-[25rem]'>Why create an online course with  <span className='text-[#ffb607]'>EDUON</span> ?</p>
        <p className='text-[1rem] w-[40rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dolor sit amet, consectetur adipiscing elit consectetur.</p>
        <p className='text-[1rem] w-[40rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur adipiscing elit.</p>
        <div className=' flex flex-col gap-5 '>
            <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
            <IoCheckmarkCircle className='text-[#ffb607] h-6 w-6' />
                <p className='text-[1rem] font-semibold'>Unlimited everything</p>
            </div>
            <div className='flex  items-center gap-2'>
            <IoCheckmarkCircle className='text-[#ffb607] h-6 w-6' />
                <p className='text-[1rem] font-semibold'>No technical headaches</p>
            </div>
            </div>
            <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
            <IoCheckmarkCircle className='text-[#ffb607] h-6 w-6' />
                <p className='text-[1rem] font-semibold'>No transaction fees</p>
            </div>
            <div className='flex  items-center gap-2'>
            <IoCheckmarkCircle  className='text-[#ffb607] h-6 w-6'/>
                <p className='text-[1rem] font-semibold'>Free migrations</p>
            </div>
            </div>
          
        
           
        </div>
       </div>

    )
}

export default Education7