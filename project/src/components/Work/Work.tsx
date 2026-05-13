import React from 'react';
import './Work.css';

const Work: React.FC = () => {
  const works = [
    {
      id: 1,
      title: 'ClubInn',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Jolfest',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Zimson',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section className="work-section-alt">
      <div className="work-container-alt">
        <div className="work-header-alt">
          <h2 className="work-title-alt">
            <i className="font-juana">Works</i> that 🤩<br/>
            <strong>we are proud of</strong>
          </h2>
          <div className="work-arrow-wrapper">
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 Q 90 10 90 90" stroke="#FF6B6B" strokeWidth="2" fill="none" />
              <path d="M80 80 L 90 90 L 100 80" stroke="#FF6B6B" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        
        <div className="work-grid-alt">
          {works.map((work) => (
            <div key={work.id} className="work-card-alt">
              <img src={work.image} alt={work.title} className="work-image-alt" />
              <div className="work-card-logo">
                <h3>{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
