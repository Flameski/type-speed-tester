import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div>Type Racer</div>
      <Link to="/results">Previous games</Link>
    </nav>
  );
};

export default Header;
