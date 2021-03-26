import Link from 'next/link'
import SignupComponent from '../components/auth/SignupComponent'

const Signup = () => {
  return (
    <>
      <h2 className='text-4xl font-bold text-center mt-10 text-gray-600'>
        Signup
      </h2>
      <div className='mt-10 p-5 bg-gray-100 shadow overflow-hidden sm:rounded-md md:max-w-xl m-auto'>
        <SignupComponent />
      </div>
    </>
  )
}

export default Signup
