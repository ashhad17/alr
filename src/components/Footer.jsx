import React from 'react'
import WhatsApp from './assets/whatsapp.png'
import Instagram from './assets/social.png'
import FaceBook from './assets/facebook.png'
function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <h3>Contact Info</h3> 
            <p>Name: Molana Mohammed Hussain</p>
            <p>Email: alrazack786@gmail.com</p>
            <p>Phone: +91 9743004378</p>
        </div>
        <div className="footer-content">
            <h3>About Us</h3>
            <p>We offer the best travel packages for Hajj, Umrah, and Special Tours.
             </p>
            <p>
            Recognized By Ministry Of Minority Affairs, Hajj Cell ( New Delhi) And Ministry Of Hajj ( Saudi Arabia) And Karnataka State Hajj Organisers Association, Bangalore.
           
            </p>
        </div>
        <div className="footer-content social-media">
            <div className="whatsapp"><img className="ico" src={WhatsApp} alt=""/><a href="whatsapp://send?text=Hii there!&phone=+919743004378" target="_blank">WhatsApp</a></div>
            <div className="instagram"><img className="ico" src={Instagram} alt=""/><a href="https://www.instagram.com/a_r__7866/" target="_blank">Instagram</a></div>
            <div className="facebook"><img className="ico" src={FaceBook} alt=""/><a href="https://www.facebook.com/profile.php?id=100062108476896" target="_blank">Facebook</a></div>
        </div>
    </footer>
  )
}

export default Footer