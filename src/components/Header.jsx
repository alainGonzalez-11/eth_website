import { useRef, useState, useEffect, forwardRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import info from '@/content/header.json'

const Header = forwardRef((props, ref) => {
  const navbarCollapseRef = useRef(null)
  const navbarToggleRef = useRef(null)

  useEffect(() => {
    if (navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show')
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target) &&
        !navbarToggleRef.current.contains(event.target)
      ) {
        if (navbarCollapseRef.current.classList.contains('show')) {
          navbarCollapseRef.current.classList.remove('show')
        }
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/contribute.json') // Adjust the path as needed
      .then(response => response.json())
      .then(data => setContent(data.contribute))
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

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-dark-subtle py-1 px-5 container-fluid d-flex justify-content-between align-items-center content fixed-top'
      ref={ref}
    >
      <Link to='/' className='my-0 col-8 col-sm-7 col-lg-3'>
        <img
          src={'https://images.ctfassets.net/0w7isqwzcsuy/2rUz7rRJvR9lCrAa3Um6xO/07c094a1a7dbb639f62ffb09513c6a58/Logo2.png'}
          alt={info.data[0].name}
          className='w-50'
        />
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#main-nav'
        aria-controls='main-nav'
        aria-expanded='false'
        aria-label='Toggle navigation'
        ref={navbarToggleRef}
      >
        <span className='navbar-toggler-icon navbar-toggler-icon-bg-primary navbar-toggler-border-color-light' />
      </button>

      <div
        className='collapse navbar-collapse justify-content-end  w-auto'
        id='main-nav'
        ref={navbarCollapseRef}
      >
        <ul className='list-inline d-block d-md-flex m-0'>
          <li className='m-4'>
            <NavLink to='/' end>
              Inicio
            </NavLink>
          </li>
          <li className='m-4'>
            <NavLink to='/acercade'>Acerca de</NavLink>
          </li>
          <li className='m-4'>
            <NavLink to='/servicios'>Servicios</NavLink>
          </li>
          <li className='m-4'>
            <NavLink to='/marcas'>Nuestras marcas</NavLink>
          </li>
          <li className='m-4'>
            <NavLink to='/contacto' end>
              Contacto
              <i className='bi bi-headset ps-2' />
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
  )
})

Header.displayName = 'Header'

export default Header
