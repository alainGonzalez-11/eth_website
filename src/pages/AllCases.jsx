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

  return (
    <div>
      <div className='text-center text-primary mt-5 mb-4'>
        <h1 className='fw-bold '>Nuestros casos</h1>
      </div>
      <div className='mx-4 mb-5'>
        <div className='row mx-0'>
          <div className='col-3'>
            <p className='lead'>Categorías</p>
            <ul>
              <li className=''>Servicios de Mantenimiento</li>
              <li className=''>Servicio Adicional</li>
              <li className=''>Soluciones en la Nube</li>
              <li className=''>Redes de Datos</li>
              <li className=''>Ciberseguridad</li>
              <li className=''>Instalaciones Eléctricas</li>
              <li className=''>Consultoría en TIC</li>
            </ul>
          </div>
          <div className='col-6'>
            <div className='d-flex text-uppercase fw-semibold'>
              <NavLink to='/case'>
                <img
                  className='col-8 col-sm-5 col-md-7 col-xl-12'
                  src={ImportDrivePhoto(content[0].image, 600)}
                  alt='Imagen principal'
                />
              </NavLink>
              <p>Fecha de realizacion</p>
              <p>Ubicación</p>
              <div className='col-12'>
                <p className='text-justify lead'>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </p>
              </div>
            </div>
            <div
              id='carouselExample'
              className='carousel slide mx-auto col-6 mb-4'
            ></div>
          </div>

          <div className='col-3 text-center'>
            <div>
              <p className='lead'>
                Visítanos y síguenos en nuestras redes sociales:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCases
