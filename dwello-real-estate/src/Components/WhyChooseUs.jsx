import React from 'react'
import locationIcon from '../assets/icons/locationIcon.png'
import service from '../assets/icons/service.png'
import document from '../assets/icons/document.png'
import handshake from '../assets/icons/handshake.png'

function WhyChooseUs() {
    return (
        <>
            <div className='px-4'>
                <h1 className='font-extrabold text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] text-[#2B1B12] text-center'>
                    Why Choose Us
                </h1>

                <p className='font-bold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#4F3527] text-center pt-4 leading-6 sm:leading-7'>
                    Elevating Your Home Buying Experience with Expertise, Integrity,
                    <br />
                    and Unmatched Personalized Service
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center pt-12 sm:pt-14 lg:pt-15 pb-20 lg:pb-29 px-4 sm:px-8 lg:px-12 xl:px-17 gap-6 lg:gap-8'>
                <div className='bg-[#DDC7BB] w-full max-w-63.75 h-67 rounded-2xl px-4 py-9 flex flex-col overflow-hidden'>
                    <img
                        className='bg-[#FBF5F1] rounded-lg py-3 px-3 w-fit'
                        src={locationIcon}
                        alt="Expert Guidance Icon"
                    />

                    <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>
                        Expert Guidance
                    </h3>

                    <p className='font-semibold text-[16px] text-left text-[#4F3527] leading-6'>
                        Benefit from our team's seasoned expertise for a smooth buying experience
                    </p>
                </div>

                <div className='bg-[#DDC7BB] w-full max-w-63.75 h-67 rounded-2xl px-4 py-9 flex flex-col overflow-hidden'>
                    <img
                        className='bg-[#FBF5F1] rounded-lg py-3 px-3 w-fit'
                        src={service}
                        alt="Personalized Service Icon"
                    />

                    <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>
                        Personalized Service
                    </h3>

                    <p className='font-semibold text-[16px] text-left text-[#4F3527] leading-6'>
                        Our services adapt to your unique needs, making your journey stress-free
                    </p>
                </div>

                <div className='bg-[#DDC7BB] w-full max-w-63.75 h-67 rounded-2xl px-4 py-9 flex flex-col overflow-hidden'>
                    <img
                        className='bg-[#FBF5F1] rounded-lg py-3 px-3 w-fit'
                        src={document}
                        alt="Transparent Process Icon"
                    />

                    <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>
                        Transparent Process
                    </h3>

                    <p className='font-semibold text-[16px] text-left text-[#4F3527] leading-6'>
                        Stay informed with our clear and honest approach to buying your home
                    </p>
                </div>

                <div className='bg-[#DDC7BB] w-full max-w-63.75 h-67 rounded-2xl px-4 py-9 flex flex-col overflow-hidden'>
                    <img
                        className='bg-[#FBF5F1] rounded-lg py-3 px-3 w-fit'
                        src={handshake}
                        alt="Exceptional Support Icon"
                    />

                    <h3 className='font-bold text-[18px] text-[#2B1B12] py-3'>
                        Exceptional Support
                    </h3>

                    <p className='font-semibold text-[16px] text-left text-[#4F3527] leading-6'>
                        Providing peace of mind with our responsive and attentive customer service
                    </p>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs