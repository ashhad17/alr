import { Link } from 'react-router-dom'

function PackageCard({ id, title, imageUrl, duration, nextbatch,type, price }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {/* Display the image */}
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Card content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          <p>Duration: {duration} days</p>
          <p>Next Batch: {nextbatch}</p>
          <p className="text-lg font-semibold text-primary-600 mt-2">Price: ₹{price}</p>
        </div>
        <Link
          to={`/packages/${type}/${id}`}
          className="btn-primary inline-block w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default PackageCard
