import React from 'react'
import Layout from '../../../layout/Layout'
import { useState } from 'react'
import Toast from 'react-hot-toast'
import axios from'axios'
import { useNavigate } from 'react-router-dom'
import style from './Registerpage.module.css';


const Registerpage = () => {
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[phone,setphone]=useState('')
  const[address,setaddress]=useState('');
  const[answer,setanswer]=useState('')
  const navigate=useNavigate()

  const submitandler=async (e)=>{
    e.preventDefault();
    try{
const res = await axios.post(`ap/v1/auth/register`,{
  name,email,password,phone,address,answer}); 
if (res && res.data.success){
  Toast.success('user register successfully')
  navigate('/login')
}else{
  Toast.error('something went wrong')}
  }catch(error){
console.log(error)

} 
  }
  return (
  <Layout>
 <div className={style.containers}>
 <form onSubmit={submitandler} className={style.m}>
 <h1 >Register Form</h1>
  <div className="">
   
    <input type="name" className="" placeholder='Name' value={name} 
    onChange={(e)=>setname(e.target.value)}  required />
    
  </div>
  <div className="">
   
   <input type="email" className="" placeholder='email' value={email}
    onChange={(e)=>setemail(e.target.value)} required />
   
 </div>
 <div className="">
   
   <input type="password" className="" placeholder='password' value={password} 
   onChange={(e)=>setpassword(e.target.value)} required />
   
 </div>
 <div className="">
   
   <input type="phone" className="" placeholder='phone' value={phone} 
   onChange={(e)=>setphone(e.target.value)}  required/>
   
 </div>
 <div className="">
   <input type="address" className="" placeholder='address' value={address}
   onChange={(e)=>setaddress(e.target.value)  }required />
 </div>
 <div className="">
   <input type="answer" className="" placeholder='what is your favrioute sport' value={answer}
   onChange={(e)=>setanswer(e.target.value)}required />
 </div>
  <div>
  <button type="submit" className={style.btn}>Submit</button>
  </div>
</form>

 </div>
  </Layout>
  )
}

export default Registerpage