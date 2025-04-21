import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='nav'>
      <div className='navi'>
        <div className='logo'>SAYANS</div>

        <div className='hamburger' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        <div className={`items ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/why" onClick={() => setMenuOpen(false)}>Why Sayans</Link>
          <Link to="/book" onClick={() => setMenuOpen(false)}>Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
