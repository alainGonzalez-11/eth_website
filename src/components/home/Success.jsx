/* eslint-disable no-new */
import { useEffect, useRef, useState } from 'react'
import { Carousel } from 'bootstrap'
import info from '@/content/Sponsors.json'

const Success = () => {
  const carouselRef1 = useRef(null)
  const carouselRef2 = useRef(null)

  useEffect(() => {
    if (carouselRef1.current) {
      new Carousel(carouselRef1.current)
    }
    if (carouselRef2.current) {
      new Carousel(carouselRef2.current)
    }
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % info.data.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + info.data.length) % info.data.length
    )
  }

  const ImportDrivePhoto = (driveUrl, height) => {
    // Default URL in case no valid file ID is found
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    // Try to extract the file ID from the Google Drive URL
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    // Construct the new URL with the specified height
    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  const successcarousel = (
    <div
      id='opinioncarousel'
      className='carousel carousel-dark justify-content-center'
      ref={carouselRef1}
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <div className='row justify-content-center'>
            <div className='d-flex justify-content-end align-items-center mx-0 col-6'>
              <div className='card bg-white col-11'>
                <div className='d-flex flex-column'>
                  <div className='p-3'>
                    <a
                      href={info.data[currentIndex].page}
                      target='blank'
                      className='p-3'
                    >
                      <img
                        src={ImportDrivePhoto(
                          info.data[currentIndex].imagemain,
                          600
                        )}
                        className='object-fit-contain col-5'
                        alt={info.data[currentIndex].name}
                      />
                    </a>
                  </div>
                  <div className='ratio ratio-21x9'>
                    <img
                      src={ImportDrivePhoto(
                        info.data[currentIndex].imagesecond,
                        600
                      )}
                      className='object-fit-contain col-12'
                      alt={info.data[currentIndex].name}
                    />
                  </div>

                  <div className='ratio ratio-16x9'>
                    <div className='card-body d-flex flex-column'>
                      <div className='overflow-auto'>
                        <p className='text-justify'>
                          {info.data[currentIndex].description}
                        </p>
                      </div>
                      <div className='d-flex flex-column'>
                        <div className='pt-3'>
                          <h4>Nombre del proyecto</h4>
                          <h5>Ubicación</h5>
                          <a
                            href=''
                            className='btn btn-outline-primary rounded-0 mx-auto my-1'
                            target='blank'
                          >
                            Saber más
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-start align-items-center mx-0 col-6'>
              <div className='card bg-white col-11'>
                <div className='d-flex flex-column'>
                  <div className='p-3'>
                    <a
                      href={
                        info.data[(currentIndex + 1) % info.data.length].page
                      }
                      target='blank'
                      className='p-3'
                    >
                      <img
                        src={ImportDrivePhoto(
                          info.data[(currentIndex + 1) % info.data.length]
                            .imagemain,
                          600
                        )}
                        className='object-fit-contain col-5'
                        alt={
                          info.data[(currentIndex + 1) % info.data.length].name
                        }
                      />
                    </a>
                  </div>
                  <div className='ratio ratio-21x9'>
                    <img
                      src={ImportDrivePhoto(
                        info.data[(currentIndex + 1) % info.data.length]
                          .imagesecond,
                        600
                      )}
                      className='object-fit-contain col-12'
                      alt={
                        info.data[(currentIndex + 1) % info.data.length].name
                      }
                    />
                  </div>

                  <div className='ratio ratio-16x9'>
                    <div className='card-body d-flex flex-column pb-0'>
                      <div className='overflow-auto h-75'>
                        <p className='text-justify'>
                          {
                            info.data[(currentIndex + 1) % info.data.length]
                              .description
                          }
                        </p>
                      </div>
                      <div className='d-flex flex-column'>
                        <div className='pt-3'>
                          <h4>Nombre del proyecto</h4>
                          <h5>Ubicación</h5>
                          <a
                            href=''
                            className='btn btn-outline-primary rounded-0 mx-auto my-3'
                            target='blank'
                          >
                            Saber más
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev justify-content-start'
        type='button'
        data-bs-target='#opinioncarousel'
        onClick={handlePrev}
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next justify-content-end'
        type='button'
        data-bs-target='#opinioncarousel'
        onClick={handleNext}
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )

  return (
    <section className='bg-body-secondary h-full py-5'>
      <h2 className='fw-bold text-center text-primary mb-4'>Casos de Éxito</h2>
      <div className='row mx-0 justify-content-center align-items-center'>
        <div className='text-center bg-body-secondary col-12 col-md-6 col-lg-10 my-5 my-lg-0'>
          {successcarousel}
        </div>
        <div className='text-center'>
          <a
            href=''
            className='btn btn-primary rounded-0 my-3'
            target='blank'
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Success
