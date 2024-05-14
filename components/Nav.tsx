'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Nav = () => {
    const [isOpen,setisOpen] = useState(false)
    const [isScrolling,setIsScrolling] =useState(false)
    const [isActive,setIsActive] =useState('')
    const handleScroll =()=>{
        if(window.scrollY >= window.innerHeight ){
            setIsScrolling(true)
        }
        else{
            setIsScrolling(false)
        }
        const sections = document.querySelectorAll('section');

        const scrollPosition = window.scrollY + 400; 

        sections.forEach((section)=>{
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            console.log(top,bottom,scrollPosition);
            
            if(scrollPosition >= top && scrollPosition <= bottom){
                setIsActive(section.id)
                console.log(section.id);
                
            }
        })
        console.log(isActive);
        
        
    }
    useEffect(()=>{
    
        window.addEventListener('scroll',handleScroll)

        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        <header className='w-full fixed top-0 z-30 max-h-[100px]'>
            <div className={`wrapper w-full ${isScrolling ? 'flex-center':'flex flex-col'} transition-all ease-in-out duration-700 `}>
                <div className={`flex justify-between transition-all duration-700 
                 ${isScrolling && 'md:w-[80vw] md:h-[55px] rounded-full md:px-10 md:py-1 md:bg-[#53275312] md:backdrop-blur-[16px]'} `}>
                    <div className='w-[100px]'>
                    <div className={`w-[40px] ${isScrolling && 'w-[34px]'} transition-all ease-in-out duration-500 h-auto flex-center`}>
                        <Image src='/assets/images/miszocLogo.png' width={50} height={60} alt='logo' className='object-cover w-full ' />
                    </div>
                    </div>
                    <nav className='md:flex hidden '>
                        <NavItems scroll={isScrolling} active={isActive}/>
                    </nav>
                    <div className='hidden md:flex-center round-dot relative'>
                        <Link className='flex text-black pl-3' href='contactUs'>Contact us</Link>
                    </div>
                    {/* mobile nav */}
                    <div className='flex flex-col justify-center md:hidden ' onClick={(e)=>{
                        e.preventDefault();
                        setisOpen(!isOpen)}}>
                        <div className='h-[30px] w-full flex  flex-col justify-between'>
                            <span className={`w-[40px] ${isOpen && 'opacity-0' } h-1 bg-primary transition-all rounded-full`} ></span>
                            <span className={`  w-[40px] ${isOpen ? 'ml-0 w-[60px] rotate-[-45deg] relative top-[-3px] z-50 bg-white ':'ml-2' }  h-1 duration-700 bg-primary transition-all rounded-full`}></span>
                            <span className={`w-[40px] ${isOpen && 'w-[60px] rotate-[45deg] relative top-[-15px] z-50 bg-white' } h-1 bg-primary transition-all rounded-full`}></span>
                        </div>
                    </div>
                </div>
            </div>
                 <MobileNav active={isOpen}  />
        </header>
    )
}

export default Nav