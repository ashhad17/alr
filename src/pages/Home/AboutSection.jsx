function AboutSection() {
  return (
    <section className="container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to Al-Razack Tours International</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          With over two decades of experience, we specialize in providing exceptional
          Hajj, Umrah, and Zyarath services. Our commitment to excellence and
          attention to detail ensures a spiritually fulfilling journey for all our
          pilgrims.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <p className="text-gray-600 dark:text-gray-400">20+ years of expertise in religious tourism</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Service</h3>
            <p className="text-gray-600 dark:text-gray-400">24/7 support throughout your journey</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Trust</h3>
            <p className="text-gray-600 dark:text-gray-400">Thousands of satisfied pilgrims</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection