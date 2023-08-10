import React from 'react';
import dancingKitty from '../assets/dancingkitty.gif';

const PetProfile = () => {
  const profileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
    marginTop: '-55px',
    
  };

  const imageStyle = {
    width: '300px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '5%',
    border : '2px solid #00BEEF',
  };

  const descriptionStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

  return (
    <div style={profileStyle}>
      <img src={dancingKitty} alt="Dancing Kitty" style={imageStyle} />
      <div style={descriptionStyle}>
        <p>Baby boy black kitten, loves to dancey dance</p>
      </div>
    </div>
  );
};

export default PetProfile;
