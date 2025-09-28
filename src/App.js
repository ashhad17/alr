import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import PackageDetails from './pages/PackageDetails';
import AdminRoutes from './pages/admin/AdminRoutes';
import { useState } from 'react';

function AppLayout() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:type/:id" element={<PackageDetails />} />
          <Route path="/gallery/:category" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Routes>
            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminRoutes />} />

            {/* Public routes */}
            <Route path="/*" element={<AppLayout />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
