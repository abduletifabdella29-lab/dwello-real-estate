import React from 'react'
import herohome from '../assets/images/herohome.jpg'

function HeroSection() {
    return (
        <>
            <div
                className='hidden md:flex bg-[#FEF7F2] w-full min-h-screen bg-no-repeat'
                style={{
                    backgroundImage: `url(${herohome})`,
                    backgroundSize: "75%",
                    backgroundPosition: "right",
                }}>
                <div>
                    <h1 className='pt-33.25 pl-17 font-extrabold text-[65px] leading-[1.1] text-[#2B1B12]'>
                        Find Your <br /> Dream Home
                    </h1>
                    <p className='pt-6 font-bold text-[18px] pl-17 text-[#4F3527]'>
                        Explore our curated selection of exquisite <br />
                        properties meticulously tailored to your <br />
                        unique dream home vision
                    </p>
                    <a href="#">
                        <button className='w-38.5 h-12 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer mt-13.75 ml-17'>
                            Sign up
                        </button>
                    </a>
                </div>
            </div>

            <div className='flex md:hidden bg-[#FEF7F2] w-full min-h-screen'>
                <div className='w-full'>
                    <h1 className='pt-24 px-6 font-extrabold text-[42px] leading-[1.1] text-[#2B1B12]'>
                        Find Your <br /> Dream Home
                    </h1>
                    <p className='pt-6 px-6 max-w-125 font-bold text-[16px] leading-6 text-[#4F3527]'>
                        Explore our curated selection of exquisite properties
                        meticulously tailored to your unique dream home vision
                    </p>
                    <a href="#">
                        <button className='w-38.5 h-12 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer mt-10 ml-6'>Sign up
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HeroSection