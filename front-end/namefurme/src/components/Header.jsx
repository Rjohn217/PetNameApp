import React from 'react';
import pawprint from '../assets/pawprint.png';

const Header = () => {

  const headerStyle = {
    fontFamily: "'Farsan', cursive",
    display: 'flex',
    alignItems: 'center',
    color: '#00BEEF',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.35)'
  };

  const imageStyle = {
    marginLeft: '10px',
    width: '75px',
    height: '75px',
  };

  const headingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <header style={headerStyle}>
      <div style={headingContainerStyle}>
      <h1>NameFurMe</h1>
      <img src={pawprint} alt="dog paw" style={imageStyle} />
      </div>
      <nav>
        {/* Add navigation links here */}
      </nav>
    </header>
  );
};

export default Header;
