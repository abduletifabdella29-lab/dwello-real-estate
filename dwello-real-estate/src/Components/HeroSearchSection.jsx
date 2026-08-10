import React from 'react'
import location from '../assets/icons/location.png'
import home from '../assets/icons/home.png'
import price from '../assets/icons/price.png'

function HeroSearchSection() {
    return (
        <div className='bg-[#FBF5F1] sm:mb-40 h-44 lg:h-15'> 
            <div className='bg-[#DDC7BB] w-86 h-88 m-auto rounded-2xl lg:flex lg:w-230 lg:h-30 py-10 lg:m-auto items-center'>
                <div className="relative w-48 h-12 bg-[#FBF5F1] rounded-lg flex items-center -mt-1.25 ml-20 my-8 lg:m-auto">
                    <input type="text" placeholder="Location" className="w-full h-full bg-transparent pl-4 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
                    <button className="absolute right-3">
                    <img src={location} alt="Location" className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative w-48 h-12 bg-[#FBF5F1] rounded-lg flex items-center -mt-1.25 ml-20 my-8 lg:m-auto">
                    <input type="text" placeholder="Type" className="w-full h-full bg-transparent pl-4 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
                    <button className="absolute right-3">
                    <img src={home} alt="Location" className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative w-48 h-12 bg-[#FBF5F1] rounded-lg flex items-center -mt-1.25 ml-20 my-8 lg:m-auto">
                    <input type="text" placeholder="Price Range" className="w-full h-full bg-transparent pl-4 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
                    <button className="absolute right-3">
                    <img src={price} alt="Location" className="w-5 h-5" />
                    </button>
                </div>
                
                <div className='w-39 h-14 rounded-lg ml-30 flex justify-between items-center mt-8 lg:m-10'>
                    <button className='w-30.5 h-12 bg-[#3B2418] text-white font-semibold rounded-lg px-8 py-2 hover:opacity-90 transition-all duration-300 mt-2 shadow-sm'>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSearchSection
