import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

const Adminroute = () => {
    const[ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth();
    useEffect(()=>{
      const AuthCheck=async ()=>{
        try {
          const res = await axios.get('/ap/v1/auth/admin-auth');
          if (res.data.ok) {
              setOk(true);
          } else {
              setOk(false);
          }
      } catch (error) {
          console.error('Error fetching admin authentication:', error);
          setOk(false);
      }
  };


    if(auth?.Token) AuthCheck();

    },[auth?.Token]);
    return ok ?<Outlet/>:<Spinner path="" />
 
}

export default Adminroute;