
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">Real Estate</h1>
          <h3 className="hero-subtitle">From browsing, to touring, to closing</h3>
          <p className="hero-description">
            In today's dynamic housing market, finding the perfect property goes beyond mere searching—it's about finding a place to call home. Our data-driven market insights, combined with personalized agent support, allow us to tailor the journey to your exact needs, ensuring a seamless experience.
          </p>
          
          <button className="btn btn-accent hero-btn">
            EXPLORE LISTINGS
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '10px'}}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <img 
            src="/assets/real_estate_hero.png" 
            alt="Luxury Home" 
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
