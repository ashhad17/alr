import React from 'react'
// import {logoa} from './assets/logoa.jpg'
import logoa from './assets/logoa.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
     <div className="top">
        <a href="whatsapp://send?text=Hii there!&phone=+919743004378" target="_blank">WhatsApp:+919743004378</a>
        {/* <a href="tel:+919448493875">Call:+91 9448493875</a> */}

<a href="mailto:alrazack786@gmail.com">alrazack786@gmail.com</a>
        
     </div>
    
    <nav>
      <div className="logo">
        <img id="log" src={logoa} alt="TravelLogo" />
        <div className="hamburger-menu" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
      </div>

      <div className='nav-content'>
        <ul>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/about-us'} >About Us</Link></li>
          <li><Link to={'/hajj-packages'} >Hajj Packages</Link></li>
          <li><Link to={'/umrah-packages'} >Umrah Packages</Link></li>
          <li><Link to={'/ramadhan-packages'} >Special Packages</Link></li>
          <li><Link to={'/contact-us'} >Contact Us</Link></li>
        </ul>
      </div>
      <div className='active-nav-content' style={menuOpen?({display:'block'}):({display:'none'})}>
        <ul>
          <li><Link to={'/'} onClick={handleMenuToggle}>Home</Link></li>
          <li><Link to={'/about-us'} onClick={handleMenuToggle}>About Us</Link></li>
          <li><Link to={'/hajj-packages'} onClick={handleMenuToggle}>Hajj Packages</Link></li>
          <li><Link to={'/umrah-packages'} onClick={handleMenuToggle}>Umrah Packages</Link></li>
          <li><Link to={'/ramadhan-packages'} onClick={handleMenuToggle}>Special Packages</Link></li>
          <li><Link to={'/contact-us'} onClick={handleMenuToggle}>Contact Us</Link></li>
        </ul>
      </div>

      
    </nav>

    </>
  )
}

export default NavBar