import React from 'react';
import './navbar.css';

function Navbar() {
    return ( 
        <header className="navbar">
        {/* Top Bar */}
        <div className="navbar-top">
          <div className="navbar-top-left">
            <i className="icon">🔲</i>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="navbar-top-right">
            <i className="icon">🔲</i>
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
  
        {/* Main Navbar */}
        <div className="navbar-main">
        <div><img src='media/react-brands-solid.svg' style={{width:30}}></img></div>

          <div className="navbar-logo">LOGO</div>
    
          <div className="navbar-icons">
            <img src='media/magnifying-glass-solid.svg' style={{width:20}}></img>
            <img src='media/heart-regular.svg' style={{width:20}}></img>
            <img src='media/bag-shopping-solid.svg' style={{width:20}}></img>
            <img src='media/user-regular.svg' style={{width:20}}></img>
            
            <div className="navbar-lang">
              <select name='eng'>
              <option>ENG</option>
              <option value="hindi">Hindi</option>
              <option value="hindi">Spanish</option>
              </select>
            </div>
          </div>
        </div>

        <div className='list-navbar'>
            <nav className="navbar-links ">
            <a href="#shop">SHOP</a>
            <a href="#skills">SKILLS</a>
            <a href="#stories">STORIES</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT US</a>
          </nav>
        </div>      
 
      </header>
     );
}

export default Navbar;