/* eslint-disable react/prop-types */

const Footer = ({ data, services}) => {
  const { logo, contactButton, links, contactInfo, socialMedia, copyright } = data;

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        {/* Top Row */}
        <div className="row align-items-center">
          <div className="col-md-6 d-flex align-items-center">
            <img src={logo} alt="Logo" className="img-fluid me-3" style={{ maxWidth: "300px" }} />
          </div>
          <div className="col-md-6 text-md-end">
            <a href={contactButton.link} className="btn btn-primary">
              {contactButton.label}
            </a>
          </div>
        </div>

        {/* Links and Contact Info */}
        <div className="row mt-4">
          <div className="col-md-4">
            <h5>Páginas</h5>
            <ul className="list-unstyled footer-links">
              {links.pages.map((page, index) => (
                <li key={index}>
                  <a href={page.link}>{page.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Servicios</h5>
            <ul className="list-unstyled footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.link}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p className="mb-1">
              <strong>Teléfono:</strong> {contactInfo.phone}
            </p>
            <p className="mb-1">
              <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} className="text-white">{contactInfo.email}</a>
            </p>
            <p className="mb-3">
              <strong>Dirección:</strong> {contactInfo.address}
            </p>
            <div className="d-flex mb-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white me-3"
                >
                  <i className={`bi ${social.icon}`} style={{ fontSize: "1.5rem" }}></i>
                </a>
              ))}
            </div>
            <iframe
              src={contactInfo.mapLink}
              width="100%"
              height="150"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
