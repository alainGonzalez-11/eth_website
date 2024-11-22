import { useState } from 'react'
import { Link } from 'react-router-dom';


const ServiceCard = ({ image, name, description, link }) => {
  const [imgSrc, setImgSrc] = useState(image)
  const placeholderImage = '/path-to-placeholder-image.jpg'

  return (
    <div className='col-md-4 col-sm-6 mb-4'>
      <div className='card h-100 bg-transparent border-0'>
        {/* Aspect Ratio Wrapper with Grayscale Transition */}
        

        <Link
          to={link}
          className='d-block ratio ratio-4x3 position-relative'
          style={{ overflow: 'hidden' }}
        >
          <img
            src={imgSrc}
            className='card-img-top object-fit-cover'
            alt={name}
            onError={() => setImgSrc(placeholderImage)}
            style={{
              transition: 'transform 0.5s ease'
            }}
            onMouseOver={e => {
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseOut={e => {
              e.target.style.transform = 'scale(1)'
            }}
          />
          <div
            className='position-absolute top-0 start-0 w-100 h-100'
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
              opacity: 0,
              transition: 'opacity 0.5s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = 1)}
            onMouseOut={e => (e.currentTarget.style.opacity = 0)}
          >
            <span className='text-white fw-bold'>Learn More</span>
          </div>
        </Link>

        <div className='card-body text-center'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{description}</p>
          <Link to={link} className='btn btn-primary rounded-0'>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
