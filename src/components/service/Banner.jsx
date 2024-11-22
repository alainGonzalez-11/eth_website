const Banner = ({ title }) => {
    return (
      <section
        className="bg-primary text-white text-center py-5"
        style={{
          backgroundImage: "url('/path-to-banner-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">{title}</h1>
        </div>
      </section>
    );
  };
  
  export default Banner;
  