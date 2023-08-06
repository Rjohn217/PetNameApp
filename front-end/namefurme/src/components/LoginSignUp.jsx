import React from 'react';

const LoginSignUp = () => {
  const loginSignUpStyle = {
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px',
  };

  return (
    <div style={loginSignUpStyle}>
      <p>
        <a href="#">Log In</a> or <a href="#">Sign Up</a> to get your own name suggestions!
      </p>
    </div>
  );
};

export default LoginSignUp;
