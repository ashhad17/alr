// import React, { useState } from "react";
// import Modal from "./Model";
// import axios from "axios";
// import AdminNavBar from "./AdminNavBar";
// // import Snackbar from "@mui/material/Snackbar";

// // import { Navigate } from "react-router-dom";
// function PackageForm() {
//   // const navigate=Navigate();

//   const const_url = "https://al-razack-tours-internationals.onrender.com/pkgs";
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [packageName, setpackageName] = useState("");
//   const [packageType, setpackageType] = useState("");
//   const [price, setprice] = useState("");
//   const [makkaHotel, setmakkaHotel] = useState("");
//   const [madinaHotel, setmadinaHotel] = useState("");
//   const [distanceFromMakka, setdistanceFromMakka] = useState("");
//   const [distanceFromMadina, setdistanceFromMadina] = useState("");
//   const [durationOfTour, setdurationOfTour] = useState("");
//   const [nextBatch, setnextBatch] = useState("");
//   const openModal = (event) => {
//     event.preventDefault();
//     setIsModalVisible(true);
//   };

//   const closeModal = (event) => {
//     event.preventDefault();
//     setIsModalVisible(false);
//   };
//   const handleAddPackage = () => {
//     const pkgData = {
//       packageName,
//       packageType,
//       price,
//       makkaHotel,
//       madinaHotel,
//       distanceFromMakka,
//       distanceFromMadina,
//       durationOfTour,
//       nextBatch,
//     };
//     axios
//       .post(`${const_url}`, pkgData)
//       .then(() => {
        
//         // setLoading(false);
//         alert("Package Created successfully");
//         // navigate('/admin-handle');
//       })
//       .catch((error) => {
//         // setLoading(false);
//         // alert('An error happened. Please Chack console');
//         console.log(pkgData);
//         alert("Error");
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <div className="admin-navbar">
//         <div className="add-package" style={{ padding: "30px" }}>
//           <AdminNavBar />
//         </div>
//         <a href="" className="pkg-btn" onClick={openModal}>
//           Add New Package
//         </a>
//       </div>

//       <Modal isVisible={isModalVisible} onClose={closeModal}>
//         <section className="add-form" id="contact">
//           <h2>Add New Package</h2>
//           <div className="form-container">
//             <form onSubmit={handleAddPackage}>
//               <label htmlFor="name">Package Name:</label>
//               {/* <input type="text" id="name" name="name" required onChange={(e)=>setpackageName(e.target.value)}/> */}
//               <select
//                 name=""
//                 id=""
//                 required
//                 onChange={(e) => setpackageName(e.target.value)}
//               >
//                 <option value="Hajj" selected disabled hidden>
//                   --select--
//                 </option>
//                 <option value="Hajj">Hajj</option>
//                 <option value="Umrah">Umrah</option>
//                 <option value="Ramadhan">Ramadhan</option>
//               </select>

//               <label htmlFor="type">Package Type:</label>
//               {/* <input type="text" id="type" name="type" required onChange={(e)=>setpackageType(e.target.value)}/> */}
//               <select
//                 name=""
//                 id=""
//                 required
//                 onChange={(e) => setpackageType(e.target.value)}
//               >
//                 <option value="Connecting Flight" selected disabled hidden>
//                   --select--
//                 </option>

//                 <option value="Connecting Flight">Connecting Flight</option>
//                 <option value="Direct Flight">Direct Flight</option>
//               </select>
//               <label htmlFor="makkaHotel">Makka Hotel:</label>
//               <input
//                 type="text"
//                 id="makkaHotel"
//                 name="makkaHotel"
//                 required
//                 onChange={(e) => setmakkaHotel(e.target.value)}
//               />

//               <label htmlFor="madinaHotel">Madina Hotel:</label>
//               <input
//                 type="text"
//                 id="madinaHotel"
//                 name="madinaHotel"
//                 required
//                 onChange={(e) => setmadinaHotel(e.target.value)}
//               />

//               <label htmlFor="distanceFromMakka">Distance From Makka</label>
//               <input
//                 type="text"
//                 id="distanceFromMakka"
//                 name="distanceFromMakka"
//                 required
//                 onChange={(e) => setdistanceFromMakka(e.target.value)}
//               />

//               <label htmlFor="distanceFromMadina">Distance From Madina</label>
//               <input
//                 type="text"
//                 id="distanceFromMadina"
//                 name="distanceFromMadina"
//                 required
//                 onChange={(e) => setdistanceFromMadina(e.target.value)}
//               />

//               <label htmlFor="durationOfTour">Duration Of Tour</label>
//               <input
//                 type="text"
//                 id="durationOfTour"
//                 name="durationOfTour"
//                 required
//                 onChange={(e) => setdurationOfTour(e.target.value)}
//               />

//               <label htmlFor="nextBatch">Next Batch</label>
//               <input
//                 type="text"
//                 id="nextBatch"
//                 name="nextBatch"
//                 required
//                 onChange={(e) => setnextBatch(e.target.value)}
//               />

//               <label htmlFor="price">Price</label>
//               <input
//                 type="text"
//                 id="price"
//                 name="price"
//                 required
//                 onChange={(e) => setprice(e.target.value)}
//               />

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
//     </>
//   );
// }

// export default PackageForm;

// import React, { useState } from "react";
// // import Modal from "./Modal"; // Ensure this is the correct path
// import AdminNavBar from "./AdminNavBar";
// import { collection, addDoc } from 'firebase/firestore';
// // import { db } from './firebase'; // Ensure this is the correct path
// import { db } from "../firebase";
// import Modal from "./Model";
// import { redirect } from "react-router-dom";
// function PackageForm() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isModalsVisible, setIsModalsVisible] = useState(false);
//   const [packageName, setpackageName] = useState("");
//   const [packageType, setpackageType] = useState("");
//   const [price, setprice] = useState("");
//   const [makkaHotel, setmakkaHotel] = useState("");
//   const [madinaHotel, setmadinaHotel] = useState("");
//   const [distanceFromMakka, setdistanceFromMakka] = useState("");
//   const [distanceFromMadina, setdistanceFromMadina] = useState("");
//   const [durationOfTour, setdurationOfTour] = useState("");
//   const [nextBatch, setnextBatch] = useState("");
//   const [image, setImage] = useState(null);
//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const openModal = (event) => {
//     event.preventDefault();
//     setIsModalVisible(true);
//   };

//   const closeModal = (event) => {
//     event.preventDefault();
//     setIsModalVisible(false);
//   };
//   const openModals = (event) => {
//     event.preventDefault();
//     setIsModalsVisible(true);
//   };

//   const closeModals = (event) => {
//     event.preventDefault();
//     setIsModalsVisible(false);
//   };
  
//   const handleAddPackage = async (event) => {
//     event.preventDefault();

//     const pkgData = {
//       packageName,
//       packageType,
//       price,
//       makkaHotel,
//       madinaHotel,
//       distanceFromMakka,
//       distanceFromMadina,
//       durationOfTour,
//       nextBatch,
//     };

//     try {
//       await addDoc(collection(db, 'packages'), pkgData);
//       alert("Package Created successfully");
//       setIsModalVisible(false);
//       // redirect('admin-handle');
//     } catch (error) {
//       alert("Error creating package");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="admin-navbar">
//         <div className="add-package" style={{ padding: "30px" }}>
//           <AdminNavBar />
//         </div>
//         <a href="#" className="pkg-btn" style={{padding:10+"px"}} onClick={openModal}>
//           Add Package
//         </a>
//         <a href="#" className="pkg-btn" style={{padding:10+"px"}} onClick={openModals}>
//           Add Special Package
//         </a>
        
//       </div>
//       <Modal isVisible={isModalsVisible} onClose={closeModals}>
//       <section className="add-form" id="contact">
//           <h2>Add New Package</h2>
//           <div className="form-container">
//             <form onSubmit={handleAddPackage}>
//               <label htmlFor="name">Package Name:</label>
//               <input type="text" name="" id="" onChange={(e)=>setpackageName(e.target.value)}/>

//               <label htmlFor="type">Package Type:</label>
//               <select
//                 id="type"
//                 required
//                 onChange={(e) => setpackageType(e.target.value)}
//               >
//                 <option value="" selected disabled hidden>
//                   --select--
//                 </option>
//                 <option value="Connecting Flight">Connecting Flight</option>
//                 <option value="Direct Flight">Direct Flight</option>
//               </select>
// {/* 
//               <label htmlFor="makkaHotel">Makka Hotel:</label>
//               <input
//                 type="text"
//                 id="makkaHotel"
//                 required
//                 onChange={(e) => setmakkaHotel(e.target.value)}
//               />

//               <label htmlFor="madinaHotel">Madina Hotel:</label>
//               <input
//                 type="text"
//                 id="madinaHotel"
//                 required
//                 onChange={(e) => setmadinaHotel(e.target.value)}
//               />

//               <label htmlFor="distanceFromMakka">Distance From Makka:</label>
//               <input
//                 type="text"
//                 id="distanceFromMakka"
//                 required
//                 onChange={(e) => setdistanceFromMakka(e.target.value)}
//               />

//               <label htmlFor="distanceFromMadina">Distance From Madina:</label>
//               <input
//                 type="text"
//                 id="distanceFromMadina"
//                 required
//                 onChange={(e) => setdistanceFromMadina(e.target.value)}
//               />
//  */}
//               <label htmlFor="durationOfTour">Duration Of Tour:</label>
//               <input
//                 type="text"
//                 id="durationOfTour"
//                 required
//                 onChange={(e) => setdurationOfTour(e.target.value)}
//               />

//               <label htmlFor="nextBatch">Next Batch:</label>
//               <input
//                 type="text"
//                 id="nextBatch"
//                 required
//                 onChange={(e) => setnextBatch(e.target.value)}
//               />

//               <label htmlFor="price">Price:</label>
//               <input
//                 type="text"
//                 id="price"
//                 required
//                 onChange={(e) => setprice(e.target.value)}
//               />

//               <div className="form-btns">
//                 <button type="submit" className="pkg-btn">
//                   Submit
//                 </button>
//                 <a href="#" className="pkg-btn" onClick={closeModal}>
//                   Close
//                 </a>
//               </div>
//             </form>
//           </div>
//         </section>
//       </Modal>
      // <Modal isVisible={isModalVisible} onClose={closeModal}>
      //   <section className="add-form" id="contact">
      //     <h2>Add New Package</h2>
      //     <div className="form-container">
      //       <form onSubmit={handleAddPackage}>
      //         <label htmlFor="name">Package Name:</label>
      //         <select
      //           id="name"
      //           required
      //           onChange={(e) => setpackageName(e.target.value)}
      //         >
      //           <option value="" selected disabled hidden>
      //             --select--
      //           </option>
      //           <option value="Hajj">Hajj</option>
      //           <option value="Umrah">Umrah</option>
      //           <option value="Ramadhan">Ramadhan</option>
      //         </select>

      //         <label htmlFor="type">Package Type:</label>
      //         <select
      //           id="type"
      //           required
      //           onChange={(e) => setpackageType(e.target.value)}
      //         >
      //           <option value="" selected disabled hidden>
      //             --select--
      //           </option>
      //           <option value="Connecting Flight">Connecting Flight</option>
      //           <option value="Direct Flight">Direct Flight</option>
      //         </select>

      //         <label htmlFor="makkaHotel">Makka Hotel:</label>
      //         <input
      //           type="text"
      //           id="makkaHotel"
      //           required
      //           onChange={(e) => setmakkaHotel(e.target.value)}
      //         />

      //         <label htmlFor="madinaHotel">Madina Hotel:</label>
      //         <input
      //           type="text"
      //           id="madinaHotel"
      //           required
      //           onChange={(e) => setmadinaHotel(e.target.value)}
      //         />

      //         <label htmlFor="distanceFromMakka">Distance From Makka:</label>
      //         <input
      //           type="text"
      //           id="distanceFromMakka"
      //           required
      //           onChange={(e) => setdistanceFromMakka(e.target.value)}
      //         />

      //         <label htmlFor="distanceFromMadina">Distance From Madina:</label>
      //         <input
      //           type="text"
      //           id="distanceFromMadina"
      //           required
      //           onChange={(e) => setdistanceFromMadina(e.target.value)}
      //         />

      //         <label htmlFor="durationOfTour">Duration Of Tour:</label>
      //         <input
      //           type="text"
      //           id="durationOfTour"
      //           required
      //           onChange={(e) => setdurationOfTour(e.target.value)}
      //         />

      //         <label htmlFor="nextBatch">Next Batch:</label>
      //         <input
      //           type="text"
      //           id="nextBatch"
      //           required
      //           onChange={(e) => setnextBatch(e.target.value)}
      //         />

      //         <label htmlFor="price">Price:</label>
      //         <input
      //           type="text"
      //           id="price"
      //           required
      //           onChange={(e) => setprice(e.target.value)}
      //         />

      //         <div className="form-btns">
      //           <button type="submit" className="pkg-btn">
      //             Submit
      //           </button>
      //           <a href="#" className="pkg-btn" onClick={closeModal}>
      //             Close
      //           </a>
      //         </div>
      //       </form>
      //     </div>
      //   </section>
      // </Modal>
//     </>
//   );
// }

// export default PackageForm;



import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from "../firebase"; // Make sure the paths are correct
import Modal from "./Model";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function PackageForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalsVisible, setIsModalsVisible] = useState(false);
  const [packageName, setpackageName] = useState("");
  const [packageType, setpackageType] = useState("");
  const [price, setprice] = useState("");
  const [makkaHotel, setmakkaHotel] = useState("");
  const [madinaHotel, setmadinaHotel] = useState("");
  const [distanceFromMakka, setdistanceFromMakka] = useState("");
  const [distanceFromMadina, setdistanceFromMadina] = useState("");
  const [durationOfTour, setdurationOfTour] = useState("");
  const [nextBatch, setnextBatch] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
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

  const handleAddPackage = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `packages/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can add a progress indicator here if needed
      },
      (error) => {
        console.error("Image upload failed:", error);
      },
      async () => {
        // Get the download URL once the upload is complete
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

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
          imageUrl: downloadURL, // Store the image URL in Firestore
        };

        try {
          await addDoc(collection(db, 'packages'), pkgData);
          alert("Package created successfully");
          setIsModalVisible(false);
        } catch (error) {
          alert("Error creating package");
          console.error(error);
        }
      }
    );
  };

  return (
    <>
      <div className="admin-navbar">
        <div className="add-package" style={{ padding: "30px" }}>
          <AdminNavBar />
        </div>
        <a href="#" className="pkg-btn" style={{padding:10+"px"}} onClick={openModal}>
          Add Package
        </a>
        <a href="#" className="pkg-btn" style={{padding:10+"px"}} onClick={openModals}>
          Add Special Package
        </a>
      </div>
      <Modal isVisible={isModalsVisible} onClose={closeModals}>
        <section className="add-form" id="contact">
          <h2>Add New Package</h2>
          <div className="form-container">
            <form onSubmit={handleAddPackage}>
              <label htmlFor="name">Package Name:</label>
              <input type="text" name="packageName" onChange={(e)=>setpackageName(e.target.value)} />

              <label htmlFor="type">Package Type:</label>
              <select
                id="type"
                required
                onChange={(e) => setpackageType(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  --select--
                </option>
                <option value="Connecting Flight">Connecting Flight</option>
                <option value="Direct Flight">Direct Flight</option>
              </select>

              {/* Other fields... */}

              <label htmlFor="durationOfTour">Duration Of Tour:</label>
              <input
                type="text"
                id="durationOfTour"
                required
                onChange={(e) => setdurationOfTour(e.target.value)}
              />

              <label htmlFor="nextBatch">Next Batch:</label>
              <input
                type="text"
                id="nextBatch"
                required
                onChange={(e) => setnextBatch(e.target.value)}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                required
                onChange={(e) => setprice(e.target.value)}
              />

              <label htmlFor="image">Upload Image:</label>
              <input type="file" id="image" accept="image/*" onChange={handleImageChange} />

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

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <section className="add-form" id="contact">
          <h2>Add New Package</h2>
          <div className="form-container">
            <form onSubmit={handleAddPackage}>
              <label htmlFor="name">Package Name:</label>
              <select
                id="name"
                required
                onChange={(e) => setpackageName(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  --select--
                </option>
                <option value="Hajj">Hajj</option>
                <option value="Umrah">Umrah</option>
                <option value="Ramadhan">Ramadhan</option>
              </select>

              <label htmlFor="type">Package Type:</label>
              <select
                id="type"
                required
                onChange={(e) => setpackageType(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  --select--
                </option>
                <option value="Connecting Flight">Connecting Flight</option>
                <option value="Direct Flight">Direct Flight</option>
              </select>

              <label htmlFor="makkaHotel">Makka Hotel:</label>
              <input
                type="text"
                id="makkaHotel"
                required
                onChange={(e) => setmakkaHotel(e.target.value)}
              />

              <label htmlFor="madinaHotel">Madina Hotel:</label>
              <input
                type="text"
                id="madinaHotel"
                required
                onChange={(e) => setmadinaHotel(e.target.value)}
              />

              <label htmlFor="distanceFromMakka">Distance From Makka:</label>
              <input
                type="text"
                id="distanceFromMakka"
                required
                onChange={(e) => setdistanceFromMakka(e.target.value)}
              />

              <label htmlFor="distanceFromMadina">Distance From Madina:</label>
              <input
                type="text"
                id="distanceFromMadina"
                required
                onChange={(e) => setdistanceFromMadina(e.target.value)}
              />

              <label htmlFor="durationOfTour">Duration Of Tour:</label>
              <input
                type="text"
                id="durationOfTour"
                required
                onChange={(e) => setdurationOfTour(e.target.value)}
              />

              <label htmlFor="nextBatch">Next Batch:</label>
              <input
                type="text"
                id="nextBatch"
                required
                onChange={(e) => setnextBatch(e.target.value)}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                required
                onChange={(e) => setprice(e.target.value)}
              />
              <label htmlFor="image">Upload Image:</label>
              <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
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
    </>
  );
}

export default PackageForm;
