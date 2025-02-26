import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const AllCases = () => {
  const [content1, setContent1] = useState(null)
  const [content2, setContent2] = useState(null)

  useEffect(() => {
    fetch('/success.json')
      .then(response => response.json())
      .then(data => setContent1(data.success))
      .catch(error => console.error('Error loading content:', error))
  }, [content1])

  useEffect(() => {
    fetch('/services.json')
      .then(response => response.json())
      .then(data => setContent2(data.services))
      .catch(error => console.error('Error loading content:', error))
  }, [content2])

  const ImportDrivePhoto = (driveUrl, height) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  if (!content1) return <div>Loading...</div>

  const card = (item, index) => (
    <div key={index} className='d-md-flex mb-5'>
      <div className='mx-auto col-12 col-sm-10 col-md-3'>
        <NavLink to='/case'>
          <img
            className='col-12'
            src={ImportDrivePhoto(item.image, 600)}
            alt='Imagen principal'
          />
        </NavLink>
      </div>
      <div className='row mx-0 mx-auto col-12 col-sm-10 col-md-8'>
        <p className='text-uppercase fw-semibold mb-0'>Título</p>
        <p className='small'>11 de febrero, 2025</p>
        <div className='col-12'>
          <p className='text-justify'>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo."
          </p>
          <NavLink to='/case' className='btn btn-primary rounded-0 text-light'>
            Leer más
          </NavLink>
        </div>
      </div>
    </div>
  )

  const services = (item, index) => (
    <div key={index} className='footer-links'>
      <p>
        <a href='#' className='fw-semibold ms-3 mb-0'>
          {item.name}
        </a>
      </p>
    </div>
  )

  return (
    <div>
      <div className='mb-5'>
        <div className='d-md-flex text-center text-md-start justify-content-end text-primary mb-4 '>
          <h1 className='col-12 col-md-9 fw-bold'>Nuestros casos</h1>
        </div>
        <div className='m-3'>
          <button
            className='btn btn-outline-primary rounded-0 d-md-none'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='.multi-collapse'
            aria-expanded='false'
            aria-controls='multiCollapseExample1 multiCollapseExample2'
          >
            Categorías
          </button>
          <div className='collapse multi-collapse' id='multiCollapseExample1'>
            {content2.map((item, index) => services(item, index))}
          </div>
        </div>
        <div className='row mx-0'>
          <div className='d-none d-md-block col-3'>
            <p className='fw-bold mb-0'>Categorías</p>
            <div className='link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
              {content2.map((item, index) => services(item, index))}
            </div>
          </div>
          <div className='col-12 col-md-9'>
            {content1.map((item, index) => card(item, index))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCases
