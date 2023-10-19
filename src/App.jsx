
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import './dark-theme.css'
import './light-theme.css'

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  

  
    
     return (
  <div className="App" data-theme={isDarkTheme ? 'dark' : 'light'}>
  
    <Header toggleTheme={toggleTheme}></Header>
    {/* <button onClick={toggleTheme} className='btn mx-'>Toggle Theme</button> */}
    <Outlet></Outlet>
   <Footer></Footer>
   <Toaster></Toaster>
  </div>
);

   
    
  
}

export default App
