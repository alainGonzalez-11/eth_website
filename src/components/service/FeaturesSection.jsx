/* eslint-disable react/prop-types */
const FeaturesSection = ({ features }) => {
  if (!features.length) return null;

  return (
    <section className="features-section py-5 bg-light">
      <div className="container">   
        <h2 className="text-center mb-5">Features & Benefits</h2>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 col-6 mb-4 d-flex justify-content-center">
              <div className="feature-icon-wrapper text-center d-flex flex-column">
                <div className="feature-icon-container p-5 align-self-center">
                  <i className={`feature-icon ${feature.iconClass} text-primary fa-4x m-3`}></i>
                </div>
                <div className="feature-description mt-3">
                  <h5 className="font-weight-bold">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
