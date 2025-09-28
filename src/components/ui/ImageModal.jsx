function ImageModal({ image, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button
          className="absolute -top-10 right-0 text-white hover:text-primary-400"
          onClick={onClose}
        >
          Close
        </button>
        <img
          src={image}
          alt="Gallery preview"
          className="w-full h-auto rounded-lg"
          onClick={e => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

export default ImageModal