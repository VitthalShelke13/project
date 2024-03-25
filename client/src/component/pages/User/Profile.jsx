import React from 'react'
import Layout from '../../layout/Layout'
import UserMenu from '../../layout/UserMenu'

const Profile = () => {
  return (
    <Layout>
    <div className="row">
     <div className="col md-3">
       <UserMenu/>
     </div>
     <div className="col md-9">
     <h1>Your Profile</h1>
     </div>
    </div>
 </Layout>
  )
}

export default Profile