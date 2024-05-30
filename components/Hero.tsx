import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  
  return (
    <section id='hero' className='w-full my-[100px]  rounded-tl-[100px] rounded-br-[100px] bg-light'>
        <div className='relative w-full h-full flex-center'>
          <Image src='/assets/images/bg-hero.jpeg' width={1280} height={800} alt='bg-hero' className='w-full sm:aspect-auto aspect-[4/6] max-h-[calc(100vh-95px)] object-cover'/>
          <div className='flex flex-col lg:flex-1  justify-center absolute top-0 wrapper bottom-0  my-auto'>
            <h3 className=' text-white lg:text-[8rem] md:text-[5rem] text-[3rem] font-bold'> MIZOC LLC </h3>
            <h2 className='font-medium md:text-[32px] max-w-[440px] text-[18px] text-white'> Your one-stop solutions for all energy needs.</h2>
            <div className='flex flex-col sm:flex-row sm:gap-[35px] gap-5 pt-7'>
              <Link href='#contactUs'> <button className='sm:h-[60px] h-[50px] w-[200px] sm:w-[auto] flex-center hover:shadow-xl transition-all bg-white rounded-[40px] px-10 text-primary uppercase'>contact Us</button></Link>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col lg:flex-row gap-20 lg:gap-0 lg:justify-between h-full md:px-5 py-10 '>
          <div className='flex flex-col lg:flex-1  justify-center '>
            <h3 className=' text-primary sm:text-[80px] text-[20px] font-medium'> MIZOC LLC </h3>
            <h2 className='font-medium md:text-[40px] text-[26px] bg-gradient-to-r from-[#D94791]  to-primary bg-clip-text text-transparent'> Your one-stop solutions for all energy needs.</h2>
            <div className='flex flex-col sm:flex-row sm:gap-[35px] gap-5 pt-7'>
              <button className='sm:h-[60px] h-[50px] flex-center hover:shadow-xl transition-all bg-primary rounded-[40px] px-10 text-white uppercase'>contact Us</button>
            </div>
          </div>
          <div className='lg:flex-1 flex-center '>
            <div className='relative min-h-[400px] sm:min-h-[600px] w-[300px]'>
            <div className='sm:w-[280px] sm:h-[502px] w-[200px] h-[400px] sm:translate-x-[-2.5rem] translate-y-[-2rem] top-0 sm:bottom-0 sm:my-auto left-0  bg-primary rounded-tl-[100px] absolute'></div>
            <div className='absolute  top-0 sm:bottom-0 sm:my-auto  left-0 z-10 sm:w-[330px]  sm:h-[490px] w-[250px] h-auto translate-x-10 sm:translate-x-10 translate-y-8'>
            <Image className=' object-cover ' src='/assets/images/heroImage.png' width={330} height={490} alt='hero' />
            </div>
            </div>
          </div>
        </div> */}
    </section>
  )
}

export default Hero