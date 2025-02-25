import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const AllCases = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/success.json')
      .then(response => response.json())
      .then(data => setContent(data.success))
      .catch(error => console.error('Error loading content:', error))
  }, [content])

  const ImportDrivePhoto = (driveUrl, height) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  if (!content) return <div>Loading...</div>

  const card = (item, index) => (
    <div key={index} className='d-flex mb-5'>
      <div className='col-3'>
        <NavLink to='/case'>
          <img
            className='col-12'
            src={ImportDrivePhoto(item.image, 600)}
            alt='Imagen principal'
          />
        </NavLink>
      </div>
      <div className='row mx-0 col-8'>
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

  return (
    <div>
      <div className='mx-4 mb-5'>
        <div className='text-primary mb-4 text-center'>
          <h1 className='fw-bold'>Nuestros casos</h1>
        </div>
        <div className='row mx-0'>
          <div className='col-3'>
            <p className='fw-bold mb-0'>Categorías</p>
            <p className='fw-semibold ms-3 mb-0'>
              Servicios de Mantenimiento
              <p className='fw-normal ms-3 mb-0'>Mantenimiento Preventivo</p>
              <p className='fw-normal ms-3 mb-0'>Mantenimiento Correctivo</p>
            </p>
            <p className='fw-semibold ms-3 mb-0'>
              Servicio Adicional
              <p className='fw-normal ms-3 mb-0'>Rama 1</p>
              <p className='fw-normal ms-3 mb-0'>Rama 2</p>
            </p>
            <p className='fw-semibold ms-3 mb-0'>
              Soluciones en la Nube
              <p className='fw-normal ms-3 mb-0'>Rama 1</p>
              <p className='fw-normal ms-3 mb-0'>Rama 2</p>
            </p>
            <p className='fw-semibold ms-3 mb-0'>
              Redes de Datos
              <p className='fw-normal ms-3 mb-0'>Rama 1</p>
              <p className='fw-normal ms-3 mb-0'>Rama 2</p>
            </p>
            <p className='fw-semibold ms-3 mb-0'>
              Ciberseguridad
              <p className='fw-normal ms-3 mb-0'>Rama 1</p>
              <p className='fw-normal ms-3 mb-0'>Rama 2</p>
            </p>
            <p className='fw-semibold ms-3 mb-0'>
              Instalaciones Eléctricas
              <p className='fw-normal ms-3 mb-0'>Rama 1</p>
              <p className='fw-normal ms-3 mb-0'>Rama 2</p>
            </p>
            <p className='fw-semibold ms-3 mb-0'>
              Consultoría en TIC
              <p className='fw-normal ms-3 mb-0'>Rama 1</p>
              <p className='fw-normal ms-3 mb-0'>Rama 2</p>
            </p>
          </div>
          <div className='col-9'>
            {content.map((item, index) => card(item, index))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCases
