/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../social/SocialLogin';
import toast from 'react-hot-toast';

const Login = () => {
    const {googleSignIn,signIn,user} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate =useNavigate();
    // const handleGoogle =()=>{
    //     googleSignIn().then(result=>{
    //         console.log(result.user);
    //     } )
    // }
    const handleLogin =(e)=>{
        e.preventDefault()
        setError("");
if((email && password)){
 

    signIn(email,password)
    .then(result => {
      toast.success("login success")
      navigate('/');
    }
      )
      .catch(err => setError(err.message))
 
}

    }
    return (
        <div>
          <div className="hero min-h-screen  my-10">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Login now!</h1>
      <p className="py-2 font-medium text-base">To Buy Your Desirable Products</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#f4c8f9]">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e) =>
setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e)=> setPassword(e.target.value) } type="password" placeholder="password" className="input input-bordered" required />
        </div>
          <p className='text-red-500 mt-2'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn border-none text-white bg-[#880ED4]" onClick={handleLogin}>Login</button>
          <label className="label">
            New Here?
            <Link to="/register" className="label-text-alt link link-hover text-xl">Register</Link>
          </label>
          {/* <button onClick={handleGoogle} className="btn btn-primary">Google</button> */}
          <SocialLogin></SocialLogin>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;