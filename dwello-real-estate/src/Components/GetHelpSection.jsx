import React from 'react'
import verify from '../assets/icons/verify.png'
import email from '../assets/icons/email.png'

function GetHelpSection() {
return (
    <div className='flex flex-col items-center px-4'>
        <h1 className='w-full max-w-166.5 mt-12 md:mt-20 lg:mt-30 text-center font-extrabold text-[28px] sm:text-[32px] md:text-[40px] text-[#2B1B12]'>Do You Have Any Questions?<br />Get Help From Us</h1>

        <div className='flex flex-col sm:flex-row items-center justify-center mt-6 gap-4 sm:gap-9'>
            <div className='flex items-center'>
                <img src={verify} />
                <h1 className='font-bold text-[16px] sm:text-[18px] text-[#543E32] pl-2'>Chat live with our support team</h1>
            </div>
            <div className='flex items-center'>
                <img src={verify} />
                <h1 className='font-bold text-[16px] sm:text-[18px] text-[#543E32] pl-2'>Browse our FAQ</h1>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center mt-10 sm:mt-14 mb-16 sm:mb-24 md:mb-33 gap-4 sm:gap-7 w-full max-w-166.5'>
            <div className="relative w-full sm:w-115">
                <div className="absolute py-3.5 left-0 flex items-center pl-4">
                    <img 
                        src={email} 
                        alt="Email" 
                        className="w-6 h-6 object-contain"
                    />
                </div>

                <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full h-13 bg-[#E2C7B9] text-[#543E32] placeholder-[#543E32] text-[16px] sm:text-[18px] font-semibold py-3.5 pl-11 pr-4 rounded-lg"
                />
            </div>

            <div className='w-full sm:w-auto'>
                <a href="#">
                    <button className="w-full sm:w-40 h-13 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">Submit
                    </button>
                </a>
            </div>
        </div>
    </div>
)
}

export default GetHelpSection