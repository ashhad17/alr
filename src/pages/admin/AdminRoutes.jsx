import { Routes, Route } from 'react-router-dom'
import PrivateRoute from '../../components/auth/PrivateRoute'
import LoginForm from '../../components/auth/LoginForm'
import AdminLayout from '../../components/layout/AdminLayout'
import Dashboard from './Dashboard'
import PackageList from './packages/PackageList'
import PackageForm from './packages/PackageForm'
import GalleryManager from './gallery/GalleryManager'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="packages" element={<PackageList />} />
        <Route path="packages/new" element={<PackageForm />} />
        <Route path="packages/:id/edit" element={<PackageForm />} />
        <Route path="gallery" element={<GalleryManager />} />
      </Route>
    </Routes>
  )
}