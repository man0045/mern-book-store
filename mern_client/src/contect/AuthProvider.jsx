import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
// import { } from "firebase/auth";

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const creteUser = (email, password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 }
 const loginwithGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth, googleprovider)
 }

 const login=(email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 }

 const logOut=()=>{
  return signOut(auth);
 }

 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
   console.log(currentUser);
   setUser(currentUser);
   setLoading(false);
  });
  return () => {
   return unsubscribe();
  }
 })
 const authInfo = {
  user,
  creteUser,
  loginwithGoogle,
  loading,
  login,
  logOut
 }
  return (
    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

