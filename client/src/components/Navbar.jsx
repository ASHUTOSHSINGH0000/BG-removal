import React, { use } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()

  return (
    <div className=' flex items-centre justify-between  mx-4 py-3 lg:mx-44'>
      <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="" /></Link>
      {
        isSignedIn
          ? <div>
            <UserButton />
          </div>
          : <button onClick={() => openSignIn({})} className='inline-flex gap-3 px-8 py-2 rounded-full cursor-pointer bg-red-500 text-white hover:bg-blue-600 transition duration-300 hover:scale-105'>
            Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
          </button>
    
    }
    </div>
  )
}

export default Navbar
