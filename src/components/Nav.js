import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  let history = useNavigate();

  return (
    <nav className="container-fluid">
      <ul>
        <li><strong>Memorial College</strong></li>
      </ul>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {localStorage.token && <li><Link to="/profile">Profile</Link></li>}
        {localStorage.token && <li><Link to="/choices">Sports Day</Link></li>}
        <li><Link to="/" role="button" onClick={() => { localStorage.removeItem('token') }}>{localStorage.token ? 'Logout' : 'Login'}</Link></li>
      </ul>
    </nav>
  )
}

export default Nav