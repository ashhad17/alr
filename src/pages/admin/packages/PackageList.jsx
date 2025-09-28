import { Link } from 'react-router-dom'
import { usePackages } from '../../../hooks/usePackages'
import DeleteConfirmation from '../../../components/ui/DeleteConfirmation'
import { useState } from 'react'

export default function PackageList() {
  const { packages, loading, deletePackage } = usePackages()
  const [deleteId, setDeleteId] = useState(null)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Packages</h1>
        <Link
          to="/admin/packages/new"
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
        >
          Add New Package
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Package Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Distance (Madina)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Distance (Makka)
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.packageName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.packageType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.durationOfTour}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.distanceFromMadina} km</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.distanceFromMakka} km</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <Link
                    to={`/admin/packages/${pkg.id}/edit`}
                    className="text-primary-600 hover:text-primary-900 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => setDeleteId(pkg.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteConfirmation
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          deletePackage(deleteId)
          setDeleteId(null)
        }}
      />
    </div>
  )
}
  