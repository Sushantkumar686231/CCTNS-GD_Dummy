import React from 'react';
import './Header.css'; 

const Header = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();

  return (
    <div className="header">
      <div className="header-content">
      <img src="/logo.png" alt="Logo" className="logo" />

        <div className="info">
          <div className="info-row">
            <div className="info-item"><strong>Welcome:</strong> AIRPORT SHO</div>
            <div className="info-item"><strong>Date:</strong> {date}</div>
            <div className="info-item"><strong>Login Time:</strong> {time}</div>
          </div>
          <div className="info-row">
            <div className="info-item"><strong>State:</strong> Maharashtra</div>
            <div className="info-item"><strong>District:</strong> Brihan Mumbai City</div>
            <div className="info-item"><strong>Police Station:</strong> API Port</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;