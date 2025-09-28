import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function ImageUploader({ onUpload }) {
  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      for (const file of acceptedFiles) {
        await onUpload(file, {
          caption: file.name,
          tags: []
        })
      }
    } catch (error) {
      console.error('Upload error:', error)
    }
  }, [onUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    multiple: true
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center mb-8 cursor-pointer
        ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the images here...</p>
      ) : (
        <p>Drag and drop images here, or click to select files</p>
      )}
    </div>
  )
}