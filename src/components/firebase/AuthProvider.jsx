/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {  createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,updateProfile
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    } ;
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleUpdateProfile =(name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
  
    useEffect(() =>{
 const unsubscribe  = onAuthStateChanged(auth,(currentUser)  =>{
setUser(currentUser);
setLoading(false)

 });
 return () =>{
    return unsubscribe();
 }
    },[])
    const logout = () =>{
        return signOut(auth)
    }
    const AuthInfo = {
        googleSignIn,
        signUp,
        signInWithEmailAndPassword,
        signIn,
        user,
        logout,
        handleUpdateProfile,
        loading
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;