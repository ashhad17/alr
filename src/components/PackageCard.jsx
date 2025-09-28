// import React,{useState,useEffect} from 'react'
// import Banner from './assets/hajj-package-banner-min-1-700x450.jpg'
// import { Link, useNavigate } from 'react-router-dom';
// import EditPackage from '../pages/EditPackage';
// // useNavigate
// import axios from 'axios';
// import Modal from './Model';
// function PackageCard(props) {
//   const navigate = useNavigate();
//   const id=props.id;
//   const [isModalVisible, setIsModalVisible] = useState(false);
  
//   const [isViewVisible, setIsViewVisible] = useState(false);
//     const [packageName,setpackageName]=useState('');
//         const [packageType,setpackageType]=useState('');
//         const [price,setprice]=useState('');
//         const [makkaHotel,setmakkaHotel]=useState('');
//         const [madinaHotel,setmadinaHotel]=useState('');
//         const [distanceFromMakka,setdistanceFromMakka]=useState('');
//         const [distanceFromMadina,setdistanceFromMadina]=useState('');
//         const [durationOfTour,setdurationOfTour]=useState('');
//         const [nextBatch,setnextBatch]=useState('');
//         const pkgData = {
//           packageName,
//           packageType,
//           price,
//           makkaHotel,
//           madinaHotel,
//           distanceFromMakka,
//           distanceFromMadina,
//           durationOfTour,
//           nextBatch,
//         };
//         const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
        
//         const openView = (event) => {
//           event.preventDefault();
//           setIsViewVisible(true);
//         };
      
//         const closeView = (event) => {
//           event.preventDefault();
//           setIsViewVisible(false);
//         };    
//     const openModal = (event) => {
//       event.preventDefault();
//       setIsModalVisible(true);
//     };
  
//     const closeModal = (event) => {
//       event.preventDefault();
//       setIsModalVisible(false);
//     };
//     useEffect(() => {
//       // setLoading(true);
      
//       axios.get(`${const_url}/${id}`)
//       .then((response) => {
//           setpackageName(response.data.packageName);
//           setpackageType(response.data.packageType);
//           setprice(response.data.price);
//           setmakkaHotel(response.data.makkaHotel);
//           setmadinaHotel(response.data.madinaHotel);
//           setdistanceFromMakka(response.data.distanceFromMakka);
//           setdistanceFromMadina(response.data.distanceFromMadina);
//           setdurationOfTour(response.data.durationOfTour);
//           setnextBatch(response.data.nextBatch);
//         }).catch((error) => {
//           // setLoading(false);
//           alert('An error happened. Please Chack console');
//           console.log(error);
//         });
//     }, [])
    
    
//     const handleDelete = () => {
//       props.onDelete(props.id); // Call onDelete with package id
//     };
    
//     const handleUpdatePackage=(e)=>{
//         e.preventDefault();
//           axios
//             .put(`${const_url}/${id}`, pkgData)
//             .then(() => {
//               // setLoading(false);
//               alert('Package updated successfully');
//               // navigate('/admin-handle');
//             })
//             .catch((error) => {
//               // setLoading(false);
//               // alert('An error happened. Please Chack console');
//               alert('Error');
//               console.log(error);
//             });
//     }
//   return (
//     <>
//     <Modal isVisible={isViewVisible} onClose={closeView}>
//     <div className="container-pkg">
//       <div className="package-details">
//         <h2>Tour Package Details</h2>
//         <ul>
//           <li><span>Package Name:</span> {packageName}</li>
//           <li><span>Package Type:</span> {packageType}</li>
//           <li><span>Price:</span> Rs. {price}/-</li>
//           <li><span>Makkah Hotel Name:</span> {makkaHotel}</li>
//           <li><span>Madinah Hotel Name:</span> {madinaHotel}</li>
//           <li><span>Distance from Makkah Hotel:</span> {distanceFromMakka}</li>
//           <li><span>Distance from Madinah Hotel:</span> {distanceFromMadina}</li>
//           <li><span>Duration of Tour:</span> {durationOfTour} days</li>
//           <div className="navigate-container"><Link className='navigate' to={'/contact-us'} >Get CallBack</Link></div>
//           {/* Add more details as needed */}
//         </ul>
//       </div>
//     </div>
//       </Modal>
//     <Modal isVisible={isModalVisible} onClose={closeModal}>
//         <section className="add-form" id="contact">
//           <h2>Edit Package</h2>
//           <div className="form-container">
//             <form onSubmit={handleUpdatePackage}>
//               <label htmlFor="name">Package Name:</label>
//               {/* <input type="text" id="name" name="name" value={packageName} required onChange={(e)=>setpackageName(e.target.value)}/> */}
//               <select name="" id="" required onChange={(e)=>setpackageName(e.target.value)}>
                
//                 <option value={packageName} selected disabled hidden>{packageName}</option>
//                   <option value="Hajj" >Hajj</option>
//                   <option value="Umrah">Umrah</option>
//                   <option value="Ramadhan">Ramadhan</option>
                  
//                 </select>
//               <label htmlFor="type">Package Type:</label>
//               {/* <input type="text" id="type" name="type" value={packageType} required onChange={(e)=>setpackageType(e.target.value)}/> */}
//               <select name="" id="" required onChange={(e)=>setpackageType(e.target.value)}>
//               <option value={packageType} selected disabled hidden>{packageType}</option>
                
              
//                 <option value="Connecting Flight">Connecting Flight</option>
//                 <option value="Direct Flight">Direct Flight</option>
//               </select>
//               <label htmlFor="makkaHotel">Makka Hotel:</label>
//               <input type="text" id="makkaHotel" name="makkaHotel" value={makkaHotel} required onChange={(e)=>setmakkaHotel(e.target.value)}/>

//               <label htmlFor="madinaHotel">Madina Hotel:</label>
//               <input type="text" id="madinaHotel" name="madinaHotel" value={madinaHotel} required onChange={(e)=>setmadinaHotel(e.target.value)}/>

//               <label htmlFor="distanceFromMakka">Distance From Makka</label>
//               <input
//                 type="text"
//                 id="distanceFromMakka"
//                 name="distanceFromMakka"
//                 value={distanceFromMakka}
//                 required
//               onChange={(e)=>setdistanceFromMakka(e.target.value)}/>

//               <label htmlFor="distanceFromMadina">Distance From Madina</label>
//               <input
//                 type="text"
//                 id="distanceFromMadina"
//                 name="distanceFromMadina"
//                 value={distanceFromMadina}
//                 required
//               onChange={(e)=>setdistanceFromMadina(e.target.value)}/>

//               <label htmlFor="durationOfTour">Duration Of Tour</label>
//               <input
//                 type="text"
//                 id="durationOfTour"
//                 name="durationOfTour"
//                 required
//                 value={durationOfTour}
//               onChange={(e)=>setdurationOfTour(e.target.value)}/>

//               <label htmlFor="nextBatch">Next Batch</label>
//               <input type="text" value={nextBatch} id="nextBatch" name="nextBatch" required onChange={(e)=>setnextBatch(e.target.value)}/>

//               <label htmlFor="price">Price</label>
//               <input type="text" id="price" value={price} name="price" required onChange={(e)=>setprice(e.target.value)}/>

//               <div className="form-btns">
//                 <button type="submit" className="pkg-btn">
//                   Submit
//                 </button>
//                 <a href="" className="pkg-btn" onClick={closeModal}>
//                   Close
//                 </a>
//               </div>
//             </form>
//           </div>
//         </section>
//       </Modal>
//     <div className="package-card">
//                 <img src={Banner} alt=""/>
//                 <h3 style={{textAlign: 'center'}} >{props.package} Package</h3>
//                 <div className="content-card">
                
//                 <p>Duration:{props.duration} Days</p>
//                 <p>Makkah Hotel: {props.makkaHotel}</p>
//                 <p>Madina Hotel :{props.madinaHotel} </p>
//                 <p>Next Batch :{props.nextBatch}</p>
//                 <p>Package Type :{props.typeOfTour}</p>
//                 </div>
//                 <div className="btn">
//                     <a className="pkg-btn" onClick={openView}>View Details</a>
//                     {/* <a className="pkg-btn" onClick={openModal}>Edit</a>
//                     <a className="pkg-btn" onClick={handleDelete}>Delete</a> */}
//                 </div>
                
//     </div>
    
//     </>
//   )
// }

// export default PackageCard


import React, { useState, useEffect } from 'react';
import Banner from './assets/hajj-package-banner-min-1-700x450.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Model';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db } from './firebase'; // Ensure this path is correct
import { db } from '../firebase';
function PackageCard(props) {
  const navigate = useNavigate();
  const id = props.id;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isViewsVisible, setIsViewsVisible] = useState(false);
  const [packageName, setPackageName] = useState('');
  const [packageType, setPackageType] = useState('');
  const [price, setPrice] = useState('');
  const [makkaHotel, setMakkaHotel] = useState('');
  const [madinaHotel, setMadinaHotel] = useState('');
  const [distanceFromMakka, setDistanceFromMakka] = useState('');
  const [distanceFromMadina, setDistanceFromMadina] = useState('');
  const [durationOfTour, setDurationOfTour] = useState('');
  const [nextBatch, setNextBatch] = useState('');

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const packageDoc = doc(db, 'packages', id);
        const packageData = await getDoc(packageDoc);

        if (packageData.exists()) {
          const data = packageData.data();
          setPackageName(data.packageName);
          setPackageType(data.packageType);
          setPrice(data.price);
          setMakkaHotel(data.makkaHotel);
          setMadinaHotel(data.madinaHotel);
          setDistanceFromMakka(data.distanceFromMakka);
          setDistanceFromMadina(data.distanceFromMadina);
          setDurationOfTour(data.durationOfTour);
          setNextBatch(data.nextBatch);
        } else {
          alert('Package not found');
        }
      } catch (error) {
        console.log('An error occurred while fetching the package.');
        console.log(error);
      }
    };

    fetchPackage();
  }, [id]);

  const handleUpdatePackage = async (e) => {
    e.preventDefault();
    const pkgData = {
      packageName,
      packageType,
      price,
      makkaHotel,
      madinaHotel,
      distanceFromMakka,
      distanceFromMadina,
      durationOfTour,
      nextBatch,
    };

    try {
      const packageDoc = doc(db, 'packages', id);
      await updateDoc(packageDoc, pkgData);
      alert('Package updated successfully');
    } catch (error) {
      alert('An error occurred while updating the package.');
      console.log(error);
    }
  };

  const openViews = (event) => {
    event.preventDefault();
    setIsViewsVisible(true);
  };

  const closeViews = (event) => {
    event.preventDefault();
    setIsViewsVisible(false);
  };
  const openView = (event) => {
    event.preventDefault();
    setIsViewVisible(true);
  };

  const closeView = (event) => {
    event.preventDefault();
    setIsViewVisible(false);
  };

  const openModal = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal isVisible={isViewVisible} onClose={closeView}>
        <div className="container-pkg">
          <div className="package-details">
            <h2>Tour Package Details</h2>
            <ul>
              <li><span>Package Name:</span> {packageName}</li>
              <li><span>Package Type:</span> {packageType}</li>
              <li><span>Price:</span> Rs. {price}/-</li>
              <li><span>Makkah Hotel Name:</span> {makkaHotel}</li>
              <li><span>Madinah Hotel Name:</span> {madinaHotel}</li>
              <li><span>Distance from Makkah Hotel:</span> {distanceFromMakka}</li>
              <li><span>Distance from Madinah Hotel:</span> {distanceFromMadina}</li>
              <li><span>Duration of Tour:</span> {durationOfTour} days</li>
              <div className="navigate-container"><Link className='navigate' to={'/contact-us'}>Get CallBack</Link></div>
            </ul>
          </div>
        </div>
      </Modal>
      <Modal isVisible={isViewsVisible} onClose={closeViews}>
        <div className="container-pkg">
          <div className="package-details">
            <h2>Tour Package Details</h2>
            <ul>
              <li><span>Package Name:</span> {packageName}</li>
              <li><span>Package Type:</span> {packageType}</li>
              <li><span>Price:</span> Rs. {price}/-</li>
              <li><span>Duration of Tour:</span> {durationOfTour} days</li>
              <div className="navigate-container"><Link className='navigate' to={'/contact-us'}>Get CallBack</Link></div>
            </ul>
          </div>
        </div>
      </Modal>
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <section className="add-form" id="contact">
          <h2>Edit Package</h2>
          <div className="form-container">
            <form onSubmit={handleUpdatePackage}>
              <label htmlFor="name">Package Name:</label>
              <select name="" id="" required onChange={(e) => setPackageName(e.target.value)} value={packageName}>
                <option value={packageName} disabled hidden>{packageName}</option>
                <option value="Hajj">Hajj</option>
                <option value="Umrah">Umrah</option>
                <option value="Ramadhan">Ramadhan</option>
              </select>

              <label htmlFor="type">Package Type:</label>
              <select name="" id="" required onChange={(e) => setPackageType(e.target.value)} value={packageType}>
                <option value={packageType} disabled hidden>{packageType}</option>
                <option value="Connecting Flight">Connecting Flight</option>
                <option value="Direct Flight">Direct Flight</option>
              </select>

              <label htmlFor="makkaHotel">Makka Hotel:</label>
              <input type="text" id="makkaHotel" name="makkaHotel" value={makkaHotel} required onChange={(e) => setMakkaHotel(e.target.value)} />

              <label htmlFor="madinaHotel">Madina Hotel:</label>
              <input type="text" id="madinaHotel" name="madinaHotel" value={madinaHotel} required onChange={(e) => setMadinaHotel(e.target.value)} />

              <label htmlFor="distanceFromMakka">Distance From Makka</label>
              <input type="text" id="distanceFromMakka" name="distanceFromMakka" value={distanceFromMakka} required onChange={(e) => setDistanceFromMakka(e.target.value)} />

              <label htmlFor="distanceFromMadina">Distance From Madina</label>
              <input type="text" id="distanceFromMadina" name="distanceFromMadina" value={distanceFromMadina} required onChange={(e) => setDistanceFromMadina(e.target.value)} />

              <label htmlFor="durationOfTour">Duration Of Tour</label>
              <input type="text" id="durationOfTour" name="durationOfTour" value={durationOfTour} required onChange={(e) => setDurationOfTour(e.target.value)} />

              <label htmlFor="nextBatch">Next Batch</label>
              <input type="text" id="nextBatch" name="nextBatch" value={nextBatch} required onChange={(e) => setNextBatch(e.target.value)} />

              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" value={price} required onChange={(e) => setPrice(e.target.value)} />

              <div className="form-btns">
                <button type="submit" className="pkg-btn">Submit</button>
                <a href="" className="pkg-btn" onClick={closeModal}>Close</a>
              </div>
            </form>
          </div>
        </section>
      </Modal>
      <div className="package-card">
  <img src={props.imageUrl} alt="" />
  <h3 style={{ textAlign: 'center' }}>{props.package} Package</h3>
  <div className="content-card">
    <p>Duration: {props.duration} Days</p>
    {(props.package === "Umrah" || props.package === "Hajj" || props.package === "Ramadhan") && (
      <>
        <p>Makkah Hotel: {props.makkaHotel}</p>
        <p>Madina Hotel: {props.madinaHotel}</p>
      </>
    )}
    <p>Next Batch: {props.nextBatch}</p>
    <p>Package Type: {props.typeOfTour}</p>
  </div>
  <div className="btn">
    <a className="pkg-btn" onClick={
      (props.package === "Umrah" || props.package === "Hajj" || props.package === "Ramadhan") 
      ? openView 
      : openViews
    }>View Details</a>
  </div>
</div>

    </>
  );
}

export default PackageCard;
