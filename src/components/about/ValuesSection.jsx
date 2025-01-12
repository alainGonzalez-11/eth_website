import { useState, useEffect } from 'react';

const ValuesSection = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/about.json') // Ajusta la ruta según tu configuración
      .then((response) => response.json())
      .then((data) => setContent(data.valuesSection))
      .catch((error) => console.error('Error cargando contenido:', error));
  }, []);

  if (!content) return <div>Cargando...</div>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Imagen a la izquierda */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={content.image}
            alt="Nuestros Valores"
            className="img-fluid rounded shadow p"
          />
        </div>

        {/* Valores a la derecha */}
        <div className="col-lg-6">
          <h2 className="mb-4">{content.title}</h2>
          {content.values.map((value, index) => (
            <div key={index} className="d-flex align-items-start mb-3">
              <i className={`${value.icon} fs-3 text-primary me-3`}></i>
              <div>
                <h5 className="fw-bold mb-1">{value.title}</h5>
                <p className="text-muted">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
