import { Link } from 'react-router-dom'

function PackageCard({ id, packageName, imageUrl, durationOfTour, nextBatch, price }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {/* Package Image */}
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{packageName}</h3>
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          <p>Duration: {durationOfTour} days</p>
          <p>Next Batch: {nextBatch}</p>
          <p className="text-lg font-semibold text-primary-600 mt-2">Price: ₹{price}</p>
        </div>

        {/* View Details Button */}
        <Link
          to={`/packages/details/${id}`}
          className="btn-primary inline-block w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default PackageCard
