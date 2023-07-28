import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Create a CSS file to style the Navbar according to your needs
import BitnineLogo from "../images/bitnine-logo.png"
import HamburgerIcon from "../images/hamburger.png"


const Navbar = ({setScrolling,setShowMenu,showMenu,scrolling}) => {
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleHamBurger = ()=>{
   
   setShowMenu(!showMenu)

  }

  return (
    <>
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      {/* Logo on the left side */}
      <div className="logo-container">
        <img
          className={`logo ${scrolling ? 'small-logo' : ''}`}
          src={BitnineLogo}
          alt="Logo"
        />
      </div>
      

      <ul className="nav-links">
        <div  className="links-container" >
        <li><a href="/">PRODUCTS</a></li>
        <li><a href="/">USE CASES</a></li>
        <li><a href="/">SERVICES</a></li>
        <li><a href="/">RESOURCES</a></li>
        <li><a href="/">BLOG</a></li>
        <li><a href="/">COMPANY</a></li>
        <li><a href="/">IR</a></li>
        <li><a className='tryfree-btn' href="/">TRY FREE</a></li>
        
        </div>
        <div className='ham-container'>
        <img onClick={handleHamBurger} style={{cursor:"pointer"}} className="hamburger-icon" src={HamburgerIcon} alt="icon" />
      
        </div>
      </ul>
      
    </nav>
    {showMenu&& <div className='nav-menu-container'>
        
       <a >PRODUCTS</a>
        <a>USECASES</a>
        <a>SERVICES</a>
        <a>RESOURCES</a>
        <a>BLOG</a>
        <a>COMPANY</a>
        <a>IR</a>
        <button className='tryfree-btn'>TRY FREE</button>
        </div>}
    </>
  );
};

export default Navbar;
