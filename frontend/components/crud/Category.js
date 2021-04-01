import { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { isAuth, getCookie } from '../../actions/auth'
import { create, getCategories, removeCategory } from '../../actions/category'

const Category = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false,
  })

  const { name, error, success, categories, removed, reload } = values
  const token = getCookie('token')

  useEffect(() => {
    loadCategories()
  }, [reload])

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
        setValues({ error: true })
      } else {
        setValues({ ...values, categories: data })
      }
    })
  }

  const showCategories = () => {
    return categories.map((c, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(c.slug)}
          title='Double click to delete'
          key={i}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2 mx-1 '
        >
          {c.name}
        </button>
      )
    })
  }

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      'Are you sure you want to delete this category?'
    )
    if (answer) {
      deleteCategory(slug)
    }
  }

  const deleteCategory = (slug) => {
    // console.log('delete', slug)
    removeCategory(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: '',
          removed: !removed,
          reload: !reload,
        })
      }
    })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    // console.log('create category', name);
    create({ name }, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          error: false,
          success: true,
          name: '',
          // removed: !removed,
          reload: !reload,
        })
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

  const showSuccess = () => {
    if (success) {
      return (
        <p className='flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3'>
          Category is created
        </p>
      )
    }
  }

  const showError = () => {
    if (error) {
      return <p className='text-danger'>Category already exist</p>
    }
  }

  const showRemoved = () => {
    if (removed) {
      return (
        <p className='flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3'>
          Category is removed
        </p>
      )
    }
  }

  const mouseMoveHandler = (e) => {
    setValues({ ...values, error: false, success: false, removed: '' })
  }

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
      <div className='relative h-10 input-component mb-5'>
        <label className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
          Name
        </label>

        <input
          type='text'
          className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 '
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 '
        >
          Create
        </button>
      </div>
    </form>
  )

  return (
    <>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      <div onMouseMove={mouseMoveHandler}>
        {newCategoryFom()}
        {showCategories()}
      </div>
    </>
  )
}

export default Category
