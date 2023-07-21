import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Style.css'


const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout =(e)=>{
    e.preventDefault();
    navigate('/login');
    localStorage.removeItem('token');
  }
  return (
    <div>

    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
  <div className="container-fluid container">
    <Link className="navbar-brand" to="/">
       i<span className='span-navbar-brand'>N</span>otebook
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse container navbar-collapse" id="navbarSupportedContent">
        <div className='navbar-nav me-auto mb-2 mb-lg-0'>
        <div className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </div>
        </div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search " aria-label="Search"/>
        <button className="btn  mx-1" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
      <div className="auth-btn-container">
      {!localStorage.getItem('token') ? <form action=""> <Link className="btn login-btn mx-1 "  role='button' to='/login'>Login</Link>
        <Link className="btn btn-primary mx-1 signup-btn" role='button' to="/signup">Sign up</Link> 
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