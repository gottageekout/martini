import './Services.css';

const Services: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80',
      alt: 'Roger That Cocktail'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      alt: 'Litemed Tech'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
      alt: 'Wheeliy Road'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header-split">
          <h2 className="services-main-title">Social Media Marketing</h2>
          <p className="services-main-desc">
            The subtle art of engaging, influencing &amp;<br/>creating your customer base.
          </p>
        </div>

        <div className="services-carousel-wrapper">
          <button className="carousel-btn prev-btn">❮</button>
          <div className="services-carousel">
            {campaigns.map(campaign => (
              <div key={campaign.id} className="carousel-item">
                <img src={campaign.image} alt={campaign.alt} />
              </div>
            ))}
          </div>
          <button className="carousel-btn next-btn">❯</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
