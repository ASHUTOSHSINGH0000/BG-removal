import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
      <h1 className=" mb-5 sm:mb-10 text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 py-5 py-6 md:py-16"> See the <span className='text-red-600'>magic</span> . Try <span className='text-blue-600'>Now</span>   </h1>
      
      <div className='text-center mb-24' >
                <input type="file" id="upload2" hidden  />
                <label htmlFor="upload2" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-red-500 text-white hover:bg-blue-600 transition duration-300 hover:scale-105'>
                  <img className='h-5' src={assets.upload_btn_icon} alt="upload" />
                  <p className='text-sm'>Upload your image</p>
                </label>
              </div>
    </div>
  )
}

export default Upload
