import { useState, useEffect } from 'react'
import { collection, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-hot-toast'

export function usePackages() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'packages'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const packagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPackages(packagesData)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const deletePackage = async (id) => {
    try {
      await deleteDoc(doc(db, 'packages', id))
      toast.success('Package deleted successfully')
    } catch (error) {
      toast.error('Failed to delete package')
      console.error('Delete error:', error)
    }
  }

  return { packages, loading, deletePackage }
}