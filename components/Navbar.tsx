import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import Logo from '../public/logo2.png'
import { createOrGetUser } from '@/utils'
import useAuthStore from '@/store/authStore'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io';
import { User } from '@/types'


const Navbar = () => {
  const { user, addUser, removeUser } : {user: any, addUser: any, removeUser: any} = useAuthStore() 


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
            user ? (
              <div className='flex gap-5 md:gap-10'>
                <Link href='/upload'>
                  <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                    <IoMdAdd className='text-xl' />{' '}
                    <span className='hidden md:block'>Upload </span>
                  </button>
                </Link>
                {user?.image && (<Link href={`/profile/${user?._id}`}>
                  <div>
                    <Image className='rounded-full cursor-pointer' src={user?.image} alt='user' width={40} height={40}/>
                  </div>
                </Link>)}
                <button type='button' className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md' 
                  onClick={() => {
                    googleLogout();
                    removeUser()
                  }}
                >
                  <AiOutlineLogout color='red' fontSize={21} />
                </button>
              </div>
            ) : (
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