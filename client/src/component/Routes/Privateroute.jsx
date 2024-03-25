import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

const Privateroute = () => {
    const[ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth();
    useEffect(()=>{
      const AuthCheck=async ()=>{
const res = await axios.get('/ap/v1/auth/user-auth');

if(res.data.ok){
  setOk(true)
}else{
  setOk(false)
}
 }
 if(auth?.Token) AuthCheck()
    

    },[auth?.Token])
    return ok ?<Outlet/>:<Spinner />
 
}

export default Privateroute