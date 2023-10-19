/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle =(e)=>{
        e.preventDefault()
        googleSignIn().
        then(result=>{
            toast.success("login succes with google");
            navigate("/");
        } )
    }
    return (
        <div className='ml-32'>
             <button onClick={handleGoogle} className="btn bg-[#FE612C] border-none">Google</button>
            
        </div>
    );
};

export default SocialLogin;