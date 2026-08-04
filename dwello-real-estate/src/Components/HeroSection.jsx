import React from 'react'
import herohome from '../assets/images/herohome.jpg'


function HeroSection() {
return (
    <>
    <div className='bg-[#FEF7F2] flex w-full h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${herohome})`,
    backgroundSize: "75%",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",}}>
        <div>
        <h1 className='pt-33.25 pl-17 font-extrabold text-[65px] leading-[1.1] text-[#2B1B12]'>
        Find Your <br /> Dream Home
        </h1>
        <p className='pt-6 font-bold text-[18px] pl-17 text-[#4F3527]'>Explore our curated selection of exquisite <br /> properties meticulously tailored to your <br />unique dream home vision</p>

        <a href="#">
            <button className="w-38.5 h-12 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer mt-13.75 ml-17">Sign up
            </button>
        </a>
        </div>
    </div>
    </>
)
}

export default HeroSection