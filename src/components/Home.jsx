import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Card from './Card';
import About from './assets/hajj-1.jpg'
import axios from 'axios';
import PackageCard from './PackageCard';
import { useState,useEffect } from 'react';
import Abt from './assets/imgs/about.jpg'
import AbtWin from './assets/imgs/about-win.jpg'
import { db } from '../firebase';
import { getDocs,doc, updatedoc,collection,addDoc,deleteDoc, updateDoc } from 'firebase/firestore'

import Front1 from './assets/front-1.jpg'
import Front2 from './assets/front-2.jpg'
import Front3 from './assets/front-3.jpg'
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
// import Abt from './assets/imgs/about.jpg'
const packageCollectionRef = collection(db, 'packages');

const images = [
  AbtWin,
  Front1,
  Front2,
  Front3
];

const images_mobile = [
  Abt,
  Front1,
  Front2,
  Front3
];


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [btn,setBtn]=useState(true);
  const slides = [
    {
      id: 1,
      heading: '',
      text: '',
      buttonText: 'Explore Now',
      imageUrl: Abt,
    },
    {
      id: 2,
      heading: 'Explore Our Hajj Packages',
      text: 'Start planning your dream vacation today with our customizable travel options.',
      buttonText: 'Discover Hajj Packages',
      imageUrl: Front1,
    },
    {
      id: 3,
      heading: 'Discover Umrah Packages',
      text: 'Book your adventure with us and experience unforgettable moments.',
      buttonText: 'View Umrah Packages',
      imageUrl: Front2,
    },{
      id: 4,
      heading: 'Special Packages ',
      text: 'Book your adventure with us and experience unforgettable moments.',
      buttonText: 'Get Special Packages',
      imageUrl: Front3,
    },
  ];
  const slidesMobile = [
    {
      id: 1,
      heading: '',
      text: '',
      buttonText: 'Explore Now',
      imageUrl: AbtWin,
    },
    {
      id: 2,
      heading: 'Explore Our Hajj Packages',
      text: 'Start planning your dream vacation today with our customizable travel options.',
      buttonText: 'Discover Hajj Packages',
      imageUrl: Front1,
    },
    {
      id: 3,
      heading: 'Discover Umrah Packages',
      text: 'Book your adventure with us and experience unforgettable moments.',
      buttonText: 'View Umrah Packages',
      imageUrl: Front2,
    },{
      id: 4,
      heading: 'Special Packages ',
      text: 'Book your adventure with us and experience unforgettable moments.',
      buttonText: 'Get Special Packages',
      imageUrl: Front3,
    },
  ];
  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    // (currentIndex===1)?():();
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images_mobile.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  const prevSlideMobile = () => {
    const index = currentIndex === 0 ? images_mobile.length - 1 : currentIndex - 1;
    // (currentIndex===1)?():();
    setCurrentIndex(index);
  };

  const nextSlideMobile = () => {
    const index = currentIndex === images_mobile.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  const [packages, setPackages] = useState([]);
  const [recentPackages, setRecentPackages] = useState([]);

  // useEffect(() => {
  //   // Fetch all packages initially
    
  //   const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
  //   axios.get(`${const_url}`)
  //     .then(response => {
  //       setPackages(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching packages:', error);
  //     });
  // }, []);

  const getPackagesList = async () => {

    try {
        const data = await getDocs(packageCollectionRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        // console.log(filteredData);
        setPackages(filteredData);
        setRecentPackages(filteredData);
        console.log(packages[0])
    }
    catch (err) {
        console.error(err)
    }
}

useEffect(() => {
    
    getPackagesList();
}, []);

  useEffect(() => {
    // Sort packages by createdAt date in descending order and take the top 4
    const sortedPackages = [...packages].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    const topRecentPackages = sortedPackages.slice(0, 3);//Change here for number of cards to display on popular
    setRecentPackages(topRecentPackages);
  }, [packages]);
  return (
  
    
    <>
    
    <NavBar/>
    
    <div className="slider-container" id='windows-screen' style={(currentIndex==0)?({height:'100%'}):({height:550+"px"})}>
      <div className="slider-text">
        <h1>{slides[currentIndex].heading}</h1>
        {(currentIndex)!=0?(<button className="slider-pkg-btn">{slides[currentIndex].buttonText}</button>):(<></>)}
      </div>
      <button className="slider-button prev" onClick={prevSlide}>❮</button>
      
      <img src={slides[currentIndex].imageUrl} alt="Slider Image" className="slider-image" />
      <button className="slider-button next" onClick={nextSlide}>❯</button>
{/*       Discover Hajj <button className='prev' onClick={prevSlide}>❮</button>
        <button className='next' onClick={nextSlide}>❯</button> */}
      
    </div>
    <div className="slider-container" id='mobile-screen' style={(currentIndex==0)?({height:'100%'}):({height:550+"px"})}>
      <div className="slider-text">
        <h2>{slidesMobile[currentIndex].heading}</h2>
        {(currentIndex)!=0?(<button className="slider-pkg-btn">{slidesMobile[currentIndex].buttonText}</button>):(<></>)}
      </div>
      <button className="slider-button prev" onClick={prevSlideMobile}>❮</button>
      
      <img src={slidesMobile[currentIndex].imageUrl} alt="Slider Image" className="slider-image" />
      <button className="slider-button next" onClick={nextSlideMobile}>❯</button>
{/*       
        <button className='prev' onClick={prevSlide}>❮</button>
        <button className='next' onClick={nextSlide}>❯</button> */}
      
    </div>
  
    <section className="about">
<div className="about-content">
  
<h1>Al Razack Tours International</h1>
<h2>Best Hajj & Umrah Tours Organisers in Tumkur</h2>
<p>We specialize in providing you services that ensure you have the most peaceful journey to Allah’s home. While facilitating the most exemplified services, our primary goal is to ensure that you execute your Hajj and Umrah correctly in the light of Quran and Sunnah. Contact us if you desire to purify your soul and embark on a journey of a lifetime.</p>

<Link to={'/about-us'} className="pkg-btn">Know More</Link>
</div>
<div className="about-img">
    <img src={About} alt="" srcSet=""/>
</div>
</section>
<div>
      <div className="packages">
        <h2>Popular Packages</h2>
        <div className="cards">
          {recentPackages.length > 0 ? (
            recentPackages.map(pkg => (
              <PackageCard
                key={pkg.id}
                id={pkg.id}
                package={pkg.packageName}
                duration={pkg.durationOfTour}
                makkaHotel={pkg.makkaHotel}
                madinaHotel={pkg.madinaHotel}
                nextBatch={pkg.nextBatch}
                typeOfTour={pkg.packageType}
                imageUrl={pkg.imageUrl}
              />
            ))
          ) : (
            <div className="coming-soon-card">
              <h3>Coming Soon</h3>
              <p>Stay tuned for our upcoming packages!</p>
            </div>
          )}
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Home
