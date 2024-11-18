/* eslint-disable no-new */
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'bootstrap'
import info from '@/content/Sponsors.json'

const success = () => {
  const sponsor = (sponsor, index) => {
    const carouselRef1 = useRef(null)
    const carouselRef2 = useRef(null)

    useEffect(() => {
      if (carouselRef1.current) {
        new Carousel(carouselRef1.current)
      }
      if (carouselRef2.current) {
        new Carousel(carouselRef2.current)
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

    const carousel = (
      <div
        id='sponsorcarousel'
        className='carousel slide justify-content-center px-0 mx-auto mt-5 mt-lg-0 col-11 col-sm-10 col-md-9 col-lg-7'
        data-bs-ride='carousel'
        data-bs-interval='4000'
        ref={carouselRef1}
      >
        <div className='carousel-inner'>
          {sponsor.image.map((imageName, index) => (
            <div
              key={index}
              className={`carousel-item ratio ratio-16x9 ${
                index === 0 ? 'active' : ''
              }`}
            >
              <div className='d-flex justify-content-center align-items-center'>
                <a
                  href={sponsor.page}
                  className='ratio ratio-4x3'
                  target='blank'
                >
                  <img
                    src={ImportDrivePhoto(imageName, 600)}
                    className='d-block h-100'
                    alt={sponsor.name}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev justify-content-start'
          type='button'
          data-bs-target='#Missioncarousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next justify-content-end'
          type='button'
          data-bs-target='#Missioncarousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    )

    return (
      <div className='container-xxl bg-grey d-flex h-full py-4 my-5 my-lg-0 mt-lg-4'>
        <div className='row mx-0 justify-content-center align-items-center'>
          <div className='text-center col-12 col-md-6 col-lg-6 my-5 my-lg-0'>
            <img
              src={ImportDrivePhoto(
                'https://drive.google.com/file/d/1rjsCzeqpSbOAkL6Xcet3sl2CPNzqOVt3/view?usp=drive_link',
                600
              )}
              className='img-fluid'
              alt='IPN Cuauhtemoc image'
            />
          </div>
          <div className='text-light mt-lg-5 col-12 col-md-9 col-lg-6'>
            <h1 className='hidden-heading'>IPN Cuauhtémoc Aeroespacial</h1>
            <h2 className='display-6 fw-bold'>Somos</h2>
            <img src={name} className='img-fluid mb-4' alt='IPN Cuauhtemoc' />
            <p className='lead-lg text-justify'>
              Una organización de estudiantes del Instituto Politécnico
              Nacional, nacido en 2017 con el fin de fomentar el interés y el
              desarrollo de la industria aeroespacial en México a través de la
              participación en competencias nacionales e internacionales así
              como en distintas actividades de difusión.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
