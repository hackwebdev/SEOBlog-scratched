import { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { isAuth, getCookie } from '../../actions/auth'
import { create } from '../../actions/category'

const Category = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false,
  })

  const { name, error, success, categories, removed } = values
  const token = getCookie('token')

  const clickSubmit = (e) => {
    e.preventDefault()
    // console.log('create category', name)
    create({ name }, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({ ...values, error: false, success: true, name: '' })
      }
    })
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: '',
    })
  }

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
      <div className='relative h-10 input-component mb-5'>
        <label className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
          Name
        </label>

        <input
          type='text'
          className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div>
        <button
          type='submit'
          className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-800 hover:text-blue-900 bg-blue-300 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 mt-5'
        >
          Create
        </button>
      </div>
    </form>
  )

  return <>{newCategoryFom()}</>
}

export default Category
