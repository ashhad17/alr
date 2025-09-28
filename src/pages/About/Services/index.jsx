import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Hajj Services',
    description: 'Complete Hajj packages with accommodation, transportation, and guidance',
    icon: '🕋'
  },
  {
    title: 'Umrah Packages',
    description: 'Year-round Umrah services with flexible scheduling options',
    icon: '🌙'
  },
  {
    title: 'Zyarath Tours',
    description: 'Guided tours to significant Islamic historical sites',
    icon: '🕌'
  },
  {
    title: 'Visa Assistance',
    description: 'Comprehensive visa processing and documentation support',
    icon: '📄'
  },
  {
    title: 'Transportation',
    description: 'Safe and comfortable transportation throughout your journey',
    icon: '🚌'
  },
  {
    title: 'Accommodation',
    description: 'Quality hotels and accommodations near holy sites',
    icon: '🏨'
  }
]

function Services() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services