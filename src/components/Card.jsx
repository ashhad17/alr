// import React from 'react'
// import Banner from './assets/hajj-package-banner-min-1-700x450.jpg'
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Modal from './Model';
// import { useState,useEffect } from 'react';
// function Card(props) {
//   const navigate = useNavigate();
//   const id=props.id;
//   const [isModalVisible, setIsModalVisible] = useState(false);
  
//   const [isViewVisible, setIsViewVisible] = useState(false);
//   // const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
//   const packageCollectionRef = collection(db, 'packages');

        
//   const [packageName,setpackageName]=useState('');
//         const [packageType,setpackageType]=useState('');
//         const [price,setprice]=useState('');
//         const [makkaHotel,setmakkaHotel]=useState('');
//         const [madinaHotel,setmadinaHotel]=useState('');
//         const [distanceFromMakka,setdistanceFromMakka]=useState('');
//         const [distanceFromMadina,setdistanceFromMadina]=useState('');
//         const [durationOfTour,setdurationOfTour]=useState('');
//         const [nextBatch,setnextBatch]=useState('');

        
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
//     const handleUpdatePackage=()=>{
//         const pkgData = {
//             packageName,
//             packageType,
//             price,
//             makkaHotel,
//             madinaHotel,
//             distanceFromMakka,
//             distanceFromMadina,
//             durationOfTour,
//             nextBatch,
//           };
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
//                     <a className="pkg-btn" onClick={openModal}>Edit</a>
//                     <a className="pkg-btn" onClick={handleDelete}>Delete</a>
//                 </div>
                
//     </div>
    
//     </>
//   )
// }

// export default Card
import React, { useState, useEffect } from 'react';
import Banner from './assets/hajj-package-banner-min-1-700x450.jpg';
import { Link, useNavigate } from 'react-router-dom';
// import Modal from './Modal'; // Ensure this is the correct path
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db } from './firebase'; // Ensure this is the correct path
import { db } from '../firebase';
import Modal from './Model';
function Card({ id, onDelete, package: packageName, duration, makkaHotel, madinaHotel, nextBatch, typeOfTour,imageUrl }) {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewVisible, setIsViewVisible] = useState(false); 
  const [isModalsVisible, setIsModalsVisible] = useState(false);
  const [isViewsVisible, setIsViewsVisible] = useState(false);
  const [packageDetails, setPackageDetails] = useState({
    packageName: '',
    packageType: '',
    price: '',
    makkaHotel: '',
    madinaHotel: '',
    distanceFromMakka: '',
    distanceFromMadina: '',
    durationOfTour: '',
    nextBatch: ''
  });

  const packageCollectionRef = collection(db, 'packages');

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const docRef = doc(packageCollectionRef, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPackageDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log('An error occurred. Please check the console.');
        console.error(error);
      }
    };

    fetchPackage();
  }, [id]);

  const handleUpdatePackage = async () => {
    try {
      const docRef = doc(packageCollectionRef, id);
      await updateDoc(docRef, packageDetails);
      alert('Package updated successfully');
      setIsModalVisible(false);
    } catch (error) {
      alert('Error updating package');
      console.error(error);
    }
  };

  const handleDelete = () => {
    onDelete(id);
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
  const openModals = (event) => {
    event.preventDefault();
    setIsModalsVisible(true);
  };

  const closeModals = (event) => {
    event.preventDefault();
    setIsModalsVisible(false);
  };

  return (
    <>
      <Modal isVisible={isViewVisible} onClose={closeView}>
        <div className="container-pkg">
          <div className="package-details">
            <h2>Tour Package Details</h2>
            <ul>
              <li><span>Package Name:</span> {packageDetails.packageName}</li>
              <li><span>Package Type:</span> {packageDetails.packageType}</li>
              <li><span>Price:</span> Rs. {packageDetails.price}/-</li>
              <li><span>Makkah Hotel Name:</span> {packageDetails.makkaHotel}</li>
              <li><span>Madinah Hotel Name:</span> {packageDetails.madinaHotel}</li>
              <li><span>Distance from Makkah Hotel:</span> {packageDetails.distanceFromMakka}</li>
              <li><span>Distance from Madinah Hotel:</span> {packageDetails.distanceFromMadina}</li>
              <li><span>Duration of Tour:</span> {packageDetails.durationOfTour} days</li>
              <div className="navigate-container"><Link className='navigate' to={'/contact-us'}>Get Callback</Link></div>
            </ul>
          </div>
        </div>
      </Modal>
      <Modal isVisible={isViewsVisible} onClose={closeViews}>
        <div className="container-pkg">
          <div className="package-details">
            <h2>Tour Package Details</h2>
            <ul>
              <li><span>Package Name:</span> {packageDetails.packageName}</li>
              <li><span>Package Type:</span> {packageDetails.packageType}</li>
              <li><span>Price:</span> Rs. {packageDetails.price}/-</li>
              <li><span>Duration of Tour:</span> {packageDetails.durationOfTour} days</li>
              <div className="navigate-container"><Link className='navigate' to={'/contact-us'}>Get CallBack</Link></div>
            </ul>
          </div>
        </div>
      </Modal>
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <section className="add-form" id="contact">
          <h2>Edit Package</h2>
          <div className="form-container">
            <form onSubmit={(e) => { e.preventDefault(); handleUpdatePackage(); }}>
              <label htmlFor="name">Package Name:</label>
              <select
                id="name"
                value={packageDetails.packageName}
                onChange={(e) => setPackageDetails({ ...packageDetails, packageName: e.target.value })}
                required
              >
                <option value="Hajj">Hajj</option>
                <option value="Umrah">Umrah</option>
                <option value="Ramadhan">Ramadhan</option>
              </select>

              <label htmlFor="type">Package Type:</label>
              <select
                id="type"
                value={packageDetails.packageType}
                onChange={(e) => setPackageDetails({ ...packageDetails, packageType: e.target.value })}
                required
              >
                <option value="Connecting Flight">Connecting Flight</option>
                <option value="Direct Flight">Direct Flight</option>
              </select>

              <label htmlFor="makkaHotel">Makka Hotel:</label>
              <input
                type="text"
                id="makkaHotel"
                value={packageDetails.makkaHotel}
                onChange={(e) => setPackageDetails({ ...packageDetails, makkaHotel: e.target.value })}
                required
              />

              <label htmlFor="madinaHotel">Madina Hotel:</label>
              <input
                type="text"
                id="madinaHotel"
                value={packageDetails.madinaHotel}
                onChange={(e) => setPackageDetails({ ...packageDetails, madinaHotel: e.target.value })}
                required
              />

              <label htmlFor="distanceFromMakka">Distance From Makka:</label>
              <input
                type="text"
                id="distanceFromMakka"
                value={packageDetails.distanceFromMakka}
                onChange={(e) => setPackageDetails({ ...packageDetails, distanceFromMakka: e.target.value })}
                required
              />

              <label htmlFor="distanceFromMadina">Distance From Madina:</label>
              <input
                type="text"
                id="distanceFromMadina"
                value={packageDetails.distanceFromMadina}
                onChange={(e) => setPackageDetails({ ...packageDetails, distanceFromMadina: e.target.value })}
                required
              />

              <label htmlFor="durationOfTour">Duration Of Tour:</label>
              <input
                type="text"
                id="durationOfTour"
                value={packageDetails.durationOfTour}
                onChange={(e) => setPackageDetails({ ...packageDetails, durationOfTour: e.target.value })}
                required
              />

              <label htmlFor="nextBatch">Next Batch:</label>
              <input
                type="text"
                id="nextBatch"
                value={packageDetails.nextBatch}
                onChange={(e) => setPackageDetails({ ...packageDetails, nextBatch: e.target.value })}
                required
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={packageDetails.price}
                onChange={(e) => setPackageDetails({ ...packageDetails, price: e.target.value })}
                required
              />

              <div className="form-btns">
                <button type="submit" className="pkg-btn">
                  Submit
                </button>
                <a href="#" className="pkg-btn" onClick={closeModal}>
                  Close
                </a>
              </div>
            </form>
          </div>
        </section>
      </Modal>
      <Modal isVisible={isModalsVisible} onClose={closeModals}>
        <section className="add-form" id="contact">
          <h2>Edit Package</h2>
          <div className="form-container">
            <form onSubmit={(e) => { e.preventDefault(); handleUpdatePackage(); }}>
              <label htmlFor="name">Package Name:</label><input type="text" name="" id="" value={packageDetails.packageName} onChange={(e)=>setPackageDetails({...packageDetails,packageName:e.target.value})} />
              <label htmlFor="type">Package Type:</label>
              <select
                id="type"
                value={packageDetails.packageType}
                onChange={(e) => setPackageDetails({ ...packageDetails, packageType: e.target.value })}
                required
              >
                <option value="Connecting Flight">Connecting Flight</option>
                <option value="Direct Flight">Direct Flight</option>
              </select>

              
              <label htmlFor="durationOfTour">Duration Of Tour:</label>
              <input
                type="text"
                id="durationOfTour"
                value={packageDetails.durationOfTour}
                onChange={(e) => setPackageDetails({ ...packageDetails, durationOfTour: e.target.value })}
                required
              />

              <label htmlFor="nextBatch">Next Batch:</label>
              <input
                type="text"
                id="nextBatch"
                value={packageDetails.nextBatch}
                onChange={(e) => setPackageDetails({ ...packageDetails, nextBatch: e.target.value })}
                required
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={packageDetails.price}
                onChange={(e) => setPackageDetails({ ...packageDetails, price: e.target.value })}
                required
              />

              <div className="form-btns">
                <button type="submit" className="pkg-btn">
                  Submit
                </button>
                <a href="#" className="pkg-btn" onClick={closeModals}>
                  Close
                </a>
              </div>
            </form>
          </div>
        </section>
      </Modal>
      <div className="package-card">
  <img src={packageDetails.imageUrl} alt="image" />
  <h3 style={{ textAlign: 'center' }}>{packageName} Package</h3>
  <h6>{imageUrl}</h6>
  <div className="content-card">
    <p>Duration: {duration} Days</p>
    {(packageName === "Umrah" || packageName === "Hajj" || packageName === "Ramadhan") && (
      <>
        <p>Makkah Hotel: {makkaHotel}</p>
        <p>Madina Hotel: {madinaHotel}</p>
      </>
    )}
    <p>Next Batch: {nextBatch}</p>
    <p>Package Type: {typeOfTour}</p>
  </div>
  <div className="btn">
    <a className="pkg-btn" onClick={
      (packageName === "Umrah" || packageName === "Hajj" || packageName === "Ramadhan") 
      ? openView 
      : openViews
    }>View Details</a>
    
    <a className="pkg-btn"  onClick={(packageName === "Umrah" || packageName === "Hajj" || packageName === "Ramadhan") 
      ? openModal
      : openModals}>Edit</a>
          <a className="pkg-btn"  onClick={handleDelete}>Delete</a>
  </div>
</div>

    </>
  );
}

export default Card;
