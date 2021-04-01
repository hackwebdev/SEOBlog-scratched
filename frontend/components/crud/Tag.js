import { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { getCookie } from '../../actions/auth'
import { create, getTags, removeTag } from '../../actions/tag'

const Tag = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false,
    tags: [],
    removed: false,
    reload: false,
  })

  const { name, error, success, tags, removed, reload } = values
  const token = getCookie('token')

  useEffect(() => {
    loadTags()
  }, [reload])

  const loadTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ error: true })
        console.log(data.error)
      } else {
        setValues({ ...values, tags: data })
      }
    })
  }

  const showTags = () => {
    return tags.map((t, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(t.slug)}
          title='Double click to delete'
          key={i}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2 mx-1 '
        >
          {t.name}
        </button>
      )
    })
  }

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete this tag?')
    if (answer) {
      deleteTag(slug)
    }
  }

  const deleteTag = (slug) => {
    // console.log('delete', slug);
    removeTag(slug, token).then((data) => {
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
          Tag is created
        </p>
      )
    }
  }

  const showError = () => {
    if (error) {
      return (
        <p className='flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3'>
          Tag already exist
        </p>
      )
    }
  }

  const showRemoved = () => {
    if (removed) {
      return (
        <p className='flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3'>
          Tag is removed
        </p>
      )
    }
  }

  const mouseMoveHandler = (e) => {
    setValues({ ...values, error: false, success: false, removed: '' })
  }

  const newTagForm = () => (
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
        {newTagForm()}
        {showTags()}
      </div>
    </>
  )
}

export default Tag
