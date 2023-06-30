import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { MdOutlineKeyboardVoice } from 'react-icons/md';

const NavBar = () => (
  <>
    <nav>
      <div className="navLinks">
        <NavLink className="link" to="/"><BsChevronLeft /></NavLink>
        <NavLink className="link" to="#"><MdOutlineKeyboardVoice /></NavLink>
        <NavLink className="link" to="/">Crypto</NavLink>
      </div>
    </nav>
  </>
);

export default NavBar;
