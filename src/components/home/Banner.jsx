import  { useState, useEffect } from 'react';

const Banner = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/home.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setContent(data.banner))
      .catch((error) => console.error('Error loading content:', error));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div
      className="d-flex align-items-center text-white vh-100 vw-100"
      style={{
        backgroundImage: `url(${content.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container align-content-center">
        {/* Hidden H1 for SEO */}
        <h1 className="visually-hidden">{content.title}</h1>

        {/* Visible Content */}
        <div className="text-start">
          <img src={content.logo} alt="Company Logo" className="mb-4 w-25" />
          <p className="lead display-3">{content.description}</p>
          <a href={content.buttonLink} className="btn btn-primary btn-lg mt-3 rounded-0">
            {content.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
