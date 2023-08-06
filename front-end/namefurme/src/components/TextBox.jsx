import React from 'react';

const buttonStyle = {
  backgroundColor: '#00BEEF',
};

const TextBox = () => {
  return (
    <div className="bg-secondary p-3 rounded">
      <textarea className="form-control mb-2" name="Name This Pet" cols="30" rows="3"></textarea>
      <br />
      <button className="btn btn-info" style={buttonStyle}>Submit</button>
    </div>
  );
};

export default TextBox;
