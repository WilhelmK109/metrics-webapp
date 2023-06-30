import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav>
      <div className="navLinks">
        <NavLink className="link" to="/">Crypto</NavLink>
      </div>
    </nav>
  </>
);

export default NavBar;
