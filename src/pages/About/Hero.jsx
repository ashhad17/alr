function Hero() {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">
            Your trusted partner in spiritual journeys since 1997
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero