function PackageInfo({ description, highlights }) {
  return (
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Package Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
          
          <h3 className="text-xl font-semibold mb-3">Highlights</h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="text-primary-600 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PackageInfo
