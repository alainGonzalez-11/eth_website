import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import info from '@/content/header.json'

const Header = () => {
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
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-1 px-5 container-fluid d-flex justify-content-between align-items-center content fixed-top'>
      <NavLink to='/' className='my-2 col-8 col-sm-7 col-lg-3'>
        <img
          src={"./logo.png"}
          alt={info.data[0].name}
          className='w-100'
          style={{'width':'400px'}}
        />
      </NavLink>

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
        className='collapse navbar-collapse justify-content-end align-center w-auto'
        id='main-nav'
        ref={navbarCollapseRef}
      >
        <ul className='list-inline d-md-flex m-0'>
          <li>
            <NavLink to='/' end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/aboutUs'>Acerca de</NavLink>
          </li>
          <li>
            <NavLink to='/service'>Servicios</NavLink>
          </li>
          <li>
            <NavLink to='/ourBrands'>Nuestras marcas</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
