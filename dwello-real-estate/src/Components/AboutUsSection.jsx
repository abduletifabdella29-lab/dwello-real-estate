import React from 'react'
import aboutUshome from '../assets/images/aboutUshome.png'

function AboutUsSection() {
return (
    <>
    <div className='mt-45 mb-20 flex'>
        <div className='ml-20 w-130.75 h-104'>
            <img src={aboutUshome} alt="home" />
        </div>
        
        <div>
            <h2 className='w-128.5 h-28 font-extrabold text-[40px] text-[#2B1B12] pl-19'>We Help You To Find <br /> Your Dream Home</h2>

            <p className=' h-21.75 font-bold text-[18px] text-[#4F3527] pl-22 pt-8'>From cozy cottages to luxurious estates, our <br /> dedicated team guides you through every step of the <br />journey, ensuring your dream home becomes a reality</p>

            <div className='flex'>
                <div className='pt-8 ml-20'>
                    <h1 className='w-39.5 h-20.75 font-bold text-5xl pt-9 text-[#4F3527]'>8K+ </h1>
                    <p className=' font-semibold text-[18px] text-[#4F3527]'>Houses Available</p>
                </div>

                <div className='pt-8 pl-5'>
                    <h1 className='w-39.5 h-20.75 font-bold text-5xl pt-9 text-[#4F3527]'>6K+ </h1>
                    <p className=' font-semibold text-[18px] text-[#4F3527]'>Houses Sold</p>
                </div>

                <div className='pt-8 pl-5'>
                    <h1 className='w-39.5 h-20.75 font-bold text-5xl pt-9 text-[#4F3527]'>2K+ </h1>
                    <p className=' font-semibold text-[18px] text-[#4F3527]'>Trusted Agents</p>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default AboutUsSection