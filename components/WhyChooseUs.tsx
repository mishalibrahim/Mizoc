import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section id='why-choose-us' className='w-full h-full sm:my-[100px]'>
        <div className='wrapper flex flex-col'>
            <h2 className='text-4xl font-medium text-primary  sm:text-center sm:ms-0 xl:mb-[100px] mb-12'>Why Choose Us</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[15px] xl:grid-rows-2 '>
                <div className='grid-item xl:col-span-2 flex flex-col'>
                    <div className='w-[60px] h-[60px]'>
                        <Image src='/assets/images/grid-1.svg' width={60} height={60} alt='grid-1.svg'/>
                    </div>
                    <h4 className='font-medium lg:text-[24px] bg-gradient-to-r from-primary from-0% to-primary/60 to-[100%] bg-clip-text text-transparent to'>Industry Expertise</h4>
                    <p className='font-regular text-[16px] text-black'>
                    Our team offers seasoned industry expertise, ensuring clients benefit from informed solutions tailored to their needs.
                    </p>
                </div>
                <div className='grid-item xl:col-span-2 col-[1_/_span_1.5] flex flex-col'>
                <div className='w-[60px] h-[60px]'>
                        <Image src='/assets/images/grid-3.svg' width={60} height={60} alt='grid-1.svg'/>
                    </div>
                    <h4 className='font-medium lg:text-[24px] bg-gradient-to-r from-primary from-0% to-primary/60 to-[100%] bg-clip-text text-transparent to'>Innovative Solutions</h4>
                    <p className='font-regular text-[16px] text-black'>
                    Committed to innovation, we develop creative strategies that address market challenges and opportunities, keeping clients ahead of the curve.
                    </p>
                </div>
                <div className='grid-item flex flex-col'>
                <div className='w-[60px] h-[60px]'>
                        <Image src='/assets/images/grid-2.svg' width={60} height={60} alt='grid-1.svg'/>
                    </div>
                    <h4 className='font-medium lg:text-[24px] bg-gradient-to-r from-primary from-0% to-primary/60 to-[100%] bg-clip-text text-transparent to'>Global Network</h4>
                    <p className='font-regular text-[16px] text-black'>
                    We facilitate seamless collaborations across borders to support clients globally. </p>
                </div>
                <div className='grid-item flex flex-col'>
                <div className='w-[60px] h-[60px]'>
                        <Image src='/assets/images/grid-6.svg' width={60} height={60} alt='grid-1.svg'/>
                    </div>
                    <h4 className='font-medium lg:text-[24px] bg-gradient-to-r from-primary from-0% to-primary/60 to-[100%] bg-clip-text text-transparent to'> Reliability </h4>
                    <p className='font-regular text-[16px] text-black'>
                    Clients trust us for consistent and dependable support.
                    </p>
                </div>
                <div className='grid-item xl:col-span-2 flex flex-col'>
                <div className='w-[60px] h-[60px]'>
                        <Image src='/assets/images/grid-5.svg' width={60} height={60} alt='grid-1.svg'/>
                    </div>
                    <h4 className='font-medium lg:text-[24px] bg-gradient-to-r from-primary from-0% to-primary/60 to-[100%] bg-clip-text text-transparent to'>Customer-Centric Approach</h4>
                    <p className='font-regular text-[16px] text-black'>
                    We prioritize understanding clients' unique requirements to deliver personalized solutions that exceed expectations and foster lasting relationships.
                    </p>
                </div>
                <div className='grid-item xl:col-span-2 flex flex-col'>
                <div className='w-[60px] h-[60px]'>
                        <Image src='/assets/images/grid-4.svg' width={60} height={60} alt='grid-1.svg'/>
                    </div>
                    <h4 className='font-medium lg:text-[24px] bg-gradient-to-r from-primary from-0% to-primary/60 to-[100%] bg-clip-text text-transparent to'>Quality Assurance</h4>
                    <p className='font-normal text-[16px] text-black'>
                    We maintain rigorous quality assurance processes, ensuring consistent delivery of products and services that meet or exceed industry standards.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs