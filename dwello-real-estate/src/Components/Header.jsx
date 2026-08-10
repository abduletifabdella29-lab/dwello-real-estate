import React, { useState } from 'react'
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import user from '../assets/icons/user.png'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='relative w-full bg-[#FEF7F2] cursor-pointer'>
            <div className='hidden md:flex w-full max-w-360 mx-auto items-center justify-between pt-[45.26px] px-6 lg:px-8'>
                <div className='shrink-0'>
                    <img src={logo} alt="logo" />
                </div>
                <nav className='flex items-center gap-1 lg:gap-3'>
                    <a
                        href="#"
                        className='font-bold text-[16px] lg:text-[18px] px-3 lg:px-5 py-2.5 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>
                        Home
                    </a>
                    <a
                        href="#"
                        className='font-bold text-[16px] lg:text-[18px] px-3 lg:px-5 py-2.5 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>
                        Service
                    </a>
                    <a
                        href="#"
                        className='font-bold text-[16px] lg:text-[18px] px-3 lg:px-5 py-2.5 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>
                        Agents
                    </a>
                    <a
                        href="#"
                        className='font-bold text-[16px] lg:text-[18px] px-3 lg:px-5 py-2.5 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>
                        Contact
                    </a>
                </nav>

                <div className='flex items-center gap-4 lg:gap-6 shrink-0'>
                    <a
                        href="#"
                        className='p-2 rounded-lg hover:bg-[#3B2418]/10 transition-all duration-300'>
                        <img src={search} alt="search" />
                    </a>
                    <a
                        href="#"
                        className='p-2 rounded-lg hover:bg-[#3B2418]/10 transition-all duration-300'>
                        <img src={user} alt="user" />
                    </a>
                    <button className='w-30.5 h-12 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300'>
                        Sign up
                    </button>
                </div>
            </div>

            <div className='md:hidden w-full'>
                <div className='flex items-center w-full px-8 py-5'>
                    <div className='mr-auto'>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='flex items-center gap-5 mr-3'>
                        <a
                            href="#"
                            className='p-1 rounded-lg hover:bg-[#3B2418]/10 transition-all duration-300'>
                            <img src={search} alt="search" />
                        </a>
                        <a
                            href="#"
                            className='p-1 rounded-lg hover:bg-[#3B2418]/10 transition-all duration-300'>
                            <img src={user} alt="user" />
                        </a>
                        <button
                            onClick={toggleNavbar}
                            className='text-[#3B2418] cursor-pointer transition-transform duration-500'>
                            {isOpen ? (
                                <RiCloseFill
                                    size={32}
                                    className='transition-all duration-500'
                                />
                            ) : (
                                <RiMenu3Fill
                                    size={32}
                                    className='transition-all duration-500'
                                />
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`
                        absolute top-full left-0 z-50 w-full
                        bg-[#FEF7F2] px-5 pb-7 shadow-lg
                        overflow-hidden
                        transition-all duration-500 ease-in-out
                        ${isOpen
                            ? 'max-h-125 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}
                    `}>
                    <nav className='flex flex-col items-center gap-3 pt-3'>
                        <a
                            href="#"
                            className='w-full text-center font-bold text-[18px] px-5 py-3 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>Home
                        </a>
                        <a
                            href="#"
                            className='w-full text-center font-bold text-[18px] px-5 py-3 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>Service
                        </a>
                        <a
                            href="#"
                            className='w-full text-center font-bold text-[18px] px-5 py-3 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>Agents
                        </a>
                        <a
                            href="#"
                            className='w-full text-center font-bold text-[18px] px-5 py-3 rounded-lg hover:bg-[#3B2418] hover:text-white transition-all duration-300'>Contact
                        </a>
                        <button className='w-full max-w-45 h-12 mt-2 bg-[#3B2418] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300'>Sign up
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header