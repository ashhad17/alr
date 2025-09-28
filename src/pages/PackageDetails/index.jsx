import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase' // Adjust path to Firebase config
import PackageHeader from './PackageHeader'
import PackageInfo from './PackageInfo'
import PackageGallery from './PackageGallery'
import PackageInclusions from './PackageInclusions'
import { PACKAGE_HIGHLIGHTS, PACKAGE_INCLUSIONS } from './packageConstants' // Import constants

function PackageDetails() {
  const { id } = useParams() // Get `id` from route parameters
  const [packageData, setPackageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPackageData() {
      try {
        const docRef = doc(db, 'packages', id) // Query the Firestore document by ID
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setPackageData(docSnap.data()) // Set package data
        } else {
          console.error('Package not found!')
        }
      } catch (error) {
        console.error('Error fetching package data:', error)
      } finally {
        setLoading(false) // Stop loading state
      }
    }

    fetchPackageData()
  }, [id])

  if (loading) {
    return <div className="container py-16 text-center">Loading package details...</div>
  }

  if (!packageData) {
    return <div className="container py-16 text-center">Package not found</div>
  }

  const {
    inclusions = {},
    gallery = [],
    distanceFromMadina,
    distanceFromMakka,
    madinaHotel,
    makkaHotel, ...rest 
  } = packageData
  // const { } = packageData // Destructure gallery and inclusions

  return (
    <div className="py-16 space-y-12">
      {/* Header Section */}
        <PackageHeader {...rest} />
      

      {/* Information Section */}
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">Package Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Distance from Madina:</span> {distanceFromMadina} mtrs
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Distance from Makka:</span> {distanceFromMakka} mtrs
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Madina Hotel:</span> {madinaHotel}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Makka Hotel:</span> {makkaHotel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Highlights */}
      <PackageInfo description={packageData.description} highlights={PACKAGE_HIGHLIGHTS} />

      {/* Gallery Section */}
      {/* <PackageGallery images={gallery} /> */}

      {/* Inclusions Section */}
      <PackageInclusions inclusions={PACKAGE_INCLUSIONS} />
    </div>
  )
}

export default PackageDetails
