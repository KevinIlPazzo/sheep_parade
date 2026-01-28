import React from 'react';
import './SponsorBanner.css';

const sponsors = [
  { file: 'APM_p001.png', alt: 'APM' },
  { file: 'Architecten atelier groot.png', alt: 'Architecten Atelier' },
  { file: 'Clima__Partners_p001.png', alt: 'Clima & Partners' },
  { file: 'DAL.png', alt: 'DAL' },
  { file: 'Delen Private Bank groot.png', alt: 'Delen Private Bank' },
  { file: "Dhulst'.png", alt: 'Dhulst' },
  { file: 'Elcos.png', alt: 'Elcos' },
  { file: 'F+R studio.png', alt: 'F+R Studio' },
  { file: 'Fincraft.png', alt: 'Fincraft' },
  { file: 'IVDB klein.png', alt: 'IVDB' },
  { file: 'In den draaiboom.png', alt: 'In den Draaiboom' },
  { file: 'Molenhoeve.png', alt: 'Molenhoeve' },
  { file: 'NB_p001.png', alt: 'NB' },
  { file: 'Quorum.jpg', alt: 'Quorum' },
  { file: 'Restaurant Antoine.jpg', alt: 'Restaurant Antoine' },
  { file: 'TK Elevator.png', alt: 'TK Elevator' },
  { file: 'Talent-IT.png', alt: 'Talent-IT' },
  { file: 'Tim_Building_p001.png', alt: 'Tim Building' },
  { file: 'Torenven.png', alt: 'Torenven' },
  { file: 'Van Doosselaere & partners.jpg', alt: 'Van Doosselaere & Partners' },
  { file: 'Van Uffelen klein.png', alt: 'Van Uffelen' },
];

function SponsorBanner() {
  return (
    <section id="sponsors" className="sponsor-banner">
      <div className="container">
        <h4>Onze Sponsors</h4>
        <div className="sponsor-logos">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/sponsors/${sponsor.file}`}
              alt={sponsor.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorBanner;
