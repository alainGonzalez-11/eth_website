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
    <div id='carouselExampleControls' className='carousel'>
      <div className='carousel-inner' ref={carouselInner}>
        <div className='carousel-item active'>
          <div className='card'>
            <div className='img-wrapper'>
              <img
                src='https://editorialtelevisa.brightspotcdn.com/5d/22/7b517e1242d78f28df597461df79/cupcakes-de-unicornio-receta-facil-y-rapida.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title 1</h5>
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
                src='https://cdn0.uncomo.com/es/posts/3/9/6/como_hacer_cupcakes_glaseados_6693_orig.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title 2</h5>
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
                src='https://www.lacostena.com.mx/media/thumbnail/uploads/Recipes/postre/32_cupcakes_de_nata.jpg.1920x800_q85_center.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title 3</h5>
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
                src='https://www.lacostena.com.mx/media/thumbnail/uploads/Recipes/postre/32_cupcakes_de_nata.jpg.1920x800_q85_center.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title 4</h5>
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
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='next'
        onClick={handleNextClick}
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
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
