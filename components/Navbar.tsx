import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GoogleLogin} from '@react-oauth/google'
import Logo from '../public/logo2.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 '>
        <Link href="/">
            <div className=' flex m-0 p-'>
                <Image src={Logo} className="cursor-pointer w-[70px] md:w-[70px]" alt='logo'/>
                <p className="flex  italic pt-7 pr-1">Video App</p>
            </div>
        </Link>
    </div>
  )
}


export default Navbar