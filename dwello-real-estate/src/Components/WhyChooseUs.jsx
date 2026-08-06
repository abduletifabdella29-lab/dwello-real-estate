import React from 'react'
import locationIcon from '../assets/icons/locationIcon.png'
import service from '../assets/icons/service.png'
import document from '../assets/icons/document.png'
import handshake from '../assets/icons/handshake.png'
function WhyChooseUs() {
return (
    <>
    <div>
        <h1 className='w-83.75 h-14 font-extrabold text-[40px] text-[#2B1B12] mx-auto'>Why Choose Us</h1>
        <p className='font-bold text-[18px] text-[#4F3527] text-center px-auto pt-4'>Elevating Your Home Buying Experience with Expertise, Integrity, <br /> and Unmatched Personalized Service</p>
    </div>

    <div className='flex justify-between pt-15 pb-29 px-17 gap-8'>
        <div className='bg-[#DDC7BB] pl-4 pr-8 py-9 w-63.75 h-67 rounded-2xl'>
            <img className='bg-[#FBF5F1] rounded-lg py-3 px-3' src={locationIcon} />
            <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>Expert Guidance </h3>
            <p className='font-semibold text-[16px] text-left text-[#4F3527]'>Benefit from our team's <br /> seasoned expertise for a <br /> smooth buying experience</p>
        </div>

        <div className='bg-[#DDC7BB] pl-4 pr-8 py-9 w-63.75 h-67 rounded-2xl'>
            <img className='bg-[#FBF5F1] rounded-lg py-3 px-3' src={service} />
            <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'> Personalized Service</h3>
            <p className='font-semibold text-[16px] text-left text-[#4F3527]'>Our services adapt to your <br /> unique needs, making your <br /> journey stress-free</p>
        </div>

        <div className='bg-[#DDC7BB] pl-4 pr-8 py-9 w-63.75 h-67 rounded-2xl'>
            <img className='bg-[#FBF5F1] rounded-lg py-3 px-3' src={document} />
            <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>Transparent Process</h3>
            <p className='font-semibold text-[16px] text-left text-[#4F3527]'>Stay informed with our <br /> clear and honest approach <br /> to buying your home</p>
        </div>

        <div className='bg-[#DDC7BB] pl-4 pr-8 py-9 w-63.75 h-67 rounded-2xl'>
            <img className='bg-[#FBF5F1] rounded-lg py-3 px-3' src={handshake} />
            <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>Exceptional Support</h3>
            <p className='font-semibold text-[16px] text-left text-[#4F3527]'>Providing peace of mind <br /> with our responsive and <br /> attentive customer service</p>
        </div>
    </div>
    </>
)
}

export default WhyChooseUs