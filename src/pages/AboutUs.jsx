import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Founder from '../components/assets/founder.jpg'
function AboutUs() {
  return (<>
  
  <NavBar/>
  <div className="about-container">
<div className="abt" style={{fontFamily:'Rubik'}}>
    <h2>Why Choose Al Razack Tours for Your Hajj & Umrah Journey?</h2>
    <h3>Haj & Umrah tour organisers</h3>
    <p>After successfully organising Haj Pilgrimage Services To Hajis by Ship Through
        Haj Committee, Bombay <span className="bld">AL-HAJ ABDUL RAZACK SAB</span> started <span className="bld">AL RAZACK
        TOURS INTERNATIONAL</span> in the year <span className="bld">1997</span> at Bangalore (Tumkur). The aim
        and objective is to provide best services for the people who travel for <span className="bld">Holy
        Pilgrimage (HAJ / UMRAH / ZIARATH)</span> along with travel to <span className="bld">SAUDI ARABIA (KSA),
        JERUSALEM ( Baitul Mugaddas ), IRAQ ( Baghdad, Karbala, Najaf, Kufa, Hilla),
        AMMAN (Jordan), TURKEY, EGYPT, SYRIA, Etc. "AL RAZACK TOURS
        INTERNATIONAL "</span> organize every month <span className="bld">UMRAH, RAMAZAN UMRAH, HAJ &
        ZIARATH</span> Pilgrimage Package Tours.
        <span className="bld">"AL RAZACK TOURS INTERNATIONAL "</span> is a registered <span className="bld">HAJJ & UMRAH TOUR OPERATOR</span>,
        and it is duly registered with <span className="bld">MINISTRY of MINORITY AFFAIRS, HAJJ CELL ( NEW DELHI) and MINISTRY
        OF HAJJ ( SAUDI ARABIA)</span>. It is also a registered member of <span className="bld">KARNATAKA STATE HAJJ ORGANISERS
        ASSOCIATION</span>, Bangalore.
        We Offer Best <span className="bld">Hajj and Umrah tours in Tumkur.</span></p>
</div>
<div className="founder-img">
    <img src={Founder} alt=""/>
</div>
</div>

  <Footer/>
  </>
  )
}

export default AboutUs