/* eslint-disable react/prop-types */
const FAQSection = ({ faqs }) => {
  if (!faqs.length) return null;
  

  return (
    <section className="faq-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">{faqs[0].title}</h2>
        <div className="accordion" id="faqAccordion">
          {faqs[0].questions.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h3 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h3>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
