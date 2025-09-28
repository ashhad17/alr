import React,{useState} from 'react'
import Modal from "../components/Model";
import axios from 'axios';
function EditPackage(props) {
  
  const const_url="https://al-razack-tours-internationals.onrender.com/pkgs";
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [packageName,setpackageName]=useState('');
        const [packageType,setpackageType]=useState('');
        const [price,setprice]=useState('');
        const [makkaHotel,setmakkaHotel]=useState('');
        const [madinaHotel,setmadinaHotel]=useState('');
        const [distanceFromMakka,setdistanceFromMakka]=useState('');
        const [distanceFromMadina,setdistanceFromMadina]=useState('');
        const [durationOfTour,setdurationOfTour]=useState('');
        const [nextBatch,setnextBatch]=useState('');
    const openModal = (event) => {
      event.preventDefault();
      setIsModalVisible(true);
    };
  
    const closeModal = (event) => {
      event.preventDefault();
      setIsModalVisible(false);
    };

    const handleUpdatePackage=()=>{
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
          axios
            .put(`${const_url}`, pkgData)
            .then(() => {
              // setLoading(false);
              alert('Package Created successfully');
              // navigate('/admin-handle');
            })
            .catch((error) => {
              // setLoading(false);
              // alert('An error happened. Please Chack console');
              alert('Error');
              console.log(error);
            });
    }
  return (
    <Modal isVisible={isModalVisible} onClose={closeModal}>
        <section className="add-form" id="contact">
          <h2>Add New Package</h2>
          <div className="form-container">
            <form onSubmit={handleUpdatePackage}>
              <label htmlFor="name">Package Name:</label>
              <input type="text" id="name" name="name" required onChange={(e)=>setpackageName(e.target.value)}/>

              <label htmlFor="type">Package Type:</label>
              <input type="text" id="type" name="type" required onChange={(e)=>setpackageType(e.target.value)}/>

              <label htmlFor="makkaHotel">Makka Hotel:</label>
              <input type="text" id="makkaHotel" name="makkaHotel" required onChange={(e)=>setmakkaHotel(e.target.value)}/>

              <label htmlFor="madinaHotel">Madina Hotel:</label>
              <input type="text" id="madinaHotel" name="madinaHotel" required onChange={(e)=>setmadinaHotel(e.target.value)}/>

              <label htmlFor="distanceFromMakka">Distance From Makka</label>
              <input
                type="text"
                id="distanceFromMakka"
                name="distanceFromMakka"
                required
              onChange={(e)=>setdistanceFromMakka(e.target.value)}/>

              <label htmlFor="distanceFromMadina">Distance From Madina</label>
              <input
                type="text"
                id="distanceFromMadina"
                name="distanceFromMadina"
                required
              onChange={(e)=>setdistanceFromMadina(e.target.value)}/>

              <label htmlFor="durationOfTour">Duration Of Tour</label>
              <input
                type="text"
                id="durationOfTour"
                name="durationOfTour"
                required
              onChange={(e)=>setdurationOfTour(e.target.value)}/>

              <label htmlFor="nextBatch">Next Batch</label>
              <input type="text" id="nextBatch" name="nextBatch" required onChange={(e)=>setnextBatch(e.target.value)}/>

              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" required onChange={(e)=>setprice(e.target.value)}/>

              <div className="form-btns">
                <button type="submit" className="pkg-btn">
                  Submit
                </button>
                <a href="" className="pkg-btn" onClick={closeModal}>
                  Close
                </a>
              </div>
            </form>
          </div>
        </section>
      </Modal>
  )
}

export default EditPackage