import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
         
          <h2>Moez Ahsan</h2>
        </div>
        <div className="footer-links">
        
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
