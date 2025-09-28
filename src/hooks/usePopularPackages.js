import { useState, useEffect } from 'react'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase'

export function usePopularPackages() {
  const [popularPackages, setPopularPackages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Query Firestore for the 3 most recently created packages
    const q = query(
      collection(db, 'packages'),
      orderBy('createdAt', 'desc'), // Order by creation date (descending)
      limit(3) // Limit to top 3 based on creation date
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPopularPackages(data)
      setLoading(false)
    })

    return () => unsubscribe() // Cleanup on component unmount
  }, [])

  return { popularPackages, loading }
}
