import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import AddProduct from './components/addProduct/AddProduct.jsx';
import BrandDb from './components/brandDB/BrandDb.jsx';
import BrandDetails from './components/brandDetails/BrandDetails.jsx';
import MyCart from './components/mycart/MyCart.jsx';
import Update from './components/update/Update.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import AuthProvider from './components/firebase/AuthProvider.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import PrivateRoute from './components/firebase/PrivateRoute.jsx';
//import Root from './components/root/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
    element: <Home></Home>,
   loader:() => fetch('/data.json'),
      },
      {
        path: "/add",
    element: 
    <PrivateRoute>
  <AddProduct></AddProduct>
    </PrivateRoute>
  
      },
      {
        path: "/update/:_id",
    element: <PrivateRoute>

      <Update></Update>
    </PrivateRoute>,
    loader: ({params})  => fetch(`https://brand-shop-server-side-two.vercel.app/brand/${params._id}`)
  
      },
      {
        path: "/carts",
    element: <PrivateRoute>
      <MyCart></MyCart>
    </PrivateRoute>,
    loader: ()  => fetch(`https://brand-shop-server-side-two.vercel.app/cart`)
   
  
      },
      {
        path: "/brand/:brand",
        element: <BrandDb></BrandDb>,
        loader: ()  => fetch(`https://brand-shop-server-side-two.vercel.app/brand`)
      },
      {
        path: "/:_id",
        element: <PrivateRoute>
       <BrandDetails></BrandDetails>
        </PrivateRoute>,
        loader: ()  => fetch(`https://brand-shop-server-side-two.vercel.app/brand`)
       
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
     
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
