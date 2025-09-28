import { useState } from 'react'
import { useGallery } from '../../../hooks/useGallery'
import ImageUploader from './ImageUploader'
import ImageGrid from './ImageGrid'

const categories = ['accommodations', 'hajj', 'umrah', 'zyarath']

export default function GalleryManager() {
  const [selectedCategory, setSelectedCategory] = useState('accommodations')
  const { images, loading, uploadImage, deleteImage } = useGallery(selectedCategory)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Gallery Management</h1>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <ImageUploader onUpload={uploadImage} />
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ImageGrid images={images} onDelete={deleteImage} />
      )}
    </div>
  )
}