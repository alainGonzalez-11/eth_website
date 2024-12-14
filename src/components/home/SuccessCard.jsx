import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const SuccessCard = () => {
  const ImportDrivePhoto = (driveUrl, height) => {
    const defaultUrl =
      'https://drive.google.com/file/d/1Q7By_xG9r3a8Zr47j6b1HG7yAm91GIHO/view?usp=drive_link'
    const match = driveUrl.match(/\/d\/(.*)\//)
    const fileId = match ? match[1] : defaultUrl.match(/\/d\/(.*)\//)[1]
    return `https://lh3.googleusercontent.com/d/${fileId}=h${height}`
  }

  const [content, setContent] = useState([])

  useEffect(() => {
    fetch('/success.json')
      .then((response) => response.json())
      .then((data) => setContent(data.success))
      .catch((error) => console.error('Error loading success cases:', error))
  }, [])

  const card = (item, index) => (
    <div
      key={index}
      className='d-flex justify-content-center align-items-center mx-0 col-6'
    >
      <div className='card bg-white col-11'>
        <div className='d-flex flex-column'>
          <div className='p-3'>
            <a
              href={item.page}
              target='blank'
              rel='noopener noreferrer'
              className='p-3'
            >
              <img
                src={ImportDrivePhoto(item.logo, 600)}
                className='object-fit-contain col-5'
                alt={item.name}
              />
            </a>
          </div>
          <div className='ratio ratio-21x9'>
            <img
              src={ImportDrivePhoto(item.image, 600)}
              className='card-img object-fit-contain col-12'
              alt={item.name}
            />
          </div>
          <div className='ratio ratio-16x9'>
            <div className='card-body d-flex flex-column'>
              <div className='overflow-auto'>
                <p className='text-justify'>{item.description}</p>
              </div>
              <div className='d-flex flex-column'>
                <div className='pt-3'>
                  <h4>{item.projectName}</h4>
                  <h5>{item.location}</h5>
                  <NavLink to='/blog'>
                    <button className='btn btn-outline-primary rounded-0 mx-auto my-1'>
                      Saber más
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='row justify-content-center'>
      {content.map((item, index) => card(item, index))}
    </div>
  )
}

export default SuccessCard
