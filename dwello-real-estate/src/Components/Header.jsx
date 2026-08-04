import React from 'react'
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import user from '../assets/icons/user.png'

function Header() {
return (
    <>
    <div className='flex bg-[#FEF7F2] pt-[45.26px] cursor-pointer'>
        <div className='flex pt-3 pl-17'>
            <div><img src={logo} alt="logo" /></div>
            <a href='#' className='ml-60 font-bold text-[18px]'>Home</a>
            <a href='#' className='pl-15 font-bold text-[18px]'>Service</a>
            <a href='#' className='pl-15 font-bold text-[18px]'>Agents</a>
            <a href='#' className='pl-15 font-bold text-[18px]'>Contact</a>

            <div className='pl-30'><a href="#"><img src={search} alt="search" /></a></div>
            <div className='pl-7 pr-10'><a href="#"><img src={user} alt="user" /></a></div>
        </div>

        <div className='ml-2'>
            <a href="#">
            <button className="w-30.5 h-12 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">Sign up
            </button>
            </a>
        </div>    
    </div>
    </>
)
}

export default Header