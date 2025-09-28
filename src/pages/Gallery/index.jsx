import { useParams } from 'react-router-dom'
import { useState } from 'react'
// import { useGallery } from '../../../hooks/useGallery'
import { useGallery } from '../../hooks/useGallery'
import GalleryGrid from './GalleryGrid'
import GalleryFilters from './GalleryFilters'

function Gallery() {
  const { category } = useParams() // Get the category from the URL
  const [activeFilter, setActiveFilter] = useState('all') // Track the active filter
  const { images, loading } = useGallery(category) // Fetch images dynamically from Firestore

  // Filter images based on active filter (if necessary)
  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((image) => image.tags?.includes(activeFilter))

  // Handle loading state
  if (loading) {
    return <div className="container py-16">Loading...</div>
  }

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-4 capitalize">
          {category} Gallery
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Browse the best images in the {category} gallery.
        </p>

        {/* Filters (assuming the filters are derived from image tags or passed as props) */}
        {/* <GalleryFilters
          filters={['filter1', 'filter2', 'filter3']} // Replace with actual tags or categories
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        /> */}

        {/* Display images */}
        <GalleryGrid images={filteredImages} />
      </div>
    </div>
  )
}

export default Gallery
