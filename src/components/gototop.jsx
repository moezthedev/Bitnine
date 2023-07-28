
import React, { useState, useEffect } from 'react';
import './GoToTopButton.css'; 

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
   
    if (window.pageYOffset > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`go-to-top-button ${showButton ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default GoToTopButton;
