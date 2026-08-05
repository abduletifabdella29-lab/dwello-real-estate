import React from 'react'
import location from '../assets/icons/location.png'
import home from '../assets/icons/home.png'
import price from '../assets/icons/price.png'

function HeroSearchSection() {
return (
    <>
    <div className='bg-[#FEF7F2] h-17.5'>
        <div className="flex bg-[#DDC7BB] w-237.5 mb-34 ml-35 rounded-2xl py-10 pl-7 pr-10 focus:outline-none shadow-sm">
            <div className="relative w-55">
                <input
                type="text"
                placeholder="Location"
                className="w-full bg-[#FAF5F0] text-[#695346] placeholder-[#695346] font-bold py-3 pl-4 pr-10 rounded-lg focus:outline-none shadow-sm "
            />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img 
                    src={location} 
                    alt="Location" 
                    className="w-[14.6px] h-[17.5px] object-contain"
                />
                </div>
            </div>

            <div className="relative w-55 ml-5.75">
                <input
                type="text"
                placeholder="Type"
                className="w-full bg-[#FAF5F0] text-[#695346] placeholder-[#695346] font-bold py-3 pl-4 pr-10 rounded-lg focus:outline-none shadow-sm "
            />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img 
                    src={home} 
                    alt="Location" 
                    className="w-4 h-[15.81px] object-contain"
                />
                </div>
            </div>

            <div className="relative w-55 ml-5.75">
                <input
                type="text"
                placeholder="Price Range"
                className="w-full bg-[#FAF5F0] text-[#695346] placeholder-[#695346] font-bold py-3 pl-4 pr-10 rounded-lg focus:outline-none shadow-sm "
            />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img 
                    src={price} 
                    alt="Location" 
                    className="w-5.5 h-5.5 object-contain"
                />
                </div>
            </div>

            <a href="#">
            <button className="w-39 h-12 ml-15 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">Sign up
            </button>
            </a>
        </div>
    </div>
    </>
)
}

export default HeroSearchSection