import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Brand from './components/brand/Brand.jsx';
import AddProduct from './components/addProduct/AddProduct.jsx';
import BrandDb from './components/brandDB/BrandDb.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
    element: <Home></Home>,
   loader:() => fetch('data.json'),
      },
      {
        path: "/add",
    element: <AddProduct></AddProduct>
  
      },
      {
        path: "/brand/:brand",
        element: <BrandDb></BrandDb>,
        loader: ()  => fetch(`http://localhost:5000/brand`)
      },
     
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
