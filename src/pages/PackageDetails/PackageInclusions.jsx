function PackageInclusions({ inclusions = {} }) {
  return (
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Package Inclusions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(inclusions).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3 text-primary-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="text-primary-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageInclusions
