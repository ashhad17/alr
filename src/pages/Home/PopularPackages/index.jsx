import { usePopularPackages } from '../../../hooks/usePopularPackages'
import PackageCard from './PackageCard'

function PopularPackages() {
  const { popularPackages, loading } = usePopularPackages()

  if (loading) {
    return <div className="text-center">Loading popular packages...</div>
  }

  if (popularPackages.length === 0) {
    return <div className="text-center">No popular packages available at the moment.</div>
  }

  return (
    <section className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Popular Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            title={pkg.packageName}
            imageUrl={pkg.imageUrl}
            duration={pkg.durationOfTour}
            nextbatch={pkg.nextBatch}
            type={pkg.packageType}
            price={pkg.price}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularPackages
