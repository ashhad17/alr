import { useState } from "react"
import ImageModal from "../../components/ui/ImageModal"
// useState
// ImageModal
function PackageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images?.map((image, index) => (
          <div 
            key={index}
            className="aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

export default PackageGallery
