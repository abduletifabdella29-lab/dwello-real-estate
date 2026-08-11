import React from 'react'
import aboutUshome from '../assets/images/aboutUshome.png'

function AboutUsSection() {
    return (
        <div className='mt-70 lg:mt-45 mb-20 w-[90%] m-auto lg:w-full lg:flex'>
            <div className='w-100 m-auto pb-4 lg:ml-20 lg:m-0 lg:w-120 lg:pt-4 lg:h-104'>
                <img src={aboutUshome} alt="home" />
            </div>

            <div className='w-100 m-auto text-center lg:w-auto lg:m-0 lg:text-left'>
                <h1 className='font-extrabold text-[35px] leading-[150%] pb-3 lg:w-128.5 lg:h-28 lg:text-[40px] lg:leading-normal lg:pl-19 lg:pb-0'>
                    We Help You To Find <br /> Your Dream Home
                </h1>

                <p className='font-bold text-[16px] text-[#4F3527] py-2 lg:h-21.75 lg:text-[18px] lg:pl-22 lg:pt-8 lg:py-0'>
                    From cozy cottages to luxurious estates, our <br />
                    dedicated team guides you through every step of the <br />
                    journey, ensuring your dream home becomes a reality
                </p>

                <div className='font-semibold text-[#4F3527] text-[16px] flex py-2 gap-8 justify-center lg:gap-0 lg:py-0 lg:justify-start'>
                    <div className='lg:pt-8 lg:ml-20'>
                        <h1 className='font-bold text-5xl text-[#4F3527] lg:w-39.5 lg:h-20.75 lg:pt-9'>
                            8K+
                        </h1>
                        <p className='font-semibold text-[16px] text-[#4F3527] lg:text-[18px]'>
                            Houses Available
                        </p>
                    </div>

                    <div className='lg:pt-8 lg:pl-5'>
                        <h1 className='font-bold text-5xl text-[#4F3527] lg:w-39.5 lg:h-20.75 lg:pt-9'>
                            6K+
                        </h1>
                        <p className='font-semibold text-[16px] text-[#4F3527] lg:text-[18px]'>
                            Houses Sold
                        </p>
                    </div>

                    <div className='lg:pt-8 lg:pl-5'>
                        <h1 className='font-bold text-5xl text-[#4F3527] lg:w-39.5 lg:h-20.75 lg:pt-9'>
                            2K+
                        </h1>
                        <p className='font-semibold text-[16px] text-[#4F3527] lg:text-[18px]'>
                            Trusted Agents
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection