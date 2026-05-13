import './PulseBanner.css';

const PulseBanner: React.FC = () => {
  const servicePills = [
    "Social Media Marketing", "Performance Marketing", "Influencer Marketing",
    "SEO", "Brand Activation", "Print & OOH", "Marketing Automation", "PR"
  ];

  return (
    <section className="pulse-section">
      <div className="pulse-container">
        <h2 className="pulse-title">
          A <i className="font-juana">marketing agency that understands</i> the pulse <br /> &amp; impactfully caters to the<br />
          <span className="pulse-highlight">ever-evolving market</span>
        </h2>
        
        <div className="pulse-pills-container">
          {servicePills.map((pill, idx) => (
            <div key={idx} className="pulse-pill">
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PulseBanner;
