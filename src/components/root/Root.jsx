// import React from 'react';
// import { Outlet } from 'react-router-dom'

// //import Header from './components/header/Header'
// import Footer from '../footer/Footer'
// import Header from '../header/Header';
// import { Toaster } from 'react-hot-toast'
// import { useState } from 'react'
// import '../../dark-theme.css'
// import '../../light-theme.css'
// const Root = () => {
//     const [isDarkTheme, setIsDarkTheme] = useState(false);
//     const toggleTheme = () => {
//       setIsDarkTheme(!isDarkTheme);
//     };
//     return (
//         <div className="App" data-theme={isDarkTheme ? 'dark' : 'light'}>
  
//     <Header toggleTheme={toggleTheme}></Header>
//     {/* <button onClick={toggleTheme} className='btn mx-'>Toggle Theme</button> */}
//     <Outlet></Outlet>
//    <Footer></Footer>
//    <Toaster></Toaster>
//   </div>
//     );
// };

// export default Root;