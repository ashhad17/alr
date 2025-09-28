import React from 'react'
// import {logoa} from './assets/logoa.jpg'
import logoa from './assets/logoa.jpg'
import { Link } from 'react-router-dom'
function AdminNavBar() {
  return (
    
    <nav style={{padding:0,alignItems:"center"}}>
        
        <div className="logo">
            <img id="log" src={logoa} alt="TravelLogo"/>
            </div>
        
        <div className="nav-content">
            <ul>
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/about-us'} >About Us</Link></li>
                <li><Link to={'/hajj-packages'} >Hajj Packages</Link></li>
                <li><Link to={'/umrah-packages'} >Umrah Packages</Link></li>
                <li><Link to={'/ramadhan-packages'} >Special Packages</Link></li>
                <li><Link to={'/contact-us'} >Contact Us</Link></li>
            </ul>
            </ul>
        </div>
        
    </nav>

    
  )
}

export default AdminNavBar