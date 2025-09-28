import Hero from './Hero'
import CompanyHistory from './CompanyHistory'
import Stats from './Stats'
import Services from './Services'

function About() {
  return (
    <div className="space-y-16 py-8">
      <Hero />
      <CompanyHistory />
      <Stats />
      <Services />
    </div>
  )
}

export default About