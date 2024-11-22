const Banner = ({ title, banner }) => {
  return (
    <section
      className="text-white text-center py-5"
      style={{
        backgroundImage: `url(${banner})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(80%)', // Apply black-and-white filter
      }}
    >
      <div className="container-fluid">
        <h1 className="display-4 fw-bold my-5">{title}</h1>
      </div>
    </section>
  );
};

export default Banner;
