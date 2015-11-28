import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  let ACTIVE = {color: '#009eff'};
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" activeStyle={ ACTIVE }>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={ ACTIVE }>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={ ACTIVE }>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;
