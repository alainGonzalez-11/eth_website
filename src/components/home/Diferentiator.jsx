import info from '@/content/diferentiator.json'

const Diferentiator = () => {
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

  return (
    <section className='py-5 bg-light'>
      <div className='container py-5 text-center'>
        <div className='row justify-content-center mx-0 position-relative'>
          <h2 className='fw-bold text-primary juestify-content-center mb-3'>
            {info.data[0].title}
          </h2>
          <div className='row justify-content-center justify-content-md-end position-absolute top-0 end-0 mx-0'>
            <img
              src={ImportDrivePhoto(info.data[0].imagemain, 600)}
              className='object-fit-contain col-1'
              alt={info.data[0].name}
            />
          </div>
          <h4 className='mb-5'>
            Sistema de gestión y calidad en base a la ISO 9000
          </h4>
          <p className='text-justify mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href=''
            className='btn btn-outline-primary rounded-0 col-2'
            target='blank'
          >
            Conoce nuestros servicios
          </a>
        </div>
      </div>
    </section>
  )
}

export default Diferentiator
