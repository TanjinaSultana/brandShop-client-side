
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'


function App() {
  

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
   <Footer></Footer>
   <Toaster></Toaster>
    </>
  )
}

export default App
