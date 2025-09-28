import { useState } from 'react'
import DeleteConfirmation from '../../../components/ui/DeleteConfirmation'

export default function ImageGrid({ images, onDelete }) {
  const [deleteImage, setDeleteImage] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
              <button
                onClick={() => setDeleteImage(image)}
                className="opacity-0 group-hover:opacity-100 bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <DeleteConfirmation
        isOpen={!!deleteImage}
        onClose={() => setDeleteImage(null)}
        onConfirm={() => {
          if (deleteImage) {
            onDelete(deleteImage.id, deleteImage.url)
            setDeleteImage(null)
          }
        }}
      />
    </>
  )
}