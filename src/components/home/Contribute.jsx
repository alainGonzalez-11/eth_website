import  { useState, useEffect } from 'react';

const Contribute = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/contribute.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setContent(data.contribute))
      .catch((error) => console.error('Error loading content:', error));
  }, []);

  if (!content) return <div>Loading...</div>;

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
      <div className='container text-center'>
        <div className='row justify-content-center mx-0 position-relative'>
          <h2 className='fw-bold text-primary justify-content-center mb-3'>
            {content.title}
          </h2>
          <div className='row justify-content-center justify-content-md-end position-absolute top-0 end-0 mx-0 col-2'>
            <img
              src={ImportDrivePhoto(content.image, 500)}
              className='object-fit-contain col-7'
              alt={content.alternative}
            />
          </div>
          <h4 className='mb-5'>
           {content.subtitle}
          </h4>
          <p className='text-justify mb-5'>
            {content.description}
          </p>
          <a
            href=''
            className='btn btn-outline-primary rounded-0 col-2'
            target='blank'
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contribute
