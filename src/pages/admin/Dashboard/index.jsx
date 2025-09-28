import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export default function Dashboard() {
  const [stats, setStats] = useState({
    packages: 0,
    images: 0
  })

  useEffect(() => {
    async function fetchStats() {
      try {
        const packagesSnapshot = await getDocs(collection(db, 'packages'))
        const imagesSnapshot = await getDocs(collection(db, 'gallery'))
        
        setStats({
          packages: packagesSnapshot.size,
          images: imagesSnapshot.size
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchStats()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Total Packages</h2>
          <p className="mt-2 text-3xl font-semibold text-primary-600">
            {stats.packages}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Gallery Images</h2>
          <p className="mt-2 text-3xl font-semibold text-primary-600">
            {stats.images}
          </p>
        </div>
      </div>
    </div>
  )
}