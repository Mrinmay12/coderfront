import React, { useState } from 'react';
import './TextView.css';

const TextView = ({ text,title }) => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };
  const copyToClipboard = async () => {
    try {
        toggleCode()
      await navigator.clipboard.writeText(text);
    //   alert('Content copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy content to clipboard:', error);
    //   alert('Failed to copy content to clipboard. Please try again.');
    }
  };
  
  return (
    <div className="text-view">
        <p style={{ marginTop:"23px",color:"aqua" }}>{title}</p>
      <div className="toggle-button-container">
        <button  className="code-button" onClick={copyToClipboard}>
          {showCode ? '!Copied' : 'Copy Code'}
        </button>
      </div>
      <div className={`text-content ${showCode ? 'code-visible' : ''}`}>
        {text}
   
      </div>
    </div>
  );
};

export default TextView;
