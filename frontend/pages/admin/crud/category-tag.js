// import Link from 'next/link'
import Admin from '../../../components/auth/Admin'
import Category from '../../../components/crud/Category'
import Tag from '../../../components/crud/Tag'

const CategoryTag = () => {
  return (
    <Admin>
      <div className='w-full max-w-5xl mx-auto px-4 m-4 '>
        <div className='grid md:grid-cols-12 gap-5 p-4 m-2'>
          <h2 className='ml-5 text-4xl md:col-span-12'>
            Manage Categories and Tags
          </h2>
          <main className='md:col-span-6'>
            <div className=' rounded-t relative -mb-px block border p-4 border-grey'>
              <Category />
            </div>
          </main>
          <aside className='md:col-span-6'>
            <div className=' rounded-t relative -mb-px block border p-4 border-grey'>
              <Tag />
            </div>
          </aside>
        </div>
      </div>
    </Admin>
  )
}

export default CategoryTag
