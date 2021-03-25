import { Navbar } from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <p>footer</p>
    </>
  )
}
export default Layout
