import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../../config/firebase'
import { toast } from 'react-hot-toast'

export default function PackageForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // Form data state
  const [formData, setFormData] = useState({
    packageName: '',
    packageType: 'hajj',
    price: '',
    durationOfTour: '',
    distanceFromMadina: '',
    distanceFromMakka: '',
    madinaHotel: '',
    makkaHotel: '',
    nextBatch: '',
    imageUrl: null,
    createdAt: serverTimestamp(), // Automatically set creation timestamp
  })

  // Load package if editing
  useEffect(() => {
    if (id) {
      loadPackage()
    }
  }, [id])

  async function loadPackage() {
    try {
      const docRef = doc(db, 'packages', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setFormData(docSnap.data())
      }
    } catch (error) {
      toast.error('Failed to load package')
      console.error('Load error:', error)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      let imageUrl = formData.imageUrl
      if (formData.imageUrl instanceof File) {
        const imageRef = ref(storage, `packages/${Date.now()}-${formData.imageUrl.name}`)
        const snapshot = await uploadBytes(imageRef, formData.imageUrl)
        imageUrl = await getDownloadURL(snapshot.ref)
      }

      const packageData = {
        ...formData,
        imageUrl, // Store the uploaded image URL
      }

      if (id) {
        await setDoc(doc(db, 'packages', id), packageData)
      } else {
        await addDoc(collection(db, 'packages'), packageData)
      }

      toast.success('Package saved successfully')
      navigate('/admin/packages')
    } catch (error) {
      toast.error('Failed to save package',error)
      console.error('Save error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        {id ? 'Edit Package' : 'New Package'}
      </h1>

      <div className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Package Name</label>
            <input
              type="text"
              value={formData.packageName}
              onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Package Type</label>
            <select
              value={formData.packageType}
              onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="hajj">Hajj</option>
              <option value="umrah">Umrah</option>
              <option value="zyarath">Zyarath</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration of Tour</label>
            <input
              type="text"
              value={formData.durationOfTour}
              onChange={(e) => setFormData({ ...formData, durationOfTour: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Distance From Madina</label>
            <input
              type="text"
              value={formData.distanceFromMadina}
              onChange={(e) => setFormData({ ...formData, distanceFromMadina: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Distance From Makka</label>
            <input
              type="text"
              value={formData.distanceFromMakka}
              onChange={(e) => setFormData({ ...formData, distanceFromMakka: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Madina Hotel</label>
            <input
              type="text"
              value={formData.madinaHotel}
              onChange={(e) => setFormData({ ...formData, madinaHotel: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Makka Hotel</label>
            <input
              type="text"
              value={formData.makkaHotel}
              onChange={(e) => setFormData({ ...formData, makkaHotel: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Next Batch</label>
            <input
              type="text"
              value={formData.nextBatch}
              onChange={(e) => setFormData({ ...formData, nextBatch: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.files[0] })}
            className="mt-1 block w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate('/admin/packages')}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Package'}
          </button>
        </div>
      </div>
    </form>
  )
}
