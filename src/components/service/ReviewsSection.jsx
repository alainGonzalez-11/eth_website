const ReviewsSection = () => {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4 text-primary">What Our Clients Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-body">
                  <p className="card-text">"Amazing service, exceeded our expectations!"</p>
                  <h5 className="card-title">- John Doe</h5>
                </div>
              </div>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </div>
      </section>
    );
  };
  
  export default ReviewsSection;
  