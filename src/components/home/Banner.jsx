/* eslint-disable react/prop-types */
import { Carousel } from 'react-bootstrap';

const Banner = ({fields, assets}) => {
  console.log(fields)


const extractImage = (img) => {
  const image = assets.find(asset => asset.sys.id === img.sys.id);
  return image.fields.file.url || 0; // Return the found entry or 0 if no match
};


  return (
    <div className="position-relative vh-100 vw-100">
      {/* Background Carousel */}
      {console.log(fields)}
      <Carousel className="vh-100 vw-100 position-absolute top-0 start-0" fade indicators={false} controls={false}>
        {fields['media'].map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-block w-100 vh-100"
              style={{
                backgroundImage: `url(${extractImage(image)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="d-flex align-items-center text-white vh-100 vw-100 position-relative" style={{ zIndex: 2 }}>
        <div className="container align-content-center">
          {/* Hidden H1 for SEO */}
          <h1 className="visually-hidden">{fields.title}</h1>

          {/* Visible Content */}
          <div className="text-start">
            <img src={extractImage(fields.image)} alt="Company Logo" className="mb-4 w-25" />
            <p className="lead display-3">{fields.slug}</p>
            <a href={fields.ctaUrl} className="btn btn-primary btn-lg mt-3 rounded-0">
              {fields.ctaText}
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Better Text Visibility */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))',
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default Banner;
