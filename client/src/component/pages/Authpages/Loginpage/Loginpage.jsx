import React from 'react'
import Layout from '../../../layout/Layout'
import { useState } from 'react'
import Toast from 'react-hot-toast'
import axios from'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/Auth'
import styles from "./Loginpage.module.css"

const Loginpage = () => {
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[auth,setAuth]=useAuth();
  const navigate=useNavigate()
  const location =useLocation()
  const submitandler=async (e)=>{
    e.preventDefault();
    try{
const res = await axios.post(`ap/v1/auth/login`,{
  email,password}); 
if (res && res.data.success){
  Toast.success('user register successfully');
setAuth({
  ...auth,
  user:res.data.user,
  Token:res.data.jwttoken
});
localStorage.setItem('auth',JSON.stringify(res.data))
  navigate(location.state || '/')
}else{
  Toast.error('something went wrong')}
  }catch(error){
console.log(error)
} 
  }
  return (
    <>
    <Layout>
    <div className={styles.container}> 
    <form onSubmit={submitandler} className={styles.formcontiner}>
    <h1 className={styles.m}>Login Form</h1>
  
  <div className={styles.m}>
   
   <input type="email" className="" placeholder='Enter your email' value={email}
    onChange={(e)=>setemail(e.target.value)} required />
   
 </div>
 <div className={styles.m}>
   
   <input type="password" className="" placeholder='Enter your password' value={password} 
   onChange={(e)=>setpassword(e.target.value)} required /> 
 </div>
 <div className={styles.m}>
 <button type="submit" className={styles.btn} onClick={()=>{navigate('/forgot-Password')}}>ForgotPassword</button>
 </div>
 <div className={styles.m}>
 <button type="submit" className={styles.btn}>Login</button>
 </div>
  
</form>
</div>

   </Layout>
    </>
  )
}

export  default Loginpage