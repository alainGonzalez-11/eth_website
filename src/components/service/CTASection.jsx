/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const CTASection = ({ cta }) => {
  if (!cta.title) return null;

  return (
    <section className="cta-section py-5 text-center bg-primary text-white">
      <div className="container">
        <h2>{cta.title}</h2>
        <Link to={cta.link} className="btn btn-light mt-3">
          {cta.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
