function PackageHeader({ packageName, imageUrl, durationOfTour, nextBatch, price }) {
  return (
    <div className="relative h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">{packageName}</h1>
          <div className="space-y-2">
            <p className="text-xl">Duration: {durationOfTour}</p>
            <p className="text-xl">Starting: {nextBatch}</p>
            <p className="text-2xl font-semibold text-primary-400">₹ {price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageHeader
