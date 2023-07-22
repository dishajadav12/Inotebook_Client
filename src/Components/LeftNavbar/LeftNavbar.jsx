import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LeftNavbar.css'

const LeftNavbar = () => {
  let navigate = useNavigate();
  const handleClick=()=>{
    navigate('/notedetail')
  }
  return (
    <div className='main-container'>
      <h5 className='title-container'  onClick={handleClick}>My Notes</h5>
    

    </div>

  )
}

export default LeftNavbar