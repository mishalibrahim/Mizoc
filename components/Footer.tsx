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
                        <p className='font-medium sm:text-[36px] text-[24px] '>Mizoc LLC</p>
                    </div>
                    <div className='flex-1 '>
                        <p className='font-semibold sm:text-[64px] text-[44px]'>Lets Get Started</p>
                        <Form />
                    </div>
                </div>
                <div className='flex'>
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
                        <p>&copy; copyright 2024 Mizoc</p>
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
                <button className='w-[200px] h-[60px] rounded-[20px] border-2 border-white' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Footer