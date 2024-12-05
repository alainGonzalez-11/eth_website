import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';


const ServicesSection = () => {
  const [servicesData, setServicesData] = useState([]);
  const [assets, setAssets] = useState([])
  const [sectionContent, setSectionContent] = useState({ title: '', description: '' });
  const [visibleServices, setVisibleServices] = useState(6);

  useEffect(() => {
    // Fetch services data
    const token = import.meta.env.VITE_ACCESS_TOKEN
    const space = import.meta.env.VITE_CMS_SPACE
    fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=service&access_token=${token}`)
    .then((response) => response.json())
    .then((data) => {
      // Assuming the services data is in `items` under the response structure
      setServicesData(data.items); // Adjust as necessary based on Contentful response
      setAssets(data.includes.Asset)
      
    })
    .catch((error) => console.error('Error loading services:', error));

    // Fetch section content from home.json
    fetch('/home.json')
      .then((response) => response.json())
      .then((data) => setSectionContent(data.servicesSection))
      .catch((error) => console.error('Error loading home content:', error));
  }, []);

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 6);
  };

  if (!servicesData.length || !sectionContent.title) return <div>Loading...</div>;


  const createSectionCard = (service, assets) => {
    const targetId = service.fields.image.sys.id
    const assetUrl = assets.find(asset => asset.sys.id === targetId)?.fields.file.url;
    return  <ServiceCard
              key={service.fields.id}
              image={assetUrl}
              name={service.fields.name}
              description={service.fields.description}
              link={service.fields.link}
              details={sectionContent.detailsLabel}
            />
    
  }

  return (
    <section className="p-5 bg-light container-fluid text-center justify-content-center" id='services'>
        <h2 className="fw-bold mb-4 mt-5 text-primary" >{sectionContent.title}</h2>
        <p className="mb-5">{sectionContent.description}</p>
        <div className='container'> 
          
        <div className="row d-flex justify-content-center">
          {servicesData.slice(0, visibleServices).map((service) => (
            createSectionCard(service, assets)
          ))}
        </div>

        </div>
        {visibleServices < servicesData.length && (
          <button className="btn btn-primary mt-4 px-6 rounded-0 text-light" onClick={loadMoreServices}>
            {sectionContent.moreLabel}
          </button>
        )}
    </section>
  );
};

export default ServicesSection;
