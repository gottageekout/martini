import React from 'react';
import './Brands.css';

const Brands: React.FC = () => {
  const logos = [
    { id: 1, name: "Ciro's", img: "https://via.placeholder.com/150x50/ffffff/000000?text=Ciro's" },
    { id: 2, name: "La Marca", img: "https://via.placeholder.com/150x50/ffffff/000000?text=La+Marca" },
    { id: 3, name: "Byju's", img: "https://via.placeholder.com/150x50/ffffff/000000?text=Byju's" },
    { id: 4, name: "Incomet", img: "https://via.placeholder.com/150x50/ffffff/000000?text=Incomet" },
    { id: 5, name: "Myntra", img: "https://via.placeholder.com/150x50/ffffff/000000?text=Myntra" },
    { id: 6, name: "Pacific Corp", img: "https://via.placeholder.com/150x50/ffffff/000000?text=Pacific+Corp" },
  ];

  return (
    <section className="brands-wrapper">
      <div className="brands-section">
        <div className="brands-container">
          <h2 className="brands-title">
            Brands we nurtured into <i className="font-juana">inspiring narratives</i>
          </h2>
          
          <div className="brands-marquee">
            <div className="brands-marquee-track">
              {/* Render logos twice for seamless infinite scrolling */}
              {[...logos, ...logos].map((logo, index) => (
                <img key={`${logo.id}-${index}`} src={logo.img} alt={logo.name} className="brand-logo" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Boost your presence.<br/>
              Craft your winning marketing strategy.<br/>
              Unlock your brand's potential today!
            </h2>
          </div>
          <div className="cta-button-wrapper">
            <button className="cta-btn">BOOK A STRATEGY CALL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
