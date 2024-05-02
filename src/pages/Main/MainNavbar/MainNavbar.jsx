import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar/Navbar.css"
import { MainContext } from "../../../context/MainProvider";

function MainNavbar() {
  const {basket}=useContext(MainContext)
  return (
   <header>
    <nav>
    <div className="navbar">
      <p>ElminNabiyev</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
        <li>
          <Link to="/mainemployee">Products</Link>
        </li>
        <li>
          <Link to="/basket">Basket{basket.length}</Link>
        </li>
      </ul>
    </div>
    </nav>
   </header>
  );
}

export default MainNavbar;
