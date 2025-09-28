import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock ,FaWhatsapp} from 'react-icons/fa'

function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-primary-600 text-xl mt-1" />
          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">
            Shop #2, 1st Floor, HMS Complex,Ashoka Rd ward No. 18<br />
            Tumkur, Karnatak, India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaPhone className="text-primary-600 text-xl mt-1" />
          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+91 9743004378</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          {/* <FaPhone className="text-primary-600 text-xl mt-1" /> */}
          <a href="whatsapp://send?text=Hii%20there!&phone=+919743004378" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" target="_blank">
                <FaWhatsapp className="text-primary-600 text-xl mt-1"/>
              </a>
          <div>
            <h3 className="font-medium mb-1">WhatsApp</h3>
            
            <a href="whatsapp://send?text=Hii%20there!&phone=+919743004378" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" target="_blank">
            <p className="text-gray-600 dark:text-gray-400">+91 9743004378</p>
              </a>
              
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaEnvelope className="text-primary-600 text-xl mt-1" />
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">alrazack786@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaClock className="text-primary-600 text-xl mt-1" />
          <div>
            <h3 className="font-medium mb-1">Business Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Saturday: 11:00 AM - 8:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo