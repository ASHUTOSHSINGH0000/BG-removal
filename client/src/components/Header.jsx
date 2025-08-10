
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      
      {/* Left Side */}
      <div className='flex-1'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Remove the <br className='max-md:hidden' /> <span className='text-red-600'>background</span> from <br className='max-md:hidden' /> images for free.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className='max-sm:hidden' />
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <div>
          <input type="file" id="upload1" hidden  />
          <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-red-500 text-white hover:bg-blue-600 transition duration-300 hover:scale-105'>
            <img className='h-5' src={assets.upload_btn_icon} alt="upload" />
            <p className='text-sm'>Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1 flex justify-center'>
        <img className='w-full max-w-md' src={assets.header_img} alt="header_image" />
      </div>

    </div>
  )
}

export default Header
