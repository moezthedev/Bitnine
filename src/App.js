
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar"
import Lorem from "./components/lorem"
import Header from "./components/header"
import Subheader from './components/subheader';
import Keyfeatures from './components/keyfeatures';
import GoToTopButton from './components/gototop';
import ImageWithText from './components/imagewithtext';
import FlipCard from "./components/flippingcard"
import Footer from "./components/footer"
function App() {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='main'>
      <Navbar scrolling={scrolling} setScrolling={setScrolling} showMenu={showMenu} setShowMenu={setShowMenu}/>
<Header/>
<Subheader/>
<Keyfeatures/>
<GoToTopButton/>
<ImageWithText/>
<FlipCard/>
<Footer/>
    </div>
  );
}

export default App;
