import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [pair, setPair] = useState("Foot Wear");
  const [theme, setTheme] = useState("light"); // State for theme

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`navbar ${theme}`}>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setPair("Home")} className={pair === "Home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setPair("Foot Wear")} className={pair === "Foot Wear" ? "active" : ""}>
          <a href='#explore-pair'>Foot Wear</a>
        </li>
        <li onClick={() => setPair("About us")} className={pair === "About us" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={() => setPair("Contact us")} className={pair === "Contact us" ? "active" : ""}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='Search' />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='Basket' />
          <div className='dot'></div>
        </div>
        <button onClick={toggleTheme} className='theme-toggle'>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
