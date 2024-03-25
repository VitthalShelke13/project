import React from 'react'
import Layout from '../../../layout/Layout'
import { useState } from 'react'
import Toast from 'react-hot-toast'
import axios from'axios'
import { useNavigate } from 'react-router-dom';

 import styles from "./forgotpassword.module.css"

const ForgotPasswordpage = () => {
    const[email,setemail]=useState('')
    const[answer,setanswer]=useState('')
    const[newPassword,setnewPassword]=useState('')
    
    const navigate=useNavigate()
    
    const submitandler=async (e)=>{
      e.preventDefault();
      try{
  const res = await axios.post(`ap/v1/auth/forgot-password`,{
    email,answer,newPassword}); 
  if (res && res.data.success){
    Toast.success('user reset password successfully');
 
  
    navigate( '/login')
  }else{
    Toast.error('something went wrong during password reset')}
    }catch(error){
  console.log(error)
  } 
    }
  return (
    <Layout>
         <div className={styles.container}> 
    <form onSubmit={submitandler}>
    <h1 className={styles.m}>Password Reset Form</h1>
  
  <div className={styles.m}>
   <input type="email" className="" placeholder='Enter your email' value={email}
    onChange={(e)=>setemail(e.target.value)} required />
 </div>
 <div className={styles.m}>
   <input type="text" className="" placeholder='what is your favourite sport' value={answer} 
   onChange={(e)=>setanswer(e.target.value)} required /> 
 </div>
 <div className={styles.m}>
   <input type="password" className="" placeholder='Enter your newpassword' value={newPassword} 
   onChange={(e)=>setnewPassword(e.target.value)} required /> 
 </div>

 <div className={styles.m}>
 <button type="submit" className={styles.btn}>Reset Password</button>
 </div>
  
</form>
</div>

    </Layout>
  )
}

export default ForgotPasswordpage