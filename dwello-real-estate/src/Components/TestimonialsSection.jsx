import React from 'react'
import review1 from '../assets/images/review1.png'
import review2 from '../assets/images/review2.png'
import review3 from '../assets/images/review3.png'
import star from '../assets/icons/star.png'
import reviewman1 from '../assets/images/reviewman1.png'
import reviewman2 from '../assets/images/reviewman2.png'
import reviewman3 from '../assets/images/reviewman3.png'
import rightbtn from '../assets/images/rightbtn.png'
import leftbtn from '../assets/images/leftbtn.png'

function TestimonialsSection() {
return (
    <>
    <div className='bg-[#FEF7F2]'>
        <div>
            <h1 className='w-113 py-8 text-center font-extrabold text-[40px] text-[#2B1B12] mx-auto'>What People Say <br />About Dwello</h1>
        </div>

        <div className='pt-6 px-25 gap-7 flex'>
            <div className='bg-[#DDC7BB] w-95 h-95  rounded-2xl overflow-hidden '>
                <img className='w-95 h-35' src={review1} />
                <div className='ml-6 mt-6'>
                    <div className='flex'>
                        <img className='w-14.5 h-14.5' src={reviewman1} />
                            <div>
                                <h2 className='font-bold text-[20px] w-36.75 pl-3 text-[#2B1B12]'>Sarah Nguyen</h2>
                                <h4 className='font-semibold text-[16px] pl-3 text-[#2B1B12] inline'>San francisco</h4>
                            </div>
                            <div className='flex bg-[#f1f1f1] rounded-md w-14.75 h-6 ml-10 mt-7'>
                                <img className='w-4 h-4 mx-1.5  mt-1' src={star} />
                                <h1 className='font-semibold'>5.0</h1>
                            </div>
                    </div>

                    <div className='font-semibold text-[16.5px] text-[#4F3527] w-95.5 h-107.5 pt-3 leading-5'>
                        <p>Dwello truly cares about their clients. <br /> They listened to my needs and <br /> preferences and helped me find the <br /> perfect home in the Bay Area. Their <br /> professionalism and attention to detail <br /> are unmatched.</p>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#DDC7BB] w-95 h-95  rounded-2xl overflow-hidden '>
                <img className='w-95 h-35' src={review2} />
                <div className='ml-6 mt-6'>
                    <div className='flex'>
                        <img className='w-14.5 h-14.5' src={reviewman2} />
                            <div>
                                <h2 className='font-bold text-[20px] w-46.8 pl-3 text-[#2B1B12]'>Michael Rodriguez</h2>
                                <h4 className='font-semibold text-[16px] pl-3 text-[#2B1B12] inline'>San Diego</h4>
                            </div>
                            <div className='flex bg-[#f1f1f1] rounded-md w-14.75 h-6 mt-7'>
                                <img className='w-4 h-4 mx-1.5  mt-1' src={star} />
                                <h1 className='font-semibold'>4.5</h1>
                            </div>
                    </div>

                    <div className='font-semibold text-[16.5px] text-[#4F3527] w-95.5 h-107.5 pt-3 leading-5'>
                        <p>I had a fantastic experience working <br /> with Dwello. Their expertise and <br /> personalized service exceeded my <br /> expectations. I found my dream home <br /> quickly and smoothly. Highly <br /> recommended!</p>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#DDC7BB] w-95 h-95  rounded-2xl overflow-hidden '>
                <img className='w-95 h-35' src={review3} />
                <div className='ml-6 mt-6'>
                    <div className='flex'>
                        <img className='w-14.5 h-14.5' src={reviewman3} />
                            <div>
                                <h2 className='font-bold text-[20px] w-36.75 pl-3 text-[#2B1B12]'>Emily Johnson</h2>
                                <h4 className='font-semibold text-[16px] pl-3 text-[#2B1B12] inline'>Los Angeles</h4>
                            </div>
                            <div className='flex bg-[#f1f1f1] rounded-md w-14.75 h-6 ml-10 mt-7'>
                                <img className='w-4 h-4 mx-1.5  mt-1' src={star} />
                                <h1 className='font-semibold'>5.0</h1>
                            </div>
                    </div>

                    <div className='font-semibold text-[16.5px] text-[#4F3527] w-95.5 h-107.5 pt-3 leading-5'>
                        <p>Dwello made my dream of owning a <br /> home a reality! Their team provided <br /> exceptional support and guided me <br /> through every step of the process. I <br /> couldn't be happier with my new home!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='justify-center gap-10 flex py-10'>
            <div>
                <button>
                    <img src={leftbtn} />
                </button>
            </div>

            <div>
                <button>
                    <img src={rightbtn} />
                </button>
            </div>
        </div>
    </div>
    </>
)
}

export default TestimonialsSection