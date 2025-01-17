import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ handleNavbarClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddClick = () => {
    handleNavbarClick('add'); // Call handleNavbarClick with 'add'
  };

  const handleViewClick = () => {
    handleNavbarClick('view'); // Call handleNavbarClick with 'view'
  };

  const handleHomeClick = () => {
    handleNavbarClick('home'); // Call handleNavbarClick to hide forms and views
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={handleHomeClick}>Home</li> {/* Hide form when Home is clicked */}
        <li className="dropdown-parent" onClick={handleDropdownClick}>
          General Dairy
          <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <li onClick={handleViewClick}>View GD</li> {/* Show view when View GD is clicked */}
            <li onClick={handleAddClick}>Add GD</li> {/* Show form when Add GD is clicked */}
          </ul>
        </li>
        <li>Complaint</li>
        <li>Citizen Service</li>
        <li>Registration</li>
        <li>Investigation</li>
        <li>Prosecution</li>
        <li>DataBank Service</li>
        <li>Reports</li>
        <li>Admin</li>
        <li>Registers</li>
      </ul>
    </nav>
  );
};

export default Navbar;
