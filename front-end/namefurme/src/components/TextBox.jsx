import React from 'react';

const buttonStyle = {
  backgroundColor: '#00BEEF',
};

const textBoxStyle = {
  resize: 'none',
};

const TextBox = () => {
  return (
    <div className="bg-secondary p-3 rounded">
      <textarea 
      className="form-control mb-1" 
      name="Name This Pet" 
      cols="32" 
      rows="1"
      placeholder= "What is a good name for this baby?"
      style= {textBoxStyle}>
      </textarea>
      <br />
      <button className="btn btn-info" style={buttonStyle}>Submit</button>
    </div>
  );
};

export default TextBox;
