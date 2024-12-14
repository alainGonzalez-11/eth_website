import { useState, useEffect } from 'react'

const Banner = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/blog.json')
      .then(response => response.json())
      .then(data => setContent(data.banner))
      .catch(error => console.error('Error loading content:', error))
  }, [])

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

  if (!content) return <div>Loading...</div>

  return (
    <div>
      <div
        className='d-flex align-items-center text-white vh-100 vw-100'
        style={{
          backgroundImage: `url(${content.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div>
        <h1 className='display-4 text-center text-primary fw-bold my-4'>
          Título del caso
        </h1>
      </div>
      <div>
        <h3 className='display-6 text-center text-primary fw-bold my-4'>
          Subtítulo del caso
        </h3>
      </div>
      <div className='mx-4'>
        <p>Fecha de realizacion</p>
        <div className='row mx-0 align-items-center'>
          <div className='col-6'>
            <p className='text-justify'>
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
            <p className='text-justify'>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </p>
          </div>
          <div className='col-4 text-center justify-content-center align-items-center mx-auto'>
            <div id='carouselExample' class='carousel slide'>
              <div class='carousel-inner'>
                <div class='carousel-item active'>
                  <img src='https://ideaingenieria.es/wp-content/uploads/2023/05/mantenimiento-industrial-1024x683.webp' class='d-block w-100' alt='...' />
                </div>
                <div class='carousel-item'>
                  <img src='https://www.loyvan.com/wp-content/uploads/2014/04/red-de-datos.jpg' class='d-block w-100' alt='...' />
                </div>
                <div class='carousel-item'>
                  <img src='https://ideaingenieria.es/wp-content/uploads/2023/05/mantenimiento-industrial-1024x683.webp' class='d-block w-100' alt='...' />
                </div>
              </div>
              <button
                class='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='prev'
              >
                <span
                  class='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span class='visually-hidden'>Previous</span>
              </button>
              <button
                class='carousel-control-next'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='next'
              >
                <span
                  class='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span class='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
