import Link from 'next/link'
import SigninComponent from '../components/auth/SigninComponent'

const Signin = () => {
  return (
    <>
      <h2 className='text-4xl font-bold text-center mt-10 text-gray-600'>
        Signin
      </h2>
      <div className='mt-10 p-5 bg-gray-100 shadow overflow-hidden sm:rounded-md md:max-w-xl m-auto'>
        <SigninComponent />
      </div>
    </>
  )
}

export default Signin
