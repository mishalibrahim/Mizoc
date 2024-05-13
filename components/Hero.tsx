import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className='w-full my-[100px]  rounded-tl-[100px] rounded-br-[100px] bg-light'>
      <div className='wrapper  h-full'>
        <div className='flex flex-col lg:flex-row gap-20 lg:gap-0 lg:justify-between h-full md:px-5 py-10 '>
          <div className='flex flex-col lg:flex-1 gap-[35px] justify-center '>
            <h3 className='font-medium text-primary sm:text-[24px] text-[16px] '>Welcome to {''}<span className='sm:text-[30px] text-[20px] font-medium relative
             before:content-[""] before:bg-[url("/assets/images/underline.svg")] before:absolute sm:before:bottom-[-40px] before:bottom-[-34px] before:w-full before:h-full  before:bg-no-repeat before:bg-cover before:bg-center '>MIZOC LLC </span> </h3>
            <h2 className='font-medium md:text-[40px] text-[26px] bg-gradient-to-r from-[#D94791]  to-primary bg-clip-text text-transparent'> Your one-stop solutions for all energy needs.</h2>
            <div className='flex flex-col sm:flex-row sm:gap-[35px] gap-5 '>
              <button className='sm:h-[60px] h-[50px] flex-center hover:shadow-xl transition-all bg-primary rounded-[40px] px-10 text-white uppercase'>contact Us</button>
              <button className='sm:h-[60px] h-[50px] flex-center border-black/70 border-2 hover:shadow-xl transition-all rounded-[40px] px-10 text-black uppercase'>our Services</button>
            </div>
          </div>
          <div className='lg:flex-1 flex-center '>
            <div className='relative min-h-[400px] md:min-h-[600px] w-[300px]'>
            <div className='sm:w-[280px] sm:h-[502px] w-[200px] h-[400px] sm:translate-x-[-2.5rem] translate-y-[-2rem] top-0 sm:bottom-0 sm:my-auto left-0  bg-primary rounded-tl-[100px] absolute'></div>
            <div className='absolute  top-0 sm:bottom-0 sm:my-auto  left-0 z-10 sm:w-[330px]  sm:h-[490px] w-[250px] h-auto translate-x-10 sm:translate-x-10 translate-y-8'>
            <Image className=' object-cover ' src='/assets/images/heroImage.png' width={330} height={490} alt='hero' />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero