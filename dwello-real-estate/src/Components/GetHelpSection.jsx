import React from 'react'
import verify from '../assets/icons/verify.png'
import email from '../assets/icons/email.png'

function GetHelpSection() {
return (
    <>
    <div>
        <h1 className='w-166.5 mt-30 text-center font-extrabold text-[40px] text-[#2B1B12] mx-auto'>Do You Have Any Questions?<br />Get Help From Us</h1>
    </div>

    <div className='flex mt-6 ml-90'>
        <div className=''>
            <img src={verify} />
        </div>
        <div>
            <h1 className='w-75.25 font-bold text-[18px] text-[#543E32] pl-2'>Chat live with our support team</h1>
        </div>
        <div className='pl-9'>
            <img src={verify} />
        </div>
        <div>
            <h1 className='w-75.25 font-bold text-[18px] text-[#543E32] pl-2'>Browse our FAQ</h1>
        </div>
    </div>

    <div className='flex ml-80 mt-14 mb-33'>
        <div className="relative">
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
            className="w-115 h-13 bg-[#E2C7B9] text-[#543E32] placeholder-[#543E32] text-[18px] font-semibold py-3.5 pl-11 pr-4 rounded-lg"
            />
        </div>

        <div>
            <a href="#">
                <button className="w-40 h-13 ml-7 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">Submit
                </button>
            </a>
        </div>
    </div>
    </>
)
}

export default GetHelpSection