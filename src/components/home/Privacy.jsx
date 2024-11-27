import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const Privacy = () => {
  const [showMessageModal, setShowMessageModal] = useState(false)
  const handleCloseMessageModal = () => setShowMessageModal(false)
  const handleShowMessageModal = () => setShowMessageModal(true)
  return (
    <div className='d-flex text-justify-center'>
      <a
        onClick={handleShowMessageModal}
        className=' pe-auto text-center text-light w-100 cursor-pointer'
        style={{ cursor: 'pointer' }}
      >
        Ver Aviso de Privacidad
      </a>

      <Modal show={showMessageModal} onHide={handleCloseMessageModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aviso de Privacidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-justify'>
            <p>
              Este aviso de privacidad describe cómo [Nombre del Equipo]
              recopila, utiliza, comparte y protege tu información personal
              cuando utilizas nuestro sitio web.
            </p>
            <p>1. Información que Recopilamos</p>
            <p>
              Recopilamos información personal que proporcionas voluntariamente
              a través de nuestros formularios, incluyendo:
            </p>
            <p>
              Nombre Apellido Correo electrónico Escuela Carrera Semestre Número
              de contacto Nombre de tu organización (si corresponde) Correo
              electrónico de la empresa (si corresponde)
            </p>
            <p>2. Cómo Usamos Tu Información</p>
            <p>Utilizamos tu información para las siguientes finalidades:</p>
            <p>
              Contactarte si has solicitado formar parte de nuestro equipo, ya
              sea durante una convocatoria abierta o fuera de ella.
            </p>
            <p>
              Contactar con organizaciones interesadas en ser patrocinadoras.
            </p>
            <p>
              Proveer información general a personas que desean conocer más
              sobre nuestro equipo.
            </p>
            <p>3. Compartir Tu Información</p>
            <p>
              No compartimos tu información personal con terceros. Solo los
              miembros del equipo de [Nombre del Equipo] tienen acceso a la
              información.
            </p>
            <p>4. Protección de Tu Información</p>
            <p>
              Tomamos medidas para proteger tu información personal de acceso no
              autorizado, uso, divulgación, alteración o destrucción. Sin
              embargo, debes tener en cuenta que ningún método de transmisión
              por internet o de almacenamiento digital es 100% seguro.
            </p>
            <p>5. Conservación de Tu Información</p>
            <p>
              No tenemos un plazo establecido para la conservación de tu
              información. La conservaremos mientras sea necesario para los
              propósitos mencionados anteriormente o mientras lo permita la ley.
            </p>
            <p>6. Tus Derechos</p>
            <p>
              Tienes derecho a acceder, corregir y eliminar tu información
              personal. También tienes derecho a retirar tu consentimiento al
              procesamiento de tu información.
            </p>
            <p>
              Para ejercer estos derechos, puedes contactarnos a través del
              correo electrónico [correo electrónico del equipo].
            </p>
            <p>7. Cambios en este Aviso de Privacidad</p>
            <p>
              Este aviso de privacidad puede ser actualizado periódicamente. Te
              recomendamos revisar este aviso de privacidad de forma regular
              para estar al tanto de cualquier cambio.
            </p>
            <p>Política de Cookies</p>
            <p>Actualmente, no utilizamos cookies en nuestro sitio web.</p>
            <p>Política de Uso de Datos</p>
            <p>
              Nuestra política de uso de datos se detalla en este aviso de
              privacidad.
            </p>
            <p>Contacto</p>
            <p>
              Si tienes alguna pregunta sobre este aviso de privacidad o
              nuestras prácticas de privacidad, por favor contáctanos a través
              del correo electrónico [correo electrónico del equipo].
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseMessageModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Privacy