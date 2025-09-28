function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-3xl font-bold text-primary-600 mb-2">{value}</div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  )
}

export default StatCard