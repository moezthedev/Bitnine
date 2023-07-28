import React from 'react';
import './ImageWithText.css'; // Create this CSS file for styling
import password from "../images/password.png"
import data from "../images/data.png"
import audit from "../images/audit.png"
const ImageWithText = () => {
  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"50px"}}>AgensSQL DB Engine</h1>
    <div className="container">
        
      <div className="cardofimg">
        <div className="image-container">
          <img
            src={password}
            alt="Image 1"
            className="image"
          />
          <div className="text-overlay">
            <ul>
                <li>user password policy reinforces login security</li>
                <li>excessive failed login attempts lock an account</li>
                <li>define rules for password complexity</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cardofimg">
        <div className="image-container">
          <img
            src={data}
            alt="Image 2"
            className="image"
          />
          <div className="text-overlay">
            <ul>
                <li>enhanced data security of user personal information</li>
                <li>resolve privacy issues in preparation for security audits</li>
                <li>encryption or masking with unidentifiable special characters</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cardofimg">
        <div className="image-container">
          <img
            src={audit}
            alt="Image 3"
            className="image"
          />
          <div className="text-overlay">
            <ul>
                <li>monitors database activities and collects data</li>
                <li>traces object accessed or DDL & DML statements executed by a user</li>
            <li>records all actions in logs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageWithText;
