// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Importing the user circle icon

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li> */}
        <li>
          <Link to="/login">
            <FaUserCircle className="user-icon" />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
