import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Al-Razack Tours International specializes in providing exceptional Hajj, Umrah, and Zyarath services with dedication and care.
            </p>
          </div>
          <div>
        <div className="border-t border-gray-200 dark:border-gray-700  text-center text-sm  dark:text-gray-400">
          
        <h3 className="text-lg font-semibold mb-4 ">Licensed and Recognized by:</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ministry of Minority Affairs (Haj Cell), Government of India<br />
            &<br />
            Ministry of Hajj and Umrah, Kingdom of Saudi Arabia
          </p>
        </div>
        </div>


          <div>
            <h3 className="text-lg font-semibold mb-4  ">Quick Links</h3>
            <ul className="space-y-2  ">
              <li className=' '>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li className=' '>
                <Link to="/packages/hajj" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  Hajj Packages
                </Link>
              </li>
              <li className=' '>
                <Link to="/packages/umrah" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  Umrah Packages
                </Link>
              </li>
              <li className=' '>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Shop #2, 1st Floor, HMS Complex,Ashoka Rd ward No. 18</li>
              <li>Tumkur, Karnatak, India</li>
              <li>Phone: +91 9743004378</li>
              <li>Email: alrazack786@gmail.com</li>
            </ul>
          </div>

          
                <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">Follow Us</h3>
            <div className="flex space-x-4 flex items-center justify-center">
              <a href="https://www.facebook.com/people/Md-Hussain/pfbid0yaiKDCq9jptse2bkV9xRtBt2ixz5eUpW9LHGjY22a8i376bVsdwLfuB6JJb8aaFnl/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                <FaFacebook size={24} />
              </a>
              
              <a href="https://www.instagram.com/abu_ar_786/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" target="_blank">
                <FaInstagram size={24} />
              </a>
              <a href="whatsapp://send?text=Hii%20there!&phone=+919743004378" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" target="_blank">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Al-Razack Tours International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer