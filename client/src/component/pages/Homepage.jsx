import React from 'react'
import Layout from "../layout/Layout"
import { useAuth } from '../../context/Auth.jsx'


const Homepage = () => {
  const[auth,setAuth]=useAuth()
  return (
    <>
    <Layout>Home
    <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  
    </>
  )
}

export default Homepage