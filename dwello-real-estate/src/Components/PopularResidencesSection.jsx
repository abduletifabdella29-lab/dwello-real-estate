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
    <h1 className='w-lg font-extrabold text-[40px] text-[#2B1B12] mx-auto'>Our Popular Residences</h1>

    <div className='pt-13 pb-25 px-26 gap-11 flex'>
        <div className='bg-[#DDC7BB] w-90.5 h-115.5 rounded-2xl overflow-hidden'>
            <img className='w-95.5 h-75' src={popularimg1} />
            <div className='flex pl-4 pt-2'>
                <img className="w-6 h-6 pt-1 object-contain" src={location} />
                <h3 className='w-[256px] h-6 font-bold text-[18px] text-[#2B1B12] pl-2'>San Francisco, California</h3>
            </div>

            <div className='flex pl-4 pt-5'>
                <div className='flex'>
                    <img className='w-6 rounded-md bg-[#F1f1f1]' src={rooms} />
                    <h3 className=' font-semibold text-[18px] text-[#4F3527] ml-2'>4 Rooms</h3>
                </div>
                
                <div className='flex pl-8'>
                    <img className='w-6 rounded-md bg-[#F1f1f1]' src={size} />
                    <h3 className=' font-semibold text-[18px] text-[#4F3527] ml-2'>3,500 sq ft</h3>
                </div>
            </div>

            <div className='flex mt-6 ml-4'>
                <div>
                    <a href="#">
                        <button className="w-24.5 h-9 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer ">Sign up</button>
                    </a>
                </div> 
                <div>
                    <h3 className=' font-bold text-[22px] text-[#4F3527] ml-20'>$2,500,000</h3>
                </div>
            </div>
        </div>
        
        <div className='bg-[#DDC7BB] w-90.5 h-115.5 rounded-2xl overflow-hidden'>
            <img className='w-95.5 h-75' src={popularimg2} />
            <div className='flex pl-4 pt-2'>
                <img className="w-6 h-6 pt-1 object-contain" src={location} />
                <h3 className='w-[256px] h-6 font-bold text-[18px] text-[#2B1B12] pl-2'>Beverly Hills, California</h3>
            </div>

            <div className='flex pl-4 pt-5'>
                <div className='flex'>
                    <img className='w-6 rounded-md bg-[#F1f1f1]' src={rooms} />
                    <h3 className=' font-semibold text-[18px] text-[#4F3527] ml-2'>3 Rooms</h3>
                </div>
                
                <div className='flex pl-8'>
                    <img className='w-6 rounded-md bg-[#F1f1f1]' src={size} />
                    <h3 className=' font-semibold text-[18px] text-[#4F3527] ml-2'>1,500 sq ft</h3>
                </div>
            </div>

            <div className='flex mt-6 ml-4'>
                <div>
                    <a href="#">
                        <button className="w-24.5 h-9 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer ">Sign up</button>
                    </a>
                </div> 
                <div>
                    <h3 className=' font-bold text-[22px] text-[#4F3527] ml-20'>$850,000</h3>
                </div>
            </div>
        </div>

        <div className='bg-[#DDC7BB] w-90.5 h-115.5 rounded-2xl overflow-hidden'>
            <img className='w-95.5 h-75' src={popularimg3} />
            <div className='flex pl-4 pt-2'>
                <img className="w-6 h-6 pt-1 object-contain" src={location} />
                <h3 className='w-[256px] h-6 font-bold text-[18px] text-[#2B1B12] pl-2'>Palo Alto, California</h3>
            </div>

            <div className='flex pl-4 pt-5'>
                <div className='flex'>
                    <img className='w-6 rounded-md bg-[#F1f1f1]' src={rooms} />
                    <h3 className=' font-semibold text-[18px] text-[#4F3527] ml-2'>6 Rooms</h3>
                </div>
                
                <div className='flex pl-8'>
                    <img className='w-6 rounded-md bg-[#F1f1f1]' src={size} />
                    <h3 className=' font-semibold text-[18px] text-[#4F3527] ml-2'>4,000 sq ft</h3>
                </div>
            </div>

            <div className='flex mt-6 ml-4'>
                <div>
                    <a href="#">
                        <button className="w-24.5 h-9 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer ">Sign up</button>
                    </a>
                </div> 
                <div>
                    <h3 className=' font-bold text-[22px] text-[#4F3527] ml-20'>$3,700,000</h3>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default PopularResidencesSection