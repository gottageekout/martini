
import './Services.css';

const Services: React.FC = () => {
  const services = [
    { id: 1, title: 'Social Media Marketing' },
    { id: 2, title: 'Performance Marketing' },
    { id: 3, title: 'Influencer Marketing' },
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
