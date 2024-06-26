
import { NavLink,Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from '../../context/Auth';

const Header = () => {
  const[auth,setAuth]=useAuth()
  const LogoutHandler=()=>{
    setAuth({...auth,
    user:null,
    Token:''
    })
    localStorage.removeItem('auth')
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      < Link to='/' className="navbar-brand" > <FaShoppingCart/>Hiden Brand</ Link >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          < NavLink to='/' className="nav-link " >Home</NavLink >
        </li>
        <li className="nav-item">
          < NavLink to='/category' className="nav-link " >Category</NavLink >
        </li>
      {/* //use ternery operator for shown login and logout functionlity   */}
      {!auth.user ?(<>
        <li className="nav-item">
          <NavLink to='/register'className="nav-link" >Register</NavLink >
        </li>
        <li className="nav-item">
          < NavLink to='/Login' className="nav-link ">Login</NavLink >
        </li>
        
      </>):(<>
        
  <li className="nav-item dropdown">
    <NavLink className="nav-link dropdown-toggle" href="#" role="button" 
    data-bs-toggle="dropdown" aria-expanded="false">
     
     {auth?.user?.name}
    </NavLink>
    <ul className="dropdown-menu">
      <li><NavLink to={`/dashboard/${auth?.user?.role=== 1 ?'admin':'user'}`} className="dropdown-item" >Dashboard</NavLink></li>
    {auth.user.role}
      <li className="nav-item">
          < NavLink to='/Login' className="dropdown-item" onClick={LogoutHandler}>Logout</NavLink >
        </li>
    </ul>
  </li>
      </>)
        
      }
        <li className="nav-item">
          < NavLink to='/Cart' className="nav-link " >Cart(0)</ NavLink >
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    </>
  )
}

export default Header