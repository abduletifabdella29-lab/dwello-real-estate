import React from 'react'
import popularimg1 from '../assets/images/popularimg(1).png'
import popularimg2 from '../assets/images/popularimg(2).png'
import popularimg3 from '../assets/images/popularimg(3).png'
import location from '../assets/icons/location.png'
import rooms from '../assets/icons/rooms.png'
import size from '../assets/icons/size.png'

function PopularResidencesSection() {
    return (
        <>
            <h1 className='w-72 sm:w-lg font-extrabold text-4xl sm:text-[40px] text-[#2B1B12] mx-auto text-center'>
                <span>Our Popular </span>
                <span>Residences</span>
            </h1>

            <div className='pt-13 pb-25 px-4 sm:px-6 md:px-8 xl:px-26 grid grid-cols-1 justify-items-center gap-14 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-12 xl:flex xl:justify-center xl:gap-11'>

                <div className='bg-[#DDC7BB] w-90.5 h-115.5 lg:w-80 lg:h-104 xl:w-90.5 xl:h-115.5 rounded-2xl overflow-hidden'>
                    <img className='w-full h-75 lg:h-64 xl:h-75 object-cover' src={popularimg1} />

                    <div className='flex items-center gap-2 px-4 pt-3'>
                        <img className='w-6 h-6 object-contain shrink-0' src={location} />
                        <h3 className='font-bold text-[18px] leading-6 text-[#2B1B12]'>
                            San Francisco, California
                        </h3>
                    </div>

                    <div className='grid grid-cols-2 gap-3 px-4 pt-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-6 rounded-md bg-[#F1f1f1] shrink-0' src={rooms} />
                            <h3 className='font-semibold text-[18px] text-[#4F3527]'>
                                4 Rooms
                            </h3>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img className='w-6 rounded-md bg-[#F1f1f1] shrink-0' src={size} />
                            <h3 className='font-semibold text-[18px] text-[#4F3527]'>
                                3,500 sq ft
                            </h3>
                        </div>
                    </div>

                    <div className='flex items-center justify-between px-4 mt-6'>
                        <a href="#">
                            <button className='w-24.5 h-9 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer'>
                                Sign up
                            </button>
                        </a>

                        <h3 className='font-bold text-[22px] text-[#4F3527]'>
                            $2,500,000
                        </h3>
                    </div>
                </div>

                <div className='bg-[#DDC7BB] w-90.5 h-115.5 lg:w-80 lg:h-104 xl:w-90.5 xl:h-115.5 rounded-2xl overflow-hidden'>
                    <img className='w-full h-75 lg:h-64 xl:h-75 object-cover' src={popularimg2} />

                    <div className='flex items-center gap-2 px-4 pt-3'>
                        <img className='w-6 h-6 object-contain shrink-0' src={location} />
                        <h3 className='font-bold text-[18px] leading-6 text-[#2B1B12]'>
                            Beverly Hills, California
                        </h3>
                    </div>

                    <div className='grid grid-cols-2 gap-3 px-4 pt-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-6 rounded-md bg-[#F1f1f1] shrink-0' src={rooms} />
                            <h3 className='font-semibold text-[18px] text-[#4F3527]'>
                                3 Rooms
                            </h3>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img className='w-6 rounded-md bg-[#F1f1f1] shrink-0' src={size} />
                            <h3 className='font-semibold text-[18px] text-[#4F3527]'>
                                1,500 sq ft
                            </h3>
                        </div>
                    </div>

                    <div className='flex items-center justify-between px-4 mt-6'>
                        <a href="#">
                            <button className='w-24.5 h-9 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer'>
                                Sign up
                            </button>
                        </a>

                        <h3 className='font-bold text-[22px] text-[#4F3527]'>
                            $850,000
                        </h3>
                    </div>
                </div>

                <div className='bg-[#DDC7BB] w-90.5 h-115.5 lg:w-80 lg:h-104 xl:w-90.5 xl:h-115.5 rounded-2xl overflow-hidden md:col-span-2 md:justify-self-center lg:col-span-1'>
                    <img className='w-full h-75 lg:h-64 xl:h-75 object-cover' src={popularimg3} />

                    <div className='flex items-center gap-2 px-4 pt-3'>
                        <img className='w-6 h-6 object-contain shrink-0' src={location} />
                        <h3 className='font-bold text-[18px] leading-6 text-[#2B1B12]'>
                            Palo Alto, California
                        </h3>
                    </div>

                    <div className='grid grid-cols-2 gap-3 px-4 pt-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-6 rounded-md bg-[#F1f1f1] shrink-0' src={rooms} />
                            <h3 className='font-semibold text-[18px] text-[#4F3527]'>
                                6 Rooms
                            </h3>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img className='w-6 rounded-md bg-[#F1f1f1] shrink-0' src={size} />
                            <h3 className='font-semibold text-[18px] text-[#4F3527]'>
                                4,000 sq ft
                            </h3>
                        </div>
                    </div>

                    <div className='flex items-center justify-between px-4 mt-6'>
                        <a href="#">
                            <button className='w-24.5 h-9 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer'>
                                Sign up
                            </button>
                        </a>

                        <h3 className='font-bold text-[22px] text-[#4F3527]'>
                            $3,700,000
                        </h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PopularResidencesSection