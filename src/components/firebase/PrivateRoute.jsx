/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
   if(loading) return<h1 className="text-5xl">loading</h1>
    if(user){
   return children;
   }
   return <Navigate to="/login" replace></Navigate>
   
};

export default PrivateRoute;