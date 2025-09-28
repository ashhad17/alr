import { Link } from 'react-router-dom'

function HeroSlide({ title, description, image, link }) {
  return (
    <div className="relative h-[600px] ">
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{description}</p>
          <Link
            to={link}
            className="btn-primary inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSlide