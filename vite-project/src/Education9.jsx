import React from 'react'

// props

function Education9({name,profession}) {
  return (
    <div className=' flex flex-col items-center gap-1'>
        <img src="https://templates.hibootstrap.com/eduon/default/assets/img/teachers-img/teachers-img-1.jpg" alt="" />
      <p className='text-[1.3rem] font-semibold'>{name}</p>
      <p className='text-red-500'>{profession}</p>
    </div>
   
  )
}

export default Education9