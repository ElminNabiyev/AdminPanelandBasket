import React from 'react'
import { Link } from 'react-router-dom'

function NavbarAdmin() {
  return (
     <header>
    <nav>
    <div className="navbar">
      <p>ElminNabiyev</p>
      <ul>
        <li>
          <Link to="/">MAIN SITE</Link>
        </li>
        <li>
          <Link to="/admin/addemployee">ADD EMPLOYEES</Link>
        </li>
        <li>
          <Link to="/admin/employee">PRODUCTS</Link>
        </li>
      </ul>
    </div>
    </nav>
   </header>
  )
}

export default NavbarAdmin
