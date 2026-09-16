import React from 'react'
import logo2 from '../assets/icons/logo2.png'
import instagram from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'

function Footer() {
    return (
        <div className='bg-[#DDC7BB] w-full min-h-fit overflow-x-hidden py-12 px-6 sm:px-10 lg:px-10 xl:px-23'>
            <div className='flex flex-col lg:flex-row lg:flex-nowrap lg:items-start gap-10 lg:gap-x-8 xl:gap-x-16'>

                {/* Logo + tagline */}
                <div className='shrink-0 w-full lg:w-auto'>
                    <img className='w-23.25 h-7.25' src={logo2} alt="Logo" />
                    <p className='font-bold text-[18px] pt-5 text-[#4F3527] leading-5 whitespace-nowrap'>
                        Bringing you closer to <br />
                        your dream home, one <br />
                        click at a time.
                    </p>
                </div>

                {/* Group 1: About + Support */}
                <div className='flex flex-row flex-wrap gap-x-10 sm:gap-x-16 md:justify-center gap-y-8 lg:contents'>
                    <div className='flex flex-col shrink-0 w-36 sm:w-40 lg:pl-15'>
                        <h2 className='font-bold text-[22px] text-[#2B1B12] mb-4 whitespace-nowrap'>About</h2>
                        <div className='flex flex-col gap-2'>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Our Story</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Careers</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Our Team</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Resources</a>
                        </div>
                    </div>

                    <div className='flex flex-col shrink-0 w-36 sm:w-40 lg:pl-8'>
                        <h2 className='font-bold text-[22px] text-[#2B1B12] mb-4 whitespace-nowrap'>Support</h2>
                        <div className='flex flex-col gap-2'>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>FAQ</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Contact Us</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Help Center</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Terms of Service</a>
                        </div>
                    </div>
                </div>

                {/* Group 2: Find Us + Social */}
                <div className='flex flex-row flex-wrap gap-x-10 sm:gap-x-16 md:justify-center gap-y-8 lg:contents'>
                    <div className='flex flex-col shrink-0 w-36 sm:w-40 lg:pl-8'>
                        <h2 className='font-bold text-[22px] text-[#2B1B12] mb-4 whitespace-nowrap'>Find Us</h2>
                        <div className='flex flex-col gap-2'>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Events</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Locations</a>
                            <a href="#" className='font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>Newsletter</a>
                        </div>
                    </div>

                    <div className='flex flex-col shrink-0 w-36 sm:w-44 lg:pl-5'>
                        <h2 className='font-bold text-[22px] text-[#2B1B12] mb-4 whitespace-nowrap'>Our Social</h2>
                        <div className='flex flex-col gap-5'>
                            <a href="#" className='flex items-center gap-x-4 font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>
                                <img className='w-5.5 h-5.5 shrink-0' src={instagram} alt="Instagram" />
                                <span>Instagram</span>
                            </a>
                            <a href="#" className='flex items-center gap-x-4 font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>
                                <img className='w-5.5 h-5.5 shrink-0' src={facebook} alt="Facebook" />
                                <span>Facebook</span>
                            </a>
                            <a href="#" className='flex items-center gap-x-4 font-bold text-[18px] text-[#4F3527] whitespace-nowrap'>
                                <img className='w-5.5 h-5.5 shrink-0' src={twitter} alt="Twitter" />
                                <span>Twitter (x)</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <a href="https://github.com/abduletifabdella29-lab" target="_blank">
                    <h1 className='text-center font-bold pt-16 lg:pt-27 text-2xl text-[#4F3527] px-4 whitespace-nowrap'>
                        Bulit By Abduletif Abdella
                    </h1>
                </a>
            </div>
        </div>
    )
}

export default Footer