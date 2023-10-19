import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import {  FaCartArrowDown } from 'react-icons/fa';
const Header = ({toggleTheme}) => {
  const {user,logout} = useContext(AuthContext);
  const handleLogOut = () =>{
    logout().then()
  }
 
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
       
        
      </ul>
    </div>
    <div className=" flex ">
     <img src="re-logo.png" className="w-[70px] h-[70px]" alt="logo" />
    <h2 className=" mt-4 normal-case text-3xl">ReMerce</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-2xl">
    <Link to="/" className="text-base font-medium mr-4">Home</Link>
        <Link to="/add" className="text-base font-medium mr-4">Add Product</Link>
        
    </ul>
  </div>
  <div className="navbar-end">
  {
     user?
     (
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.photoURL} className="rounded-full w-[50px] h-[50px]" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
          <h4 className="font-normal text-xl">{user?.displayName}</h4>
          </a>
        </li>
        
        <li> <a className="btn border-none text-white bg-[#880ED4] mt-4 py-2 " onClick={handleLogOut}>Logout</a></li>
      </ul>
    </div>
     ):
     <Link to="/login" className="btn border-none text-white bg-[#880ED4] mr-4">Login</Link>
   }
    <button onClick={toggleTheme} className="btn mx-2">Theme</button>
    <Link to="/carts" className=" w-[20px] h-[50px] text-3xl mx-2  "> <FaCartArrowDown /></Link>
  </div>
</div>
        </div>
    );
};

export default Header;