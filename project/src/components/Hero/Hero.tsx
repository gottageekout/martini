
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">Marketing</h1>
          <h3 className="hero-subtitle">From content, to campaigns, to results</h3>
          <p className="hero-description">
            In today's dynamic digital landscape, effective marketing goes beyond mere promotion- it's about crafting meaningful connections. Our data-driven approach, combined with creative ingenuity, allows us to tailor strategies that resonate with your target audience, driving engagement, conversion, and long-term brand loyalty.
          </p>
          
          <button className="btn btn-accent hero-btn">
            ENQUIRE NOW
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '10px'}}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <img 
            src="/assets/marketing-banner.png" 
            alt="Marketing Services" 
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
