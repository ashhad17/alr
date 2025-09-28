import { useState, useEffect } from 'react'
import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db, storage } from '../config/firebase'
import { toast } from 'react-hot-toast'

export function useGallery(category) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, `gallery/${category}/images`))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const imagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setImages(imagesData)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [category])

  const uploadImage = async (file, metadata) => {
    try {
      const storageRef = ref(storage, `gallery/${category}/${Date.now()}-${file.name}`)
      const snapshot = await uploadBytes(storageRef, file)
      const url = await getDownloadURL(snapshot.ref)

      await addDoc(collection(db, `gallery/${category}/images`), {
        url,
        ...metadata,
        createdAt: new Date().toISOString()
      })

      toast.success('Image uploaded successfully')
    } catch (error) {
      toast.error('Failed to upload image')
      console.error('Upload error:', error)
      throw error
    }
  }

  const deleteImage = async (imageId, imageUrl) => {
    try {
      await deleteDoc(doc(db, `gallery/${category}/images`, imageId))
      const imageRef = ref(storage, imageUrl)
      await deleteObject(imageRef)
      toast.success('Image deleted successfully')
    } catch (error) {
      toast.error('Failed to delete image')
      console.error('Delete error:', error)
    }
  }

  return { images, loading, uploadImage, deleteImage }
}