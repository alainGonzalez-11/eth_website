/* eslint-disable react/prop-types */
const ContactSection = ({ contact }) => {
  if (!contact.phone) return null;

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p><strong>Address:</strong> {contact.address}</p>
          </div>
          <div className="col-md-6">
            <iframe
              src={contact.mapLink}
              width="100%"
              height="250"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
