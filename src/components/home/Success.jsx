/* eslint-disable no-new */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'bootstrap'
import SuccessCard from './SuccessCard'

const Success = () => {
  {
    /*
  const carouselRef = useRef(null)
  const [content, setContent] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  */
  }
  const carouselInner = useRef(null)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const cardWidth = useRef(0)

  useEffect(() => {
    fetch('/success.json')
      .then(response => response.json())
      .then(data => setContent(data.data || []))
      .catch(error => console.error('Error al cargar el JSON:', error))
  }, [])

  useEffect(() => {
    if (carouselInner.current) {
      setCarouselWidth(carouselInner.current.scrollWidth)
      const firstCard = carouselInner.current.querySelector('.carousel-item')
      if (firstCard) {
        cardWidth.current = firstCard.offsetWidth
      }
    }
  }, [])

  const handleNextClick = () => {
    if (
      scrollPosition < carouselWidth - cardWidth.current * 4 &&
      carouselInner.current
    ) {
      setScrollPosition(
        prevScrollPosition => prevScrollPosition + cardWidth.current
      )

      carouselInner.current.scrollTo({
        left: scrollPosition + cardWidth.current,
        behavior: 'smooth'
      })
    }
  }

  const handlePrevClick = () => {
    if (scrollPosition > 0 && carouselInner.current) {
      setScrollPosition(
        prevScrollPosition => prevScrollPosition - cardWidth.current
      )

      carouselInner.current.scrollTo({
        left: scrollPosition - cardWidth.current,
        behavior: 'smooth'
      })
    }
  }

  {
    /*
  useEffect(() => {
    if (carouselRef.current && content.length > 0) {
      new Carousel(carouselRef.current)
    }
  }, [content])

  const handleNext = () => {
    if (content && content.length > 0) {
      // Verifica si content existe y no está vacío
      setCurrentIndex(prevIndex => (prevIndex + 1) % content.length)
    }
  }

  const handlePrev = () => {
    if (content && content.length > 0) {
      // Verifica si content existe y no está vacío
      setCurrentIndex(
        prevIndex => (prevIndex - 1 + content.length) % content.length
      )
    }
  }

  const leftIndex = currentIndex
  const rightIndex = (currentIndex + 1) % content.length
*/
  }
  return (
    <div className='success py-5'>
      <div className='text-center'>
        <h2 className='fw-bold mb-4 text-primary'>Casos de éxito</h2>
      </div>
      <div id='carouselExampleControls' className='carousel'>
        <div className='carousel-inner' ref={carouselInner}>
          <div className='carousel-item active'>
            <div className='card'>
              <div className='img-wrapper'>
                <img
                  src='https://ideaingenieria.es/wp-content/uploads/2023/05/mantenimiento-industrial-1024x683.webp'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Caso de éxito 1</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/case' className='btn btn-primary'>
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card'>
              <div className='img-wrapper'>
                <img
                  src='https://www.loyvan.com/wp-content/uploads/2014/04/red-de-datos.jpg'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Caso de éxito 2</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card'>
              <div className='img-wrapper'>
                <img
                  src='https://universidadeuropea.com/resources/media/images/que-es-ciberseguridad-800x450.width-1200.format-webp.webp'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Caso de éxito 3</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card'>
              <div className='img-wrapper'>
                <img
                  src='https://grupoindustronic.com/wp-content/uploads/2024/06/Tipos_de_instalaciones_electricas.webp'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Caso de éxito 4</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
          onClick={handlePrevClick}
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
          onClick={handleNextClick}
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
    /*<div className="carousel-container">
      <div className="carousel-track">
      {content && content.length > 0 ? (
        <>
        <div className="card-container left-card">
          <Card data={content[leftIndex]} />
        </div>
        <div className="card-container right-card">
          <Card data={content[rightIndex]} />
        </div>
        </>
        ) : (
                  <p>Cargando...</p>
                )}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>*/
  )
}

const Card = ({ data }) => (
  <div className='card'>
    {/* Renderiza la información de la tarjeta */}
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    {/* ... otros elementos de la tarjeta ... */}
  </div>
)

export default Success
