import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'

const Spinner = ({path='login'}) => {
    const [count,setCount]=useState(3)
    const navigate =useNavigate()
    const location = useLocation()
    useEffect(()=>{
        const Interval =setInterval(()=>{
setCount((previousvalue)=>--previousvalue);
 },1000);
 count=== 0 &&
navigate(`/${path}`,{
state:location.pathname
}) ;
return ()=>clearInterval(Interval)
    },[count,navigate,location,path]);
  
  return (
    <>
  <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
    <h1>Redirecting to you in {count} Second</h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

    </>
  )
}

export default Spinner