import React from 'react'

const SignupComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submit')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='p-8 w-full '>
      <form className=' w-full' onSubmit={handleSubmit}>
        <div className='block'>
          <input
            onChange={handleChange}
            type='text'
            className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
            id='name'
            aria-label='email address'
            placeholder='Enter your name'
          />
        </div>
        <div className='block'>
          <input
            onChange={handleChange}
            type='text'
            className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
            id='email'
            aria-label='email address'
            placeholder='Enter your Email'
          />
        </div>
        <div className='block'>
          <input
            onChange={handleChange}
            type='password'
            className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
            id='password'
            aria-label='Type your Password'
            placeholder='Enter your Password'
          />
        </div>
        <div className='block'>
          <button
            className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r'
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
