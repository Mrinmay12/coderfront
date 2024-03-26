import React, { useState } from 'react';
import './Modal.css'; // Import CSS file for modal styles
import Form from './Form';

const LoginModal = ({ isOpen, onClose ,setReff}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
  
    // Here you can handle login logic using username and password
    console.log("Username:", username);
    console.log("Password:", password);
    // Clear input fields after submission
    setUsername('');
    setPassword('');
    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p  style={{cursor:"pointer"}} onClick={()=> onClose()}>X</p>
        {/* <h2 style={{ display:"flex" }}>Login</h2> */}
        {/* <form onSubmit={handleSubmit}> */}
          <div className="form-group">
            <label htmlFor="username" style={{ display:"flex" }}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ display:"flex" }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Form  onClose={onClose} username={username} password={password} setReff={setReff}/>
          {/* <button type="submit">Login</button> */}
        {/* </form> */}
      </div>
    </div>
  );
};



export default LoginModal;
