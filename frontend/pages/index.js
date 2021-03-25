import Link from 'next/link'

const Index = () => {
  return (
    <>
      <h2>Index page</h2>
      <Link href='/signup'>
        <a>Signup</a>
      </Link>
    </>
  )
}

export default Index
