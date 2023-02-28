import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import Logo from '../public/logo2.png'
import { createOrGetUser } from '@/utils'
import useAuthStore from '@/store/authStore'

const Navbar = () => {
  const { userProfile, addUser } = useAuthStore() 


  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 px-2 md:px-4'>
        <Link href="/">
            <div className=' flex m-0 p-'>
                <Image src={Logo} className="cursor-pointer w-[70px] md:w-[70px]" alt='logo'/>
                <p className="flex  italic pt-7 pr-1">Video App</p>
            </div>
        </Link>

        <div>SEARCH</div>

        <div>
          {
            userProfile ? (<div>{userProfile?.userName}</div>) : (
              <GoogleLogin 
                onSuccess={credentialResponse => createOrGetUser(credentialResponse, addUser)}
                onError={() => {console.log('Login Failed')}}/>
            )
          }
        </div>
        
          
    </div>
  )
}


export default Navbar