import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  const [content1, setContent1] = useState(null)
  const [content2, setContent2] = useState(null)

  useEffect(() => {
    fetch('/blog.json')
      .then(response => response.json())
      .then(data => setContent1(data.banner))
      .catch(error => console.error('Error loading content:', error))
  }, [])

  useEffect(() => {
    fetch('/success.json')
      .then(response => response.json())
      .then(data => setContent2(data.success))
      .catch(error => console.error('Error loading success cases:', error))
  }, [])

  const ImportDrivePhoto = (driveUrl, height) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  if (!content1 || !content2) return <div>Loading...</div>

  {/*
  const card = (item, index) => (
    <div
      key={index}
      className='col-12 col-md-6 col-lg-4 d-block active mx-0'
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
                src={ImportDrivePhoto(item.image, 250)}
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
    */}

  return (
    <div>
      <div
        className='position-relative'
        style={{
          backgroundImage: `url(${content1.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px'
        }}
      ></div>
      <div className='text-center text-primary mt-5 mb-4'>
        <h1 className='fw-bold '>Título del caso</h1>
        <h3 className='fw-bold fst-italic mt-3'>Subtítulo del caso</h3>
      </div>
      <div className='mx-4 mb-5'>
        <div className='row mx-0'>
          <div className='col-3'>
            <p className='lead'>Tabla de contenido</p>
            <p className=''>Parte introductoria</p>
            <p className=''>Parte siguiente</p>
            <p className=''>Imágenes</p>
          </div>

          <div className='col-6'>
            <div className='d-flex text-uppercase text-primary fw-semibold'>
            <NavLink to='/blog'>
              <button className='bg-primary text-uppercase text-light border border-1 border-dark-subtle px-1 me-1'>Servicio</button>
            </NavLink>
            <NavLink to='/blog'>
              <button className='bg-primary text-uppercase text-light border border-1 border-dark-subtle px-1 ms-1'>Rama</button>
            </NavLink>
            </div>
            <p>Fecha de realizacion</p>
            <p>Ubicación</p>
            <p className='text-justify lead'>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
            <p className='text-justify lead'>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
            <div
              id='carouselExample'
              className='carousel slide mx-auto col-6 mb-4'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img
                    src='https://ideaingenieria.es/wp-content/uploads/2023/05/mantenimiento-industrial-1024x683.webp'
                    className='d-block w-100'
                    alt='...'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://www.loyvan.com/wp-content/uploads/2014/04/red-de-datos.jpg'
                    className='d-block w-100'
                    alt='...'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://ideaingenieria.es/wp-content/uploads/2023/05/mantenimiento-industrial-1024x683.webp'
                    className='d-block w-100'
                    alt='...'
                  />
                </div>
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='prev'
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
                data-bs-target='#carouselExample'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
            <div className='row justify-content-center'>
            </div>
          </div>

          <div className='col-3 text-center'>
            <div>
              <p className='lead'>
                Visítanos y síguenos en nuestras redes sociales:
              </p>

              <div className='row justify-content-center my-1 col-12'>
                <a href={content1.link1} target='_blank' className='px-0 col-2'>
                  <img
                    className='col-8 col-sm-5 col-md-7 col-xl-12'
                    src={ImportDrivePhoto(content1.social1, 600)}
                    alt='Imagen principal'
                  />
                </a>
              </div>

              <div className='row justify-content-center my-1 col-12'>
                <a href={content1.link2} target='_blank' className='px-0 col-2'>
                  <img
                    className='col-8 col-sm-5 col-md-7 col-xl-12'
                    src={ImportDrivePhoto(content1.social2, 600)}
                    alt='Imagen principal'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
