function GalleryFilters({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <button
        className={`px-4 py-2 rounded-full ${
          activeFilter === 'all'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        }`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      {filters.map(filter => (
        <button
          key={filter}
          className={`px-4 py-2 rounded-full ${
            activeFilter === filter
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default GalleryFilters
