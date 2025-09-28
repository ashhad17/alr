import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate ,Link} from 'react-router-dom';
import { getDocs,doc, updatedoc,collection,addDoc,deleteDoc, updateDoc } from 'firebase/firestore'
// import { db } from './firebase';
import { db } from '../firebase';
function PackageDetails(props) {
  
  // const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
    const navigate=useNavigate();
    const [pkgList, setPkgList] = useState([]);
    const packageCollectionRef = collection(db, 'packages');
    
  const [packageData, setPackageData] = useState(null);
  const id=props.id;
//   useEffect(() => {
    // Fetch package details based on props.match.params.id
    
//     fetchPackageDetails(id);
//   }, id);

//   const fetchPackageDetails = (id) => {
    // axios.get(`${const_url}/${id}`)
    //   .then(response => {
    //     setPackageData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching package details:', error);
    //   });
//   };
const getPackage = async () => {

  try {
      // const data = await getDocs(packageCollectionRef);
      const packageDoc=doc(db,"packages",id)
      // console.log(filteredData);
      setPkgList(packageDoc);
      console.log(pkgList)
  }
  catch (err) {
      console.error(err)
  }
}

useEffect(() => {
  
  getPackage();
}, []);


  if (!packageData) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div className="container-pkg">
      <div className="package-details">
        <h2>Tour Package Details</h2>
        <ul>
          <li><span>Package Name:</span> {pkgList.packageName}</li>
          <li><span>Package Type:</span> {pkgList.packageType}</li>
          <li><span>Price:</span> Rs. {pkgList.price}/-</li>
          <li><span>Makkah Hotel Name:</span> {pkgList.makkaHotel}</li>
          <li><span>Madinah Hotel Name:</span> {pkgList.madinaHotel}</li>
          <li><span>Distance from Makkah Hotel:</span> {pkgList.distanceFromMakka}</li>
          <li><span>Distance from Madinah Hotel:</span> {pkgList.distanceFromMadina}</li>
          <li><span>Duration of Tour:</span> {pkgList.durationOfTour} days</li>
          <Link className='pkg-btn' to={'/contact-us'}>Get CallBack</Link>
          {/* Add more details as needed */}
        </ul>
      </div>
    </div>
  );
}

export default PackageDetails;
