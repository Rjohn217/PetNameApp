import React from 'react';

const Footer = () => {
  const footerStyle = {
    fontFamily: "'Farsan', cursive",
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'whitesmoke',
    padding: '10px',
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 NameFurMe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
