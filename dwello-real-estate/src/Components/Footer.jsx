import React from 'react'
import logo2 from '../assets/icons/logo2.png'
import instagram from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'

function Footer() {
return (
    <>
    <div className='bg-[#DDC7BB] w-full h-117.5'>
        <div className='flex pt-19 pl-23'>
            <div>
                <img className='w-23.25 h-7.25' src={logo2} />
                <p className='font-bold text-[18px] pt-5 text-[#4F3527] leading-5'>Bringing you closer to <br />your dream home, one <br />click at a time.</p>
            </div>

            <div className='pl-34 flex flex-col'>
                <h2 className='font-bold text-[22px] text-[#2B1B12]'>About</h2><br />
                <a href="#" className='font-bold text-[18px] pt-2 text-[#4F3527]'>Our Story</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Careers</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Our Team</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Resources</a>
            </div>
            
            <div className='pl-24 flex flex-col'>
                <h2 className='font-bold text-[22px] text-[#2B1B12]'>Support</h2><br />
                <a href="#" className='font-bold text-[18px] pt-2 text-[#4F3527]'>FAQ</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Contact Us</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Help Center</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Terms of Service</a>
            </div>

            <div className='pl-14 flex flex-col'>
                <h2 className='font-bold text-[22px] text-[#2B1B12]'>Find Us</h2><br />
                <a href="#" className='font-bold text-[18px] pt-2 text-[#4F3527]'>Events</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Locations</a><br />
                <a href="#" className='font-bold text-[18px] text-[#4F3527]'>Newsletter</a><br />
            </div>

            <div className='pl-24 flex-col'>
                <h2 className='font-bold text-[22px] text-[#2B1B12] mb-1'>Our Social</h2>

                <a href="#" className='flex items-center gap-x-5 pt-7 font-bold text-[18px] text-[#4F3527]'>
                    <img className='w-5.5 h-5.5' src={instagram} alt="Instagram" />
                    <span>Instagram</span>
                </a>

                <a href="#" className='flex items-center gap-x-5 pt-7 font-bold text-[18px] text-[#4F3527]'>
                    <img className='w-5.5 h-5.5' src={facebook} alt="Facebook" />
                    <span>Facebook</span>
                </a>

                <a href="#" className='flex items-center gap-x-5 pt-6.5 font-bold text-[18px] text-[#4F3527]'>
                    <img className='w-5.5 h-5.5' src={twitter} alt="Twitter" />
                    <span>Twitter (x)</span>
                </a>
            </div>
        </div>

        <div>
            <a href="https://github.com/abduletifabdella29-lab" target="_blank" rel="noopener noreferrer">
                <h1 className='text-center font-bold pt-27 text-2xl text-[#4F3527]'>Bulit By Abduletif Abdella</h1>
            </a>
        </div>
    </div>
    </>
)
}

export default Footer