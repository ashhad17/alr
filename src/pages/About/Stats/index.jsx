import StatCard from './StatCard'

const stats = [
  {
    label: 'Years of Experience',
    value: '20+',
    icon: '🏆'
  },
  {
    label: 'Satisfied Pilgrims',
    value: '50k+',
    icon: '👥'
  },
 
  {
    label: 'Success Rate',
    value: '99%',
    icon: '⭐'
  }
]

function Stats() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default Stats