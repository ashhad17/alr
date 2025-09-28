import Hero from './Hero'
import AboutSection from './AboutSection'
import PopularPackages from './PopularPackages'

function Home() {
  return (
    <div className="space-y-16 py-8">
      <Hero />
      <AboutSection />
      <PopularPackages />
    </div>
  )
}

export default Home