import { useForm } from 'react-hook-form'
import { useRef, useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Privacy from './Privacy'

const schema = yup
  .object({
    firstName: yup.string().required('Es necesario ingresar tu nombre'),
    lastName: yup.string().required('Es necesario ingresar tu apellido'),
    organization: yup.string(),
    phone: yup
      .string()
      .required('Es necesario ingresar un número de teléfono')
      .nullable(),
    email: yup
      .string()
      .email('Ingresa un email válido')
      .required('Es necesario ingresar un email'),
    message: yup.string().required('Escribe tu mensaje')
  })
  .required()

const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const form = useRef()
  const [phone, setPhone] = useState(null) // State for phone number

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const handleCloseModal = () => setShowModal(false)

  const whenSubmit = data => {
    const formData = { ...data, phone } // Include the phone number from state
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'ZbCsu0DS45Vozgnve'
      })
      .then(
        () => {
          console.log('SUCCESS!', formData)
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )

    reset()
    setPhone(null) // Reset phone number
    setShowModal(true)
  }

  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/contact.json') // Adjust the path as needed
      .then(response => response.json())
      .then(data => setContent(data.contact))
      .catch(error => console.error('Error loading content:', error))
  }, [])

  if (!content) return <div>Loading...</div>

  return (
    <div
      className='container-fluid bg-body-secondary align-content-center h-full py-5'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${content.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}
    >
      <div className='row mx-0 mt-5 mt-md-0 justify-content-center'>
        <div className='col-12 col-md-8 col-lg-6'>
          <h2 className='text-primary text-center fw-bold mb-3'>Contáctanos</h2>
          <div className='contact-container text-light'>
            <form
              onSubmit={handleSubmit(whenSubmit)}
              ref={form}
              className='d-block'
              name='contact'
            >
              <div className='row'>
                <div className='d-flex flex-column col-6'>
                  <label htmlFor='firstName'>Nombre</label>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='Tu nombre'
                    id='firstName'
                    {...register('firstName', {
                      required: true,
                      maxlength: 20
                    })}
                    className='my-2 p-2 border border-0'
                  />
                  <p className='text-warning text-center'>
                    {errors.firstName?.message}
                  </p>
                </div>

                <div className='d-flex flex-column col-6'>
                  <label htmlFor='lastName'>Apellido</label>
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Tu apellido'
                    id='lastName'
                    {...register('lastName', { required: true, maxlength: 20 })}
                    className='my-2 p-2 border border-0'
                  />
                  <p className='text-warning text-center'>
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>

              <div className='d-flex flex-column col-12'>
                <label htmlFor='organization'>
                  Empresa u Organizacion (Opcional)
                </label>
                <input
                  type='text'
                  name='organization'
                  placeholder='Organización'
                  id='organization'
                  {...register('organization')}
                  className='my-2 p-2 border border-0'
                />
                <p className='text-warning text-center'>
                  {errors.organization?.message}
                </p>
              </div>

              <div className='d-flex flex-column col-12'>
                <label htmlFor='email'>Correo electrónico</label>
                <input
                  type='text'
                  name='email'
                  placeholder='correo@mail.com'
                  id='email'
                  {...register('email')}
                  className='my-2 p-2 border border-0'
                />
                <p className='text-warning text-center'>
                  {errors.email?.message}
                </p>
              </div>

              {/* Other input fields */}
              <div className='d-flex flex-column col-12'>
                <label htmlFor='phone'>Teléfono</label>
                <PhoneInput
                  international
                  defaultCountry='MX'
                  value={phone}
                  onChange={setPhone}
                  className='my-2 p-2 border border-0'
                  placeholder='Ingresa tu número de teléfono'
                />
                <p className='text-warning text-center'>
                  {errors.phone?.message}
                </p>
              </div>

              <div className='d-flex flex-column col-12'>
                <label htmlFor='message'>Mensaje</label>
                <textarea
                  name='message'
                  placeholder='Escribe tu mensaje'
                  id='message'
                  {...register('message')}
                  className='my-2 p-2 border border-0'
                  rows='3'
                />
                <p className='text-warning text-center'>
                  {errors.message?.message}
                </p>
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  className='btn btn-primary rounded-0 my-3'
                >
                  Enviar
                </button>
              </div>
            </form>
            <Privacy />
          </div>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            className='align-self-center'
            centered
          >
            <Modal.Body className='rounded'>
              <h2 className='text-center'>Gracias por contactarnos</h2>
              <p className='text-center'>Nos comunicaremos pronto contigo</p>

              <div className='text-center mt-4'>
                <Button variant='dark' onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Contact
