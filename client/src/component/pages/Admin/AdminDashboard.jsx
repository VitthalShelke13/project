import React from 'react'
import Layout from '../../layout/Layout'
import AdminMenu from '../../layout/AdminMenu'
import { useAuth } from '../../../context/Auth'

const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout>
   <div className="container-fluid m-3 p-3">
    
    <div className="row">
      <div className="col-md-3"> 
<AdminMenu/>
      </div>
      <div className="col-md-9">
        <div className="card w-75 p-3">
        <h3>AdminName:{auth?.user?.name}</h3>
        <h3>AdminEmail:{auth?.user?.email}</h3>
        <h3>AdminPhone:{auth?.user?.phone}</h3>
        </div>
        </div>
    </div>
   </div>
   </Layout>
  )
}

export default AdminDashboard