import React from 'react';

const LoginSignUp = () => {
  const loginSignUpStyle = {
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px',
    padding: '10px',
  };

  return (
    <div style={loginSignUpStyle}>
      <p>
        <a href="#">Log In</a> or <a href="#">Sign Up</a> to name your babies!
      </p>
    </div>
  );
};

export default LoginSignUp;
