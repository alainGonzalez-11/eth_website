import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselSection = ({ branch }) => {
  return (
    <section id={`branch-${branch.id}`} className='py-5'>
      <div className='container'>
        <h3 className='fw-bold text-center mb-4'>{branch.name}</h3>
        <div className='row align-items-center'>
          <div className='col-lg-6 mb-4 mb-lg-0'>
            <Carousel>
              {branch.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className='d-block w-100 rounded shadow'
                    alt={`Slide ${index + 1}`}
                  />
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
