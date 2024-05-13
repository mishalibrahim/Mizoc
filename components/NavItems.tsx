import { navItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <div className='bg-gray-200/70 flex  rounded-full p-1'>
        {
            navItems.map((item,index)=>(
                <Link className='flex-center  text-black  px-5 hover:bg-white rounded-full' key={index} href={item.href}>
                    {item.title}
                </Link>
            ))
        }
</div>
  )
}

export default NavItems