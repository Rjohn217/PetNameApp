import React from 'react';
import pawprint from '../assets/pawprint.png';

const Header = () => {
  const headerStyle = {
    fontFamily: "'Farsan', cursive",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0, // Add this to position the header at the left of the viewport
    width: '100%',
    background: 'whitesmoke',
    color: '#00BEEF',
    padding: '10px',
    zIndex: 1,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    marginLeft: '10px',
    width: '40px',
    height: '40px',
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>NameFurMe</h1>
        <img src={pawprint} alt="dog paw" style={imageStyle} />
      </div>
      <nav>
        {/* Add navigation links here */}
      </nav>
    </header>
  );
};

export default Header;
