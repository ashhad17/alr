import React, { useState,useRef } from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import axios from 'axios';
import emailjs from '@emailjs/browser';
function ContactUs() {
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [query,setQuery]=useState('');
    
    const formData={
        name: name,
        email: email,
        phone: phone,
        query: query,
    }
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
    
      //   axios.post('http://localhost:3000/submitForm', formData)
      //     .then(response => {
      //       console.log(response.data);
      //       alert('Form submitted successfully!');
      //     })
      //     .catch(error => {
      //       console.error('Error submitting form:', error);
      //       alert('Error submitting form. Please try again later.');
      //     });
      // };

// --------------------------------------------------------------------------

const frm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_bwyplo4', 'template_k0zs05b',formData, {
        publicKey: 'TqtYTn517cmahHbAt',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          alert("We will get back to your soon!!");

        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
// --------------------------------------------------------------------------



  return (<>
  <NavBar/>

    <div className="contact-content">
        <div className="phone">
            <h1>Phone</h1>
            <p>
                Please use the contact nos from below to get in touch with us. Thanks!
            </p>
            <a href="tel:+919743004378">+91 9743004378</a>
        </div>
        <div className="email">
            <h1>Email</h1>
            <p>If you have any questions, please feel free to drop an email. We will respond to your email as soon as possible</p>
            <a href="mailto:alrazack786@gmail.com">alrazack786@gmail.com</a>
        </div>
        <div className="location">
            <h1>Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1119797897095!2d77.10253519999996!3d13.343309799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e820f68142d%3A0x24fc61ee5942205d!2sAl%20-%20Razack%20Tours%20International!5e0!3m2!1sen!2sin!4v1720263241305!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} loading="lazy" ></iframe>
            <p>Shop #2,1st Floor, HMS Complex, Ashoka Rd, Ward No. 18, Tumkur, Tumakuru, Karnataka 572101
            </p>
        </div>
        
    </div>
    
    <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="form-container">
            <form  id='myForm' ref={frm} onSubmit={sendEmail}>
                <label htmlFor="name">Name: <span style={{color:'red'}}>*</span> </label>
                <input type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
    
                <label htmlFor="phone">Contact Number: <span style={{color:'red'}}>*</span></label>
                <input type="tel" id="phone" name="phone" required onChange={(e)=>setPhone(e.target.value)}/>
    
                <label htmlFor="query">Query: <span style={{color:'red'}}>*</span></label>
                <select name="query" id="query" required onChange={(e)=>setQuery(e.target.value)}>
              <option value="Umrah Query" selected disabled hidden>--select--</option>
                
              
                <option value="Umrah Package">Umrah Package</option>
                <option value="Hajj Package">Hajj Package</option>
                
                <option value="Ramadhan Package">Ramadhan Package</option>
              </select>
    
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
  <Footer/>
  </>
  )
}

export default ContactUs