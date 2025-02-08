import React from 'react'
import { Link } from 'react-router-dom'
import './styles/index.css'

function Profile() {
  return (
    <>  
    <header className="profileHeader">
      <nav className="profileNav">
        <ul className="profile-nav-list">
          <li className="profile-nav-item">
            <Link to="/" className="profile-nav-link">Home</Link>
          </li>
          <li className="profile-nav-item">
            <Link to="/about" className="profile-nav-link">About</Link>
          </li>
          <li className="profile-nav-item">
            <Link to="/services" className="profile-nav-link">Services</Link>
          </li>
          <li className="profile-nav-item">
            <Link to="/contact" className="profile-nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
    
  )
}

export default Profile;