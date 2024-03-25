import React from 'react'
import Layout from '../../layout/Layout'
import AdminMenu from '../../layout/AdminMenu'

const Users = () => {
  return (
    <Layout>
    <div className="row">
     <div className="col md-3">
       <AdminMenu/>
     </div>
     <div className="col md-9">
     <h1>users</h1>
     </div>
    </div>
 </Layout>
  )
}

export default Users