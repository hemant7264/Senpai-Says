import React, { useState, useEffect } from "react";
import '../style/main.css'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='n_head'>
      <div className='n_navbar'>
        <div className="n_logo"><Link to="/"><i className="ri-links-line"></i><span></span>SenpaiSays</Link></div>
        <ul className='n_links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies" >Movies</Link></li>
          <li><Link to="/songs" >Songs</Link></li>
          <li><Link to="/books" >Books</Link></li>
          <li><Link to="/myprofile">My Profile</Link></li>
        </ul>
        <button onClick={handleLogout} className='n_action-btn'>Get Started</button>
        <div className="n_toggle_btn" onClick={toggleMenu}>
          <i className='bx bx-list-ul'></i>
        </div>
      </div>
      <div className="n_dropdown_menu open" style={{ display: menuOpen ? "block" : "none" }}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
          <li><Link to='/songs'>Songs</Link></li>
          <li><Link to='/books'>Books</Link></li>
          <li><Link to='/myprofile'>My Profile</Link></li>
          <li><button onClick={handleLogout} className='n_action-btn'>Get Started</button></li>
      </div>
    </nav>
  );
}

export default Navbar;
