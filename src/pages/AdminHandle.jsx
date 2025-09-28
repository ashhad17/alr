import React, { useState, useEffect } from 'react';
import PackageCard from '../components/PackageCard';
// import Packa from '../components/PackageView';
import PackageForm from '../components/PackageForm'
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import ReactLoading from 'react-loading';
import { getDocs,doc, updatedoc,collection,addDoc,deleteDoc, updateDoc } from 'firebase/firestore'

import { db } from '../firebase';
function AdminHandle() {
  const packageCollectionRef = collection(db, 'packages');


  // const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axios.get(`${const_url}`)
  //     .then(response => {
  //       setData(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  const getPackagesList = async () => {

    try {
        const data1 = await getDocs(packageCollectionRef);
        const filteredData = data1.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        // console.log(filteredData);
        setData(filteredData);
        console.log(data)
    }
    catch (err) {
        console.error(err)
    }
}

useEffect(() => {
    
    getPackagesList();
}, []);

  // const handleDeletePackage = (id) => {
  //   axios.delete(`${const_url}/${id}`)
  //     .then(() => {
  //       alert('Package deleted successfully');
  //       // Update data state after deletion
        
  //       setData(data.filter(item => item._id !== id));
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting package:', error);
  //       alert('Error deleting package');
  //     });
  // };
  const handleDeletePackage=async (id)=>{
    try {
        const packageDoc=doc(db,"packages",id)
        await deleteDoc(packageDoc);
        getPackagesList();
    } catch (error) {
        console.error(error);
    }
}

  return (
      (data.length>0)?(
        <><div className="add-package">
        <PackageForm />
      </div>

      <div className="packages">
        <h2>Packages</h2>
        <div className="cards">
          {data.map((d) =>
            <Card
              key={d.id}
              id={d.id}
              package={d.packageName}
              duration={d.durationOfTour}
              makkaHotel={d.makkaHotel}
              madinaHotel={d.madinaHotel}
              nextBatch={d.nextBatch}
              typeOfTour={d.packageType}
              imgUrl={d.imageUrl}
              onDelete={handleDeletePackage} // Pass delete handler
            />
          )}
        </div>
      </div>
      <Footer/></>):(<><div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}><ReactLoading type={"bubbles"} color={"blue"} height={'20%'} width={'20%'}/></div></>)
      
  );
}

export default AdminHandle;
