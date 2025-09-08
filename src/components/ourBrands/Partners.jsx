import { useState, useEffect } from 'react'

const Partners = () => {
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
    <div>
      <div className='pt-0 p-5'>
        <div className='d-md-flex text-center'>
          <div className='pe-md-5 col-md-6'>
            <h2 className='fw-bold text-primary mb-4 col-12'>
              Nuestros Socios Estratégicos
            </h2>
            <img
              className='d-md-none col-12'
              src={content.partners.image}
              alt='Imagen principal'
            />
            <p className='text-justify lead'>
              El crecimiento de SIMEQ ha sido posible gracias a alianzas con
              empresas y organizaciones que comparten nuestra visión de
              excelencia y compromiso con la industria en México. Estas
              colaboraciones estratégicas nos permiten complementar nuestros
              servicios, ampliar capacidades y ofrecer soluciones integrales
              adaptadas a las necesidades del mercado nacional.
              👉 Juntos
              impulsamos proyectos sólidos que generan valor para la industria
              mexicana.
            </p>
            <div className='row mx-0 justify-content-center align-items-center'>
              {content.brands2.map((item, index) => logos(item, index))}
            </div>
          </div>
          <div className='d-none d-md-flex align-items-center col-md-6'>
            <img
              className='col-12'
              src={content.partners.image}
              alt='Imagen principal'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
