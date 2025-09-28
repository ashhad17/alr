import React, { useState } from 'react';
import './Admin.css'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom'
const Admin = () => {
  const [error,setError]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleLogin=(e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setError(false);
    navigate('/admin-handle');
    // ...
  })
  .catch((error) => {
    setError(true);
  });
  }

 return(<div className="login">
  <form onSubmit={handleLogin}>
    <input type="email" placeholder='Enter email' onChange={e=>setEmail(e.target.value)}/>
    <input type="password" placeholder='Enter Password' onChange={e=>setPassword(e.target.value)}/>
    <button type="submit">Login</button>
    {error && <span>Wrong email or Password</span>}
  </form>
 </div>);
};

export default Admin;
