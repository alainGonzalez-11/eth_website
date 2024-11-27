/* eslint-disable react/prop-types */
import { Carousel } from 'react-bootstrap'

const CarouselSection = ({ branch }) => {
  return (
    <section id={`branch-${branch.id}`} className='py-5'>
      <div className='container'>
        <h3 className='fw-bold text-center mb-4'>{branch.name}</h3>
        <div className='row align-items-center'>
          <div className='col-lg-6 mb-4 mb-lg-0'>
            {/* Adding a key to force re-render when branch.id changes */}
            <Carousel
              key={branch.id}
              prevIcon={
                <img
                  src='/LeftArrow.png'
                  alt='Previous'
                  className='custom-icon'
                />
              }
              nextIcon={
                <img src='/RightArrow.png' alt='Next' className='custom-icon' />
              }
            >
              {branch.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <div className='ratio ratio-16x9'>
                    <img
                      src={image}
                      className='d-block w-100 rounded shadow object-fit-cover'
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className='col-lg-6'>
            <p>{branch.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselSection
