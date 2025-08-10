// import React, { useState } from 'react'
// import { assets } from '../assets/assets'

// const BgSlider = () => {
//     const [sliderPosition , setSliderPosition] = useState(50)

//     const handleSliderChange = (e) => {
//         setSliderPosition ( e.target.value)
//     }
//   return (
//     <div>
//         <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 front-semibold '> Remove Background With High <br />  <span className='text-blue-600'> Quality</span> and   <span className='text-red-600'> Accuracy </span></h1>
        

//         <div className='relative w-sm w-full overflow-hidden m-auto rounded-xl'> 
//           <img src={assets.image_w_bg} style={{clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)  `}} alt="" />
//           <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg}  style={{clipPath: `inset(0 0 0 ${sliderPosition}%)  `}}  alt="" />
//           <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-10 slider ' type="range"  min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>
//         </div>
//     </div>
//   )
// }

// export default BgSlider





import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

    return (
        <div className="pb-10 md:py-20 mx-2">
            <h1 className=" mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                Remove Background With High <br />
                <span className="text-blue-600">Quality</span> and <span className="text-red-600">Accuracy</span>
            </h1>
            <br />

            <div className="relative max-w-3xl w-full mx-auto overflow-hidden rounded-xl">
                <img
                    src={assets.image_w_bg}
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    className="w-full h-auto object-cover"
                    alt="With Background"
                />
                <img
                    src={assets.image_wo_bg}
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Without Background"
                />

                <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10  slider"
                />
            </div>
        </div>
    )
}

export default BgSlider

