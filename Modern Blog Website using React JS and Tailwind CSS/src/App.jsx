import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* all the children of the router will render in outlet*/}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
