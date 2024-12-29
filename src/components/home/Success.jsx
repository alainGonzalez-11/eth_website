/* eslint-disable no-new */
import { useEffect, useRef, useState } from 'react'
import info from '@/content/success.json'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'bootstrap'
import SuccessCard from './SuccessCard'

const Success = () => {
  const carouselInner = useRef(null)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const cardWidth = useRef(0)
  const [content, setContent] = useState([])

  useEffect(() => {
    fetch('/success.json')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error loading success cases:', error))
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
    if (carouselInner.current) {
      if (scrollPosition >= carouselWidth - cardWidth.current * 4) {
        setScrollPosition(0)
        carouselInner.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        const newPosition = scrollPosition + cardWidth.current
        setScrollPosition(newPosition)
        carouselInner.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handlePrevClick = () => {
    if (carouselInner.current) {
      if (scrollPosition <= 0) {
        const newPosition = carouselWidth - cardWidth.current * 4
        setScrollPosition(newPosition)
        carouselInner.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })
      } else {
        const newPosition = scrollPosition - cardWidth.current
        setScrollPosition(newPosition)
        carouselInner.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const ImportDrivePhoto = (driveUrl, height) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  const card = (item, index) => (
    <div key={index} className='carousel-item active'>
      <div className='card'>
        <div className='ratio ratio-4x3'>
          <div className='row justify-content-center mx-auto'>
            <div className='h-25 w-auto py-2'>
              <img
                src={ImportDrivePhoto(item.logo, 250)}
                className='object-fit-contain'
                alt={item.name}
              />
            </div>
            <div className='h-75 w-auto'>
              <img
                src={ImportDrivePhoto(item.image, 250)}
                className='object-fit-contain'
                alt='Imagen principal'
              />
            </div>
          </div>
        </div>
        <div className='ratio ratio-21x9'>
          <div className='card-body d-flex flex-column py-2'>
            <h5 className='card-title'>{item.projectName}</h5>
            <h6 className='card-subtitle'>{item.location}</h6>
            <div className='overflow-auto h-50'>
              <p className='card-text text-justify'>{item.description}</p>
            </div>
            <div className='d-flex my-auto'>
              <div className='d-flex justify-content-center my-auto'>
                <a href='/case' className='btn btn-primary'>
                  {item.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className='success py-5'>
      <div className='text-center'>
        <h2 className='fw-bold mb-4 text-primary'>Casos de éxito</h2>
      </div>
      <div className='row justify-content-center'>
        <div id='carouselExampleControls' className='carousel'>
          <div className='carousel-inner' ref={carouselInner}>
            {info.success.map((item, index) => card(item, index))}
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
    </div>
  )
}

export default Success
