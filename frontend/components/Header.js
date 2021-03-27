import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import { signout, isAuth } from '../actions/auth'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-gray-100  p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-gray-600 font-bold uppercase tracking-wide'>
              {process.env.APP_NAME}
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 lg:hidden text-gray-500 ml-auto hover:text-gray-400 outline-none '
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex lg:w-auto`}
        >
          {!isAuth() && (
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/signin'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-gray-500  items-center justify-center  hover:text-gray-400 '>
                  Signin
                </a>
              </Link>
              <Link href='/signup'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-gray-500  items-center justify-center  hover:text-gray-400 '>
                  Signup
                </a>
              </Link>
            </div>
          )}

          {isAuth() && isAuth().role === 0 && (
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/user'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-gray-500  items-center justify-center   hover:text-gray-400 cursor-pointer'>{`${
                  isAuth().name
                }'s Dashboard`}</a>
              </Link>
            </div>
          )}

          {isAuth() && isAuth().role === 1 && (
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/admin'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-gray-500  items-center justify-center  hover:text-gray-400 cursor-pointer'>{`${
                  isAuth().name
                }'s Dashboard`}</a>
              </Link>
            </div>
          )}

          {isAuth() && (
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <div
                className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-gray-500  items-center justify-center  hover:text-gray-400 cursor-pointer'
                onClick={() => signout(() => Router.replace(`/signin`))}
              >
                Signout
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
