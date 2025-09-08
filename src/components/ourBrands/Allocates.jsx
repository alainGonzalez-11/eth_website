import { useState, useEffect } from 'react'

const Allocates = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/brands.json')
      .then(response => response.json())
      .then(data => setContent(data.brands))
      .catch(error => console.error('Error loading content:', error))
  }, [])

  const ImportDrivePhoto = (driveUrl, height) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'

    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]

    const newUrl = `https://lh3.googleusercontent.com/d/${fileId}=h${height}`

    return newUrl
  }

  if (!content) return <div>Loading...</div>

  const logos = (item, index) => (
    <div
      key={index}
      className='justify-content-center align-items-center my-4 col-4 col-lg-3'
    >
      <div className='h-25 w-auto py-2'>
        <a href={item.page} target='_blank'>
          <img
            src={item.logo}
            className='img-fluid px-md-0'
            alt={item.name}
          />
        </a>
      </div>
    </div>
  )

  return (
    <div className='p-5'>
      <div className='d-md-flex text-center p-0'>
        <div className='d-md-flex align-items-center col-md-6'>
          <h2 className='d-md-none fw-bold text-primary mb-4'>
            Marcas que distribuimos
          </h2>
          <img
            className='col-12'
            src={content.allocates.image}
            alt='Imagen principal'
          />
        </div>
        <div className='ps-md-5 col-md-6'>
          <h2 className='d-none d-md-flex justify-content-center fw-bold text-primary mb-4'>
            Marcas que distribuimos
          </h2>
          <p className='text-justify lead'>
            En SIMEQ trabajamos con marcas reconocidas en el mercado nacional
            que destacan por su calidad, confiabilidad y durabilidad. Nuestra
            red de distribución en México nos permite ofrecer equipos,
            refacciones y componentes industriales que cumplen con los más altos
            estándares de seguridad y eficiencia.
          Cada marca que distribuimos
            refuerza nuestro compromiso de brindar soluciones confiables para la
            industria mexicana.
          </p>
          <div className='row mx-0 justify-content-center align-items-center'>
            {content.brands1.map((item, index) => logos(item, index))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allocates
