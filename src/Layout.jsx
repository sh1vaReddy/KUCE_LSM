import { Outlet } from 'react-router-dom'
import Header from './components/Home/Heder'
import Footer from './components/Home/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout