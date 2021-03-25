import { useState } from 'react'

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: 'Sha',
    email: 'sha@gmail.com',
    password: '123456',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  })

  const { name, email, password, error, loading, message, showForm } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table({ name, email, password, error, loading, message, showForm })
  }

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value })
  }

  return (
    <div className='mt-10 p-5 bg-gray-100 shadow overflow-hidden sm:rounded-md md:max-w-xl m-auto'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-6 gap-6'>
          <div className='col-span-6 sm:col-span-5'>
            <label
              htmlFor='email_address'
              className='block text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <input
              onChange={handleChange('name')}
              type='text'
              value={name}
              className='mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              aria-label='email address'
              placeholder='Enter your name'
            />
          </div>
          <div className='col-span-6 sm:col-span-5'>
            <label
              htmlFor='email_address'
              className='block text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <input
              onChange={handleChange('email')}
              type='email'
              value={email}
              className='mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              aria-label='email address'
              placeholder='Enter your Email'
            />
          </div>
          <div className='col-span-6 sm:col-span-5'>
            <label
              htmlFor='email_address'
              className='block text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <input
              onChange={handleChange('password')}
              type='password'
              value={password}
              className='mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              aria-label='Type your Password'
              placeholder='Enter your Password'
            />
          </div>
        </div>
        <div className=' py-5  text-left '>
          <button
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 hover:text-gray-900 bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupComponent
