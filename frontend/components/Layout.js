import { Navbar } from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default Layout
