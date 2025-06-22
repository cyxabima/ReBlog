import React from 'react'


function Logo({ width = "100px" , flex }) {
  return (
    <div className='flex items-center flex-col'>
      <img src="https://carento-client-site.vercel.app/logo.png" alt="" className='w-[50px]'/>
      <h6 className='text-black font-bold text-xl text-center'>Carento Blog</h6>
    </div>
  )
}

export default Logo