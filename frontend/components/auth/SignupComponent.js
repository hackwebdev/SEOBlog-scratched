import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import { isAuth, signup } from '../../actions/auth'

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
    // console.table({ name, email, password, error, loading, message, showForm })

    setValues({ ...values, loading: true, error: false })
    const user = { name, email, password }

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false })
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false,
          message: data.message,
          showForm: false,
        })
      }
    })
  }

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value })
  }

  useEffect(() => {
    isAuth() && Router.push(`/`)
  }, [])

  const showLoading = () =>
    loading ? (
      <div className='flex items-center bg-green-300 text-white text-sm font-bold px-4 py-3'>
        Loading...
      </div>
    ) : (
      ''
    )
  const showError = () =>
    error ? (
      <div className='flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3'>
        {error}
      </div>
    ) : (
      ''
    )
  const showMessage = () =>
    message ? (
      <div className='flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3'>
        {message}
      </div>
    ) : (
      ''
    )

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label
            htmlFor='email_address'
            className='block text-sm font-medium text-gray-700'
          >
            Name
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
        <div className='mb-5'>
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
        <div>
          <label
            htmlFor='email_address'
            className='block text-sm font-medium text-gray-700'
          >
            Password
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
        <div className=' pt-5  text-left '>
          <button
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-800 hover:text-blue-900 bg-blue-300 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300'
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </form>
    )
  }

  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
    </>
  )
}

export default SignupComponent
