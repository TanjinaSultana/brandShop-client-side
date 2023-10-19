/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import SocialLogin from '../social/SocialLogin';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';



const Register = () => {
  const navigate = useNavigate()
    const {signUp,handleUpdateProfile}= useContext(AuthContext) 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [img,setImg] = useState("");
    const [error,setError] = useState("");
    
    const handleRegister = (e) =>{
        e.preventDefault();
        // const name =e.target.name.value;
        // const email =e.target.email.value;
        // const img =e.target.img.value;
        // const password =e.target.password.value;
        if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)        ) {
           setError("")

           if(email){

               signUp(email,password)
               .then(result => {
                handleUpdateProfile(name,img)
                .then(() => {
                  toast.success("user created");
                  navigate('/')
                })
               })
               .catch(err => {
                toast.error(err.message)
               })
           }
          } else {
            setError("Minimum 6 length,One capital Letter,a special chracter")
          }
          

    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Register now!</h1>
    <p className="py-6 font-normal">To Decorate Your Events With Us</p>
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form  className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text" >Name</span>
        </label>
        <input onChange={(e) =>
setName(e.target.value)} type="name" placeholder="name" className="input input-bordered" required name='name' />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text" >Email</span>
        </label>
        <input onChange={(e) =>
setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required name='email' />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text" >Image</span>
        </label>
        <input onChange={(e) =>
setImg(e.target.value)} type="text" placeholder="Image" className="input input-bordered" required name='img'/>
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text"
          >Password</span>
        </label>
        <input onChange={(e)=> setPassword(e.target.value) } type="password" placeholder="password" className="input input-bordered" required  name='password'/>
        <label className="label">
        <p className='text-red-500 mt-2'>{error}</p>
      
        </label>
      </div>
      <div className="form-control mt-6">
        <button  onClick={handleRegister} className="btn  bg-[#FE612C] border-none" type='submit'>Register</button>
        <label className="label">
            Already logged in?
            <Link to="/login" className="label-text-alt link link-hover underline text-xl">Login</Link>
          </label>
  </div>
    </form>
      
</div>
</div>
      </div>
      </div>
    );
};

export default Register;