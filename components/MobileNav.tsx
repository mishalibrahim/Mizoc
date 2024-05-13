'use client'
import { mobileNavItems } from '@/constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Link from 'next/link'

const MobileNav = ({active}:{active:boolean}) => {
    useGSAP(()=>{
        active ? gsap.to('#nav-open',{x:0,y:0,ease:'power2.inOut',duration:0.8,opacity:1})
               : gsap.to('#nav-open',{x:0,y:-1000,ease:'power2.inOut',duration:0.8,opacity:0})
               active ? gsap.to('.nav-text',{y:0,ease:'power2.inOut',duration:0.8,opacity:1,stagger:0.5})
               : gsap.to('.nav-text',{y:-10,ease:'power2.inOut',duration:0.8,opacity:0,stagger:0.4})
    },[active])
  return (
    <>
    {

        <div id='nav-open' className='fixed h-full w-full z-40 bg-primary top-0 translate-y-[100vh]  opacity-0'>
        <div className='flex justify-center h-full flex-col p-10'>
            {
                mobileNavItems.map((item,index)=>(
                    <Link  className='text-[36px] font-medium py-5 text-white border-b-2 nav-text opacity-0 translate-y-[-10px]' href={item.title} key={index}>{item.title}</Link>
                ))
            }
        </div>
    </div>
    }
  </>
  )
}

export default MobileNav