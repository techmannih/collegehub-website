import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function Header1() {
  return (   
     <header className=''>
        
    <div className="header">
      
        <div className="header_logo">
          <Link to="/" className="brand" >
            College Hub
          </Link>
        </div>
        <div className="header_nav">
          <NavLink to="/" className='header_navmenu'>
            Home
          </NavLink>
          <NavLink to="/about" className='header_navmenu'>
            About Us
          </NavLink>


          <NavLink to="/team" className='header_navmenu'>
            Team
          </NavLink>
          <NavLink to="/contact" className='header_navmenu'>
            Contact
          </NavLink>
        
        </div>
        
        </div>
      {/* <div className="header_toggle_bar">
      <i class="fa-regular fa-bars fa-2xl"></i>
      </div> */}
    </header>
  )
}
