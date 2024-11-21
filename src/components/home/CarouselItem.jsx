/* eslint-disable react/prop-types */
const CarouselItem = ({ imgUrl, imgTitle }) => {
    const placeholder = '/path-to-placeholder-logo.jpg';
  
    return (
      <div className="carousel-item mx-3" style={{ width: '150px', height: '100px' }}>
        <img
          src={imgUrl}
          alt={imgTitle}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = placeholder;
          }}
          className="w-100 h-100 object-fit-contain"
        />
      </div>
    );
  };
  
  export default CarouselItem;
  