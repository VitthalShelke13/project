import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const PagenotFound = () => {
  return (
  <>
    <Layout>
       <div className='pnf'>
       <h1 className='pnf-title'> 404</h1>
       <h2 className='pnf-heading'>Ops!Page not Found</h2>
       <Link className='pnf-btn'to='/'>Go Back</Link>
       </div>
    </Layout>
  </>
  )
}

export default PagenotFound