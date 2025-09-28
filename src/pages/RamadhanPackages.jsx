// import React from 'react'
// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'
// import PackageCard from '../components/PackageCard';
// import { useEffect,useState } from 'react';
// import axios from 'axios';
// function RamadhanPackages() {
  
//   const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
//     const handleDeletePackage = (id) => {
//         axios.delete(`${const_url}/${id}`)
//           .then(() => {
//             alert('Package deleted successfully');
//             // Update data state after deletion
//             setPackages(packages.filter(item => item._id !== id));
//           })
//           .catch((error) => {
//             console.error('Error deleting package:', error);
//             alert('Error deleting package');
//           });
//       };
//     const [packages, setPackages] = useState([]);
//     const [filteredPackages, setFilteredPackages] = useState([]);
  
//     useEffect(() => {
//       // Fetch all packages initially
//     axios.get(`${const_url}`)
//         .then(response => {
//           setPackages(response.data.data);
//         })
//         .catch(error => {
//           console.error('Error fetching packages:', error);
//         });
//     }, []);
  
//     useEffect(() => {
//       // Hardcoded filter: filter packages with packageName "Hajj"
//       const filterCriteria = 'Ramadhan';
//       const filtered = packages.filter(pkg =>
//         pkg.packageName.toLowerCase() === filterCriteria.toLowerCase()
//       );
//       setFilteredPackages(filtered);
//     }, [packages]);
  
//     return (
//       <>
//       <NavBar/>
      
//       <div>
//         <div className="packages">
//           <h2>Ramadhan Packages</h2>
//           <div className="cards">
//             {filteredPackages.length > 0 ? (
//               filteredPackages.map(pkg => (
//                 <PackageCard
//                   key={pkg._id}
//                   id={pkg._id}
//                   package={pkg.packageName}
//                   duration={pkg.durationOfTour}
//                   makkaHotel={pkg.makkaHotel}
//                   madinaHotel={pkg.madinaHotel}
//                   nextBatch={pkg.nextBatch}
//                   typeOfTour={pkg.packageType}
//                   onDelete={handleDeletePackage} 
//                 />
//               ))
//             ) : (
//               <div className="coming-soon-card">
//                 <h3>Coming Soon</h3>
//                 <p>Stay tuned for our upcoming packages!</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer/>    </>
//     );
// }

// export default RamadhanPackages

import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PackageCard from '../components/PackageCard';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this is the correct path

function RamadhanPackages() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);

  // Fetch packages from Firestore
  const fetchPackages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'packages'));
      const packagesList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setPackages(packagesList);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  // Delete a package from Firestore
  const handleDeletePackage = async (id) => {
    try {
      await deleteDoc(doc(db, 'packages', id));
      alert('Package deleted successfully');
      // Update data state after deletion
      setPackages(packages.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('Error deleting package');
    }
  };

  useEffect(() => {
    fetchPackages(); // Fetch packages when the component mounts
  }, []);

  useEffect(() => {
    // Hardcoded filter: filter packages with packageName "Ramadhan"
    const filterCriteria = 'Ramadhan';
    const filtered = packages.filter(pkg =>
      pkg.packageName.toLowerCase() !="hajj" && pkg.packageName.toLowerCase()!="umrah"
    );
    setFilteredPackages(filtered);
  }, [packages]);

  return (
    <>
      <NavBar />

      <div>
        <div className="packages">
          <h2>Special Packages</h2>
          <div className="cards">
            {filteredPackages.length > 0 ? (
              filteredPackages.map(pkg => (
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
                  onDelete={handleDeletePackage}
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

      <Footer />
    </>
  );
}

export default RamadhanPackages;
