import Link from 'next/link'
import Admin from '../../components/auth/Admin'

const AdminIndex = () => {
  return (
    <Admin>
      <div className='w-full max-w-5xl mx-auto px-4 m-4 '>
        <div className='grid md:grid-cols-12 gap-5 p-4 m-2'>
          <h2 className='ml-5 text-4xl md:col-span-12'>Admin Page</h2>
          <main className='md:col-span-4  '>
            <ul className='list-reset flex flex-col'>
              <li className=' rounded-t relative -mb-px block border p-4 border-grey'>
                <Link href='/admin/crud/category-tag'>
                  <a>Create Category</a>
                </Link>
              </li>
            </ul>
          </main>
          <aside className='md:col-span-8 md:pt-0 p-2 border-2 border-blue-600'>
            right
          </aside>
        </div>
      </div>
    </Admin>
  )
}

export default AdminIndex
