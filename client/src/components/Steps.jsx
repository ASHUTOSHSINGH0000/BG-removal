import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='  mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 '> Steps to remove <span className='text-blue-600'>background </span> <br /> image in <span className='text-red-600'>seconds</span>  </h1>
      <div className='flex items-start flex-wrap gap-4 mt-16 xl;mt-24 justify-center'>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.upload_icon} alt="" />
            <div>
                <p className='text-x1 font-medium'> 1) Upload image </p>
                <p className='text-sm text-neutral-500 mt-1'>This is a demo text , will replace it later. <br />This is a dem0....</p>
            </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
            <div>
                <p className='text-x1 font-medium'>2) Remove background  </p>
                <p className='text-sm text-neutral-500 mt-1'>This is a demo text , will replace it later. <br />This is a dem0....</p>
        </div>
        </div> 
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.download_icon} alt="" />
            <div>
                <p className='text-x1 font-medium'>3) Download image </p>
                <p className='text-sm text-neutral-500 mt-1'>This is a demo text , will replace it later. <br />This is a dem0....</p>
            </div>
        </div>
      
      </div>

      
        
      

    
       

      
    </div>
  )
}

export default Steps
