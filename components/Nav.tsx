'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Nav = () => {
    const [isOpen,setisOpen] = useState(false)
    return (
        <header className='w-full h-full fixed top-0 z-30 max-h-[100px] '>
            <div className='wrapper'>
                <div className='flex justify-between'>
                    <div className='w-[40px]  h-auto flex-center'>
                        <Image src='/assets/images/mizocLogo.png' width={50} height={60} alt='logo' className='object-cover w-full ' />
                    </div>
                    <nav className='md:flex hidden min-h-14'>
                        <NavItems />
                    </nav>
                    <div className='hidden md:flex-center round-dot relative'>
                        <Link className='flex text-black pl-3' href='contactUs'>Contact us</Link>
                    </div>
                    {/* mobile nav */}
                    <div className='flex flex-col justify-center md:hidden ' onClick={(e)=>{
                        e.preventDefault();
                        setisOpen(!isOpen)}}>
                        <div className='h-[40px] w-full flex  flex-col justify-between'>
                            <span className={`w-[60px] ${isOpen && 'opacity-0' } h-1 bg-primary transition-all rounded-full`} ></span>
                            <span className={`  w-[60px] ${isOpen ? 'ml-0 w-[60px] rotate-[-45deg] relative top-[-3px] z-50 bg-white ':'ml-2' }  h-1 duration-700 bg-primary transition-all rounded-full`}></span>
                            <span className={`w-[60px] ${isOpen && 'w-[60px] rotate-[45deg] relative top-[-20px] z-50 bg-white' } h-1 bg-primary transition-all rounded-full`}></span>
                        </div>
                    </div>
                </div>
            </div>
                 <MobileNav active={isOpen} />
        </header>
    )
}

export default Nav