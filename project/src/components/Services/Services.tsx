
import './Services.css';

const Services: React.FC = () => {
  const services = [
    { id: 1, title: 'Property Buying' },
    { id: 2, title: 'Property Selling' },
    { id: 3, title: 'Property Management' },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
