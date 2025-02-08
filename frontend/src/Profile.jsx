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
            <Link to="/about" className="profile-nav-link">Courses</Link>
          </li>
          <li className="profile-nav-item">
            <Link to="/services" className="profile-nav-link">Messages</Link>
          </li>
          <li className="profile-nav-item">
            <Link to="/contact" className="profile-nav-link">Log out</Link>
          </li>
        </ul>
      </nav>
    </header>
    <body className='profileBody'>
      <div className="profileContent">
        <img className="profile-picture" src="http://upload.wikimedia.org/wikipedia/commons/9/9b/Photo_of_a_kitten.jpg" alt="cat"/>
        <div className="profile-info-name">
          <h1 className="profile-name">John Deere</h1>
          <h2 className="profile-title">Software Engineer</h2>  
        </div>  
      </div>
    </body>
    </>
    
  )
}

export default Profile;