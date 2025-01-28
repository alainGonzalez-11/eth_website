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
      className='row justify-content-center align-items-center pb-3 mb-md-4 col-md-6 col-lg-4'
    >
      <div className='text-center px-sm-4 px-md-0 my-4 col-5 col-sm-5 col-md-8'>
        <div className='h-25 w-auto py-2'>
          <a href={item.page} target='_blank'>
            <img
              src={ImportDrivePhoto(item.logo, 120)}
              className='img-fluid px-sm-4 px-md-0'
              alt={item.name}
            />
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className='row mx-0'>
        <div className='col-6 text-center pt-5 px-5'>
          <h2 className='fw-bold text-primary mb-4'>Nuestros Socios Estratégicos</h2>
          <p className='text-justify lead'>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <div className='row mx-0 justify-content-center align-items-center'>
            {content.brands2.map((item, index) => logos(item, index))}
          </div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <img
            className='col-8 col-sm-5 col-md-7 col-xl-12'
            src={ImportDrivePhoto(content.partners.image, 600)}
            alt='Imagen principal'
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
