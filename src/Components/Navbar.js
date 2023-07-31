import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Style.css'


const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout =(e)=>{
    e.preventDefault();
    navigate('/login');
    localStorage.removeItem('token');
  }
  return (
    <div className='navbar-container'>

    <nav className="navbar navbar-expand-lg d-flex">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
       i<span className='span-navbar-brand'>N</span>otebook
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse container navbar-collapse" id="navbarSupportedContent">
        <div className='navbar-nav me-auto mb-2 mb-lg-0'>
        <div className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/">What is iNotebook? </Link>
        </div>
        </div>
      <div className="auth-btn-container">
      {!localStorage.getItem('token') ? <form action=""> <Link className="btn login-btn mx-1 "  role='button' to='/login'>Login</Link>
        <Link className="btn mx-1 signup-btn" role='button' to="/signup">Sign up</Link> 
        </form>: 
        <Link className="btn btn-dark mx-1" role='button' onClick={handleLogout}>Log Out</Link>}
      </div>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar