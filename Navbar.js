import React from 'react';
import './Navbar.css';
import atlassian from './AtlassianLogo.png';
import bg from './bgimg.jpeg';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div>
        <ul className="navbar__logo">
        <li><img className="logo" src={atlassian}></img></li>
        <li className='first'>Product</li>
        <li className='first'>For Teams</li>
        <li className='first'>Support</li>
        </ul>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">Try Free</li>
        <li className="navbar__item">Buy Now</li>
        {/* <li className="navbar__img"><img src={search}></img></li> */}
        <li className="navbar__item">LogIn</li>
      </ul>
    </nav>
    <div className='xyz'> 
        <img className="BackgroundImg" src={bg}></img>
        <div className='image-text'>More Work <br></br>Forward</div>
        <div className='image-text2'>Atlissian helps work smarter and faster,<br></br>together. </div>
        <button className='learnmore'>Learn More</button>

        
    </div>
    
    </div>
    
  );
};

export default Navbar;
