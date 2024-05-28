import { socialLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='relative bottom-0 rounded-t-[40px] overflow-hidden z-20 bg-gradient-to-b from-primary from-0% to-[#532753] to-100% '>
            <div className='absolute z-[-10] h-full  bg-no-repeat bg-cover mix-blend-color-burn w-full bg-[url("/assets/images/footer-bg.svg")] bg-primary'></div>
            <div className='wrapper '>
                <div className='flex justify-between sm:flex-row flex-col sm:pt-10 sm:pb-0 pb-4 pt-8'>
                    <div className='flex-1 '>
                        <p className='font-medium sm:text-[36px] text-[24px] text-white'>Mizoc LLC</p>
                    </div>
                    <div className='flex-1 '>
                        <p className='font-semibold sm:text-[64px] text-[44px] text-white'>Lets Get Started</p>
                        <Form />
                    </div>
                </div>
                <div className='flex justify-between flex-col sm:flex-row'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex gap-[20px]'>
                            {
                                socialLinks.map((item,index)=>(
                                    <Link className='w-[40px] h-[40px]'key={index} href={item.link}>
                                        <Image src={item.src} width={60} height={60} alt='title' className=''/>
                                    </Link>
                                ))
                            }
                        </div>
                        <p className='text-white'>&copy; copyright 2024 Mizoc</p>
                    </div>
                    <div className='flex sm:items-center  justify-end flex-col gap-1'>
                        <div className='flex  gap-2'><Email/>
                       <Link href='mailto:sales@mizoc.com' className='text-white'>sales@mizoc.com</Link></div>
                        <div className='flex  gap-2'><Phone/>
                        <Link href='tel:+971501452837' className='text-white min-w-[145px]'>+971501452837</Link></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
const Form = () => {
    return (
        <form className='flex flex-col gap-[17px]'>
            <div className='flex sm:flex-row flex-col gap-[17px]'>
                <label className='w-full h-[60px]'>
                    <input placeholder='Name' className='form-input' />
                </label>
                <label className='w-full h-[60px]'>
                    <input placeholder='Email' className='form-input' />
                </label>
            </div>
            <label className='w-full max-h-[150px] h-[120px]'>
                <textarea placeholder='About' className='form-textarea' />
            </label>
            <div className='flex justify-end'>
                <button className='w-[200px] h-[60px] rounded-[20px] border-2 border-white text-white' type='submit'>Submit</button>
            </div>
        </form>
    )
}
const Email=()=> {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>
    )
}
const Phone=()=> {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      
    )
}
export default Footer


