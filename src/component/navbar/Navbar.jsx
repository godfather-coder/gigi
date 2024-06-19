import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isKeyExists, setIsKeyExists] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem('myKey');
    if (item) {
      setIsKeyExists(true);
    } else {
      setIsKeyExists(false);
    }
    console.log(isKeyExists)
  }, [isKeyExists,setIsKeyExists]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Service Sales Platform</Link>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/pools" onClick={toggleMenu}>Pools</Link>
        </li>
        <li className="navbar-item">
          <Link to="/sports" onClick={toggleMenu}>Sports</Link>
        </li>
        <li className="navbar-item">
          <Link to="/fitness" onClick={toggleMenu}>Fitness</Link>
        </li>
        {isKeyExists ? (
          <div>
          </div>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;
