/* eslint-disable no-new */
import { useEffect, useRef, useState } from 'react'
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
  const [pageWidth, setPageWidth] = useState(0)
  const [cardPosition, setCardPosition] = useState(0)

  useEffect(() => {
    fetch('/success.json')
      .then(response => response.json())
      .then(data => setContent(data.success))
      .catch(error => console.error('Error loading success cases:', error))
    const handleResize = () => {
      setPageWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    setPageWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (carouselInner.current) {
      setCarouselWidth(carouselInner.current.scrollWidth)
      const firstCard = carouselInner.current.querySelector(
        '.carousel-item-success'
      )
      if (firstCard) {
        cardWidth.current = firstCard.offsetWidth
      }
      setScrollPosition(cardPosition * cardWidth.current)
      carouselInner.current.scrollTo({
        left: cardPosition * cardWidth.current,
        behavior: 'smooth'
      })
    }
  }, [content, pageWidth])

  const handleNextClick = () => {
    if (carouselInner.current) {
      if (carouselWidth - scrollPosition <= pageWidth) {
        setScrollPosition(0)
        carouselInner.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
        setCardPosition(0)
      } else {
        const newPosition = scrollPosition + cardWidth.current
        setScrollPosition(newPosition)
        carouselInner.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })
        setCardPosition(cardPosition + 1)
      }
      console.log(cardWidth)
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
    <div
      key={index}
      className='carousel-item-success col-12 col-md-6 col-lg-4 d-block active mx-0'
    >
      <div className='card shadow m-2 mx-auto col-12 col-sm-9 col-md-11 col-xxl-9'>
        <div className='ratio ratio-4x3'>
          <div className='row justify-content-center mx-auto'>
            <div className='h-25 py-3'>
              <img
                src={ImportDrivePhoto(item.logo, 250)}
                className='object-fit-contain h-100'
                alt={item.name}
              />
            </div>
            <div className='h-75 w-100'>
              <img
                src={item.image}
                className='img-fluid object-fit-cover h-100 w-100'
                alt='Imagen principal'
              />
            </div>
          </div>
        </div>
        <div className='ratio ratio-4x3'>
          <div className='card-body d-flex flex-column pt-2 pb-1'>
            <h5 className='card-title'>{item.projectName}</h5>
            <h6 className='card-subtitle'>{item.location}</h6>
            <div className='overflow-auto h-75'>
              <p className='card-text text-justify'>{item.description}</p>
            </div>
            <div className='d-flex justify-content-center my-auto'>
              <a
                href='/case'
                className='btn btn-primary text-light rounded-0 my-1'
              >
                {item.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className='py-5 success'>
      <div className='container-fluid text-center'>
        <h2 className='fw-bold mb-4 text-primary'>Casos de éxito</h2>
        <div className='row justify-content-center'>
          <div id='carouselSuccess' className='carousel'>
            <div className='carousel-inner d-flex p-2' ref={carouselInner}>
              {content.map((item, index) => card(item, index))}
            </div>
            <Link to='allcases' className='btn btn-primary mt-4 px-6 rounded-0 text-light'>
              Ver todos los casos
            </Link>
            <button
              className='carousel-control-prev bg-dark'
              type='button'
              data-bs-target='#carouselSuccess'
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
              className='carousel-control-next bg-dark'
              type='button'
              data-bs-target='#carouselSuccess'
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
    </div>
  )
}

export default Success
