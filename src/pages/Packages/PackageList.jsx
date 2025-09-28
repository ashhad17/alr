import { useState } from 'react'
import { usePackages } from '../../hooks/usePackages'
import PackageCard from './PackageCard'

export default function PackageList() {
  const { packages, loading } = usePackages() // Fetch packages from Firestore
  const [selectedFilter, setSelectedFilter] = useState('all') // Filter state ('all', 'hajj', 'umrah', 'special')

  if (loading) {
    return <div className="text-center py-16">Loading packages...</div>
  }

  // Filter packages based on the selected filter
  const filteredPackages = selectedFilter === 'all'
    ? packages
    : selectedFilter === 'special'
    ? packages.filter((pkg) => pkg.packageType !== 'hajj' && pkg.packageType !== 'umrah')
    : packages.filter((pkg) => pkg.packageType === selectedFilter)

  return (
    <div className="container py-16">
      {/* Filter Options */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Packages</h1>

        {/* Filter Buttons */}
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md ${selectedFilter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primary-600 hover:text-white`}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedFilter === 'hajj' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primary-600 hover:text-white`}
            onClick={() => setSelectedFilter('hajj')}
          >
            Hajj
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedFilter === 'umrah' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primary-600 hover:text-white`}
            onClick={() => setSelectedFilter('umrah')}
          >
            Umrah
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedFilter === 'special' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primary-600 hover:text-white`}
            onClick={() => setSelectedFilter('special')}
          >
            Special
          </button>
        </div>
      </div>

      {/* Display Filtered Packages */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-16">
          No packages available for the selected category.
        </div>
      )}
    </div>
  )
}
